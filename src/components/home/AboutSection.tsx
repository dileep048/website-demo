import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";

export function AboutSection() {
  return (
    <section className="py-20" aria-labelledby="about-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
            <div className="flex h-full flex-col justify-end bg-gradient-to-br from-primary/10 to-accent/10 p-8">
              <p className="text-6xl font-bold text-primary/20">19+</p>
              <p className="mt-2 text-lg font-semibold text-primary">Years of Excellence</p>
              <p className="text-sm text-muted">Serving pharma & chemical industries since 2007</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl bg-accent px-6 py-4 text-white shadow-lg">
            <p className="text-2xl font-bold">ISO</p>
            <p className="text-xs">9001:2008 Certified</p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Leading Pharmaceutical & Chemical Machinery Manufacturer"
            description="Established in 2007, Nisha Engineering is among the leading organizations involved in manufacturing and supplying pharmaceutical and chemical machinery with rugged, durable, and easy-to-use equipment."
          />
          <div className="mt-6 space-y-4 text-muted leading-7">
            <p>
              With state-of-the-art infrastructure and expert professionals, we deliver
              application-specific solutions to clients worldwide. Our machinery is appreciated
              for easy controls, low maintenance, and long service life.
            </p>
            <p>
              Under the guidance of Mr. Mahendra Yadav, we have built a strong reputation for
              on-time delivery, flexible payment modes, and prompt response to client queries.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
