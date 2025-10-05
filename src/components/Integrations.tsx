import { Code, FileText, Github, Share2 } from "lucide-react";

const integrations = [
  {
    name: "Slack",
    description: "Get notifications and share notes directly in Slack channels.",
    icon: Share2,
    bgColor: "bg-accent-coral/10",
    iconColor: "text-accent-coral"
  },
  {
    name: "Google Drive",
    description: "Sync notes and attach files from your Drive seamlessly.",
    icon: FileText,
    bgColor: "bg-accent-aqua/10",
    iconColor: "text-accent-aqua"
  },
  {
    name: "GitHub",
    description: "Link notes to issues, PRs, and documentation repos.",
    icon: Github,
    bgColor: "bg-accent-purple/10",
    iconColor: "text-accent-purple"
  },
  {
    name: "Export Options",
    description: "Export as PDF, Markdown, or JSON. Your data, your way.",
    icon: Code,
    bgColor: "bg-accent-orange/10",
    iconColor: "text-accent-orange"
  }
];

export const Integrations = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-section text-foreground">
            Integrates with your workflow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect FlowNote to the tools you already use. Export your data anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${integration.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <integration.icon className={`w-7 h-7 ${integration.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {integration.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
