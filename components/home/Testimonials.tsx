import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "Regular Client",
    content:
      "The best barber experience I've had in years. The attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "First-time Visitor",
    content:
      "Incredible atmosphere and professional service. Definitely coming back for my next cut.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Loyal Customer",
    content:
      "Great products and even better service. The hot towel shave is a must-try.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl mb-4">
            Client Stories
          </h2>
          <p className="font-outfit text-muted-foreground text-lg">
            Don't just take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-xl border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 w-10 h-10" />
              <div className="flex gap-1 mb-4 text-primary">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={`${testimonial.name}-star-${i}`}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="font-outfit text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bebas text-xl tracking-wide">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground font-outfit">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
