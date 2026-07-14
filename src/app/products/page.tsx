import Link from "next/link";
import { products } from "@/config/products";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  createMetadata,
  productItemListJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const productsDescription =
  "Browse Nisha Engineering's range of pharmaceutical and chemical machinery — Ointment Plants, Fluid Bed Dryers, Rotocone Vacuum Dryers, Syrup Plants, and more.";

export const metadata = createMetadata({
  title: "Products",
  description: productsDescription,
  path: "/products",
  keywords: [
    "pharmaceutical machinery catalog",
    "Rotocone Vacuum Dryer",
    "Fluid Bed Dryer",
    "Ointment Manufacturing Plant",
    "Syrup Manufacturing Plant",
    "Vacuum Tray Dryer",
    "Contra Rotary Mixer",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Products",
            description: productsDescription,
            path: "/products",
          }),
          productItemListJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ]}
      />
      <section className="bg-primary py-16 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Products</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Pharmaceutical & Chemical Machinery
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            GMP-compliant process equipment engineered for pharmaceutical, chemical, cosmetic,
            and herbal industries.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.slug}
                className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10">
                  <svg className="h-20 w-20 text-primary/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1">
                    {product.categories.map((cat) => (
                      <span key={cat} className="rounded bg-surface px-2 py-0.5 text-xs text-muted">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-foreground">
                    <Link href={`/products/${product.slug}`} className="hover:text-primary">
                      {product.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{product.shortDescription}</p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-accent hover:text-accent-dark"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
