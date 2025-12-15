import { MessageSquare, UserCheck, FileSearch, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Start Conversation",
    description: "Tell TARA what you need. Our AI understands your requirements and guides you through the process.",
    agent: "Sales Agent",
  },
  {
    icon: UserCheck,
    title: "Quick Verification",
    description: "Instant KYC and document verification. No waiting in queues or multiple submissions.",
    agent: "Verification Agent",
  },
  {
    icon: FileSearch,
    title: "Smart Underwriting",
    description: "AI analyzes your profile, credit history, and financial health to determine eligibility.",
    agent: "Underwriting Agent",
  },
  {
    icon: CheckCircle,
    title: "Instant Sanction",
    description: "Receive your sanction letter immediately. Transparent terms with full explainability.",
    agent: "Sanction Agent",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How TARA Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Behind the conversation, a symphony of specialized AI agents work together 
            to process your application in record time.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-medium flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Agent badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                    {step.agent}
                  </span>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-accent/50 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
