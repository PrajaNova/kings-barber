import { Scissors, ShieldCheck, Sparkles, SprayCan } from "lucide-react";
import { ABOUT_PAGE_CONTENT } from "##/lib/constants";

export default function AboutPhilosophy() {
  const { philosophy } = ABOUT_PAGE_CONTENT;

  // Configuration for dynamic icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "scissors":
        return <Scissors className="h-8 w-8 text-amber-500" />;
      case "spray":
        return <SprayCan className="h-8 w-8 text-amber-500" />;
      case "shield":
        return <ShieldCheck className="h-8 w-8 text-amber-500" />;
      case "star":
        return <Sparkles className="h-8 w-8 text-amber-500" />;
      default:
        return <Scissors className="h-8 w-8 text-amber-500" />;
    }
  };

  return (
    <section className="bg-neutral-900 py-20 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Intro */}
        <div className="mx-auto max-w-3xl mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 lg:text-4xl">
            {philosophy.title}
          </h2>
          <p className="text-xl text-gray-400">{philosophy.description}</p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.values.map((value) => (
            <div
              key={value.title}
              className="group flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 hover:-translate-y-1 hover:border-amber-500/30"
            >
              <div className="mb-6 rounded-full bg-black/50 p-4 ring-1 ring-white/10 transition-colors group-hover:bg-amber-500/10 group-hover:ring-amber-500/50">
                {getIcon(value.icon)}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
