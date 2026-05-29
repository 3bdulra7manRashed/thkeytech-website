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
          badge="اختيار ذكي"
          title="أي الحلول تناسب احتياجاتك؟"
          subtitle="كل مشروع مختلف — نساعدك على اختيار الحل الأنسب لأهدافك."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {choices.map((choice, i) => (
            <Reveal key={choice.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="service-card group h-full text-center"
              >
                <div className="service-card-icon mx-auto">
                  <choice.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-brand-primary">
                  {choice.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand-primary/70">
                  → {choice.outcome}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-theme-muted">
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
