"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-16 lg:pb-28 px-5 md:px-8 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="group relative mx-auto max-w-[920px] overflow-hidden rounded-3xl border border-[rgba(68,96,239,0.08)] bg-white dark:bg-background-elevated py-8 px-5 sm:py-12 sm:px-12 text-center shadow-[0_4px_14px_rgba(17,24,39,0.035)] transition-[box-shadow] duration-300 ease-out hover:shadow-[0_12px_30px_rgba(17,24,39,0.08)]"
      >
        {/* Extremely Subtle Brand Depth Radial Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-100 dark:opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(68,96,239,0.04) 0%, rgba(252,49,150,0.03) 70%, transparent 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10">
          <span className="mb-5 inline-block rounded-full border border-brand-primary/25 bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-primary dark:text-brand-light">
            استشارة مجانية
          </span>
          <h2 className="text-balance text-[clamp(1.75rem,4.5vw,3rem)] font-bold text-foreground">
            جاهز لبناء حضور رقمي أكثر ذكاءً؟
          </h2>
            <p className="mt-2 text-sm sm:text-base text-theme-muted">
              تواصل معنا اليوم لنناقش تفاصيل مشروعك ونموه.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" className="group/btn">
              تواصل معنا
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover/btn:-translate-x-0.5"
              />
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="font-semibold border border-[rgba(68,96,239,0.12)] bg-white dark:bg-background-elevated hover:border-[rgba(68,96,239,0.24)] hover:shadow-[0_6px_16px_rgba(17,24,39,0.06)] transition-all duration-300"
            >
              ابدأ مشروعك الآن
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}