
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "👋 Hi there! I'm your AdGrow Media assistant. I can help you navigate our site, learn about our services, or book an appointment. How can I help you today?",
    sender: "bot",
  },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock responses based on keywords
  const getBotResponse = (userMessage: string) => {
    const lowerMsg = userMessage.toLowerCase();
    
    if (lowerMsg.includes("book") || lowerMsg.includes("appointment") || lowerMsg.includes("schedule")) {
      return "I'd be happy to help you book an appointment! Please let me know what service you're interested in, and your preferred date and time. Alternatively, you can visit our contact page for more booking options.";
    } 
    else if (lowerMsg.includes("service") || lowerMsg.includes("offer")) {
      return "We offer a variety of digital marketing services including Social Media Marketing, WhatsApp Marketing, Data Analytics, YouTube Ads, Website Development, and Growth Strategy. Would you like to know more about any specific service?";
    }
    else if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("pricing")) {
      return "Our pricing varies based on your specific needs and the services you require. I'd recommend scheduling a consultation where we can discuss your goals and provide a customized quote. Would you like me to help schedule that?";
    }
    else if (lowerMsg.includes("contact") || lowerMsg.includes("reach") || lowerMsg.includes("call")) {
      return "You can reach our team via email at info@adgrowmedia.com, by phone at +1 (123) 456-7890, or by visiting our contact page. Would you like me to navigate you to the contact page?";
    }
    else if (lowerMsg.includes("portfolio") || lowerMsg.includes("work") || lowerMsg.includes("case")) {
      return "We have worked with clients across various industries. You can view some of our case studies on our Resources page. Would you like me to share a few examples of our successful campaigns?";
    }
    else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {
      return "Hello! How can I assist you today with your digital marketing needs?";
    }
    else if (lowerMsg.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    else if (lowerMsg.includes("home") || lowerMsg.includes("go to")) {
      return "I can help navigate you to any page. Which page would you like to visit? Home, Services, About, or Contact?";
    }
    else {
      return "I'm sorry, I didn't quite catch that. Could you rephrase your question? I'm here to help with information about our services, booking appointments, or navigating our website.";
    }
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate bot typing
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(input),
        sender: "bot",
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="chatbot-toggle"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 15 }}
            className="chatbot-container"
          >
            <div className="chatbot-header flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={18} />
                <span>AdGrow Assistant</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </Button>
            </div>

            <div className="chatbot-messages flex flex-col">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`message ${msg.sender}`}
                >
                  {msg.text}
                </div>
              ))}

              {isTyping && (
                <div className="message bot">
                  <div className="flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="chatbot-input">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button 
                type="submit"
                size="icon"
                className="bg-gradient-to-r from-[#6E42CA] to-[#2DD4BF] hover:opacity-90 ml-2"
                disabled={!input.trim()}
              >
                <Send size={18} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
