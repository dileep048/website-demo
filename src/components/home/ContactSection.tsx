import { getFullAddress, siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <section className="py-20" aria-labelledby="contact-heading" id="contact">
      <Container>
        <SectionHeading
          eyebrow="Contact Us"
          title="Get in Touch With Our Team"
          description="Have a project in mind? Send us a message and our team will respond within 24 hours."
          align="center"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary">Call or Text</h3>
              <p className="mt-2 text-sm text-muted">We&apos;re just a call away</p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-lg font-semibold text-accent hover:text-accent-dark"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div className="rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary">Email Us Today</h3>
              <p className="mt-2 text-sm text-muted">
                Solutions to your queries, just an email away
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-lg font-semibold text-accent hover:text-accent-dark"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary">Visit Us</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{getFullAddress()}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
