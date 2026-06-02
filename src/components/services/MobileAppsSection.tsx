"use client";

import { motion } from "framer-motion";
import { Check, ArrowLeft, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const appTypes = [
  "تطبيقات تجارة إلكترونية",
  "تطبيقات خدمات وطلبات",
  "تطبيقات إدارية",
  "تطبيقات للشركات الناشئة",
];

const focusPoints = [
  "الوصول للعملاء في أي وقت",
  "تحسين التفاعل وبناء الولاء",
  "تجربة استخدام سلسة وسريعة",
];

export function MobileAppsSection() {
  return (
    <section id="mobile" className="px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-20 relative scroll-mt-12">
      <div className="absolute inset-0 mesh-bg opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left" className="max-w-[620px]">
            {/* BADGE: pink premium badge with backdrop blur and custom shadow */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <span
                className="relative inline-flex items-center justify-center rounded-full border border-[rgba(255,77,148,0.18)] bg-[rgba(255,77,148,0.08)] px-[18px] py-[8px] text-[12.5px] font-semibold text-brand-pink backdrop-blur-[8px]"
                style={{ boxShadow: "0 4px 14px rgba(255, 77, 148, 0.08)" }}
              >
                <span className="absolute inset-0 rounded-full bg-brand-pink/10 blur-xl opacity-75 pointer-events-none -z-10" />
                تطوير التطبيقات
              </span>
            </div>

            {/* TITLE: Bold and premium */}
            <h2 className="text-balance text-3xl font-bold !leading-normal py-1 text-foreground sm:text-4xl">
              تطبيقات موبايل تصل بعملائك وتعزّز تفاعلهم
            </h2>

            {/* DESCRIPTION: max width 620px, line-height 1.85, soft color */}
            <p className="mt-5 max-w-[620px] text-[15.5px] leading-[1.85] text-theme-muted">
              نطوّر تطبيقات iOS و Android بتجربة مستخدم سلسة تساعدك على بناء علاقة
              أقوى مع عملائك وتحسين كفاءة عملياتك اليومية.
            </p>

            {/* TWO-COLUMN HORIZONTAL BLOCK FOR LISTS */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-14">
              {/* Right Column: مناسب لـ */}
              <div>
                <p className="mb-3 text-[14.5px] font-bold text-foreground">مناسب لـ</p>
                <ul className="space-y-2.5">
                  {appTypes.map((type) => (
                    <li key={type} className="flex items-center gap-2.5 text-[13.5px] font-medium text-foreground/75">
                      <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink">
                        <Check size={10} strokeWidth={3.5} />
                      </div>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Left Column: الفوائد الرئيسية */}
              <div>
                <p className="mb-3 text-[14.5px] font-bold text-foreground">الفوائد الرئيسية</p>
                <ul className="space-y-2.5">
                  {focusPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[13.5px] font-medium leading-relaxed text-theme-muted">
                      <span className="text-brand-pink select-none mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA BUTTON: hover lift, custom shadow, 200ms ease */}
            <div className="mt-8 flex justify-start">
              <Button
                href="/contact"
                variant="primary"
                className="group shadow-[0_4px_12px_rgba(79,112,255,0.12)] hover:shadow-[0_12px_30px_rgba(79,112,255,0.20)] hover:-translate-y-0.5 transition-all duration-200 ease-out"
              >
                اطلب عرض سعر
                <ArrowLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right">
            <MobileMockups />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MobileMockups() {
  return (
    <div className="relative flex items-center justify-center gap-4 py-8" style={{ filter: "drop-shadow(0 20px 40px rgba(15, 23, 42, 0.06))" }}>
      {/* Focused ambient glow closer to devices */}
      <div className="absolute -inset-6 bg-[#4460ef]/8 blur-2xl rounded-full pointer-events-none -z-10" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="glass-card w-[180px] overflow-hidden rounded-3xl border-2 border-white/10 p-2 shadow-glow sm:w-[215px]"
      >
        <PhoneScreen accent="primary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="glass-card z-10 w-[200px] overflow-hidden rounded-3xl border-2 border-brand-pink/20 p-2 sm:w-[235px]"
        style={{ boxShadow: "0 8px 30px rgba(252, 49, 150, 0.12)" }}
      >
        <div className="mb-2 flex items-center justify-center">
          <Smartphone className="text-brand-pink" size={20} />
        </div>
        <PhoneScreen accent="pink" featured />
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
        className="glass-card hidden w-[180px] overflow-hidden rounded-3xl border-2 border-white/10 p-2 shadow-glow sm:block sm:w-[215px]"
      >
        <PhoneScreen accent="light" />
      </motion.div>
    </div>
  );
}

function PhoneScreen({
  accent,
  featured,
}: {
  accent: "primary" | "pink" | "light";
  featured?: boolean;
}) {
  const colors = {
    primary: "from-brand-primary to-brand-purple",
    pink: "from-brand-pink to-brand-purple",
    light: "from-brand-light to-brand-primary",
  };

  return (
    <div className="rounded-2xl bg-mockup p-3">
      <div className={`mb-3 h-2 rounded-full bg-gradient-to-l ${colors[accent]} ${featured ? "w-full" : "w-3/4"}`} />
      <div className="space-y-2">
        <div className="h-8 rounded-lg bg-white/5" />
        <div className="h-8 rounded-lg bg-white/5" />
        <div className={`h-12 rounded-lg bg-gradient-to-t ${colors[accent]} opacity-30`} />
      </div>
    </div>
  );
}
