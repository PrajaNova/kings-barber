import { z } from "zod";

export const services = [
  {
    id: "kids-cut",
    name: "Kids Cut",
    description:
      "Haircut services for our future Kings. Most styles are school approved!",
    category: "hair",
    icon: "baby",
    popular: false,
  },
  {
    id: "student-nsf",
    name: "Student & NSF",
    description: "Discounted pricing for students and National Service Men.",
    category: "hair",
    icon: "graduationCap",
    popular: false,
  },
  {
    id: "haircut",
    name: "Haircut",
    description:
      "Full haircut with wash and styling. Contemporary or traditional styles available.",
    category: "hair",
    icon: "scissors",
    popular: true,
  },
  {
    id: "trim",
    name: "Trim",
    description:
      "Side and back trimming to keep you looking sharp between full haircuts.",
    category: "hair",
    icon: "sparkles",
    popular: false,
  },
  {
    id: "scalp-treatment",
    name: "Scalp Treatment",
    description:
      "Fauvert scalp treatment from France. Hair mask, massage, and concentrated ampule.",
    category: "treatment",
    icon: "leaf",
    popular: true,
  },
  {
    id: "basic-shave",
    name: "Basic Shave",
    description:
      "Traditional wet shave with Proraso products. Hot towel, straight razor, aftershave.",
    category: "shave",
    icon: "droplet",
    popular: false,
  },
  {
    id: "luxury-shave",
    name: "Luxury Shave",
    description:
      "Ultimate pampering with facial scrub, mask, hot towels, and straight razor shave.",
    category: "shave",
    icon: "crown",
    popular: true,
  },
  {
    id: "hair-color",
    name: "Hair Color",
    description:
      "Professional coloring with Fauvert from France. Grey coverage or creative styles.",
    category: "treatment",
    icon: "palette",
    popular: false,
  },
  {
    id: "beard-treatment",
    name: "Hot Oil Beard Treatment",
    description:
      "Proraso hot oil treatment to keep your beard soft and manageable.",
    category: "shave",
    icon: "flame",
    popular: false,
  },
  {
    id: "facial",
    name: "Facial",
    description:
      "Men's facial with quality scrub and lava mask for radiant, healthy skin.",
    category: "treatment",
    icon: "sparkle",
    popular: false,
  },
  {
    id: "headshave",
    name: "Head Shave",
    description:
      "Clean head shave with straight razor and essential shaving steps.",
    category: "shave",
    icon: "circle",
    popular: false,
  },
  {
    id: "perm",
    name: "Perm",
    description:
      "Organic perm lotion that doesn't dry out your hair. Consult for your style.",
    category: "treatment",
    icon: "waves",
    popular: false,
  },
];

export const productCategories = [
  {
    id: "hair-styling",
    name: "Hair Styling",
    description: "Premium pomades, clays, and waxes",
  },
  {
    id: "hair-care",
    name: "Hair Care",
    description: "Shampoos, conditioners, and treatments",
  },
  {
    id: "shave",
    name: "Shave",
    description: "Pre-shave, creams, and aftershaves",
  },
  {
    id: "oral-care",
    name: "Oral Care",
    description: "Premium dental care products",
  },
  {
    id: "fragrance",
    name: "Fragrance",
    description: "Men's colognes and scents",
  },
];

export const featuredProducts = [
  {
    id: "lsb-putty",
    name: "Original Classic Wax",
    brand: "Lock Stock & Barrel",
    category: "hair-styling",
    price: 38,
    description: "Strong hold with matte finish",
    featured: true,
  },
  {
    id: "lsb-clay",
    name: "Disorder Clay",
    brand: "Lock Stock & Barrel",
    category: "hair-styling",
    price: 36,
    description: "Ultra matte clay for texture",
    featured: true,
  },
  {
    id: "proraso-cream",
    name: "Shaving Cream",
    brand: "Proraso",
    category: "shave",
    price: 28,
    description: "Eucalyptus and menthol formula",
    featured: true,
  },
  {
    id: "marvis-whitening",
    name: "Whitening Mint",
    brand: "Marvis",
    category: "oral-care",
    price: 18,
    description: "Italian luxury toothpaste",
    featured: true,
  },
];

export const brands = [
  { id: "lock-stock-barrel", name: "Lock Stock & Barrel", exclusive: true },
  { id: "proraso", name: "Proraso", exclusive: false },
  { id: "marvis", name: "Marvis", exclusive: false },
  { id: "fauvert", name: "Fauvert Professionnel", exclusive: false },
  { id: "nanosilk", name: "Nanosilk", exclusive: false },
];

export const awards = [
  { id: "best-singapore", name: "Best in Singapore" },
  { id: "top-barbers", name: "Top Barbers in Singapore" },
  { id: "finest-services", name: "Singapore's Finest Services" },
  { id: "product-nation", name: "Product Nation's Choice" },
  { id: "community-best", name: "Voted Community Best" },
  { id: "rating-sg", name: "Rating SG Featured" },
  { id: "simi-best", name: "SimiBest Featured" },
];

export const businessInfo = {
  name: "Kings Barber",
  tagline: "Trained in England, Perfected Locally",
  established: 2015,
  phone: "+65 8781 7032",
  email: "kingsbarbersg@gmail.com",
  address: "12 Boon Teck Road #01-01 Shaw Corner Singapore 329586",
  hours: "Daily 10am - 9pm",
  instagram: "@kingsbarbersingapore",
  certification: "Sid Sottung Academy (UK)",
};

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type Service = (typeof services)[number];
export type ProductCategory = (typeof productCategories)[number];
export type Product = (typeof featuredProducts)[number];
export type Brand = (typeof brands)[number];
export type Award = (typeof awards)[number];

export const insertContactSchema = contactFormSchema;
export type InsertContact = ContactFormData;

export interface Contact extends ContactFormData {
  id: string;
  createdAt: string;
}
