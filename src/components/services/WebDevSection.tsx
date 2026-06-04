"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const useCases = [
  "مدونات ومواقع شخصية",
  "متاجر إلكترونية",
  "مواقع شركات",
  "مواقع مطاعم وخدمات",
  "مواقع مخصصة حسب الطلب",
];

const benefits = [
  "أداء سريع",
  "تصميم متجاوب",
  "تجربة مستخدم ذكية",
  "SEO optimized",
  "قابلية التوسع",
];

export function WebDevSection() {
  return (
    <section id="web" className="section-padding relative scroll-mt-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right" className="order-2 lg:order-1">
            <LaptopMockup />
          </Reveal>

          <Reveal direction="left" className="order-1 lg:order-2">
            {/* BADGE: Premium pill with subtle blur glow */}
            <div className="mb-4 md:mb-6 flex justify-center lg:justify-start">
              <span className="relative inline-flex items-center justify-center rounded-full border border-[rgba(79,112,255,0.15)] bg-[rgba(79,112,255,0.08)] px-[18px] py-[8px] text-[12.5px] font-semibold text-[#4f70ff] shadow-[0_4px_12px_rgba(79,112,255,0.08)]">
                <span className="absolute inset-0 rounded-full bg-[#4f70ff]/10 blur-xl opacity-75 pointer-events-none -z-10" />
                تطوير المواقع
              </span>
            </div>

            {/* TITLE: Constrained width, line-height 1.2, bold weight, centered on mobile */}
            <h2 className="text-balance text-[clamp(1.75rem,4.5vw,3rem)] font-bold text-foreground leading-[1.2] md:leading-[1.15] text-center md:text-right mx-auto md:mx-0 max-w-[280px] sm:max-w-[360px] md:max-w-[480px]">
              تطوير مواقع إلكترونية احترافية تناسب مختلف احتياجاتك
            </h2>

            {/* DESCRIPTION: Max width 580px, line-height 1.9, softer color */}
            <p className="mt-4 md:mt-6 md:max-w-[580px] text-[15.5px] leading-[1.85] text-theme-muted">
              نصمم ونطوّر تجارب رقمية ذكية تساعد عملك على النمو — مواقع سريعة،
              جذابة، ومُحسّنة لمحركات البحث تبني ثقة عملائك من أول زيارة.
            </p>

            {/* USE CASES LIST: Check icons, refined spacing */}
            <div className="mt-6 md:mt-8">
              <p className="mb-3 text-[13px] font-bold tracking-wider text-foreground/40">حالات الاستخدام</p>
              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {useCases.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13.5px] font-medium text-foreground/75">
                    <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#4f70ff]/10 text-[#4f70ff]">
                      <Check size={10} strokeWidth={3.5} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FEATURE TAGS: Premium chips, subtle border, smooth hover */}
            <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-2.5">
              {benefits.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-[rgba(79,112,255,0.12)] bg-[rgba(79,112,255,0.06)] px-3 py-1 md:px-4 md:py-[8px] text-[12px] md:text-[13px] font-medium text-[#4f70ff] transition-all duration-300 hover:bg-[rgba(79,112,255,0.12)] hover:border-[rgba(79,112,255,0.22)]"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* PRIMARY CTA: Shadow, hover lift, arrow translate on hover */}
            <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
              <Button
                href="/contact"
                className="group shadow-[0_4px_12px_rgba(68,96,239,0.12)] md:shadow-[0_4px_20px_rgba(68,96,239,0.18)] hover:shadow-[0_10px_28px_rgba(68,96,239,0.28)] hover:-translate-y-0.5 transition-all duration-300 w-full max-w-[240px] sm:max-w-[230px] sm:w-auto text-center justify-center py-3.5 sm:py-2.5 md:py-3 text-[13.5px] md:text-sm"
              >
                ابدأ موقعك الآن
                <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LaptopMockup() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass-card relative mx-auto max-w-[88%] md:max-w-[550px] overflow-hidden p-1.5 md:p-2"
      style={{ boxShadow: "0 30px 60px rgba(15, 23, 42, 0.08)" }}
    >
      {/* Subtle blue glow behind the card */}
      <div className="absolute -inset-10 bg-[#4f70ff]/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="overflow-hidden rounded-xl bg-mockup">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="p-6">
          <motion.div
            className="mb-4 h-4 w-3/4 rounded bg-gradient-to-l from-brand-primary to-brand-light"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="mb-6 grid grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-16 rounded-lg bg-white/5" />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-4/5 rounded bg-white/10" />
            <div className="h-2 w-2/3 rounded bg-white/10" />
          </div>
          <motion.div
            className="mt-6 h-24 rounded-lg bg-gradient-to-t from-brand-primary/30 to-transparent"
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </div>
      <div className="mx-auto mt-2 h-3 w-32 rounded-b-lg bg-white/10" />
    </motion.div>
  );
}
