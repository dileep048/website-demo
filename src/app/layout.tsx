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
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({}),
  title: {
    default: `${siteConfig.name} | Pharmaceutical & Chemical Machinery Manufacturers`,
    template: `%s | ${siteConfig.name}`,
  },
  keywords: [
    "pharmaceutical machinery",
    "chemical machinery",
    "Rotocone Vacuum Dryer",
    "Fluid Bed Dryer",
    "Ointment Manufacturing Plant",
    "Nisha Engineering",
    "Ankleshwar",
    "GMP equipment",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
        <TopBar />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
