import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const navClass = isHome 
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    : "sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border";

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Chat", path: "/chat" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Demo", path: "/demo" },
  ];

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isHome ? 'bg-accent/20' : 'bg-accent/10'}`}>
              <Bot className="w-6 h-6 text-accent" />
            </div>
            <div>
              <span className={`font-display font-bold text-xl ${isHome ? 'text-primary-foreground' : 'text-foreground'}`}>
                TARA
              </span>
              <p className={`text-xs ${isHome ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                by Tata Capital
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : isHome 
                      ? 'text-primary-foreground/70 hover:text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant={isHome ? "heroOutline" : "outline"}
              size="sm"
              onClick={() => navigate('/auth?mode=signin')}
            >
              Sign In
            </Button>
            <Button 
              variant={isHome ? "hero" : "default"}
              size="sm"
              onClick={() => navigate('/auth?mode=login')}
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isHome ? 'text-primary-foreground' : 'text-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isHome ? 'text-primary-foreground' : 'text-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    navigate(link.path);
                    setIsOpen(false);
                  }}
                  className={`text-left text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : isHome 
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-3 mt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    navigate('/auth?mode=signin');
                    setIsOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="hero" 
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    navigate('/auth?mode=login');
                    setIsOpen(false);
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
