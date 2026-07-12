import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MissionSection } from "@/components/home/MissionSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pharmaceutical & Chemical Machinery Manufacturers",
  description:
    "Nisha Engineering manufactures GMP-compliant pharmaceutical and chemical machinery including Rotocone Vacuum Dryers, Fluid Bed Dryers, and Ointment Manufacturing Plants in Ankleshwar, Gujarat.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <StatsSection />
      <MissionSection />
      <ContactSection />
    </>
  );
}
