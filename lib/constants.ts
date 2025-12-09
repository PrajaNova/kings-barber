export const COMPANY_NAME = "Kings Barber";
export const CONTACT_PHONE_NUMBER = "+6587817032";
export const CONTACT_WHATSAPP_NUMBER = "6587817032";

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
    image:
      "http://kingsbarber.com.sg/wp-content/uploads/2022/06/best-in-singapore.jpeg",
    alt: "Best in Singapore",
    href: "#",
  },
  {
    id: 2,
    image:
      "http://kingsbarber.com.sg/wp-content/uploads/2022/06/mediaone-top-in-singapore.jpeg",
    alt: "Top Barbers In Singapore",
    href: "https://mediaonemarketing.com.sg/top-barbers-singapore/",
  },
  {
    id: 3,
    image:
      "http://kingsbarber.com.sg/wp-content/uploads/2022/06/singapores-finest-services.jpeg",
    alt: "Singapore's Finest Services",
    href: "#",
  },
  {
    id: 4,
    image:
      "http://kingsbarber.com.sg/wp-content/uploads/2022/06/best-in-singapore-1.jpeg",
    alt: "Best in Singapore",
    href: "#",
  },
  {
    id: 5,
    image:
      "http://kingsbarber.com.sg/wp-content/uploads/2022/06/product-nations-choice.jpeg",
    alt: "Product Nation's Choice",
    href: "#",
  },
  {
    id: 6,
    image:
      "http://kingsbarber.com.sg/wp-content/uploads/2022/06/voted-community-best.jpeg",
    alt: "Voted Community Best",
    href: "#",
  },
  {
    id: 7,
    image:
      "http://kingsbarber.com.sg/wp-content/uploads/2022/06/rating-sg.jpeg",
    alt: "Rating SG",
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

export const PRODUCTS_CONTENT = {
  header: {
    title: "Premium Grooming Products",
    tagline: "Trusted by professionals, now available for you.",
  },
  featured: [
    {
      id: 1,
      name: "Lock Stock & Barrel Puck",
      price: "$35.00",
      description: "Original classic wax for strong hold and shine.",
      image: "/assets/images/hero.jpg", // Placeholder
      href: "/products/lsb-puck",
    },
    {
      id: 2,
      name: "Fauvert Scalp Tonic",
      price: "$45.00",
      description: "Revitalizing tonic for healthy scalp and growth.",
      image: "/assets/images/hero.jpg", // Placeholder
      href: "/products/fauvert-tonic",
    },
    {
      id: 3,
      name: "Beard Grooming Kit",
      price: "$55.00",
      description: "Complete set with oil, balm, and comb.",
      image: "/assets/images/hero.jpg", // Placeholder
      href: "/products/beard-kit",
    },
  ],
  carousel: [
    {
      id: 4,
      name: "Daily Shampoo",
      image: "/assets/images/hero.jpg",
      href: "/products/shampoo",
    },
    {
      id: 5,
      name: "Texture Powder",
      image: "/assets/images/hero.jpg",
      href: "/products/powder",
    },
    {
      id: 6,
      name: "Shaving Cream",
      image: "/assets/images/hero.jpg",
      href: "/products/cream",
    },
    {
      id: 7,
      name: "Aftershave Balm",
      image: "/assets/images/hero.jpg",
      href: "/products/balm",
    },
  ],
  cta: {
    text: "Explore All Products",
    href: "/store",
  },
} as const;

export const FOOTER_CONTENT = {
  map: {
    embedUrl:
      "https://maps.google.com/maps?q=12+Boon+Teck+Road,+Singapore+329586&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  contact: {
    address: "12 Boon Teck Road, #01-01 Shaw Corner, Singapore 329586",
    hours: "Daily 10am – 9pm",
    phone: "+(65) 8781-7032",
    email: "contact@kingsbarber.sg",
  },
} as const;

export const TEAM_CONTENT = {
  title: "Meet Our Team",
  tagline: "The master barbers behind the chair.",
  members: [
    {
      name: "John Doe",
      role: "Senior Barber",
      image: "/assets/images/hero.jpg", // Placeholder
      socials: {
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Jane Smith",
      role: "Stylist",
      image: "/assets/images/hero.jpg", // Placeholder
      socials: {
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Mike Johnson",
      role: "Master Barber",
      image: "/assets/images/hero.jpg", // Placeholder
      socials: {
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Sarah Lee",
      role: "Colorist",
      image: "/assets/images/hero.jpg", // Placeholder
      socials: {
        instagram: "#",
        facebook: "#",
      },
    },
  ],
  cta: {
    text: "View All Team",
    href: "/about-us#teams",
  },
} as const;

export const FEATURED_ARTICLES = [
  {
    id: 1,
    image: "/assets/images/award-1.png", // Placeholder - Update with actual MediaOne logo
    alt: "Top Barbers Singapore - MediaOne",
    href: "https://mediaonemarketing.com.sg/top-barbers-singapore",
  },
  {
    id: 2,
    image: "/assets/images/award-1.png", // Placeholder - Update with actual Finest Services logo
    alt: "Finest Barbershops in Singapore",
    href: "https://finestservices.com.sg/barbershops/",
  },
  {
    id: 3,
    image: "/assets/images/award-1.png", // Placeholder - Update with actual Best in Singapore logo
    alt: "Best Barbers in Singapore",
    href: "https://www.bestinsingapore.co/best-barbers-singapore/",
  },
] as const;
