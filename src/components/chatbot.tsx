
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
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-agency-purple to-agency-teal flex items-center justify-center text-white shadow-lg hover:shadow-xl"
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
            className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden z-40 border border-agency-purple/20 flex flex-col"
          >
            <div className="bg-gradient-to-r from-agency-purple to-agency-teal p-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <MessageCircle size={18} />
                <span className="font-semibold">AdGrow Assistant</span>
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

            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`mb-3 ${msg.sender === 'bot' ? 'mr-12' : 'ml-12'}`}
                >
                  <div 
                    className={`p-3 rounded-2xl ${
                      msg.sender === 'bot'
                        ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none shadow'
                        : 'bg-gradient-to-r from-agency-purple to-agency-teal text-white rounded-br-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-3 mr-12">
                  <div className="p-3 rounded-2xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none shadow">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-agency-purple/70 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-agency-purple/70 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="h-2 w-2 bg-agency-purple/70 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-gray-100 dark:bg-gray-800 border-0 focus-visible:ring-1 focus-visible:ring-agency-purple"
              />
              <Button 
                type="submit"
                size="icon"
                className="bg-gradient-to-r from-agency-purple to-agency-teal hover:opacity-90 ml-2 text-white"
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
