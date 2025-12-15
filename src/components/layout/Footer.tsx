import { Bot } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <Bot className="w-6 h-6 text-accent" />
            </div>
            <div>
              <span className="font-display font-bold text-lg">TARA</span>
              <p className="text-xs text-primary-foreground/60">Tata Capital's Autonomous Relationship Agent</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
            <a href="#" className="hover:text-accent transition-colors">Support</a>
          </div>

          <p className="text-sm text-primary-foreground/50">
            © 2025 Tata Capital. Powered by E³ Framework.
          </p>
        </div>
      </div>
    </footer>
  );
};
