import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <a href="/" className="text-2xl font-bold text-foreground">
              FlowNote
            </a>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-colors">
                How it Works
              </a>
              <a href="#integrations" className="text-foreground/70 hover:text-foreground transition-colors">
                Integrations
              </a>
              <a href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Start Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
