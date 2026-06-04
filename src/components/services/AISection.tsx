"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BarChart3, Cpu, ArrowLeft, Database, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const aiFeatures = [
  { icon: Bot, title: "شات بوت ذكي", desc: "دعم عملاء آلي بالعربية على مدار الساعة" },
  { icon: Workflow, title: "أتمتة العمليات", desc: "تقليل المهام اليدوية وتسريع سير العمل" },
  { icon: BarChart3, title: "تحليل البيانات", desc: "رؤى واضحة لاتخاذ قرارات أدق" },
  { icon: Cpu, title: "أنظمة ذكية مخصصة", desc: "حلول AI مصممة لاحتياجات عملك" },
];

const benefits = ["توفير الوقت", "تحسين الكفاءة", "اتخاذ قرارات أفضل"];

export function AISection() {
  return (
    <section id="ai" className="section-padding relative scroll-mt-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 via-transparent to-brand-pink/3" />
      <div className="relative mx-auto max-w-7xl">
        {/* PREMIUM BADGE: Centered badge with soft gradients and subtle glow */}
        <div className="mb-4 flex justify-center">
          <span className="relative inline-flex items-center justify-center rounded-full border border-[rgba(68,96,239,0.15)] bg-gradient-to-r from-brand-primary/[0.08] via-brand-purple/[0.08] to-brand-pink/[0.08] px-3.5 py-1 text-[11px] font-semibold text-brand-primary shadow-[0_2px_12px_rgba(68,96,239,0.06)]">
            <span className="absolute inset-0 rounded-full bg-brand-primary/5 blur-md opacity-50 pointer-events-none -z-10" />
            الذكاء الاصطناعي
          </span>
        </div>

        <SectionHeading
          title="حلول ذكية تُحوّل بياناتك إلى قرارات"
          subtitle="حوّل بياناتك وعملياتك اليومية إلى قرارات ذكية وإجراءات تلقائية عبر حلول ذكاء اصطناعي مصممة خصيصًا لاحتياجات عملك."
        />

        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {benefits.map((b) => (
            <span
              key={b}
              className="rounded-full border border-brand-primary/15 bg-brand-primary/5 px-4 py-1.5 text-sm font-medium text-brand-primary"
            >
              {b}
            </span>
          ))}
        </div>

        {/* PREMIUM FEATURE CARDS: Refined height, borders, shadows, and icon container system */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {aiFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="group relative overflow-hidden text-center p-6 sm:p-7 border border-[rgba(68,96,239,0.10)] bg-white/70 dark:bg-elevated/40 backdrop-blur-md hover:border-[rgba(68,96,239,0.18)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-[24px] shadow-[0_4px_14px_rgba(17,24,39,0.035)] hover:shadow-[0_12px_30px_rgba(17,24,39,0.08)]"
              >
                {/* Corner glow effect on hover - subtle, matching requirements */}
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-brand-primary/[0.02] blur-2xl group-hover:bg-brand-primary/[0.05] transition-colors duration-300 pointer-events-none" />

                {/* Icon Container: Larger size (+15%), premium gradient background, border, radius, inner depth, hover scale */}
                <div className="mx-auto mb-5 flex h-[74px] w-[74px] items-center justify-center rounded-[14px] border border-[rgba(79,112,255,0.12)] bg-gradient-to-b from-[rgba(79,112,255,0.10)] to-[rgba(79,112,255,0.04)] text-brand-primary shadow-[inset_0_1px_2px_rgba(79,112,255,0.15)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]">
                  {/* Icon: Size (+10%), stronger stroke weight, brand-colored */}
                  <feature.icon size={33} strokeWidth={2} className="transition-transform duration-300" />
                </div>

                {/* Typography: font-bold (700), tighter spacing below title, tighter grouping with icon */}
                <h3 className="mb-2 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-brand-primary">
                  {feature.title}
                </h3>
                {/* Description: Slightly darker text color, better readability, line-height 1.75-1.85 */}
                <p className="text-[13.5px] leading-[1.78] text-foreground/75 dark:text-theme-muted/90">
                  {feature.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* REDESIGNED AI VISUALIZATION AREA */}
        <AIVisual />

        <div className="mt-10 md:mt-12 flex justify-center">
          <Button
            href="/contact"
            className="w-full max-w-[230px] sm:w-auto text-center justify-center py-2.5 md:py-3 text-[13.5px] md:text-sm"
          >
            احجز استشارة
            <ArrowLeft size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}

function AIVisual() {
  const nodes = [
    { x: "50%", y: "15%", label: "بيانات", icon: Database },
    { x: "80%", y: "50%", label: "تحليل", icon: BarChart3 },
    { x: "20%", y: "50%", label: "أتمتة", icon: Workflow },
    { x: "50%", y: "85%", label: "قرار", icon: Target },
  ];

  return (
    <Reveal className="mt-16">
      <div className="relative mx-auto h-72 max-w-2xl sm:h-80 bg-gradient-to-b from-transparent via-brand-primary/[0.005] to-transparent rounded-3xl border border-brand-primary/5 p-4 overflow-hidden">
        {/* Ambient Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(68,96,239,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(68,96,239,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          {/* Thin solid connection lines */}
          <line x1="50%" y1="15%" x2="50%" y2="50%" stroke="rgba(79, 112, 255, 0.15)" strokeWidth="1.5" />
          <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="rgba(79, 112, 255, 0.15)" strokeWidth="1.5" />
          <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="rgba(79, 112, 255, 0.15)" strokeWidth="1.5" />
          <line x1="50%" y1="85%" x2="50%" y2="50%" stroke="rgba(79, 112, 255, 0.15)" strokeWidth="1.5" />

          {/* Animated pulse points flowing along the lines */}
          {/* Flow 1: Top (بيانات) -> Center */}
          <g>
            <motion.circle
              r="4.5"
              fill="#4460ef"
              opacity="0.2"
              animate={{
                cx: ["50%", "50%"],
                cy: ["15%", "50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.circle
              r="2"
              fill="#4460ef"
              animate={{
                cx: ["50%", "50%"],
                cy: ["15%", "50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>

          {/* Flow 2: Right (تحليل) -> Center */}
          <g>
            <motion.circle
              r="4.5"
              fill="#4460ef"
              opacity="0.2"
              animate={{
                cx: ["80%", "50%"],
                cy: ["50%", "50%"],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.8,
              }}
            />
            <motion.circle
              r="2"
              fill="#4460ef"
              animate={{
                cx: ["80%", "50%"],
                cy: ["50%", "50%"],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.8,
              }}
            />
          </g>

          {/* Flow 3: Center -> Left (أتمتة) */}
          <g>
            <motion.circle
              r="4.5"
              fill="#4460ef"
              opacity="0.2"
              animate={{
                cx: ["50%", "20%"],
                cy: ["50%", "50%"],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
            <motion.circle
              r="2"
              fill="#4460ef"
              animate={{
                cx: ["50%", "20%"],
                cy: ["50%", "50%"],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
          </g>

          {/* Flow 4: Center -> Bottom (قرار) */}
          <g>
            <motion.circle
              r="4.5"
              fill="#4460ef"
              opacity="0.2"
              animate={{
                cx: ["50%", "50%"],
                cy: ["50%", "85%"],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "linear",
                delay: 0.4,
              }}
            />
            <motion.circle
              r="2"
              fill="#4460ef"
              animate={{
                cx: ["50%", "50%"],
                cy: ["50%", "85%"],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "linear",
                delay: 0.4,
              }}
            />
          </g>
        </svg>

        {/* Central AI Core circular element with double-ring glow */}
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10">
          {/* Pulsing and Rotating Outer Dashed Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-dashed border-brand-primary/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Breathing Middle Glow Ring */}
          <motion.div
            className="absolute h-24 w-24 rounded-full border border-[rgba(79,112,255,0.08)] bg-brand-primary/[0.02]"
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Inner solid premium core */}
          <motion.div
            className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-brand-primary/20 bg-white dark:bg-slate-900 text-center shadow-[0_8px_32px_rgba(68,96,239,0.12)]"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[9px] font-bold uppercase tracking-wider text-brand-primary/40">Engine</span>
            <span className="text-lg font-extrabold tracking-wide text-brand-primary">AI</span>
          </motion.div>
        </div>

        {/* Surrounding Nodes with micro-icons and clean labels */}
        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div
              key={node.label}
              className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
              style={{ left: node.x, top: node.y }}
            >
              {/* Icon Container */}
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white dark:bg-slate-900 border border-[rgba(79,112,255,0.15)] shadow-[0_4px_12px_rgba(15,23,42,0.03)] text-brand-primary z-10"
                animate={{
                  boxShadow: [
                    "0 4px 12px rgba(79,112,255,0.03)",
                    "0 6px 18px rgba(79,112,255,0.08)",
                    "0 4px 12px rgba(79,112,255,0.03)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              >
                <Icon size={18} strokeWidth={1.8} />
              </motion.div>
              {/* Label */}
              <span className="mt-2 text-xs font-bold text-foreground/80 dark:text-theme-muted tracking-wide whitespace-nowrap">
                {node.label}
              </span>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
