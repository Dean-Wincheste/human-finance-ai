import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-3xl blur-xl" />
          
          <div className="relative p-12 md:p-16 rounded-3xl bg-card border border-border shadow-large text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Experience the Future</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your
              <br />
              <span className="text-accent">Loan Experience?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands who've discovered a better way to borrow. 
              No paperwork, no waiting, just intelligent conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate('/chat')}
                className="group"
              >
                Chat with TARA Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => navigate('/dashboard')}
              >
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
