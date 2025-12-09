export const COMPANY_NAME = "Kings Barber";
export const CONTACT_PHONE_NUMBER = "+441234567890";

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
} as const;
