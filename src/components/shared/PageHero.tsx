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
      <div className="relative mx-auto max-w-4xl px-5 md:px-8 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="mb-4 md:mb-5 inline-flex items-center rounded-full border border-brand-primary/20 md:border-brand-primary/30 bg-brand-primary/[0.06] md:bg-brand-primary/10 px-5 md:px-4 py-1.5 text-xs font-medium md:font-semibold text-brand-primary dark:text-brand-light">
              {badge}
            </span>
          )}
          <h1 className="text-balance text-[clamp(1.85rem,6vw,3rem)] font-extrabold leading-[1.2] md:leading-[1.15] text-foreground py-1">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 md:mt-6 max-w-md md:max-w-2xl text-[14.5px] sm:text-base md:text-lg leading-[1.8] text-theme-muted text-center">
              {subtitle}
            </p>
          )}

          {indicators && (
            <div className="mt-6 md:mt-7 flex flex-wrap justify-center items-center gap-2.5 md:gap-x-5 md:gap-y-2.5 text-[12.5px] font-medium text-foreground/65">
              {indicators.map((ind, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1 md:px-0 md:py-0 rounded-full md:rounded-none border border-brand-primary/10 md:border-none bg-brand-primary/[0.04] md:bg-transparent text-[11.5px] md:text-[12.5px] text-brand-primary md:text-foreground/65"
                >
                  <span className="text-brand-primary/80 select-none text-xs md:text-sm">✓</span>
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          )}

          {cta && (
            <div className="mt-7 md:mt-8 flex justify-center w-full px-4 md:px-0">
              <Button
                href={cta.href}
                className="w-full max-w-[280px] sm:w-auto py-3.5 md:py-3 text-[14.5px] md:text-sm shadow-[0_4px_18px_rgba(68,96,239,0.15)] md:shadow-none"
              >
                {cta.text}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}



