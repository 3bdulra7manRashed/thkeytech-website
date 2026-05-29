"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Zap, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const challengeCards = [
  {
    title: "فكرة مشروع غير واضحة",
    description: "لست متأكدًا من أفضل طريقة لتحويل فكرتك إلى منتج رقمي ناجح.",
    icon: Lightbulb,
  },
  {
    title: "موقع لا يحقق النتائج المطلوبة",
    description: "موقعك الحالي لا يجذب العملاء أو يعكس قيمة علامتك التجارية.",
    icon: TrendingUp,
  },
  {
    title: "عمليات تستهلك الوقت والجهد",
    description: "مهام متكررة يمكن أتمتتها بحلول ذكية توفر الوقت وتزيد الكفاءة.",
    icon: Zap,
  },
  {
    title: "تبحث عن شريك تقني موثوق",
    description: "تحتاج إلى فريق يمكن الاعتماد عليه لتنفيذ فكرتك باحترافية.",
    icon: ShieldCheck,
  },
];

export function ChallengesSection() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="تحديات النمو الرقمي"
          title="هل تعيق هذه التحديات نمو أعمالك؟"
          subtitle="نحوّل هذه التحديات إلى فرص للنمو من خلال حلول رقمية ذكية ومصممة خصيصًا لاحتياجات أعمالك."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {challengeCards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group relative flex flex-col items-start text-right p-6 sm:p-7 rounded-[24px] border border-[rgba(68,96,239,0.08)] bg-white shadow-[0_4px_14px_rgba(17,24,39,0.035)] transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(68,96,239,0.18)] hover:shadow-[0_12px_30px_rgba(17,24,39,0.08)] w-full"
                >
                  {/* Icon Container */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[rgba(68,96,239,0.05)] border border-[rgba(68,96,239,0.08)] text-[#4460ef] transition-transform duration-300 ease-out group-hover:scale-105">
                    <IconComponent size={24} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-bold text-[#111827] transition-colors duration-300 ease-out group-hover:text-[#4460ef]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-[1.8] text-[rgba(17,24,39,0.72)] max-w-xs">
                    {card.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
