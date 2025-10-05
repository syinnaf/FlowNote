import workspaceCollab from "@/assets/workspace-collab.jpg";

const testimonials = [
  {
    quote: "FlowNote transformed how our design team shares ideas. Everything is connected now.",
    author: "Sarah Chen",
    role: "Design Lead"
  },
  {
    quote: "We've tried everything. FlowNote is the first tool that actually fits our workflow.",
    author: "Marcus Rodriguez",
    role: "Product Manager"
  }
];

export const Workspace = () => {
  return (
    <section className="py-24 md:py-32 bg-sky">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-section text-foreground">
              Built for teams that build together
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real-time collaboration means everyone stays in sync. See who's working on what, share feedback instantly, and watch your collective knowledge grow.
            </p>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border shadow-md">
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-aqua" />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={workspaceCollab} 
                alt="Team collaboration workspace showing shared boards and real-time updates"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
