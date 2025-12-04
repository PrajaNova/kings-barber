import {
  Award,
  CheckCircle,
  Medal,
  Sparkles,
  Star,
  ThumbsUp,
  Trophy,
} from "lucide-react";
import { Badge } from "##/components/ui/badge";
import { awards } from "##/lib/schema";

const awardIcons = [
  Award,
  Star,
  Trophy,
  Medal,
  ThumbsUp,
  CheckCircle,
  Sparkles,
];

export function Awards() {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge
            variant="outline"
            className="mb-4 bg-accent border-accent-foreground/20 text-accent-foreground"
          >
            Recognition
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-accent-foreground mb-2">
            Trusted by Singapore
          </h2>
          <p className="text-accent-foreground/70 text-sm max-w-lg mx-auto">
            Featured in multiple "Best Barber" lists and recognized for our
            quality services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {awards.map((award, index) => {
            const IconComponent = awardIcons[index % awardIcons.length];
            return (
              <div
                key={award.id}
                className="flex flex-col items-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover-elevate transition-all duration-300"
                data-testid={`award-${award.id}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs text-center text-accent-foreground font-medium leading-tight">
                  {award.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
