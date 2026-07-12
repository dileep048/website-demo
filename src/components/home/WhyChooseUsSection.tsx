import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";

const reasons = [
  {
    title: "GMP-Compliant Design",
    description: "All equipment built to meet pharmaceutical industry standards and regulatory requirements.",
  },
  {
    title: "Custom Engineering",
    description: "Application-specific solutions tailored to your production capacity and process needs.",
  },
  {
    title: "On-Time Delivery",
    description: "Streamlined manufacturing and logistics ensure your project stays on schedule.",
  },
  {
    title: "After-Sales Support",
    description: "Dedicated team for installation guidance, maintenance, and technical assistance.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20" aria-labelledby="why-choose-heading">
      <Container className="grid gap-12 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted Partner for Process Equipment"
          description="We help pharma and chemical manufacturers set up reliable, GMP-compliant process equipment with custom-built designs and expert support."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-xl border border-border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2">
          <Button href="/contact">Contact Us Today</Button>
        </div>
      </Container>
    </section>
  );
}
