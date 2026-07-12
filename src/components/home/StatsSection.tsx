import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";

export function StatsSection() {
  return (
    <section className="bg-primary py-16" aria-label="Company statistics">
      <Container>
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <li key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-accent sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-300">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
