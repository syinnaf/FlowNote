import iconLinked from "@/assets/icon-linked.jpg";
import iconCollab from "@/assets/icon-collab.jpg";
import iconMindmap from "@/assets/icon-mindmap.jpg";
import iconSearch from "@/assets/icon-search.jpg";

const features = [
  {
    icon: iconLinked,
    title: "Linked Notes",
    description: "Connect ideas seamlessly. Build a web of knowledge that grows with your team.",
    color: "accent-aqua"
  },
  {
    icon: iconCollab,
    title: "Real-time Collaboration",
    description: "Work together, instantly. See changes as they happen, no refresh needed.",
    color: "accent-coral"
  },
  {
    icon: iconMindmap,
    title: "Visual Mind Maps",
    description: "Transform notes into visual networks. See the big picture and drill into details.",
    color: "accent-purple"
  },
  {
    icon: iconSearch,
    title: "Tag & Search Instantly",
    description: "Find anything in seconds. Powerful search across all your team's knowledge.",
    color: "accent-lime"
  }
];

export const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-section text-foreground">
            Everything you need to capture ideas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that help creative teams think, connect, and build together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 rounded-xl overflow-hidden">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
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
