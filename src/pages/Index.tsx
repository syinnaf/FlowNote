import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Walkthrough } from "@/components/Walkthrough";
import { Workspace } from "@/components/Workspace";
import { Integrations } from "@/components/Integrations";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
        <Walkthrough />
        <Workspace />
        <Integrations />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
