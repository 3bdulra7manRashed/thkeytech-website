"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BrainCircuit } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 lg:pt-24">
      <HeroAtmosphere />

      <div className="relative z-10 w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Right side — Text content (RTL first column) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-right">
            <motion.span
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4460EF]/12 bg-[#4460EF]/[0.04] px-3.5 py-1 text-[11px] font-medium tracking-wide text-brand-primary"
            >
              <span className="h-[3px] w-[3px] rounded-full bg-brand-primary" />
              مفتاحك للحلول الذكية
            </motion.span>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-balance text-4xl font-extrabold leading-[1.2] py-1 text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.2] xl:text-6xl"
            >
              حلول رقمية{" "}
              <span className="relative inline-block">
                <span className="gradient-text">ذكية</span>
                <span
                  className="pointer-events-none absolute -inset-x-3 -inset-y-1 rounded-lg bg-gradient-to-l from-brand-primary/20 via-brand-light/10 to-brand-pink/20 blur-xl dark:from-brand-primary/20 dark:via-brand-light/10 dark:to-brand-pink/20 light:from-brand-primary/10 light:via-brand-light/5 light:to-brand-pink/10"
                  aria-hidden
                />
              </span>
              <br />
              <span className="font-bold text-foreground/95">
                تصنع حضورًا أقوى لأعمالك
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-6 max-w-[460px] text-pretty text-base leading-[1.8] text-foreground/80 sm:text-lg lg:max-w-[420px]"
            >
              نطوّر مواقع وتطبيقات وحلول ذكاء اصطناعي تساعد أعمالك على النمو، وتحول أفكارك إلى نتائج ملموسة.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Link href="/contact" className="hero-btn-primary group">
                <span>ابدأ مشروعك الآن</span>
                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                />
              </Link>
              <Link href="/services" className="hero-btn-secondary">
                تعرّف على خدماتنا
              </Link>
            </motion.div>
          </div>

          {/* Left side — Visual composition (RTL second column) */}
          <motion.div
            className="hidden lg:flex lg:items-center lg:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Background atmosphere ─────────────────────────────────── */
function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-background transition-colors duration-500" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[var(--hero-gradient-top)] via-[var(--hero-base)] to-[var(--hero-gradient-bottom)]"
        animate={{ opacity: [0.92, 1, 0.92] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-mesh absolute inset-0 opacity-60 light:opacity-100 dark:opacity-40" />
      <motion.div
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full blur-[100px]"
        style={{ background: "var(--orb-primary)" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-1/4 h-64 w-64 rounded-full blur-[90px]"
        style={{ background: "var(--orb-pink)" }}
        animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {/* Soft ambient depth behind headline text area */}
      <div
        className="absolute right-[5%] top-[15%] h-[480px] w-[480px] rounded-full blur-[130px] opacity-40 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(68,96,239,0.05) 0%, rgba(252,49,150,0.03) 70%, transparent 100%)"
        }}
      />
    </div>
  );
}

/* ─── Hero visual composition ───────────────────────────────── */
function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      {/* Ambient glow behind logo */}
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/[0.06] blur-[60px]" />

      {/* Connecting lines */}
      <ConnectingLines />

      {/* Decorative constellation dots */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        <circle cx="36" cy="40" r="0.6" fill="#4460EF" fillOpacity="0.12" />
        <circle cx="63" cy="62" r="0.5" fill="#FC3196" fillOpacity="0.1" />
        <circle cx="66" cy="36" r="0.5" fill="#4BC9F1" fillOpacity="0.12" />
        <circle cx="42" cy="68" r="0.4" fill="#3F37CA" fillOpacity="0.08" />
      </svg>

      {/* ── Central logo ── */}
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Outer depth ring */}
          <div className="absolute -inset-3 rounded-[28px] border border-brand-primary/[0.04]" />
          <div
            className="relative flex h-[132px] w-[132px] items-center justify-center rounded-3xl border border-brand-primary/10 bg-white shadow-[0_2px_12px_rgba(68,96,239,0.06),0_8px_40px_rgba(68,96,239,0.08)]"
            style={{
              transform: "perspective(800px) rotateY(-5deg) rotateX(3deg)",
            }}
          >
            <Image
              src="/brand/mark_3.svg"
              alt="TheKey Tech"
              width={74}
              height={74}
              className="h-[74px] w-[74px]"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* ── Browser window — Web Development ── */}
      <motion.div
        className="absolute left-[4%] top-[10%] z-10"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <BrowserElement />
        </motion.div>
      </motion.div>

      {/* ── Smartphone — Mobile Apps ── */}
      <motion.div
        className="absolute left-[66%] top-[60%] z-10"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <PhoneElement />
        </motion.div>
      </motion.div>

      {/* ── AI node — AI Solutions ── */}
      <motion.div
        className="absolute left-[62%] top-[4%] z-10"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <AINodeElement />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── SVG connecting lines ──────────────────────────────────── */
function ConnectingLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="line-web" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4460EF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4460EF" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="line-mobile" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FC3196" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FC3196" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="line-ai" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4BC9F1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4BC9F1" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Browser → Logo */}
      <motion.path
        d="M 21 21 C 28 38 44 48 50 50"
        stroke="url(#line-web)"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
      {/* Phone → Logo */}
      <motion.path
        d="M 75 73 C 66 63 54 54 50 50"
        stroke="url(#line-mobile)"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
      />
      {/* AI → Logo */}
      <motion.path
        d="M 73 15 C 66 32 54 46 50 50"
        stroke="url(#line-ai)"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
      />
    </svg>
  );
}

/* ─── Browser window element ────────────────────────────────── */
function BrowserElement() {
  return (
    <div className="w-[176px] overflow-hidden rounded-xl border border-gray-200/50 bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_24px_rgba(68,96,239,0.06)] backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 border-b border-gray-100/80 px-3 py-2">
        <span className="h-[5px] w-[5px] rounded-full bg-[#FF6259]/70" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#FFBF2F]/70" />
        <span className="h-[5px] w-[5px] rounded-full bg-[#29CE42]/70" />
        <div className="mx-1 flex-1 rounded bg-gray-50 px-2 py-[3px]">
          <div className="h-[3px] w-10 rounded-full bg-gray-200" />
        </div>
      </div>
      {/* Content area */}
      <div className="space-y-[6px] p-3">
        <div className="h-[5px] w-3/4 rounded-full bg-brand-primary/12" />
        <div className="h-[5px] w-full rounded-full bg-gray-100" />
        <div className="h-[5px] w-2/3 rounded-full bg-gray-100" />
        <div className="mt-2 h-8 rounded-lg bg-gradient-to-l from-brand-primary/[0.04] to-brand-light/[0.04]" />
      </div>
    </div>
  );
}

/* ─── Smartphone element ────────────────────────────────────── */
function PhoneElement() {
  return (
    <div className="w-[92px] overflow-hidden rounded-[20px] border border-gray-200/50 bg-white/90 p-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_24px_rgba(252,49,150,0.06)] backdrop-blur-sm">
      <div className="rounded-[16px] bg-gray-50/60 p-3">
        {/* Notch */}
        <div className="mx-auto mb-2.5 h-[3px] w-7 rounded-full bg-gray-200" />
        {/* Screen content */}
        <div className="space-y-[5px]">
          <div className="h-[5px] w-full rounded-full bg-brand-pink/12" />
          <div className="h-[5px] w-3/4 rounded-full bg-gray-100" />
          <div className="mt-2 h-6 rounded-md bg-gradient-to-t from-brand-pink/[0.06] to-brand-purple/[0.04]" />
          <div className="h-[5px] w-1/2 rounded-full bg-gray-100" />
          <div className="h-[5px] w-2/3 rounded-full bg-gray-100" />
        </div>
      </div>
    </div>
  );
}

/* ─── AI neural-node element ────────────────────────────────── */
function AINodeElement() {
  return (
    <div className="relative h-[112px] w-[112px]">
      {/* Central node */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-brand-light/15 bg-white/90 shadow-[0_2px_8px_rgba(75,201,241,0.08),0_4px_16px_rgba(75,201,241,0.06)] backdrop-blur-sm"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <BrainCircuit size={18} className="text-brand-light" strokeWidth={1.5} />
      </motion.div>

      {/* Satellite nodes */}
      <div className="absolute left-[8px] top-[10px] h-[10px] w-[10px] rounded-full border border-brand-light/20 bg-brand-light/8" />
      <div className="absolute right-[4px] top-[4px] h-[8px] w-[8px] rounded-full border border-brand-purple/20 bg-brand-purple/8" />
      <div className="absolute bottom-[14px] left-[12px] h-[8px] w-[8px] rounded-full border border-brand-primary/20 bg-brand-primary/8" />
      <div className="absolute bottom-[4px] right-[12px] h-[10px] w-[10px] rounded-full border border-brand-pink/20 bg-brand-pink/8" />

      {/* Satellite connections */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 112 112"
        fill="none"
      >
        <line x1="16" y1="16" x2="46" y2="47" stroke="#4BC9F1" strokeWidth="0.8" strokeOpacity="0.15" />
        <line x1="102" y1="10" x2="66" y2="47" stroke="#3F37CA" strokeWidth="0.8" strokeOpacity="0.15" />
        <line x1="20" y1="92" x2="46" y2="65" stroke="#4460EF" strokeWidth="0.8" strokeOpacity="0.15" />
        <line x1="96" y1="102" x2="66" y2="65" stroke="#FC3196" strokeWidth="0.8" strokeOpacity="0.15" />
      </svg>
    </div>
  );
}
