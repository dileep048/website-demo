import Link from "next/link";
import { products } from "@/config/products";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";

export function ProductsSection() {
  const featured = products.slice(0, 4);

  return (
    <section className="bg-surface py-20" aria-labelledby="products-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Products"
            title="Precision-Engineered Industrial Equipment"
            description="Explore our range of GMP-compliant machinery for pharmaceutical, chemical, and cosmetic manufacturing."
          />
          <Button href="/products" variant="outline">
            View All Products
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <article
              key={product.slug}
              className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10">
                <svg className="h-16 w-16 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1">
                  {product.categories.slice(0, 2).map((cat) => (
                    <span key={cat} className="rounded bg-surface px-2 py-0.5 text-xs text-muted">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary">
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{product.shortDescription}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-accent hover:text-accent-dark"
                >
                  See Details &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
