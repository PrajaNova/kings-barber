import {
  Baby,
  Circle,
  Crown,
  Droplet,
  Flame,
  GraduationCap,
  Leaf,
  Palette,
  Scissors,
  Sparkle,
  Sparkles,
  Waves,
} from "lucide-react";
import { Badge } from "##/components/ui/badge";
import { Button } from "##/components/ui/button";
import { Card, CardContent } from "##/components/ui/card";
import { services } from "##/lib/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  scissors: Scissors,
  baby: Baby,
  graduationCap: GraduationCap,
  sparkles: Sparkles,
  leaf: Leaf,
  droplet: Droplet,
  crown: Crown,
  palette: Palette,
  flame: Flame,
  sparkle: Sparkle,
  circle: Circle,
  waves: Waves,
};

const categoryLabels: Record<string, string> = {
  hair: "Hair Services",
  shave: "Shave Services",
  treatment: "Treatments",
};

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const hairServices = services.filter((s) => s.category === "hair");
  const shaveServices = services.filter((s) => s.category === "shave");
  const treatmentServices = services.filter((s) => s.category === "treatment");

  const renderServiceCard = (service: (typeof services)[0]) => {
    const IconComponent = iconMap[service.icon] || Scissors;
    return (
      <Card
        key={service.id}
        className="group hover-elevate transition-all duration-300 border-card-border"
        data-testid={`card-service-${service.id}`}
      >
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <h3 className="font-semibold text-foreground">
                  {service.name}
                </h3>
                {service.popular && (
                  <Badge variant="secondary" className="text-xs">
                    Popular
                  </Badge>
                )}
              </div>
              <p
                className="text-sm text-muted-foreground line-clamp-2"
                data-testid={`text-service-desc-${service.id}`}
              >
                {service.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderCategory = (title: string, categoryServices: typeof services) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" />
        {title}
      </h3>
      <div className="grid gap-4">
        {categoryServices.map(renderServiceCard)}
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Premium Barbering Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From classic haircuts to luxury shaves, our UK-trained barbers
            deliver exceptional grooming experiences using premium products.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            {renderCategory(categoryLabels.hair, hairServices)}
          </div>
          <div className="space-y-4">
            {renderCategory(categoryLabels.shave, shaveServices)}
          </div>
          <div className="space-y-4">
            {renderCategory(categoryLabels.treatment, treatmentServices)}
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            data-testid="button-services-book"
          >
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
