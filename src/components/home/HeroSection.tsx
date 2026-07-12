"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/config/products";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative overflow-hidden bg-primary" aria-label="Featured products">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,45,79,0.95),rgba(11,61,107,0.85))]" />

      <Container className="relative grid min-h-[520px] items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Industrial Solutions
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">
            {slide.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {slide.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white"
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
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent/20">
                <svg className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-white">GMP-Compliant Equipment</p>
              <p className="mt-2 text-sm text-slate-300">
                Engineered for pharmaceutical, chemical, and cosmetic industries
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative flex justify-center gap-2 pb-8">
        {heroSlides.map((item, index) => (
          <button
            key={item.productSlug}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
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
