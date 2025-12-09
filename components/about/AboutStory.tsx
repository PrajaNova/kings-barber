import Image from "next/image";
import { ABOUT_PAGE_CONTENT } from "##/lib/constants";

export default function AboutStory() {
  const { story } = ABOUT_PAGE_CONTENT;

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Image */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={story.image}
              alt="Barber at work"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <p className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-amber-500 uppercase">
              {story.established}
            </p>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              {story.title}
            </h2>
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              {story.description.map((paragraph, index) => (
                <p key={`${paragraph.substring(0, 5)}-${index}`}>{paragraph}</p>
              ))}
            </div>
            {/* Signature or decorative element could go here */}
            <div className="h-1 w-20 bg-amber-500 rounded-full mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
