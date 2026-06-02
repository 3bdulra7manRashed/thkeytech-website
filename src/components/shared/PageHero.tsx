"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "./GradientOrb";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  indicators?: string[];
  cta?: {
    text: string;
    href: string;
  };
  fullHeight?: boolean;
};

export function PageHero({
  badge,
  title,
  subtitle,
  indicators,
  cta,
  fullHeight = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden flex flex-col justify-center items-center",
        fullHeight ? "pt-[76px] pb-0 lg:min-h-screen" : "lg:pt-36 lg:pb-16 pt-32 pb-12"
      )}
    >
      <GradientOrb className="right-0 top-0" color="primary" size="lg" subtle />
      <GradientOrb className="left-10 bottom-0" color="pink" size="md" subtle />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="mb-5 inline-block rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-light">
              {badge}
            </span>
          )}
          <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg text-theme-muted">{subtitle}</p>
          )}

          {indicators && (
            <div className="mt-7 flex flex-wrap justify-center items-center gap-x-5 gap-y-2.5 text-[12.5px] font-medium text-foreground/65">
              {indicators.map((ind, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="text-brand-primary/80 select-none">✓</span>
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          )}

          {cta && (
            <div className="mt-8 flex justify-center">
              <Button href={cta.href}>
                {cta.text}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}



