'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Zap, ChevronDown, Minimize2, MapPin } from 'lucide-react';

const ROBOT_IMAGE = "/vidi-avatar.jpeg";

type Message = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp?: Date;
};

type UserLocation = {
  city: string;
  state: string;
  country: string;
};

export default function ReceptionistAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content: '👋 Hello! How can I help you today?',
      timestamp: new Date()
    }
  ]);

  const [isPeeking, setIsPeeking] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);

  const [userLocation, setUserLocation] = useState<UserLocation>({ city: '', state: '', country: '' });
  const [greetingTime, setGreetingTime] = useState('Day');
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  const quickActions = [
    { text: " View Pricing", action: "What's your pricing?" },
    { text: " Build an App", action: "I want to build a mobile app" },
    { text: " AI Automation", action: "Tell me about AI automation" },
    { text: " Book a Call", action: "I'd like to schedule a consultation" }
  ];

  const [personalizedMessages, setPersonalizedMessages] = useState([
    { text: " AI Automation for your business , 24/7 lead capture & support." },
    { text: " Custom AI systems built to scale your operations." },
    { text: " Automate customer engagement with AI trained on your data." },
    { text: " Workflow automation that eliminates repetitive tasks." },
    { text: " AI-powered websites & apps that convert visitors." }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 17) return 'Afternoon';
    return 'Evening';
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const timeGreeting = getGreeting();
      setGreetingTime(timeGreeting);

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        clearTimeout(timeoutId);
        if (!response.ok) throw new Error('Location fetch failed');
        const data = await response.json();
        setUserLocation({
          city: data.city || '',
          state: data.region || '',
          country: data.country_name || ''
        });
        setPersonalizedMessages([
          { text: `Good ${timeGreeting}! How can we help you today ?` },
          { text: " Custom AI systems – lead capture, support, and workflow automation." },
          { text: " AI trained on your data to engage customers and close deals 24/7." },
          { text: " Automate repetitive tasks and integrate with your existing tools." },
          { text: " AI-powered websites & apps that convert visitors." }
        ]);
      } catch {
        setPersonalizedMessages([
          { text: `Good ${timeGreeting}! How can we help you today ?` },
          { text: "Custom AI systems built to scale your operations." },
          { text: " Automate customer engagement with AI trained on your data." },
          { text: " Workflow automation that eliminates repetitive tasks." },
          { text: " AI-powered websites & apps that convert visitors." }
        ]);
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: 'smooth'
        });
      });
    }
  }, [messages, isMinimized, isOpen]);

  useEffect(() => {
    if (!isOpen || isMinimized) return;
    const vp = window.visualViewport;
    if (!vp) return;
    const updateViewport = () => {
        setViewportHeight(vp.height);
    };
    vp.addEventListener('resize', updateViewport);
    vp.addEventListener('scroll', updateViewport);
    updateViewport();
    return () => {
        vp.removeEventListener('resize', updateViewport);
        vp.removeEventListener('scroll', updateViewport);
    };
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (isOpen || userHasInteracted) {
      setIsPeeking(false);
      return;
    }
    let timer: NodeJS.Timeout;
    if (isPeeking) {
      timer = setTimeout(() => {
        setIsPeeking(false);
        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % personalizedMessages.length);
        }, 500);
      }, 5000);
    } else {
      timer = setTimeout(() => {
        setIsPeeking(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isPeeking, isOpen, userHasInteracted, personalizedMessages.length]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 128) + 'px';
    }
  }, [inputValue]);

  const handleSendMessage = async (customText: string | null = null) => {
    const textToSend = customText || inputValue;
    if (!textToSend.trim() || isLoading) return;

    setInputValue('');
    if (inputRef.current) inputRef.current.style.height = 'auto';
    inputRef.current?.blur();
    setShowQuickActions(false);
    setUserHasInteracted(true);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };
    const newMessages: Message[] = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        }),
      });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      const aiMsgId = 'ai-' + Date.now();
      const initialAiMessage: Message = {
        id: aiMsgId,
        role: 'assistant',
        content: '',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, initialAiMessage]);

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response stream');
      const decoder = new TextDecoder();
      let done = false;
      let aiText = "";

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunkValue = decoder.decode(value, { stream: !done });
          aiText += chunkValue;
          setMessages((prev) =>
            prev.map(msg =>
              msg.id === aiMsgId ? { ...msg, content: aiText } : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: 'err-' + Date.now(),
          role: 'assistant',
          content: "⚠️ I'm having trouble connecting right now. Please try again or email us at hello@vidiagency.com",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const openChat = () => {
    setIsPeeking(false);
    setUserHasInteracted(true);
    setIsOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  const currentMessage = personalizedMessages[messageIndex] || personalizedMessages[0];

  return (
    <div className="fixed bottom-4 right-4 md:right-6 md:bottom-6 z-[9999] font-sans flex flex-col items-end">
      {!isOpen && (
        <div
          onClick={(e) => { e.stopPropagation(); openChat(); }}
          className={`
            cursor-pointer mb-4 flex items-center gap-3 transition-all duration-500 ease-out transform
            ${isPeeking ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}
          `}
        >
          <div className="relative bg-black/40 backdrop-blur-lg border border-blue-500/30 text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-2xl shadow-blue-500/20 max-w-[280px] hover:scale-105 transition-transform duration-300">
            <p className="text-sm font-semibold leading-relaxed drop-shadow-md">{currentMessage.text}</p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-2xl pointer-events-none"></div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl opacity-60 animate-pulse group-hover:opacity-80 transition-opacity"></div>
            <div className="relative w-20 h-20 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl bg-white/10 backdrop-blur group-hover:scale-110 transition-transform duration-300">
              <img
                src={ROBOT_IMAGE}
                alt="Vidi AI Assistant"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://img.freepik.com/free-photo/view-3d-robot-with-tech-elements_23-2150889222.jpg";
                }}
              />
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white/50 rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={(e) => { e.stopPropagation(); openChat(); }}
          type="button"
          aria-label="Open chat"
          className="group relative bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-blue-500/20"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with Vidi AI
          </span>
        </button>
      )}

      {isOpen && (
        <div
          className={`
            mb-2
            w-[calc(100vw-32px)] sm:w-[400px] max-w-full
            ${isMinimized ? 'h-16' : ''}
            rounded-2xl shadow-2xl
            flex flex-col overflow-hidden
            transition-all duration-300 ease-in-out
            bg-[#05060b]/90 backdrop-blur-xl
            border border-white/10
          `}
          style={isOpen && !isMinimized ? (viewportHeight ? { height: `${viewportHeight - 40}px`, maxHeight: '600px' } : { height: '85dvh', maxHeight: '600px' }) : undefined}
        >
          <div className="bg-black/80 backdrop-blur-md p-4 flex justify-between items-center text-white border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden shadow-lg bg-white/10 backdrop-blur">
                  <img src={ROBOT_IMAGE} alt="Vidi AI" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-black/50 rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">Vidi AI</span>
                  {isLoading && <Zap className="w-4 h-4 text-yellow-300 animate-bounce" />}
                </div>
                <div className="flex items-center gap-1 text-xs text-white/60">
                  {userLocation.city && <MapPin className="w-3 h-3" />}
                  <span className="truncate max-w-[150px]">
                    {userLocation.city ? `Server: ${userLocation.city}` : ''}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
                type="button"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                className="hover:bg-white/10 p-2 rounded-lg transition-colors"
              >
                {isMinimized ? <ChevronDown className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                type="button"
                aria-label="Close chat"
                className="hover:bg-white/10 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#05060b]/50">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl text-sm shadow-lg leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-white/10 border border-white/20 text-white rounded-tr-none backdrop-blur-sm hover:bg-white/15 transition-colors'
                          : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-tl-none shadow-[0_8px_30px_rgba(37,99,235,0.3)]'
                      }`}
                    >
                      <div className="whitespace-pre-wrap break-words">{m.content}</div>
                    </div>
                  </div>
                ))}

                {showQuickActions && messages.length <= 1 && (
                  <div className="space-y-2 pt-2">
                    <p className="text-xs text-gray-400 text-center font-medium">Quick Actions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((qa, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); handleQuickAction(qa.action); }}
                          type="button"
                          className="text-xs bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/20 rounded-xl p-3 transition-all text-left font-medium text-gray-300 hover:text-white backdrop-blur-sm"
                        >
                          {qa.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {isLoading && (
                  <div className="flex justify-start animate-pulse">
                    <div className="bg-white/10 border border-white/10 rounded-2xl rounded-tl-none p-4 shadow-sm backdrop-blur-sm">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-black/30 backdrop-blur-md border-t border-white/10">
                <div className="flex gap-2 items-end bg-white/5 p-1.5 rounded-2xl border border-white/10 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500/50 transition-all">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about Vidi Agency..."
                    rows={1}
                    disabled={isLoading}
                    className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none resize-none max-h-32 text-white placeholder-gray-500 disabled:opacity-50"
                    aria-label="Chat message input"
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); handleSendMessage(); }}
                    type="button"
                    disabled={isLoading || !inputValue.trim()}
                    aria-label="Send message"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-105 active:scale-95 shadow-md"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-gray-500 font-medium tracking-wide uppercase">
                  <Sparkles className="w-3 h-3" />
                  <span>Powered by Vidi AI</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}
