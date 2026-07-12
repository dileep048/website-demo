export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categories: string[];
  features: string[];
};

export const products: Product[] = [
  {
    slug: "ointment-manufacturing-plant",
    name: "Ointment Manufacturing Plant",
    shortDescription:
      "Complete turnkey solution for ointment and cream production with GMP-compliant design.",
    description:
      "Our Ointment Manufacturing Plant is engineered for pharmaceutical, cosmetic, and herbal industries. The integrated system covers mixing, homogenizing, transfer, and storage with stainless steel construction and cGMP-compliant design for consistent product quality.",
    categories: ["Pharmaceutical", "Cosmetics", "Herbal"],
    features: [
      "SS 316L contact parts",
      "Vacuum homogenization",
      "Integrated heating & cooling",
      "Easy cleaning & maintenance",
    ],
  },
  {
    slug: "fluid-bed-dryer",
    name: "Fluid Bed Dryer (FBD)",
    shortDescription:
      "High-efficiency drying system for granules and powders in pharmaceutical production.",
    description:
      "The Fluid Bed Dryer delivers uniform drying with precise temperature control. Ideal for pharmaceutical granulation lines, it ensures consistent moisture removal while maintaining product integrity and meeting regulatory standards.",
    categories: ["Pharmaceutical", "Chemical"],
    features: [
      "Uniform air distribution",
      "PLC-based controls",
      "Energy-efficient design",
      "Filter bag cleaning system",
    ],
  },
  {
    slug: "rotocone-vacuum-dryer",
    name: "Rotocone Vacuum Dryer (RCVD)",
    shortDescription:
      "Precision vacuum drying for heat-sensitive pharmaceutical and chemical materials.",
    description:
      "Rotocone Vacuum Dryer is designed for low-temperature drying under vacuum. Its rotating cone design ensures thorough mixing and uniform drying, making it ideal for APIs, intermediates, and chemical compounds.",
    categories: ["Pharmaceutical", "Agro", "Chemical"],
    features: [
      "Low-temperature vacuum drying",
      "GMP-compliant design",
      "Uniform product mixing",
      "Ready stock available",
    ],
  },
  {
    slug: "syrup-manufacturing-plant",
    name: "Syrup Manufacturing Plant",
    shortDescription:
      "Automated syrup production line for pharmaceutical and food industries.",
    description:
      "Our Syrup Manufacturing Plant integrates mixing, heating, filtration, and storage units for efficient liquid oral production. Built to meet industry standards with flexible capacity options.",
    categories: ["Pharmaceutical", "Herbal"],
    features: [
      "Inline filtration system",
      "Temperature-controlled mixing",
      "Hygienic pipeline design",
      "Scalable capacity",
    ],
  },
  {
    slug: "vacuum-tray-dryer",
    name: "Vacuum Tray Dryer (VTD)",
    shortDescription:
      "Batch drying solution for sensitive materials under controlled vacuum conditions.",
    description:
      "Vacuum Tray Dryer offers reliable batch drying for pharmaceutical powders and chemicals. Multiple trays provide flexibility for varying batch sizes with excellent temperature uniformity.",
    categories: ["Pharmaceutical", "Chemical"],
    features: [
      "Multiple tray configuration",
      "Vacuum-assisted drying",
      "SS 316 construction",
      "Low maintenance operation",
    ],
  },
  {
    slug: "contra-rotary-mixer",
    name: "Contra Rotary Mixer",
    shortDescription:
      "High-shear mixing for ointments, creams, and viscous formulations.",
    description:
      "The Contra Rotary Mixer delivers homogeneous blending of viscous products. Its contra-rotating action ensures uniform dispersion of active ingredients in ointment and cream manufacturing.",
    categories: ["Pharmaceutical", "Cosmetics"],
    features: [
      "Contra-rotating blades",
      "Jacketed vessel option",
      "Variable speed drive",
      "Hygienic design",
    ],
  },
];

export const heroSlides = [
  {
    title: "Rotocone Vacuum Dryer",
    subtitle: "Precision-engineered equipment for demanding industries",
    categories: ["Pharmaceutical", "Agro"],
    productSlug: "rotocone-vacuum-dryer",
  },
  {
    title: "Liquid Oral Plant",
    subtitle: "Precision-engineered equipment for demanding industries",
    categories: ["Pharmaceutical", "Herbal"],
    productSlug: "syrup-manufacturing-plant",
  },
  {
    title: "Ointment Manufacturing Plant",
    subtitle: "Precision-engineered equipment for demanding industries",
    categories: ["Pharmaceutical", "Cosmetics", "Herbal"],
    productSlug: "ointment-manufacturing-plant",
  },
] as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
