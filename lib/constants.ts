export const COMPANY_NAME = "Kings Barber";
export const CONTACT_PHONE_NUMBER = "+441234567890";
export const CONTACT_WHATSAPP_NUMBER = "+441234567890"; // Assuming same for now, or user can update

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
] as const;

export const HERO_CONTENT = {
  title: "Kings Barber",
  tagline:
    "At Kings Barber we keep up to date with our barber trained in UK in traditional wet shaves and hair styling.",
  certification: "Certified and affiliated with Sid Sottung Academy (UK)",
  imageAlt: "Kings Barber Interior",
  cta: {
    text: "Book Your Grooming Experience Today",
    href: "/book",
  },
} as const;

export const ABOUT_CONTENT = {
  intro: {
    title: "Who We Are",
    description:
      "Since 2015, Kings Barber has been redefining men’s grooming in Singapore. Our UK-trained barbers blend timeless traditions with modern techniques, ensuring every client leaves confident and refreshed.",
  },
  highlights: [
    {
      title: "Expert Barbers",
      description: "Certified by Sid Sottung Academy (UK).",
      icon: "scissors",
    },
    {
      title: "Premium Products",
      description: "Exclusive distributor of Lock Stock & Barrel.",
      icon: "spray",
    },
    {
      title: "Tradition + Innovation",
      description: "Classic techniques with modern flair.",
      icon: "pole",
    },
    {
      title: "Hygiene First",
      description: "Clean tools, safe practices, top-quality care.",
      icon: "shield",
    },
  ],
} as const;

export const AWARDS_CONTENT = [
  {
    id: 1,
    image: "/assets/images/award-1.png",
    alt: "Best Barber Shop Award",
    href: "https://simibest.sg", // Example link
  },
  {
    id: 2,
    image: "/assets/images/award-1.png", // Reusing for demo
    alt: "Certified Barber Award",
    href: "#",
  },
  {
    id: 3,
    image: "/assets/images/award-1.png",
    alt: "Top Grooming Service",
    href: "#",
  },
  {
    id: 4,
    image: "/assets/images/award-1.png",
    alt: "Excellence in Styling",
    href: "#",
  },
  {
    id: 5,
    image: "/assets/images/award-1.png",
    alt: "Customer Choice Award",
    href: "#",
  },
] as const;

export const SERVICES_CONTENT = {
  title: "Our Signature Services",
  items: [
    {
      title: "Haircut & Styling",
      description: "Consultation, wash, and styling with premium products.",
      details:
        "Experience a complete transformation with our signature haircut service. Includes a thorough consultation, invigorating wash, precision cut, and styling with our exclusive range of grooming products.",
      image: "/assets/images/hero.jpg",
    },
    {
      title: "Luxury Shaves",
      description: "Straight razor shave with facial scrub & mask.",
      details:
        "Indulge in the ultimate relaxation. Our hot towel shave includes a pre-shave oil massage, hot towel treatment, straight razor shave, and a soothing post-shave mask to rejuvenate your skin.",
      image: "/assets/images/hero.jpg",
    },
    {
      title: "Scalp Treatment",
      description: "Fauvert treatment for healthy scalp & hair growth.",
      details:
        "Revitalize your scalp with our specialized Fauvert treatment. Designed to combat dryness, dandruff, and hair loss, this treatment promotes healthy blood flow and stronger hair growth.",
      image: "/assets/images/hero.jpg",
    },
  ],
  cta: {
    text: "View All Services",
    href: "/services",
  },
} as const;
