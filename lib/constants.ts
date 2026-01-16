export const BUSINESS_INFO = {
  name: "CHITRANSH AGENCY",
  registeredName: "CHITRANSH AGENCY",
  owner: "HARI OM BHATNAGAR",
  ownerRole: "OWNER",
  tagline: "CUSTOMER SETISFECTION IS OUR MOTO",
  primaryEmail: "CHITRANSHAGENCY21@GMAIL.COM",
  contactEmail: "HARIOMBHATNAGAR70@GMAIL.COM",
  phones: {
    business: ["9300010566", "9425043613"],
    support: "0755-4297797",
    whatsapp: "07554297797", // Format for WhatsApp link (without dashes)
  },
  address: {
    street: "49 LALA LAJPAT RAI COLONY RAISEN ROAD",
    city: "BHOPAL",
    state: "Madhya Pradesh",
    pinCode: "462023",
    country: "India",
    full: "49 LALA LAJPAT RAI COLONY RAISEN ROAD BHOPAL, 462023",
  },
  workingHours: "9:00 AM TO 9:00PM",
  domain: "chitranshagency.in",
  googleMapsUrl: "", // To be added if available
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
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
