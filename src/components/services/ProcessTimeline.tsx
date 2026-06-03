"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stepMetadata = [
  { badge: "التواصل", color: "text-cyan-600 bg-cyan-50/50 border-cyan-100/80 dark:text-cyan-400 dark:bg-cyan-950/30 dark:border-cyan-900/50" },
  { badge: "التخطيط", color: "text-indigo-600 bg-indigo-50/50 border-indigo-100/80 dark:text-indigo-400 dark:bg-indigo-950/30 dark:border-indigo-900/50" },
  { badge: "التصميم", color: "text-rose-600 bg-rose-50/50 border-rose-100/80 dark:text-rose-400 dark:bg-rose-950/30 dark:border-rose-900/50" },
  { badge: "التنفيذ", color: "text-violet-600 bg-violet-50/50 border-violet-100/80 dark:text-violet-400 dark:bg-violet-950/30 dark:border-violet-900/50" },
  { badge: "الجاهزية", color: "text-emerald-600 bg-emerald-50/50 border-emerald-100/80 dark:text-emerald-400 dark:bg-emerald-950/30 dark:border-emerald-900/50" },
  { badge: "الاستدامة", color: "text-amber-600 bg-amber-50/50 border-amber-100/80 dark:text-amber-400 dark:bg-amber-950/30 dark:border-amber-900/50" },
];

export function ProcessTimeline() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          badge="طريقة عملنا"
          title="من الفكرة إلى منتج رقمي جاهز للنمو"
          subtitle="نبدأ بفهم احتياجاتك، ثم نحولها إلى حل رقمي متكامل مصمم لتحقيق أهداف مشروعك."
        />

        <div className="relative mt-16">
          {/* Vertical axis line: thin, elegant, matching 48px outer ring center (24px) */}
          <div className="absolute right-[23px] md:right-auto md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[1.5px] bg-gradient-to-b from-brand-primary/5 via-brand-primary/20 to-brand-pink/5" />

          <div className="space-y-12">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              const metadata = stepMetadata[i] || { badge: "مرحلة", color: "text-brand-primary bg-brand-primary/5 border-brand-primary/10" };
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start w-full pr-14 md:pr-0"
                >
                  {/* Step Indicator Node - centered double-circle with orbiting particles */}
                  <div className="absolute right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 top-1 md:top-6 z-10 flex h-12 w-12 shrink-0 items-center justify-center">
                    {/* Outer Circle with soft shadow */}
                    <div className="absolute inset-0 rounded-full border border-brand-primary/20 bg-brand-primary/[0.02] shadow-[0_4px_12px_rgba(68,96,239,0.04)]" />
                    
                    {/* Inner Circle */}
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-primary bg-white dark:bg-slate-950 text-xs font-bold text-brand-primary shadow-sm">
                      {step.step}
                    </div>

                    {/* Orbit Particle 1 (very slow & subtle) */}
                    <motion.div
                      className="absolute h-1.5 w-1.5 rounded-full bg-brand-primary/30"
                      animate={{ x: [-14, 14, -14], y: [-10, 10, -10] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Orbit Particle 2 (very slow & subtle) */}
                    <motion.div
                      className="absolute h-1 w-1 rounded-full bg-brand-pink/35"
                      animate={{ x: [12, -12, 12], y: [12, -12, 12] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Even steps (Index 0, 2, 4) -> Card on Right (Column 1 in RTL) */}
                  {isEven ? (
                    <>
                      {/* Column 1 (Right): Card */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="group relative w-full p-5 sm:p-6 rounded-2xl border border-[rgba(68,96,239,0.08)] bg-white dark:bg-slate-900/40 shadow-[0_4px_14px_rgba(17,24,39,0.02)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(68,96,239,0.18)] hover:shadow-[0_12px_24px_rgba(68,96,239,0.06)] text-start flex flex-col items-start md:text-end md:items-end"
                      >
                        {/* Connection Tick to Left (towards Center Line) */}
                        <div className="absolute -left-6 top-[48px] hidden h-[1.5px] w-6 bg-brand-primary/20 group-hover:bg-brand-primary/40 transition-colors duration-300 md:block" />

                        {/* Category Badge - aligned to Left (closer to Center Axis) on desktop */}
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wide mb-3 self-start md:self-end ${metadata.color}`}>
                          {metadata.badge}
                        </span>

                        {/* Compact Content Block */}
                        <h3 className="w-full text-[16px] font-bold text-foreground transition-colors duration-300 group-hover:text-brand-primary text-start md:text-end">
                          {step.title}
                        </h3>
                        <p className="w-full mt-1.5 text-[13.5px] leading-[1.7] text-foreground/75 dark:text-theme-muted/95 text-start md:text-end">
                          {step.description}
                        </p>
                      </motion.div>

                      {/* Column 2 (Left): Empty spacer on desktop */}
                      <div className="hidden md:block w-full" aria-hidden />
                    </>
                  ) : (
                    <>
                      {/* Column 1 (Right): Empty spacer on desktop */}
                      <div className="hidden md:block w-full" aria-hidden />

                      {/* Column 2 (Left): Card */}
                      <motion.div
                        whileHover={{ x: -4 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="group relative w-full p-5 sm:p-6 rounded-2xl border border-[rgba(68,96,239,0.08)] bg-white dark:bg-slate-900/40 shadow-[0_4px_14px_rgba(17,24,39,0.02)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(68,96,239,0.18)] hover:shadow-[0_12px_24px_rgba(68,96,239,0.06)] text-start flex flex-col items-start"
                      >
                        {/* Connection Tick to Right (towards Center Line) */}
                        <div className="absolute -right-6 top-[48px] hidden h-[1.5px] w-6 bg-brand-primary/20 group-hover:bg-brand-primary/40 transition-colors duration-300 md:block" />

                        {/* Category Badge - aligned to Right (closer to Center Axis) on desktop */}
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wide mb-3 self-start md:self-start ${metadata.color}`}>
                          {metadata.badge}
                        </span>

                        {/* Compact Content Block */}
                        <h3 className="w-full text-[16px] font-bold text-foreground transition-colors duration-300 group-hover:text-brand-primary text-start">
                          {step.title}
                        </h3>
                        <p className="w-full mt-1.5 text-[13.5px] leading-[1.7] text-foreground/75 dark:text-theme-muted/95 text-start">
                          {step.description}
                        </p>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
