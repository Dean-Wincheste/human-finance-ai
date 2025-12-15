import { Brain, MessageSquare, FileCheck, CreditCard, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Conversational Experience",
    description: "No forms, no waiting. Just talk to TARA like you would with a personal banker. She understands context and remembers your preferences.",
  },
  {
    icon: Brain,
    title: "E³ Framework Intelligence",
    description: "Powered by Empathy, Explainability & Efficiency. TARA explains every decision, ensuring complete transparency in your loan journey.",
  },
  {
    icon: FileCheck,
    title: "Instant Verification",
    description: "Automated KYC, credit bureau checks, and document verification. Our AI agents work in parallel to verify your eligibility in real-time.",
  },
  {
    icon: Clock,
    title: "48 Hours → 10 Minutes",
    description: "What traditionally takes days now happens in minutes. From application to sanction letter, experience unprecedented speed.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-grade encryption and full regulatory compliance. Your data is protected with enterprise-level security protocols.",
  },
  {
    icon: CreditCard,
    title: "Smart Underwriting",
    description: "AI-powered risk assessment that considers your complete financial picture, not just your credit score.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The <span className="text-accent">Agentic AI</span> Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TARA orchestrates multiple AI agents that work together seamlessly, 
            delivering a human-like experience with superhuman efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
