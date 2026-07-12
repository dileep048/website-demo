export const siteConfig = {
  name: "Nisha Engineering",
  shortName: "N.E.",
  tagline: "ISO 9001:2008 Certified Company",
  description:
    "Manufacturer & exporter of pharmaceutical, chemical, and cosmetics machinery including Rotocone Vacuum Dryers, Fluid Bed Dryers, and Ointment Manufacturing Plants.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishaengg.com",
  locale: "en_IN",
  phone: "+91 96624 44382",
  email: "sales1@nishaengg.com",
  address: {
    street: "Plot No. 5126/2, Near Khwaja Chowkdi, G.I.D.C.",
    city: "Ankleshwar",
    state: "Gujarat",
    postalCode: "393002",
    country: "India",
  },
  foundedYear: 2007,
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    linkedin: "https://in.linkedin.com/company/nisha-engineering",
  },
  stats: [
    { value: "500+", label: "Tests Conducted" },
    { value: "300+", label: "Happy Clients" },
    { value: "50+", label: "Team Members" },
    { value: "1", label: "Manufacturing Unit" },
  ],
} as const;

export function getFullAddress() {
  const { street, city, state, postalCode, country } = siteConfig.address;
  return `${street}, ${city}, ${state} – ${postalCode}, ${country}`;
}
