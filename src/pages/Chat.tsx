import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Sparkles, CheckCircle, Clock, FileText } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  stage?: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm TARA, your Autonomous Relationship Agent from Tata Capital. 👋\n\nI'm here to help you with your personal loan journey. I can process your application, verify documents, and get you a decision in minutes - not days.\n\nTo get started, could you tell me a bit about yourself and what you're looking to finance today?",
    timestamp: new Date(),
    stage: "Intent Capture",
  },
];

const quickActions = [
  "I need a personal loan",
  "Check my eligibility",
  "What are the interest rates?",
  "I want to refinance",
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentStage, setCurrentStage] = useState("Intent Capture");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    document.title = "Chat with TARA | Tata Capital";
  }, []);

  const simulateResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1500));

    let response = "";
    let newStage = currentStage;

    // Simple conversation flow simulation
    if (userMessage.toLowerCase().includes("loan") || userMessage.toLowerCase().includes("need")) {
      response = "Great! I'd be happy to help you with a personal loan. 🎯\n\nTo give you the best offer, I'll need some basic information:\n\n• Your employment type (Salaried/Self-employed)\n• Monthly income range\n• Loan amount you're looking for\n\nLet's start simple - are you currently employed or self-employed?";
      newStage = "Information Gathering";
    } else if (userMessage.toLowerCase().includes("salaried") || userMessage.toLowerCase().includes("employed")) {
      response = "Perfect! Salaried professionals typically get our best rates. 📊\n\n**Quick Eligibility Check:**\n✅ Employment: Verified as Salaried\n\nNow, what's your approximate monthly income? This helps me determine the loan amount you'd qualify for.\n\n(Don't worry, this is just for initial assessment - we'll verify everything securely later)";
      newStage = "Pre-qualification";
    } else if (userMessage.toLowerCase().includes("eligibility") || userMessage.toLowerCase().includes("check")) {
      response = "I can check your eligibility right now! 🔍\n\nFor a quick assessment, I'll need:\n1. Your PAN card number (for credit bureau check)\n2. Employment status\n3. Monthly income estimate\n\nThis takes just 2 minutes and won't affect your credit score. Would you like to proceed?";
      newStage = "Eligibility Check";
    } else if (userMessage.toLowerCase().includes("rate") || userMessage.toLowerCase().includes("interest")) {
      response = "Our personal loan rates are highly competitive! 💰\n\n**Current Rates:**\n• Salaried: Starting from 10.49% p.a.\n• Self-employed: Starting from 11.49% p.a.\n\n**Your actual rate depends on:**\n• Credit score\n• Income level\n• Loan amount & tenure\n\nWould you like me to calculate your personalized rate? I can do that in under a minute!";
      newStage = "Rate Discovery";
    } else {
      response = "I understand! Let me help you with that. 🤝\n\nAs your AI relationship manager, I can assist with:\n• Personal loan applications\n• Instant eligibility checks\n• Rate calculations\n• Document verification\n• Loan status tracking\n\nWhat would you like to explore first?";
    }

    setCurrentStage(newStage);
    
    const assistantMessage: Message = {
      id: Date.now().toString(),
      role: "assistant",
      content: response,
      timestamp: new Date(),
      stage: newStage,
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const messageText = input;
    setInput("");

    await simulateResponse(messageText);
  };

  const handleQuickAction = async (action: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: action,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    await simulateResponse(action);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex">
        {/* Sidebar - Journey Progress */}
        <aside className="hidden lg:flex w-80 border-r border-border bg-card p-6 flex-col">
          <h2 className="font-display font-semibold text-lg mb-6">Your Journey</h2>
          
          <div className="space-y-4 flex-1">
            {[
              { label: "Intent Capture", icon: Sparkles, done: currentStage !== "Intent Capture" },
              { label: "Information Gathering", icon: FileText, done: ["Pre-qualification", "Eligibility Check", "Rate Discovery"].includes(currentStage) },
              { label: "Verification", icon: CheckCircle, done: false },
              { label: "Underwriting", icon: Bot, done: false },
              { label: "Approval", icon: CheckCircle, done: false },
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  step.done 
                    ? 'bg-success/10 text-success' 
                    : step.label === currentStage 
                      ? 'bg-accent/10 text-accent animate-pulse-glow' 
                      : 'bg-muted text-muted-foreground'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-sm font-medium ${step.done || step.label === currentStage ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.label}
                  </p>
                  {step.label === currentStage && (
                    <p className="text-xs text-accent">Current Stage</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-border">
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 text-accent mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Estimated Time</span>
              </div>
              <p className="text-2xl font-display font-bold text-foreground">~8 minutes</p>
              <p className="text-xs text-muted-foreground">to complete application</p>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 chat-message ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  message.role === "assistant" 
                    ? "bg-accent/10 text-accent" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {message.role === "assistant" ? (
                    <Bot className="w-5 h-5" />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div className={`flex-1 max-w-[80%] ${message.role === "user" ? "text-right" : ""}`}>
                  {message.stage && message.role === "assistant" && (
                    <span className="inline-block px-2 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-2">
                      {message.stage}
                    </span>
                  )}
                  <div className={`inline-block p-4 rounded-2xl ${
                    message.role === "assistant"
                      ? "bg-card border border-border shadow-soft text-left"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <div className="bg-card border border-border rounded-2xl p-4 shadow-soft">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-accent/50 rounded-full typing-dot" />
                    <span className="w-2 h-2 bg-accent/50 rounded-full typing-dot" />
                    <span className="w-2 h-2 bg-accent/50 rounded-full typing-dot" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 2 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-muted-foreground mb-3">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action)}
                    className="text-sm"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 border-t border-border bg-card/50">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                variant="hero"
                disabled={!input.trim() || isTyping}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-3">
              TARA uses secure, encrypted communication. Your data is protected.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
