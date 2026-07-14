import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MissionSection } from "@/components/home/MissionSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  createMetadata,
  webPageJsonLd,
} from "@/lib/seo";

const homeTitle = "Pharmaceutical & Chemical Machinery Manufacturers";
const homeDescription =
  "Nisha Engineering manufactures GMP-compliant pharmaceutical and chemical machinery including Rotocone Vacuum Dryers, Fluid Bed Dryers, and Ointment Manufacturing Plants in Ankleshwar, Gujarat.";

export const metadata = createMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  keywords: [
    "pharmaceutical machinery manufacturers India",
    "chemical machinery Ankleshwar",
    "Rotocone Vacuum Dryer manufacturer",
    "Fluid Bed Dryer Gujarat",
    "Ointment Manufacturing Plant",
    "GMP equipment manufacturer",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: homeTitle,
          description: homeDescription,
          path: "/",
        })}
      />
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
