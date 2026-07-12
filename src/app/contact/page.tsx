import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { getFullAddress, siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Nisha Engineering for pharmaceutical and chemical machinery inquiries. Call +91 96624 44382 or email sales1@nishaengg.com. Located in Ankleshwar, Gujarat.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Discuss Your Project
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            Reach out for custom equipment quotes, technical consultations, or after-sales support.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary">Send Us a Message</h2>
            <p className="mt-2 text-muted">We typically respond within 24 hours.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary">Phone</h3>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-lg font-semibold text-accent"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary">Email</h3>
              <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg font-semibold text-accent">
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary">Address</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{getFullAddress()}</p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary">Business Hours</h3>
              <p className="mt-2 text-sm text-muted">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
