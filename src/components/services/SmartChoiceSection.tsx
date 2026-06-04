"use client";

import { Globe, Smartphone, BrainCircuit } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const choices = [
  {
    icon: Globe,
    title: "موقع إلكتروني",
    outcome: "حضور رقمي احترافي",
    description: "مثالي لبناء ثقة العملاء وعرض خدماتك بوضوح.",
  },
  {
    icon: Smartphone,
    title: "تطبيق موبايل",
    outcome: "تفاعل أكبر مع العملاء",
    description: "الأفضل عندما تحتاج تواصلاً مباشراً وتجربة يومية.",
  },
  {
    icon: BrainCircuit,
    title: "حلول ذكية",
    outcome: "كفاءة وتوفير للوقت",
    description: "مثالي لأتمتة العمليات وتحسين الإنتاجية.",
  },
];

export function SmartChoiceSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="اختر الحل المناسب"
          title="ما الحل الأنسب لمرحلة مشروعك؟"
          subtitle="سواء كنت تحتاج موقعاً احترافياً أو تطبيقاً أو نظاماً ذكياً،
سنساعدك على اختيار الحل الذي يحقق أهدافك بأفضل عائد."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {choices.map((choice, i) => (
            <Reveal key={choice.title} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="group relative h-full flex flex-col items-start text-right p-6 sm:p-7 rounded-[24px] border border-[rgba(68,96,239,0.08)] bg-white dark:bg-slate-900/40 shadow-[0_4px_14px_rgba(17,24,39,0.035)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(68,96,239,0.18)] hover:shadow-[0_12px_30px_rgba(17,24,39,0.08)]"
              >
                {/* Header Row: Icon on right, Outcome badge on left */}
                <div className="w-full flex justify-between items-center mb-5">
                  {/* Icon Container (16px rounded box) */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[rgba(68,96,239,0.05)] border border-[rgba(68,96,239,0.08)] text-brand-primary transition-transform duration-300 ease-out group-hover:scale-[1.05]">
                    <choice.icon size={22} strokeWidth={1.8} />
                  </div>
                  {/* Outcome Badge */}
                  <span className="inline-flex items-center rounded-full border border-brand-primary/10 bg-brand-primary/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-brand-primary">
                    {choice.outcome}
                  </span>
                </div>

                {/* Typography: Title & Description */}
                <h3 className="text-[17px] font-bold text-foreground transition-colors duration-300 group-hover:text-brand-primary mb-2 mt-0">
                  {choice.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-foreground/75 dark:text-theme-muted/90 mt-1">
                  {choice.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
