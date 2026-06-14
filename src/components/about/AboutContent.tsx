"use client";

import { motion } from "framer-motion";
import { Users, Telescope, Compass, Layers, Lightbulb, Cpu, Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GradientOrb } from "@/components/shared/GradientOrb";

const sections = [
  {
    icon: Users,
    title: "من نحن",
    content:
      "ذكي تك (TheKey Tech) مبادرة تقنية ناشئة متخصصة في بناء حلول رقمية ذكية. نجمع بين الخبرة التقنية والفهم العميق لاحتياجات السوق العربي لنقدّم مواقع وتطبيقات وأنظمة ذكاء اصطناعي تساعد الشركات ورواد الأعمال على النمو بكفاءة وثقة.",
  },
  {
    icon: Telescope,
    title: "رؤيتنا",
    content:
      "أن نكون الشريك التقني الأول للشركات الطموحة في المنطقة، ونُمكّنها من بناء حضور رقمي ذكي يحقق نتائج حقيقية ويُبقيها في مقدمة المنافسة.",
  },
  {
    icon: Compass,
    title: "رسالتنا",
    content:
      "تقديم حلول رقمية ذكية تجمع بين السرعة والجودة والابتكار.  نركّز على ما يهم عملاءنا: نتائج ملموسة، تجربة استثنائية، وشراكة طويلة الأمد.",
  },
];

const stats = [
  { icon: Layers, value: "+50", label: "مشاريع رقمية" },
  { icon: Lightbulb, value: "+30", label: "حلول مخصصة" },
  { icon: Cpu, value: "+15", label: "تقنيات حديثة" },
  { icon: Handshake, value: "+20", label: "شراكات ناجحة" },
];

export function AboutContent() {
  return (
    <div className="relative">
      <GradientOrb className="right-0 top-20" color="primary" size="lg" />
      <GradientOrb className="left-0 bottom-40" color="pink" size="md" />

      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="من نحن"
            title="نبني المستقبل الرقمي بذكاء"
            subtitle="فريق شغوف بالتقنية والتصميم — نؤمن أن كل مشروع يستحق حلاً مخصصاً وليس قالباً جاهزاً."
          />
        </div>
      </section>

      <section className="px-5 md:px-8 lg:px-8 pb-10 md:pb-14 lg:pb-16">
        <div className="mx-auto max-w-3xl space-y-5">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="glass-card p-5 sm:p-7"
              >
                {/* Unified card header: icon + title in a single row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-purple/20">
                    <section.icon className="text-brand-light" size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>

                {/* Description with controlled line length — ps aligns under the title in RTL */}
                <div className="ps-[52px]">
                  <p className="max-w-xl text-[15px] leading-[1.85] text-theme-muted">
                    {section.content}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Trust Metrics ─── */}
      <section className="px-5 md:px-8 lg:px-8 pb-10 md:pb-14 lg:pb-16">
        <div className="mx-auto max-w-3xl">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="glass-card flex flex-col items-center justify-center gap-2 py-6 px-4 text-center"
                >
                  <stat.icon
                    className="text-brand-light/60 mb-1"
                    size={18}
                    strokeWidth={1.5}
                  />
                  <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-theme-subtle">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 md:px-8 lg:px-8 py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="rounded-[24px] border border-border bg-background-elevated px-6 py-10 sm:px-12 sm:py-12 text-center shadow-card">
              <p className="mx-auto max-w-[500px] text-xl font-bold leading-[1.7] text-foreground sm:text-2xl text-balance">
                &ldquo;لا نبني مواقع وتطبيقات فقط،<br/> بل نبني أدوات تساعد أعمالك على النمو&rdquo;
              </p>
              <p className="mt-6 text-sm font-medium text-theme-muted">— فريق ذكي تك</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
