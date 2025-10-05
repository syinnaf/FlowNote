import stepCapture from "@/assets/step-capture.jpg";
import stepConnect from "@/assets/step-connect.jpg";
import stepShare from "@/assets/step-share.jpg";

const steps = [
  {
    number: "01",
    title: "Capture Ideas",
    description: "Start with a thought. Jot down notes, ideas, or quick captures. FlowNote makes it effortless to get everything out of your head and onto the page.",
    image: stepCapture,
    badgeBg: "bg-mint",
    cardBg: "bg-mint"
  },
  {
    number: "02",
    title: "Connect Notes",
    description: "Link related ideas together. Build connections between concepts and watch your knowledge base evolve into a living network of insights.",
    image: stepConnect,
    badgeBg: "bg-sky",
    cardBg: "bg-sky"
  },
  {
    number: "03",
    title: "Share with Teams",
    description: "Collaborate in real-time. Invite team members, share workspaces, and build collective intelligence together.",
    image: stepShare,
    badgeBg: "bg-mint",
    cardBg: "bg-mint"
  }
];

export const Walkthrough = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-section text-foreground">
            How FlowNote works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform how your team thinks and works.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${step.badgeBg} text-foreground`}>
                  Step {step.number}
                </div>
                <h3 className="text-4xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`relative rounded-2xl overflow-hidden shadow-xl ${step.cardBg} p-8`}>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
