"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  BrainCircuit,
  Layers,
  ArrowLeft,
  Check,
} from "lucide-react";
import { homeServices } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  brain: BrainCircuit,
  palette: Layers,
};

const serviceHighlights: Record<string, string[]> = {
  "تطوير المواقع": ["أداء سريع", "تصميم احترافي", "متوافق مع جميع الأجهزة"],
  "تطوير التطبيقات": ["iOS & Android", "تجربة استخدام سلسة", "أداء عالي"],
  "حلول الذكاء الاصطناعي": [
    "أتمتة ذكية",
    "تحليل البيانات",
    "رفع الكفاءة التشغيلية",
  ],
  "الهوية البصرية": ["هوية متكاملة", "تصميم احترافي", "تميز بصري"],
};

export function ServicesPreview() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 mesh-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          badge="حلولنا الذكية"
          title="كل ما تحتاجه لبناء حضور رقمي أقوى"
          subtitle="نصمم ونطور حلولاً رقمية تجمع بين الأداء والجمال والذكاء وتجربة المستخدم المتميزة."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const highlights = serviceHighlights[service.title] ?? [];

            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <Link href={service.href} className="block h-full">
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group relative flex h-full flex-col items-start text-right rounded-[24px] border border-[rgba(68,96,239,0.08)] bg-white p-5 sm:p-6 shadow-[0_2px_8px_rgba(17,24,39,0.03)] transition-all duration-300 ease-out hover:border-[rgba(68,96,239,0.14)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.05)]"
                  >
                    {/* Icon Container */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[rgba(68,96,239,0.05)] border border-[rgba(68,96,239,0.08)] text-[#4460ef] transition-transform duration-300 ease-out group-hover:scale-105">
                      <Icon size={26} strokeWidth={2} />
                    </div>

                    {/* Service Title — 24px from icon */}
                    <h3 className="mt-6 text-[17px] font-bold text-[#111827] transition-colors duration-300 ease-out group-hover:text-[#4460ef]">
                      {service.title}
                    </h3>

                    {/* Description — 16px from title */}
                    <p className="mt-4 text-[13px] leading-[1.8] text-[rgba(17,24,39,0.72)]">
                      {service.description}
                    </p>

                    {/* Service Highlights — 24px from description */}
                    {highlights.length > 0 && (
                      <ul className="mt-6 flex flex-col gap-1.5">
                        {highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-1.5 text-[13px] text-[rgba(17,24,39,0.72)]"
                          >
                            <Check
                              size={13}
                              strokeWidth={2}
                              className="shrink-0 text-[#4460ef]/50"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA — pushed to bottom */}
                    <div className="mt-auto pt-5">
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[rgba(17,24,39,0.45)] transition-colors duration-[250ms] ease-out group-hover:text-[#4460ef]">
                        استعرض الخدمة
                        <ArrowLeft
                          size={13}
                          strokeWidth={2}
                          className="transition-transform duration-[250ms] ease-out group-hover:-translate-x-1"
                        />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
