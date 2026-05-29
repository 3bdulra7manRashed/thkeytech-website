"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Gem, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const whyUsCards = [
  {
    icon: Sparkles,
    title: "نفهم قبل أن ننفذ",
    description:
      "نؤمن أن الحلول الذكية تبدأ بفهم حقيقي لاحتياجات عملائنا وأهدافهم.",
  },
  {
    icon: Target,
    title: "نركز على النتائج",
    description:
      "نبني حلولاً رقمية مصممة لتحقيق أهداف حقيقية وقابلة للقياس.",
  },
  {
    icon: Gem,
    title: "نهتم بكل تفصيلة",
    description:
      "نهتم بالتفاصيل الصغيرة التي تصنع الفرق وتخلق تجربة استثنائية.",
  },
  {
    icon: TrendingUp,
    title: "نبني للنمو",
    description:
      "نطوّر حلولاً قابلة للتوسع تنمو مع أعمالك وتواكب طموحاتك.",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="لماذا ذكي تك؟"
          title="نفكر في مشروعك كما لو كان مشروعنا"
          subtitle="لا نكتفي بالتنفيذ، بل نشاركك التفكير والتخطيط لبناء حلول رقمية تحقق نتائج قابلة للقياس."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {whyUsCards.map((card, i) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group relative flex w-full items-start gap-5 text-right rounded-[24px] border border-[rgba(68,96,239,0.08)] bg-white px-6 py-6 sm:px-8 sm:py-7 shadow-[0_4px_14px_rgba(17,24,39,0.035)] transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(68,96,239,0.18)] hover:shadow-[0_12px_30px_rgba(17,24,39,0.08)]"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[rgba(68,96,239,0.05)] border border-[rgba(68,96,239,0.08)] text-[#4460ef] transition-transform duration-300 ease-out group-hover:scale-105">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {/* Title + Description */}
                  <div className="flex flex-col pt-1.5">
                    <h3 className="text-lg font-extrabold text-[#111827] transition-colors duration-300 ease-out group-hover:text-[#4460ef]">
                      {card.title}
                    </h3>
                    <p className="mt-[13px] text-sm font-normal leading-[1.8] text-foreground/70">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
