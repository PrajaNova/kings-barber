import { Award, Clock, Shield, Sparkles } from "lucide-react";
import { Badge } from "##/components/ui/badge";
import { Card, CardContent } from "##/components/ui/card";

const features = [
  {
    icon: Award,
    title: "UK-Trained Barbers",
    description:
      "Our barbers are certified by Sid Sottung Academy in the UK, trained in traditional wet shaves and modern styling techniques.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "We use only the finest products including Lock Stock & Barrel, Proraso, Fauvert, and Marvis for every service.",
  },
  {
    icon: Shield,
    title: "Hygiene Standards",
    description:
      "All tools undergo 2-stage sanitization: Barbicide solution followed by UV cabinet. Single-use razor blades for safety.",
  },
  {
    icon: Clock,
    title: "Since 2015",
    description:
      "Established with an aim to provide quality barbering services, combining traditional craft with modern techniques.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Kings Barber
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Kings Barber, we believe in practicing good hygiene and using top
            quality products. We stick to traditional barbering but never shy
            from mixing old school with modern techniques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden aspect-[4/5]">
                <img
                  src={
                    "/assets/generated_images/luxury_barbershop_interior.png"
                  }
                  alt="Kings Barber shop interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-lg overflow-hidden aspect-[4/5]">
                <img
                  src={
                    "/assets/generated_images/traditional_wet_shave_service.png"
                  }
                  alt="Traditional wet shave service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Traditional Craft, Modern Excellence
              </h3>
              <p className="text-muted-foreground">
                Kings Barber was established in 2015 with an aim to provide
                quality barbering services and products. We do not believe in
                just following what's in trend but what looks good and suitable
                for our customers.
              </p>
              <p className="text-muted-foreground">
                Be it a haircut, a luxury shave, or even just a trim - we make
                sure our customers leave our barbershop feeling satisfied and
                looking their best.
              </p>
            </div>

            <div
              className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10"
              data-testid="card-certification"
            >
              <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  Sid Sottung Academy Certified
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our barbers are trained in the UK in traditional wet shaves
                  and professional hair styling.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-card-border"
              data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
