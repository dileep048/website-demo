import { siteConfig } from "@/config/site";
import { Container } from "./Container";

export function TopBar() {
  return (
    <div className="bg-primary text-sm text-white">
      <Container className="flex flex-wrap items-center justify-between gap-2 py-2">
        <div className="flex flex-wrap items-center gap-4">
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-accent">
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
            {siteConfig.email}
          </a>
        </div>
        <p className="text-xs text-slate-200">{siteConfig.tagline}</p>
      </Container>
    </div>
  );
}
