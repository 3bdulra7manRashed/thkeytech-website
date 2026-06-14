"use client";

import { Handshake, Zap, Palette } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GradientOrb } from "@/components/shared/GradientOrb";

const philosophyPoints = [
  {
    icon: Zap,
    title: "أداء بلا قيود",
    desc: "لا نؤمن بالقوالب الجاهزة؛ كل مشروع نبنيه يتم تخصيصه من الصفر لضمان سرعة فائقة وأمان متكامل.",
    iconClass: "bg-gradient-to-br from-amber-500/15 to-orange-500/10 text-orange-500 dark:text-amber-400 border border-orange-500/10",
  },
  {
    icon: Palette,
    title: "تجربة مستخدم ذكية",
    desc: "نصمم واجهات تجمع بين الجمال والبساطة، لتضمن لعملائك رحلة تصفح سلسة وممتعة.",
    iconClass: "bg-gradient-to-br from-purple-500/15 to-indigo-500/10 text-purple-500 dark:text-purple-400 border border-purple-500/10",
  },
  {
    icon: Handshake,
    title: "شراكة إستراتيجية",
    desc: "لسنا مجرد جهة تنفيّذ؛ نحن شريكك التقني الذي يهتم بنجاح مشروعك ونموه المستقبلي كأنه مشروعه الخاص.",
    iconClass: "bg-gradient-to-br from-blue-500/15 to-brand-primary/10 text-brand-primary dark:text-blue-400 border border-brand-primary/10",
  },
];

export function AboutContent() {
  return (
    <div className="relative">
      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-screen pt-[76px] pb-[76px] items-center justify-center overflow-hidden px-5">
        <GradientOrb className="right-0 top-0" color="primary" size="lg" subtle />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto w-full">
          <Reveal>
            <span className="mb-6 inline-flex items-center rounded-full border border-brand-primary/20 md:border-brand-primary/30 bg-brand-primary/[0.06] md:bg-brand-primary/10 px-5 md:px-4 py-1.5 text-xs font-semibold text-brand-primary dark:text-brand-light backdrop-blur-sm">
              من نحن
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-balance text-[clamp(1.85rem,6vw,3rem)] font-extrabold leading-[1.2] md:leading-[1.15] text-gray-900 dark:text-white mb-10 md:mb-12">
              ندمج الإبداع بالتقنية لتمكين الشركات من النمو الرقمي.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto max-w-[42rem] text-balance text-base md:text-lg text-gray-600 dark:text-gray-300 leading-[1.85]">
              في ذكي تك، لسنا مجرد مطورين؛ نحن شريكك التقني الاستراتيجي. نبني لك تطبيقات ومواقع مخصصة، سريعة، وآمنة لتساعد عملك على التميز والاستدامة في السوق العربي.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Our Story & Philosophy Section ─── */}
      <section className="px-5 md:px-8 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center flex flex-col items-center">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary dark:text-brand-light rounded-full text-xs font-semibold mb-4 backdrop-blur-sm">
                رؤيتنا وقيمنا
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                قصتنا وفلسفتنا في العمل
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] md:text-lg text-theme-muted leading-[1.8] max-w-3xl">
                ذكي تك هي وكالة رقمية ناشئة متخصصة في ابتكار حلول برمجية متكاملة وعالية الأداء. نجمع بين الفهم العميق لمتطلبات السوق العربي وبين أحدث التقنيات لنقدم تجارب مستخدم تترك أثراً، وتساعد الشركات ورواد الأعمال على التوسع بكفاءة وثقة.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {philosophyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={i * 0.1}>
                  <div
                    className="group flex flex-col items-start p-8 rounded-2xl bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:border-neutral-300/80 dark:hover:border-neutral-700/80 text-right h-full"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-5 group-hover:scale-105 transition-transform duration-300 ${point.iconClass}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-theme-muted">
                      {point.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Testimonial ─── */}
      <section className="px-5 md:px-8 lg:px-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <div className="rounded-xl border border-border bg-transparent px-5 py-8 text-center">
              <blockquote className="space-y-4">
                <p className="mx-auto max-w-[480px] text-lg font-bold leading-relaxed text-foreground sm:text-xl text-balance">
                  &ldquo;لا نبني مواقع وتطبيقات فقط،<br/> بل نبني أدوات تساعد أعمالك على النمو&rdquo;
                </p>
                <cite className="block not-italic text-xs font-medium text-theme-muted">
                  — فريق ذكي تك
                </cite>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
