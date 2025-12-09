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
