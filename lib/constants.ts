export const BUSINESS_INFO = {
  name: "CHITRANSH AGENCY",
  registeredName: "CHITRANSH AGENCY",
  owner: "HARI OM BHATNAGAR",
  ownerRole: "OWNER",
  tagline: "Your Trusted Partner for Pure Water Solutions",
  primaryEmail: "chitranshagency21@gmail.com",
  contactEmail: "hariombhatnagar70@gmail.com",
  phones: {
    business: ["9300010566", "07554297797"],
    support: "0755-4297797",
    whatsapp: "9300010566", // WhatsApp number
  },
  address: {
    street: "49 LALA LAJPAT RAI COLONY RAISEN ROAD",
    city: "BHOPAL",
    state: "Madhya Pradesh",
    pinCode: "462023",
    country: "India",
    full: "49 LALA LAJPAT RAI COLONY RAISEN ROAD, BHOPAL, Madhya Pradesh 462023",
  },
  workingHours: "10:00 AM TO 7:00PM",
  domain: "chitranshagency.in",
  googleMapsUrl: "", // To be added if available
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const PRODUCT_CATEGORIES = {
  RO_PURIFIER: "ro-purifier",
  VACUUM_CLEANER: "vacuum-cleaner",
  WATER_SOFTENER: "water-softener",
  COMMERCIAL_PURIFIER: "commercial-purifier",
  ACCESSORIES: "accessories",
} as const;
