import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import {
  breadcrumbJsonLd,
  createMetadata,
  webPageJsonLd,
} from "@/lib/seo";

const aboutDescription =
  "Learn about Nisha Engineering — established in 2007, we are a leading manufacturer and exporter of pharmaceutical, chemical, and cosmetics machinery from Ankleshwar, Gujarat.";

export const metadata = createMetadata({
  title: "About Us",
  description: aboutDescription,
  path: "/about",
  keywords: [
    "about Nisha Engineering",
    "pharmaceutical machinery company Ankleshwar",
    "ISO 9001 machinery manufacturer",
    "GMP equipment manufacturer Gujarat",
  ],
});

const milestones = [
  { year: "2007", event: "Nisha Engineering founded in Ankleshwar, Gujarat" },
  { year: "2010", event: "Expanded product range to include complete manufacturing plants" },
  { year: "2015", event: "Achieved ISO 9001:2008 certification" },
  { year: "2020", event: "Began exporting GMP-compliant equipment globally" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "About Us",
            description: aboutDescription,
            path: "/about",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <section className="bg-primary py-16 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">About Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Manufacturer & Exporter of Pharmaceutical Machinery
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            {siteConfig.description}
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Our Story"
              description="Established in 2007, Nisha Engineering has grown into a trusted name in pharmaceutical and chemical machinery manufacturing."
            />
            <div className="mt-6 space-y-4 text-muted leading-7">
              <p>
                We manufacture and supply a comprehensive range of equipment including Double
                Cone Blenders, Fluid Bed Dryers, Rapid Mixer Granulators, Storage Tanks, Rotocone
                Vacuum Dryers, and complete Ointment Manufacturing Plants.
              </p>
              <p>
                Our machinery is rugged and has gained appreciation for easy-to-use controls, low
                maintenance requirements, and durability. With state-of-the-art infrastructure and
                expert professionals, we deliver application-specific solutions on time.
              </p>
              <p>
                Under the leadership of Mr. Mahendra Yadav, we have built a global clientele
                through streamlined operations and a commitment to fulfilling varied client needs.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-xl font-bold text-primary">Company Highlights</h2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted">Founded</dt>
                <dd className="text-lg font-semibold">{siteConfig.foundedYear}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted">Certification</dt>
                <dd className="text-lg font-semibold">{siteConfig.tagline}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted">Industry</dt>
                <dd className="text-lg font-semibold">Pharmaceutical & Chemical Machinery</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted">Location</dt>
                <dd className="text-lg font-semibold">
                  {siteConfig.address.city}, {siteConfig.address.state}, India
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones"
            align="center"
          />
          <ol className="mt-12 space-y-6">
            {milestones.map((item) => (
              <li
                key={item.year}
                className="flex gap-6 rounded-xl border border-border bg-white p-6"
              >
                <span className="text-2xl font-bold text-accent">{item.year}</span>
                <p className="text-muted leading-7">{item.event}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Button href="/contact">Work With Us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
