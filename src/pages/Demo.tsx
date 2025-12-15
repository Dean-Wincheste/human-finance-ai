import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Bot, 
  FileCheck, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const demoSteps = [
  {
    id: 1,
    title: "Customer Intent",
    agent: "Sales Agent",
    description: "User expresses need for a ₹5 Lakh personal loan",
    details: "TARA captures intent, understands urgency, and begins adaptive persuasion flow",
    icon: Bot,
    color: "accent",
  },
  {
    id: 2,
    title: "KYC Verification",
    agent: "Verification Agent",
    description: "Instant PAN & Aadhaar verification via DigiLocker",
    details: "Parallel processing with credit bureau check - completed in 45 seconds",
    icon: FileCheck,
    color: "success",
  },
  {
    id: 3,
    title: "Smart Underwriting",
    agent: "Underwriting Agent",
    description: "AI analyzes 50+ data points for risk assessment",
    details: "Credit score: 745 | Income verified | Risk score: Low",
    icon: Brain,
    color: "warning",
  },
  {
    id: 4,
    title: "Instant Sanction",
    agent: "Sanction Agent",
    description: "Loan approved for ₹5,00,000 at 10.99% p.a.",
    details: "Digital sanction letter generated with full transparency",
    icon: CheckCircle,
    color: "success",
  },
];

export default function Demo() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    document.title = "Demo | TARA - Tata Capital";
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && activeStep < demoSteps.length) {
      interval = setInterval(() => {
        setCompletedSteps(prev => [...prev, activeStep]);
        setActiveStep(prev => {
          if (prev >= demoSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);
    }

    return () => clearInterval(interval);
  }, [isPlaying, activeStep]);

  const startDemo = () => {
    setActiveStep(0);
    setCompletedSteps([]);
    setIsPlaying(true);
  };

  const resetDemo = () => {
    setActiveStep(0);
    setCompletedSteps([]);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Live Demo</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            See TARA in Action
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our autonomous AI agents orchestrate a complete loan journey 
            in under 10 minutes - from intent to sanction.
          </p>
        </div>

        {/* Demo Visualization */}
        <div className="max-w-5xl mx-auto">
          {/* Control Panel */}
          <div className="flex justify-center gap-4 mb-12">
            {!isPlaying && completedSteps.length === 0 && (
              <Button variant="hero" size="lg" onClick={startDemo}>
                <Play className="w-5 h-5 mr-2" />
                Start Demo
              </Button>
            )}
            {(isPlaying || completedSteps.length > 0) && (
              <Button variant="outline" size="lg" onClick={resetDemo}>
                Reset Demo
              </Button>
            )}
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/chat')}
            >
              Try it Yourself
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            <div className="space-y-8">
              {demoSteps.map((step, index) => {
                const isCompleted = completedSteps.includes(index);
                const isActive = activeStep === index && isPlaying;
                const isPending = !isCompleted && !isActive;

                return (
                  <div 
                    key={step.id}
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background items-center justify-center z-10">
                      <div className={`w-full h-full rounded-full transition-all duration-500 ${
                        isCompleted 
                          ? 'bg-success' 
                          : isActive 
                            ? 'bg-accent animate-pulse' 
                            : 'bg-muted'
                      }`} />
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`p-6 rounded-2xl border transition-all duration-500 ${
                        isCompleted 
                          ? 'bg-success/5 border-success/30 shadow-medium' 
                          : isActive 
                            ? 'bg-accent/5 border-accent/30 shadow-medium animate-pulse-glow' 
                            : 'bg-card border-border shadow-soft opacity-50'
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                            isCompleted 
                              ? 'bg-success/20 text-success' 
                              : isActive 
                                ? 'bg-accent/20 text-accent' 
                                : 'bg-muted text-muted-foreground'
                          }`}>
                            <step.icon className="w-7 h-7" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-display font-semibold text-lg text-foreground">
                                {step.title}
                              </h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                isCompleted 
                                  ? 'bg-success/10 text-success' 
                                  : isActive 
                                    ? 'bg-accent/10 text-accent' 
                                    : 'bg-muted text-muted-foreground'
                              }`}>
                                {step.agent}
                              </span>
                            </div>
                            <p className="text-foreground mb-2">{step.description}</p>
                            <p className="text-sm text-muted-foreground">{step.details}</p>
                            
                            {isActive && (
                              <div className="mt-4 flex items-center gap-2 text-accent">
                                <div className="flex gap-1">
                                  <span className="w-2 h-2 bg-accent rounded-full typing-dot" />
                                  <span className="w-2 h-2 bg-accent rounded-full typing-dot" />
                                  <span className="w-2 h-2 bg-accent rounded-full typing-dot" />
                                </div>
                                <span className="text-sm">Processing...</span>
                              </div>
                            )}

                            {isCompleted && (
                              <div className="mt-4 flex items-center gap-2 text-success">
                                <CheckCircle className="w-4 h-4" />
                                <span className="text-sm font-medium">Completed</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Completion Message */}
          {completedSteps.length === demoSteps.length && (
            <div className="mt-12 p-8 rounded-2xl bg-success/10 border border-success/30 text-center animate-scale-in">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Loan Approved in 8 Minutes!
              </h3>
              <p className="text-muted-foreground mb-6">
                This is the power of TARA's autonomous AI agents working in harmony.
              </p>
              <Button variant="hero" onClick={() => navigate('/chat')}>
                Experience it Yourself
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
