import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaBackground from "@/assets/cta-background.jpg";

export const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ctaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Organize your ideas. Build better together.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Join thousands of creative teams who've transformed how they work with FlowNote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-white/90">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
