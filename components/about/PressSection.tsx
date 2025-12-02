import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PRESS_ARTICLES = [
  {
    source: "GQ Magazine",
    title: "The Best Barber Shops in Singapore 2024",
    excerpt:
      "King's Barber brings a level of sophistication that is hard to find elsewhere...",
    date: "Oct 2024",
    href: "#",
  },
  {
    source: "The Straits Times",
    title: "Reviving the Classic Gentleman's Cut",
    excerpt: "How one local shop is changing the grooming game for modern men.",
    date: "Sep 2024",
    href: "#",
  },
  {
    source: "Men's Health",
    title: "Top 10 Grooming Destinations",
    excerpt:
      "For a shave that feels like a spa treatment, look no further than King's.",
    date: "Aug 2024",
    href: "#",
  },
];

export function PressSection() {
  return (
    <section className="py-24 bg-primary border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-secondary font-serif text-sm uppercase tracking-[0.2em] mb-4">
              In The News
            </h2>
            <h3 className="text-4xl font-serif font-bold text-white">
              As Seen In
            </h3>
          </div>
          <Link
            href="/press"
            className="text-gray-400 hover:text-secondary flex items-center gap-2 transition-colors"
          >
            View all press <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRESS_ARTICLES.map((article) => (
            <a
              key={article.title}
              href={article.href}
              className="group block bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-colors border border-white/5 hover:border-secondary/30"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-secondary font-serif font-bold text-lg">
                  {article.source}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {article.date}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                {article.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <div className="flex items-center text-sm text-secondary font-medium">
                Read Article{" "}
                <ArrowUpRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
