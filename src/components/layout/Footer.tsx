import Link from "next/link";
import { products } from "@/config/products";
import { getFullAddress, siteConfig } from "@/config/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-primary text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-bold text-primary">
              {siteConfig.shortName}
            </span>
            <div>
              <p className="font-bold">{siteConfig.name}</p>
              <p className="text-xs text-slate-300">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Precision-engineered pharmaceutical and chemical machinery for demanding
            industries worldwide.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Products
          </h3>
          <ul className="mt-4 space-y-2">
            {products.slice(0, 6).map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Useful Links
          </h3>
          <ul className="mt-4 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li>{getFullAddress()}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-slate-400 sm:flex-row">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <p>Manufacturer & Exporter of Pharmaceutical Machinery</p>
        </Container>
      </div>
    </footer>
  );
}
