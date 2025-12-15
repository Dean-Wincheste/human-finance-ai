import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8 animate-fade-in">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Agentic AI</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Meet{" "}
            <span className="relative">
              <span className="text-gradient bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                TARA
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-display animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Tata Capital's Autonomous Relationship Agent
          </p>

          <p className="text-lg text-primary-foreground/60 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Experience the future of lending. Get instant loan decisions through 
            intelligent conversation, not paperwork. From application to approval in minutes, not days.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => navigate('/chat')}
              className="group"
            >
              Start Your Loan Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => navigate('/demo')}
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 justify-center text-primary-foreground/70">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary-foreground">10 Minutes</p>
                <p className="text-sm">Instant Decisions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center text-primary-foreground/70">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary-foreground">100% Secure</p>
                <p className="text-sm">Bank-grade Security</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center text-primary-foreground/70">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary-foreground">24/7 Available</p>
                <p className="text-sm">Always Here for You</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
