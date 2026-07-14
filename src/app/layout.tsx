import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import {
  createMetadata,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({}),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Pharmaceutical & Chemical Machinery Manufacturers`,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  keywords: [
    "pharmaceutical machinery manufacturer",
    "chemical machinery India",
    "Rotocone Vacuum Dryer",
    "Fluid Bed Dryer",
    "Ointment Manufacturing Plant",
    "Syrup Manufacturing Plant",
    "Vacuum Tray Dryer",
    "Nisha Engineering Ankleshwar",
    "GMP process equipment",
    "pharmaceutical dryer manufacturer Gujarat",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ankleshwar",
    "geo.position": "21.6269;73.0152",
    ICBM: "21.6269, 73.0152",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd
          data={[organizationJsonLd(), localBusinessJsonLd(), websiteJsonLd()]}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <TopBar />
        <Header />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
