export const COMPANY_NAME = "Kings Barber";
export const COMPANY_LOGO_URL =
  "https://kingsbarber.com.sg/wp-content/uploads/2016/08/LOGO.png";
export const CONTACT_PHONE_NUMBER = "+6587817032";
export const CONTACT_WHATSAPP_NUMBER = "6587817032";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/store" },
  { label: "About Us", href: "/about-us" },
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
      experience: "8 Years Exp",
      description:
        "Specializes in classic cuts and hot towel shaves. Known for his attention to detail and friendly demeanor.",
      customersServed: "5,000+",
      image: "/assets/images/hero.jpg", // Placeholder
      socials: {
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Jane Smith",
      role: "Stylist",
      experience: "5 Years Exp",
      description:
        "Expert in modern texturing and creative coloring. She brings a fresh perspective to traditional grooming.",
      customersServed: "3,500+",
      image: "/assets/images/hero.jpg", // Placeholder
      socials: {
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Mike Johnson",
      role: "Master Barber",
      experience: "12 Years Exp",
      description:
        "A master of his craft with over a decade of experience. He mentors the junior barbers and sets the standard for quality.",
      customersServed: "10,000+",
      image: "/assets/images/hero.jpg", // Placeholder
      socials: {
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Sarah Lee",
      role: "Colorist",
      experience: "6 Years Exp",
      description:
        "Passionate about color theory and hair health. She ensures every color treatment is vibrant and long-lasting.",
      customersServed: "4,000+",
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

export const ABOUT_PAGE_CONTENT = {
  hero: {
    title: "Redefining Men’s Grooming Since 2015",
    subline: "Trained in England, perfected in Singapore.",
    cta: {
      text: "Book Your Experience",
      href: "/book",
    },
    image: "/assets/images/hero.jpg",
  },
  story: {
    title: "Our Story",
    established: "Established 2015",
    description: [
      "Kings Barber started with a simple vision: to bring the authentic, time-honored traditions of British barbering to Singapore.",
      "Our journey began in London, where our founders trained at the prestigious Sid Sottung Academy. Armed with classic techniques and a passion for craftsmanship, we set out to create a space where men could experience more than just a haircut.",
      "Today, we are proud to be a staple in the community, offering a blend of old-school hospitality and modern styling precision.",
    ],
    image: "/assets/images/hero.jpg", // Placeholder
  },
  philosophy: {
    title: "Our Motivation & Philosophy",
    description:
      "We believe that grooming is an art form. Every cut, shave, and style is executed with precision, care, and a dedication to excellence.",
    values: [
      {
        title: "Craftsmanship",
        description: "Mastery of classic and modern techniques.",
        icon: "scissors",
      },
      {
        title: "Premium Products",
        description: "Only the best for your hair and skin.",
        icon: "spray",
      },
      {
        title: "Hygiene First",
        description: "Sterile tools and a clean environment.",
        icon: "shield",
      },
      {
        title: "Customer Satisfaction",
        description: "Your confidence is our measure of success.",
        icon: "star",
      },
    ],
  },
  testimonials: [
    {
      id: 1,
      name: "James Tan",
      quote:
        "The best barber experience I've had in Singapore. The hot towel shave is a must-try!",
    },
    {
      id: 2,
      name: "David Lee",
      quote:
        "Great atmosphere and professional service. My fade has never looked better.",
    },
    {
      id: 3,
      name: "Michael Chen",
      quote:
        "Authentic British barbering skills. Highly recommended for anyone looking for a sharp cut.",
    },
  ],
  instagram: {
    title: "Follow Us @KingsBarberSG",
    handle: "@KingsBarberSG",
    link: "https://instagram.com/kingsbarbersg",
    images: [
      "/assets/images/hero.jpg",
      "/assets/images/hero.jpg",
      "/assets/images/hero.jpg",
      "/assets/images/hero.jpg",
      "/assets/images/hero.jpg",
      "/assets/images/hero.jpg",
    ],
  },
} as const;

export const STORE_PAGE_CONTENT = {
  header: {
    title: "Premium Grooming Products",
    subtitle: "Professional-grade products for the modern gentleman",
  },
  categories: [
    { id: "all", name: "All Products", count: 24 },
    { id: "hair-care", name: "Hair Care", count: 8 },
    { id: "beard-care", name: "Beard Care", count: 6 },
    { id: "shaving", name: "Shaving", count: 5 },
    { id: "styling", name: "Styling", count: 5 },
  ],
  brands: [
    { id: "lock-stock-barrel", name: "Lock Stock & Barrel" },
    { id: "fauvert", name: "Fauvert" },
    { id: "kings-signature", name: "Kings Signature" },
  ],
  priceRanges: [
    { id: "under-30", label: "Under $30", min: 0, max: 30 },
    { id: "30-50", label: "$30 - $50", min: 30, max: 50 },
    { id: "50-80", label: "$50 - $80", min: 50, max: 80 },
    { id: "over-80", label: "Over $80", min: 80, max: 999 },
  ],
  sortOptions: [
    { id: "featured", label: "Featured" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "name-az", label: "Name: A-Z" },
  ],
  products: [
    {
      id: 1,
      name: "Lock Stock & Barrel Puck",
      price: 35,
      category: "styling",
      brand: "lock-stock-barrel",
      image: "/assets/images/hero.jpg",
      description: "Original classic wax for strong hold and shine",
      featured: true,
    },
    {
      id: 2,
      name: "Fauvert Scalp Tonic",
      price: 45,
      category: "hair-care",
      brand: "fauvert",
      image: "/assets/images/hero.jpg",
      description: "Revitalizing tonic for healthy scalp and growth",
      featured: true,
    },
    {
      id: 3,
      name: "Beard Grooming Kit",
      price: 55,
      category: "beard-care",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Complete set with oil, balm, and comb",
      featured: true,
    },
    {
      id: 4,
      name: "Daily Shampoo",
      price: 28,
      category: "hair-care",
      brand: "lock-stock-barrel",
      image: "/assets/images/hero.jpg",
      description: "Gentle cleansing for everyday use",
      featured: false,
    },
    {
      id: 5,
      name: "Texture Powder",
      price: 32,
      category: "styling",
      brand: "lock-stock-barrel",
      image: "/assets/images/hero.jpg",
      description: "Volumizing powder for natural texture",
      featured: false,
    },
    {
      id: 6,
      name: "Shaving Cream",
      price: 38,
      category: "shaving",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Rich lather for a smooth shave",
      featured: false,
    },
    {
      id: 7,
      name: "Aftershave Balm",
      price: 42,
      category: "shaving",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Soothing balm to calm skin",
      featured: false,
    },
    {
      id: 8,
      name: "Beard Oil",
      price: 35,
      category: "beard-care",
      brand: "lock-stock-barrel",
      image: "/assets/images/hero.jpg",
      description: "Nourishing oil for soft, healthy beards",
      featured: false,
    },
    {
      id: 9,
      name: "Pomade Classic",
      price: 30,
      category: "styling",
      brand: "lock-stock-barrel",
      image: "/assets/images/hero.jpg",
      description: "Medium hold with high shine",
      featured: false,
    },
    {
      id: 10,
      name: "Conditioner",
      price: 30,
      category: "hair-care",
      brand: "fauvert",
      image: "/assets/images/hero.jpg",
      description: "Deep conditioning treatment",
      featured: false,
    },
    {
      id: 11,
      name: "Pre-Shave Oil",
      price: 25,
      category: "shaving",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Prepares skin for a close shave",
      featured: false,
    },
    {
      id: 12,
      name: "Beard Balm",
      price: 32,
      category: "beard-care",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Styling and conditioning balm",
      featured: false,
    },
    {
      id: 13,
      name: "Hair Tonic",
      price: 40,
      category: "hair-care",
      brand: "fauvert",
      image: "/assets/images/hero.jpg",
      description: "Strengthens and revitalizes hair",
      featured: false,
    },
    {
      id: 14,
      name: "Matte Clay",
      price: 35,
      category: "styling",
      brand: "lock-stock-barrel",
      image: "/assets/images/hero.jpg",
      description: "Strong hold with matte finish",
      featured: false,
    },
    {
      id: 15,
      name: "Beard Wash",
      price: 28,
      category: "beard-care",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Gentle cleanser for beards",
      featured: false,
    },
    {
      id: 16,
      name: "Shaving Brush",
      price: 45,
      category: "shaving",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Premium badger hair brush",
      featured: false,
    },
    {
      id: 17,
      name: "Sea Salt Spray",
      price: 30,
      category: "styling",
      brand: "lock-stock-barrel",
      image: "/assets/images/hero.jpg",
      description: "Beachy texture and volume",
      featured: false,
    },
    {
      id: 18,
      name: "Scalp Scrub",
      price: 38,
      category: "hair-care",
      brand: "fauvert",
      image: "/assets/images/hero.jpg",
      description: "Exfoliating treatment for scalp",
      featured: false,
    },
    {
      id: 19,
      name: "Beard Comb",
      price: 18,
      category: "beard-care",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Handcrafted wooden comb",
      featured: false,
    },
    {
      id: 20,
      name: "Safety Razor",
      price: 65,
      category: "shaving",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Classic double-edge razor",
      featured: false,
    },
    {
      id: 21,
      name: "Hair Serum",
      price: 42,
      category: "hair-care",
      brand: "fauvert",
      image: "/assets/images/hero.jpg",
      description: "Shine and frizz control",
      featured: false,
    },
    {
      id: 22,
      name: "Mustache Wax",
      price: 22,
      category: "beard-care",
      brand: "lock-stock-barrel",
      image: "/assets/images/hero.jpg",
      description: "Strong hold for styling",
      featured: false,
    },
    {
      id: 23,
      name: "Leave-In Conditioner",
      price: 35,
      category: "hair-care",
      brand: "fauvert",
      image: "/assets/images/hero.jpg",
      description: "Lightweight daily treatment",
      featured: false,
    },
    {
      id: 24,
      name: "Grooming Gift Set",
      price: 85,
      category: "beard-care",
      brand: "kings-signature",
      image: "/assets/images/hero.jpg",
      description: "Complete grooming essentials",
      featured: false,
    },
  ],
} as const;

export const SERVICES_PAGE_CONTENT = {
  hero: {
    title: "Our Signature Services",
    subtitle: "Expert grooming tailored to perfection",
  },
  categories: [
    { id: "all", name: "All Services", count: 15 },
    { id: "hair", name: "Hair", count: 4 },
    { id: "shaves", name: "Shaves", count: 3 },
    { id: "treatment", name: "Treatment", count: 3 },
    { id: "beard", name: "Beard", count: 3 },
    { id: "specials", name: "Specials", count: 2 },
  ],
  priceRanges: [
    { id: "under-30", label: "Under $30", min: 0, max: 30 },
    { id: "30-60", label: "$30 - $60", min: 30, max: 60 },
    { id: "60-90", label: "$60 - $90", min: 60, max: 90 },
    { id: "over-90", label: "Over $90", min: 90, max: 999 },
  ],
  durationOptions: [
    { id: "30", label: "30 min" },
    { id: "45", label: "45 min" },
    { id: "60", label: "60 min" },
    { id: "90", label: "90 min+" },
  ],
  sortOptions: [
    { id: "featured", label: "Featured" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "duration-short", label: "Duration: Shortest First" },
  ],
  services: [
    {
      id: 1,
      title: "Haircut & Styling",
      category: "hair",
      price: 45,
      duration: 45,
      durationLabel: "45 min",
      image: "/assets/images/hero.jpg",
      description:
        "Includes consultation, wash, and styling using premium Lock Stock & Barrel products.",
      featured: true,
    },
    {
      id: 2,
      title: "Luxury Shave",
      category: "shaves",
      price: 60,
      duration: 60,
      durationLabel: "60 min",
      image: "/assets/images/hero.jpg",
      description:
        "Straight razor shave with facial scrub and mask for the ultimate pampering.",
      featured: true,
    },
    {
      id: 3,
      title: "Scalp Treatment",
      category: "treatment",
      price: 70,
      duration: 60,
      durationLabel: "60 min",
      image: "/assets/images/hero.jpg",
      description:
        "Fauvert scalp treatment from France to nourish and revitalize hair growth.",
      featured: true,
    },
    {
      id: 4,
      title: "Kids Cut",
      category: "specials",
      price: 25,
      duration: 30,
      durationLabel: "30 min",
      image: "/assets/images/hero.jpg",
      description:
        "School-approved styles for our future Kings, with a fun and friendly touch.",
      featured: false,
    },
    {
      id: 5,
      title: "Hot Oil Beard Treatment",
      category: "beard",
      price: 50,
      duration: 45,
      durationLabel: "45 min",
      image: "/assets/images/hero.jpg",
      description: "Proraso hot oil infused to soften and nourish your beard.",
      featured: false,
    },
    {
      id: 6,
      title: "Premium Haircut",
      category: "hair",
      price: 65,
      duration: 60,
      durationLabel: "60 min",
      image: "/assets/images/hero.jpg",
      description:
        "Extended consultation with master barber, includes wash, cut, and premium styling.",
      featured: false,
    },
    {
      id: 7,
      title: "Traditional Wet Shave",
      category: "shaves",
      price: 45,
      duration: 45,
      durationLabel: "45 min",
      image: "/assets/images/hero.jpg",
      description:
        "Classic hot towel shave with straight razor and soothing aftershave treatment.",
      featured: false,
    },
    {
      id: 8,
      title: "Beard Trim & Shape",
      category: "beard",
      price: 35,
      duration: 30,
      durationLabel: "30 min",
      image: "/assets/images/hero.jpg",
      description:
        "Professional beard trimming and shaping to maintain your signature look.",
      featured: false,
    },
    {
      id: 9,
      title: "Hair Color",
      category: "treatment",
      price: 85,
      duration: 90,
      durationLabel: "90 min+",
      image: "/assets/images/hero.jpg",
      description:
        "Professional hair coloring service with premium products for natural-looking results.",
      featured: false,
    },
    {
      id: 10,
      title: "Senior Cut",
      category: "specials",
      price: 30,
      duration: 30,
      durationLabel: "30 min",
      image: "/assets/images/hero.jpg",
      description:
        "Special pricing for seniors 65+ with the same quality service.",
      featured: false,
    },
    {
      id: 11,
      title: "Buzz Cut",
      category: "hair",
      price: 25,
      duration: 20,
      durationLabel: "30 min",
      image: "/assets/images/hero.jpg",
      description: "Quick and clean buzz cut with precision clippers.",
      featured: false,
    },
    {
      id: 12,
      title: "Head Shave",
      category: "shaves",
      price: 40,
      duration: 30,
      durationLabel: "30 min",
      image: "/assets/images/hero.jpg",
      description:
        "Smooth head shave with hot towel treatment and moisturizer.",
      featured: false,
    },
    {
      id: 13,
      title: "Beard Dye",
      category: "beard",
      price: 45,
      duration: 45,
      durationLabel: "45 min",
      image: "/assets/images/hero.jpg",
      description:
        "Professional beard coloring to cover grays or change your look.",
      featured: false,
    },
    {
      id: 14,
      title: "Deep Conditioning Treatment",
      category: "treatment",
      price: 55,
      duration: 45,
      durationLabel: "45 min",
      image: "/assets/images/hero.jpg",
      description:
        "Intensive conditioning treatment to restore moisture and shine to damaged hair.",
      featured: false,
    },
    {
      id: 15,
      title: "Fade Haircut",
      category: "hair",
      price: 50,
      duration: 45,
      durationLabel: "45 min",
      image: "/assets/images/hero.jpg",
      description: "Precision fade with seamless blending and sharp line work.",
      featured: false,
    },
  ],
} as const;
