"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
// import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Header adopts scrolled styling when menu is open OR page is scrolled
  const headerActive = scrolled || mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          headerActive
            ? "navbar-scrolled border-b py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-8 lg:px-8">
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image
              src="/brand/logo.svg"
              alt="ذكي تك"
              width={120}
              height={38}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-theme-muted transition-colors hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <motion.div className="hidden items-center gap-3 lg:flex">
            {/* <ThemeToggle /> */}
            <Button href="/contact" variant="primary" className="!px-5 !py-2.5 text-sm">
              ابدأ مشروعك
            </Button>
          </motion.div>

          <div className="flex items-center gap-2 lg:hidden">
            {/* <ThemeToggle /> */}
            <button
              type="button"
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
              className="relative z-50 rounded-lg p-2.5 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop: dims page below the header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[60px] z-30 bg-black/40 backdrop-blur-[3px] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Seamless dropdown panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed inset-x-0 top-[60px] z-40 border-b border-[rgba(255,255,255,0.06)] bg-background/[0.97] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-5 py-4">
                <div className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3.5 text-[15px] font-semibold text-foreground/75 transition-colors duration-150 active:text-brand-primary border-b border-foreground/[0.04] last:border-0"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="mt-4 pt-1">
                    <Button
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="w-full py-3 text-[13.5px] justify-center"
                    >
                      ابدأ مشروعك
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
