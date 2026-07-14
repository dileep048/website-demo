import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFullAddress, siteConfig } from "@/config/site";
import {
  breadcrumbJsonLd,
  contactPageJsonLd,
  createMetadata,
  faqJsonLd,
} from "@/lib/seo";

const contactDescription = `Contact Nisha Engineering for pharmaceutical and chemical machinery inquiries. Call ${siteConfig.phone} or email ${siteConfig.email}. Located in Ankleshwar, Gujarat.`;

const faqs = [
  {
    question: "What types of machinery does Nisha Engineering manufacture?",
    answer:
      "We manufacture GMP-compliant pharmaceutical and chemical process equipment including Rotocone Vacuum Dryers, Fluid Bed Dryers, Vacuum Tray Dryers, Ointment Manufacturing Plants, Syrup Plants, and mixing systems.",
  },
  {
    question: "Where is Nisha Engineering located?",
    answer: `Our manufacturing unit is at ${getFullAddress()}.`,
  },
  {
    question: "How can I request a quote?",
    answer: `You can call us at ${siteConfig.phone}, email ${siteConfig.email}, or submit the contact form on this page. We typically respond within 24 hours.`,
  },
  {
    question: "Do you provide custom or GMP-compliant equipment?",
    answer:
      "Yes. We design application-specific, GMP-compliant process equipment tailored to your production capacity and process requirements.",
  },
];

export const metadata = createMetadata({
  title: "Contact Us",
  description: contactDescription,
  path: "/contact",
  keywords: [
    "contact Nisha Engineering",
    "pharmaceutical machinery quote",
    "machinery manufacturer Ankleshwar contact",
    "Nisha Engineering phone email",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageJsonLd(),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

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
              <h2 className="font-semibold text-primary">Phone</h2>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-lg font-semibold text-accent"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h2 className="font-semibold text-primary">Email</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-lg font-semibold text-accent"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h2 className="font-semibold text-primary">Address</h2>
              <address className="mt-2 text-sm leading-7 text-muted not-italic">
                {getFullAddress()}
              </address>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h2 className="font-semibold text-primary">Business Hours</h2>
              <p className="mt-2 text-sm text-muted">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16" aria-labelledby="faq-heading">
        <Container>
          <h2 id="faq-heading" className="text-2xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-border bg-white p-6">
                <dt className="font-semibold text-foreground">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-7 text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
