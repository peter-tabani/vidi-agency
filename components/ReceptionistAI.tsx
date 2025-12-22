'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Zap, ChevronDown, Minimize2 } from 'lucide-react';

const ROBOT_IMAGE = "/vidi-avatar.jpeg";

// --- UPDATED MESSAGES (Punchy & Brand Focused) ---
const TEASER_MESSAGES = [
  { text: "Hi! 👋 I'm Vidi. Let's grow your business.", color: "from-blue-600 to-indigo-600" }, // The Intro
  { text: "Try the Vidi Method. Automate everything.", color: "from-indigo-600 to-purple-600" }, // Your Request
  { text: "Don't rent software. Own it 100%.", color: "from-purple-600 to-pink-600" },
  { text: "Silicon Valley tech. Global rates.", color: "from-pink-600 to-rose-600" }
];

const QUICK_ACTIONS = [
  { icon: "💰", text: "Pricing", prompt: "What are your pricing options?" },
  { icon: "🚀", text: "The Method", prompt: "What is the Vidi Method?" }, // Updated
  { icon: "⚡", text: "Automation", prompt: "Tell me about your AI automation" },
  { icon: "📱", text: "Start Project", prompt: "How do I start a project?" }
];

export default function ReceptionistAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // The Chat History
  const [messages, setMessages] = useState([
    { 
      id: '1', 
      role: 'assistant', 
      content: '👋 Hi! I represent the Vidi Method.\n\nWe don\'t just build websites; we build "Sales Engines" that you own forever.\n\nHow can I help you today?' 
    }
  ]);

  const [isPeeking, setIsPeeking] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // --- FASTER PEEKING LOGIC ---
  useEffect(() => {
    if (isOpen || userHasInteracted) return;

    const loop = setInterval(() => {
      // 1. Show Robot
      setIsPeeking(true);

      // 2. Hide Robot QUICKLY (3.5 seconds)
      setTimeout(() => {
        setIsPeeking(false);
        
        // 3. Switch Message while hidden
        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % TEASER_MESSAGES.length);
        }, 500); // Fast switch

      }, 3500); // Short duration so it doesn't block the hero section

    }, 8000); // Repeats every 8 seconds (High energy)

    // Initial Appearance: VERY FAST (1 second) to catch them on the Hero Section
    setTimeout(() => setIsPeeking(true), 1000);

    return () => clearInterval(loop);
  }, [isOpen, userHasInteracted]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  }, [inputValue]);

  const handleSendMessage = async (customText: string | null = null) => {
    const textToSend = customText || inputValue;
    if (!textToSend.trim() || isLoading) return;

    setInputValue('');
    if (inputRef.current) inputRef.current.style.height = 'auto';
    setShowQuickActions(false);
    
    const newMessages = [...messages, { id: Date.now().toString(), role: 'user', content: textToSend }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) throw new Error("Network error");

      setMessages((prev) => [...prev, { id: 'ai-response', role: 'assistant', content: '' }]);
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let aiText = "";

      while (!done) {
        const { value, done: doneReading } = await reader?.read()!;
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: true });
        aiText += chunkValue;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...updated[updated.length - 1], content: aiText };
          return updated;
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { id: 'err', role: 'assistant', content: "⚠️ Connection error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const openChat = () => {
    setIsPeeking(false);
    setUserHasInteracted(true);
    setIsOpen(true);
  };

  const handleQuickAction = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`fixed z-50 font-sans flex flex-col items-end transition-all duration-300 ${isOpen ? 'bottom-0 right-0 w-full h-full sm:w-auto sm:h-auto sm:bottom-6 sm:right-6 pointer-events-none' : 'bottom-6 right-6 pointer-events-auto'}`}>
      
      {/* --- PEEKING ROBOT --- */}
      {!isOpen && (
        <div 
          onClick={openChat}
          className={`
            cursor-pointer mb-4 flex items-center gap-3 transition-all duration-500 ease-out transform
            ${isPeeking ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}
          `}
        >
          {/* Gradient Message Bubble */}
          <div className={`
            hidden sm:block relative bg-gradient-to-r ${TEASER_MESSAGES[messageIndex].color} 
            text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-2xl 
            max-w-[240px] backdrop-blur-sm
            hover:scale-105 transition-transform duration-300
          `}>
            <p className="text-sm font-bold leading-relaxed drop-shadow-md">
              {TEASER_MESSAGES[messageIndex].text}
            </p>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>

          {/* Robot Head */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-60 animate-pulse group-hover:opacity-80"></div>
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-white group-hover:scale-110 transition-transform">
              <img src={ROBOT_IMAGE} alt="AI" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
          </div>
        </div>
      )}

      {/* --- MAIN FAB BUTTON --- */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      )}

      {/* --- CHAT WINDOW --- */}
      <div className={`
        ${isOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-10'}
        bg-white shadow-2xl border border-gray-200 flex flex-col overflow-hidden
        transition-all duration-500 ease-out
        fixed bottom-0 right-0 w-full 
        ${isMinimized ? 'h-16 rounded-t-2xl' : 'h-[100dvh] rounded-none'}
        sm:absolute sm:bottom-0 sm:right-0 sm:w-[420px] 
        ${isMinimized ? 'sm:h-16' : 'sm:h-[600px]'}
        sm:rounded-2xl
      `}>
        
        {/* Header */}
        <div 
          onClick={() => isMinimized && setIsMinimized(false)}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 flex justify-between items-center text-white cursor-pointer sm:cursor-default"
        >
          <div className="flex items-center gap-3">
            <div className={`relative transition-all duration-500 ${isLoading ? 'animate-pulse scale-110' : ''}`}>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg">
                <img src={ROBOT_IMAGE} alt="AI" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">Vidi AI</span>
                {isLoading && <Zap className="w-4 h-4 text-yellow-300 animate-bounce" />}
              </div>
              <span className="text-xs text-white/80">{isLoading ? 'Thinking...' : 'Online • Instant replies'}</span>
            </div>
          </div>
          
          <div className="flex gap-1">
            <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="hover:bg-white/20 p-2 rounded-lg transition-colors">
              {isMinimized ? <ChevronDown className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
            </button>
            <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="hover:bg-white/20 p-2 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!isMinimized && (
          <>
            <div 
              ref={scrollRef} 
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50"
            >
              {messages.map((m, index) => (
                <div key={index} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                  }`}>
                    <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-4 shadow-sm flex gap-1 items-center">
                    <span className="text-xs text-gray-400 mr-2">Vidi is typing</span>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}

              {showQuickActions && messages.length === 1 && (
                <div className="grid grid-cols-2 gap-2 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {QUICK_ACTIONS.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickAction(action.prompt)}
                      className="flex flex-col items-center gap-1 p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-gray-200 transition-all hover:scale-[1.02] active:scale-95 shadow-sm text-center"
                    >
                      <span className="text-xl">{action.icon}</span>
                      <span className="text-xs font-semibold text-gray-600">{action.text}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex gap-2 items-end bg-gray-100 p-2 rounded-2xl border border-gray-200 focus-within:ring-2 focus-within:ring-purple-500/50 focus-within:bg-white transition-all">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  rows={1}
                  className="flex-1 bg-transparent px-2 py-2 text-sm focus:outline-none resize-none max-h-32"
                />
                <button 
                  onClick={() => handleSendMessage()} 
                  disabled={isLoading || !inputValue.trim()} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2.5 rounded-xl disabled:opacity-50 disabled:grayscale transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-1 mt-2 text-[10px] text-gray-400 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" />
                <span>Powered by Vidi AI</span>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}