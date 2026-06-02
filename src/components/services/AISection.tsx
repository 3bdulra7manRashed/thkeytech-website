"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BarChart3, Cpu, ArrowLeft } from "lucide-react";
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

        {/* UPGRADED FEATURE CARDS: Larger icons, better padding/gaps, hover lift & shadows */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {aiFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative overflow-hidden text-center !p-9 border border-border/60 bg-white/70 dark:bg-elevated/40 backdrop-blur-md hover:border-brand-primary/25 transition-all duration-300 rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_40px_rgba(68,96,239,0.06)]"
              >
                {/* Corner glow effect on hover */}
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-brand-primary/[0.03] blur-2xl group-hover:bg-brand-primary/[0.08] transition-colors duration-300 pointer-events-none" />

                {/* Icon Area: larger, border, gradient bg, transitions */}
                <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-primary/10 bg-gradient-to-br from-brand-primary/[0.04] to-brand-purple/[0.04] text-brand-primary group-hover:border-brand-primary/20 group-hover:from-brand-primary/[0.08] group-hover:to-brand-purple/[0.08] transition-all duration-300">
                  <feature.icon size={30} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-105" />
                </div>

                {/* Typography: text-lg, mb-3, line-height 1.7, soft readable color */}
                <h3 className="mb-3 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-brand-primary">
                  {feature.title}
                </h3>
                <p className="text-[13.5px] leading-[1.7] text-foreground/70 dark:text-theme-muted">
                  {feature.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* REDESIGNED AI VISUALIZATION AREA */}
        <AIVisual />

        <div className="mt-12 text-center">
          <Button href="/contact">
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
    { x: "50%", y: "15%", label: "بيانات" },
    { x: "80%", y: "50%", label: "تحليل" },
    { x: "20%", y: "50%", label: "أتمتة" },
    { x: "50%", y: "85%", label: "قرار" },
  ];

  return (
    <Reveal className="mt-16">
      <div className="relative mx-auto h-72 max-w-2xl sm:h-80 bg-gradient-to-b from-transparent via-brand-primary/[0.01] to-transparent rounded-3xl border border-brand-primary/5 p-4 overflow-hidden">
        {/* Ambient Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(68,96,239,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(68,96,239,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4460EF" />
              <stop offset="100%" stopColor="#FC3196" />
            </linearGradient>
          </defs>

          {/* Dotted active data flow lines linking to the AI Core */}
          {/* Node 1: البيانات -> AI Core */}
          <motion.line
            x1="50%" y1="15%"
            x2="50%" y2="50%"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          {/* Node 2: تحليل -> AI Core */}
          <motion.line
            x1="80%" y1="50%"
            x2="50%" y2="50%"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          {/* Node 3: AI Core -> أتمتة */}
          <motion.line
            x1="50%" y1="50%"
            x2="20%" y2="50%"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          {/* Node 4: AI Core -> قرار */}
          <motion.line
            x1="50%" y1="50%"
            x2="50%" y2="85%"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
        </svg>

        {/* Central AI Core circular element with glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-brand-primary/20 bg-white text-center shadow-[0_8px_32px_rgba(68,96,239,0.18)] z-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Subtle blue glow behind the AI Core */}
          <div className="absolute -inset-4 bg-brand-primary/10 blur-xl rounded-full pointer-events-none -z-10" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary/50">Engine</span>
          <span className="text-xl font-extrabold tracking-wide text-brand-primary">AI</span>
        </motion.div>

        {/* Surrounding Nodes with subtle pulse animation */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            className="absolute flex h-12 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-brand-primary/10 bg-white text-[13px] font-semibold text-brand-primary shadow-[0_4px_12px_rgba(68,96,239,0.04)]"
            style={{ left: node.x, top: node.y }}
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 4px 12px rgba(68,96,239,0.04)",
                "0 8px 24px rgba(68,96,239,0.08)",
                "0 4px 12px rgba(68,96,239,0.04)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          >
            {node.label}
          </motion.div>
        ))}
      </div>
    </Reveal>
  );
}
