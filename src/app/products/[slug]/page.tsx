import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/config/products";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/layout/Container";
import {
  breadcrumbJsonLd,
  createMetadata,
  productJsonLd,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return createMetadata({
    title: `${product.name} Manufacturer`,
    description: `${product.description} Manufactured by Nisha Engineering, Ankleshwar, Gujarat.`,
    path: `/products/${product.slug}`,
    keywords: [
      product.name,
      `${product.name} manufacturer`,
      `${product.name} India`,
      ...product.categories.map((c) => `${c} machinery`),
      "Nisha Engineering",
      "GMP equipment",
    ],
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[productJsonLd(product), breadcrumbs]} />

      <section className="bg-primary py-16 text-white">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-slate-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/products" className="hover:text-white">Products</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-accent">{product.name}</li>
            </ol>
          </nav>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium"
              >
                {cat}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-primary/5 to-accent/10">
            <svg className="h-32 w-32 text-primary/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">Product Overview</h2>
            <p className="mt-4 text-muted leading-8">{product.description}</p>

            <h3 className="mt-8 text-lg font-semibold text-foreground">Key Features</h3>
            <ul className="mt-4 space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Request a Quote</Button>
              <Button href="/products" variant="outline">
                All Products
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
