"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { challenges } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ChallengesSection() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="تحديات النمو الرقمي"
          title="هل تعيق هذه التحديات نمو أعمالك؟"
          subtitle="نحوّل هذه التحديات إلى فرص للنمو من خلال حلول رقمية ذكية ومصممة خصيصًا لاحتياجات أعمالك."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {challenges.map((challenge, i) => (
            <Reveal key={challenge} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card-hover group flex gap-4 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/30 to-brand-purple/30 text-brand-light transition-shadow group-hover:shadow-glow">
                  <HelpCircle size={22} />
                </div>
                <p className="text-base font-medium leading-relaxed text-foreground/90">
                  {challenge}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
