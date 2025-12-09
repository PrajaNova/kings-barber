import { Quote } from "lucide-react";
import { ABOUT_PAGE_CONTENT } from "##/lib/constants";

export default function Testimonials() {
  const { testimonials } = ABOUT_PAGE_CONTENT;

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-neutral-900 p-8 transition-transform hover:scale-[1.02]"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-amber-500/20" />
              <div className="mb-6">
                {/* Quotation mark decoration */}
                <span className="text-4xl font-serif text-amber-500 leading-none">
                  “
                </span>
                <p className="mt-2 text-lg italic text-gray-300">
                  {testimonial.quote}
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <div className="flex text-amber-500 text-sm mt-1">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
