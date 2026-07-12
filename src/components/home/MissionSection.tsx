import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";

const pillars = [
  {
    title: "Our Team",
    description:
      "Expert engineers and skilled professionals working in sync to deliver application-specific solutions and on-time project execution.",
    href: "/about",
  },
  {
    title: "Our Mission",
    description:
      "To provide rugged, durable pharmaceutical and chemical machinery with easy-to-use controls, low maintenance, and long service life.",
    href: "/about",
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted manufacturer and exporter of process equipment for pharmaceutical, chemical, and cosmetic industries globally.",
    href: "/about",
  },
];

export function MissionSection() {
  return (
    <section className="bg-surface py-20" aria-labelledby="mission-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Commitment"
          title="Driving Innovation in Process Engineering"
          description="With nearly two decades of experience, we combine technical expertise with customer-focused service to deliver equipment that powers your production."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-border bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/contact" variant="secondary">
            Start Your Project
          </Button>
        </div>
      </Container>
    </section>
  );
}
