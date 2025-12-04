"use client";

import { Award, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Badge } from "##/components/ui/badge";
import { Button } from "##/components/ui/button";
import { businessInfo } from "##/lib/schema";

import heroImage from "##/public/assets/generated_images/professional_barber_cutting_hair.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Professional barber at work"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-6 bg-primary/20 border-primary/40 text-white backdrop-blur-sm"
            data-testid="badge-certification"
          >
            <Award className="h-3.5 w-3.5 mr-1.5" />
            Certified by {businessInfo.certification}
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {businessInfo.tagline.split(",")[0]},
            <span className="block text-primary">
              {businessInfo.tagline.split(",")[1]}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg">
            Premium barbering services since {businessInfo.established}.
            Haircuts, traditional wet shaves, scalp treatments, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-base px-8"
              data-testid="button-hero-book"
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              data-testid="button-hero-services"
            >
              View Services
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
            <a
              href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
              data-testid="link-hero-phone"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span>{businessInfo.phone}</span>
            </a>
            <div
              className="flex items-center gap-2"
              data-testid="text-hero-location"
            >
              <MapPin className="h-5 w-5 text-primary" />
              <span>Shaw Corner, Singapore</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
          data-testid="button-scroll-down"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
