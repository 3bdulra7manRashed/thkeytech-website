"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Smartphone, BrainCircuit, Layers, ArrowLeft } from "lucide-react";
import { homeServices } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  brain: BrainCircuit,
  palette: Layers,
};

export function ServicesPreview() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 mesh-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          badge="خدماتنا"
          title="حلول ذكية لكل مرحلة من نمو أعمالك"
          subtitle="نبني تجارب رقمية سريعة وموثوقة تساعدك على التوسع بثقة."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <Link href={service.href} className="block h-full">
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="service-card group flex h-full flex-col"
                  >
                    <div className="service-card-icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-brand-primary">
                      {service.title}
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-theme-muted">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/50 transition-colors duration-300 group-hover:text-brand-primary">
                      اكتشف المزيد
                      <ArrowLeft
                        size={14}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                      />
                    </span>
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
