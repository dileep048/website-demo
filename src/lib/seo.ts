import type { Metadata } from "next";
import { getFullAddress, siteConfig } from "@/config/site";
import { products, type Product } from "@/config/products";

const defaultOgImage = "/opengraph-image";

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path = "",
  image = defaultOgImage,
  noIndex = false,
  keywords = [],
  type = "website",
}: CreateMetadataOptions): Metadata {
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogTitle = title ?? `${siteConfig.name} | Pharmaceutical & Chemical Machinery Manufacturers`;

  return {
    title: title ?? undefined,
    description: pageDescription,
    keywords: keywords.length
      ? keywords
      : [
          "pharmaceutical machinery",
          "chemical machinery",
          "Nisha Engineering",
          "Ankleshwar",
          "GMP equipment",
        ],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: ogTitle,
      description: pageDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: pageDescription,
      images: [image],
    },
    category: "industrial manufacturing",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.svg`,
    },
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: String(siteConfig.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    sameAs: [siteConfig.social.linkedin],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Pharmaceutical machinery",
      "Chemical process equipment",
      "Rotocone Vacuum Dryer",
      "Fluid Bed Dryer",
      "Ointment Manufacturing Plant",
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}/opengraph-image`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.6269,
      longitude: 73.0152,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${path}#webpage`,
    url: `${siteConfig.url}${path}`,
    name: title,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/products/${product.slug}#product`,
    name: product.name,
    description: product.description,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    manufacturer: {
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      address: getFullAddress(),
    },
    category: product.categories.join(", "),
    url: `${siteConfig.url}/products/${product.slug}`,
    image: `${siteConfig.url}/opengraph-image`,
    additionalProperty: product.features.map((feature) => ({
      "@type": "PropertyValue",
      name: "Feature",
      value: feature,
    })),
  };
}

export function productItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/products#itemlist`,
    name: "Pharmaceutical & Chemical Machinery",
    description: "GMP-compliant process equipment manufactured by Nisha Engineering",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${siteConfig.url}/products/${product.slug}`,
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#contactpage`,
    url: `${siteConfig.url}/contact`,
    name: `Contact ${siteConfig.name}`,
    description: `Contact ${siteConfig.name} for pharmaceutical and chemical machinery inquiries.`,
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
