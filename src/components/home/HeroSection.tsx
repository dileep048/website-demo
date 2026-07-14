"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/config/products";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { HeroBackground } from "./HeroBackground";
import {
  HeroEquipment,
  type EquipmentVariant,
} from "./HeroEquipment";

function isEquipmentVariant(slug: string): slug is EquipmentVariant {
  return (
    slug === "rotocone-vacuum-dryer" ||
    slug === "syrup-manufacturing-plant" ||
    slug === "ointment-manufacturing-plant"
  );
}

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];
  const equipmentVariant: EquipmentVariant = isEquipmentVariant(slide.productSlug)
    ? slide.productSlug
    : "rotocone-vacuum-dryer";

  return (
    <section className="relative overflow-hidden bg-primary" aria-label="Featured products">
      <HeroBackground />

      <Container className="relative grid min-h-[520px] items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Industrial Solutions
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Pharmaceutical &amp; Chemical Machinery Manufacturers
          </h1>
          <p
            key={slide.title}
            className="mt-4 text-xl font-semibold text-accent hero-slide-text sm:text-2xl"
            aria-live="polite"
          >
            {slide.title}
          </p>
          <p className="mt-3 max-w-xl text-lg leading-8 text-slate-200">{slide.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {slide.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button href={`/products/${slide.productSlug}`}>Explore Products</Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] shadow-2xl backdrop-blur-sm">
            <div className="flex h-full flex-col p-4">
              <HeroEquipment key={equipmentVariant} variant={equipmentVariant} />
              <div className="px-4 pb-4 text-center">
                <p
                  key={`label-${slide.title}`}
                  className="text-sm font-semibold text-white hero-slide-text"
                >
                  {slide.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">GMP-Compliant Process Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative mx-auto mb-4 block h-48 w-full max-w-sm px-4 lg:hidden">
        <HeroEquipment key={`m-${equipmentVariant}`} variant={equipmentVariant} />
      </div>

      <div className="relative flex justify-center gap-2 pb-8">
        {heroSlides.map((item, index) => (
          <button
            key={item.productSlug}
            type="button"
            aria-label={`Show ${item.title}`}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              index === active ? "w-8 bg-accent" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
