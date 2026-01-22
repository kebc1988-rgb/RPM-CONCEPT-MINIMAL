import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "How can we help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, isUser: true }];
    setMessages(newMessages);
    setInputValue("");

    // Simulate auto-response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `Thanks for the message. I'm busy under a hood right now, but give the shop a call at ${BUSINESS_INFO.phone} and Chuck will get you sorted out immediately.`, 
        isUser: false 
      }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-brand-surface border border-gray-700 rounded-lg shadow-2xl w-80 sm:w-96 mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-200">
          {/* Header */}
          <div className="bg-brand-green p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1">
                 <ShieldCheck className="text-brand-green" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white leading-none">RPM Concepts</h3>
                <span className="text-xs text-brand-green-100 opacity-90">Replies instantly</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-brand-dark">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.isUser 
                      ? 'bg-brand-green text-white rounded-tr-none' 
                      : 'bg-gray-700 text-gray-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-brand-surface border-t border-gray-700 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-brand-dark border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-green"
            />
            <button 
              type="submit"
              className="bg-brand-green hover:bg-brand-greenHover text-white p-2 rounded transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-green hover:bg-brand-greenHover text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;