'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Zap, ChevronDown, Minimize2, MapPin } from 'lucide-react';

const ROBOT_IMAGE = "/vidi-avatar.jpeg"; 

const QUICK_ACTIONS = [
  { icon: "💰", text: "Pricing", prompt: "What are your pricing options?" },
  { icon: "🚀", text: "The Method", prompt: "What is the Vidi Method?" },
  { icon: "⚡", text: "Automation", prompt: "Tell me about your AI automation" },
  { icon: "📱", text: "Start Project", prompt: "How do I start a project?" }
];

// Define Message Type
type Message = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
};

// Define Location Type
type UserLocation = {
  city: string;
  state: string;
  country: string;
};

export default function ReceptionistAI() {
  // --- STATE ---
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 'init-1', 
      role: 'assistant', 
      content: '👋 Hi! I represent the Vidi Method.\n\nWe don\'t just build websites; we build "Sales Engines" that you own forever.\n\nHow can I help you today?' 
    }
  ]);

  const [isPeeking, setIsPeeking] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);

  const [userLocation, setUserLocation] = useState<UserLocation>({ city: '', state: '', country: '' });
  const [greetingTime, setGreetingTime] = useState('Day');
  
  // Default messages (Before location loads)
  const [personalizedMessages, setPersonalizedMessages] = useState([
    { text: "Hello! How can I help you today?", color: "from-blue-600 to-indigo-600" },
    { text: "Do you need an AI receptionist like me?", color: "from-indigo-600 to-purple-600" },
    { text: "Click solutions, and see the ones we have for you", color: "from-indigo-600 to-purple-600" },
    { text: "Need a Website, Redesign, or App?", color: "from-purple-600 to-pink-600" },
    { text: "Automate your business with Vidi.", color: "from-pink-600 to-rose-600" }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // --- HELPER: GET PROFESSIONAL GREETING ---
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 17) return 'Afternoon';
    // Use "Evening" for everything else (even late night) - "Good Night" is for sleeping!
    return 'Evening';
  };

  // --- 1. FETCH LOCATION & SET CUSTOM MESSAGES ---
  useEffect(() => {
    const fetchLocation = async () => {
      const timeGreeting = getGreeting();
      setGreetingTime(timeGreeting);

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        clearTimeout(timeoutId);
        
        const data = await response.json();
        
        const location = {
          city: data.city || '',
          state: data.region || '',
          country: data.country_name || ''
        };
        
        setUserLocation(location);
        
        const locationName = location.city ? location.city : (location.country || 'Nairobi');
        
        // --- THIS IS WHERE WE SET THE MARKETING MESSAGES ---
        setPersonalizedMessages([
          { 
            text: `Good ${timeGreeting}! How can we help you today?`, 
            color: "from-blue-600 to-indigo-600"
          },
          { 
            text: `Serving ${locationName} & beyond. Do you need an AI receptionist like me?`, 
            color: "from-indigo-600 to-purple-600"
          },
          { 
            text: `Click Solutions , and see which ones we have for you`, 
            color: "from-purple-600 to-pink-600"
          },
          { 
            text: `Do you need a Website, Redesign, or Mobile App?`, 
            color: "from-purple-600 to-pink-600"
          },
          { 
            text: `Automate your business with Vidi Agency.`, 
            color: "from-pink-600 to-rose-600"
          }
        ]);
        
      } catch (error) {
        // Fallback if location fails (still updated with new copy)
        setPersonalizedMessages([
            { text: `Good ${timeGreeting}! How can we help you today?`, color: "from-blue-600 to-indigo-600" },
            { text: "Serving Nairobi & beyond. Do you need an AI receptionist like me?", color: "from-indigo-600 to-purple-600" },
            { text: "Do you need a Website, Redesign, or Mobile App?", color: "from-purple-600 to-pink-600" },
            { text: "Automate your business with Vidi Agency.", color: "from-pink-600 to-rose-600" }
        ]);
      }
    };

    fetchLocation();
  }, []);

  // --- 2. AUTO SCROLL ---
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isMinimized, isOpen]);

  // --- 3. ROBOT PEEKING LOGIC ---
  useEffect(() => {
    if (isOpen || userHasInteracted) {
      setIsPeeking(false);
      return;
    }

    let timer: NodeJS.Timeout;

    if (isPeeking) {
      // Show message for 5 seconds (slightly longer to read the new text)
      timer = setTimeout(() => {
        setIsPeeking(false);
        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % personalizedMessages.length);
        }, 500); 
      }, 5000);
    } else {
      // Hide for 5 seconds
      timer = setTimeout(() => {
        setIsPeeking(true);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [isPeeking, isOpen, userHasInteracted, personalizedMessages.length]);

  // --- 4. TEXTAREA RESIZE ---
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  }, [inputValue]);

  // --- 5. SEND MESSAGE ---
  const handleSendMessage = async (customText: string | null = null) => {
    const textToSend = customText || inputValue;
    if (!textToSend.trim() || isLoading) return;

    setInputValue('');
    if (inputRef.current) inputRef.current.style.height = 'auto';
    setShowQuickActions(false);
    setUserHasInteracted(true);
    
    const newMessages: Message[] = [...messages, { id: Date.now().toString(), role: 'user', content: textToSend }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) throw new Error("Network error");

      const aiMsgId = 'ai-' + Date.now();
      setMessages((prev) => [...prev, { id: aiMsgId, role: 'assistant', content: '' }]);

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let aiText = "";

      while (!done) {
        const { value, done: doneReading } = await reader?.read() || { done: true, value: undefined };
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: true });
        aiText += chunkValue;

        setMessages((prev) => 
          prev.map(msg => 
            msg.id === aiMsgId ? { ...msg, content: aiText } : msg
          )
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { 
        id: 'err', 
        role: 'assistant', 
        content: "⚠️ I'm having trouble connecting to the server. Please try again or email us directly!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const openChat = () => {
    setIsPeeking(false);
    setUserHasInteracted(true);
    setIsOpen(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const currentMessage = personalizedMessages[messageIndex] || personalizedMessages[0];

  return (
    <div className="fixed bottom-4 right-4 md:right-6 md:bottom-6 z-[9999] font-sans flex flex-col items-end">
      
      {/* --- PEEKING ROBOT --- */}
      {!isOpen && (
        <div 
          onClick={openChat}
          className={`
            cursor-pointer mb-4 flex items-center gap-3 transition-all duration-500 ease-out transform
            ${isPeeking ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}
          `}
        >
          {/* Message Bubble */}
          <div className={`
            relative bg-gradient-to-r ${currentMessage.color} 
            text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-2xl 
            max-w-[280px] backdrop-blur-sm
            hover:scale-105 transition-transform duration-300
          `}>
            <p className="text-sm font-semibold leading-relaxed drop-shadow-md">
              {currentMessage.text}
            </p>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-2xl"></div>
          </div>

          {/* Robot Avatar Circle */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse group-hover:opacity-80 transition-opacity"></div>
            <div className="relative w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-white group-hover:scale-110 transition-transform duration-300">
              <img 
                src={ROBOT_IMAGE} 
                alt="AI Assistant" 
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = "https://img.freepik.com/free-photo/view-3d-robot-with-tech-elements_23-2150889222.jpg";
                }}
              />
            </div>
            {/* Online Dot (Replaced the time emoji) */}
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>
      )}

      {/* --- TOGGLE BUTTON --- */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 mb-6"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {/* --- MAIN CHAT WINDOW --- */}
      {isOpen && (
        <div className={`
          mb-2 bg-white w-[calc(100vw-32px)] sm:w-[400px] max-w-full 
          ${isMinimized ? 'h-16' : 'h-[600px]'} 
          rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden 
          transition-all duration-300 ease-in-out
        `}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 flex justify-between items-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg bg-white">
                  <img src={ROBOT_IMAGE} alt="AI" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">Vidi AI</span>
                  {isLoading && <Zap className="w-4 h-4 text-yellow-300 animate-bounce" />}
                </div>
                <div className="flex items-center gap-1 text-xs text-white/90">
                  {userLocation.city && <MapPin className="w-3 h-3" />}
                  <span>{userLocation.city ? `Serving ${userLocation.city}` : 'Online'}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-1 relative z-10">
              <button onClick={() => setIsMinimized(!isMinimized)} className="hover:bg-white/20 p-2 rounded-lg transition-colors">
                {isMinimized ? <ChevronDown className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div 
                ref={scrollRef} 
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
              >
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm shadow-sm leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                    }`}>
                      <div className="whitespace-pre-wrap">{m.content}</div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start animate-pulse">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-4 shadow-sm">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                {showQuickActions && messages.length <= 2 && !isLoading && (
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {QUICK_ACTIONS.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(action.prompt)}
                        className="flex items-center gap-2 p-3 bg-white hover:bg-blue-50 text-left rounded-xl border border-gray-200 transition-all hover:shadow-md hover:border-blue-200 group"
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform">{action.icon}</span>
                        <span className="text-xs font-semibold text-gray-600 group-hover:text-blue-600">{action.text}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-3 bg-white border-t border-gray-100">
                <div className="flex gap-2 items-end bg-gray-100 p-1.5 rounded-2xl border border-gray-200 focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-500 transition-all">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about Vidi Agency..."
                    rows={1}
                    className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none resize-none max-h-32 text-gray-700 placeholder-gray-400"
                  />
                  <button 
                    onClick={() => handleSendMessage()}
                    disabled={isLoading || !inputValue.trim()} 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-2.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-105 active:scale-95 shadow-md"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-gray-400 font-medium tracking-wide uppercase">
                  <Sparkles className="w-3 h-3" />
                  <span>Powered by Vidi AI</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
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