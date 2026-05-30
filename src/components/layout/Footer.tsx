import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { RiWhatsappLine } from "react-icons/ri";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <footer className="relative border-t border-[rgba(17,24,39,0.06)] bg-[var(--background-secondary)]">
      <div
        className="absolute inset-0 mesh-bg"
        style={{ opacity: "var(--footer-mesh-opacity)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-3 inline-flex items-center gap-3">
              <Image
                src="/brand/logo.svg"
                alt={siteConfig.nameEn}
                width={160}
                height={48}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-[1.75] text-foreground/60">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-[8px] rounded-[14px] border border-[rgba(68,96,239,0.08)] bg-white px-[20px] text-[13px] font-semibold text-[#111827] shadow-[0_1px_3px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(68,96,239,0.18)] hover:shadow-[0_8px_20px_rgba(17,24,39,0.08)]"
              >
                <RiWhatsappLine
                  size={18}
                  className="text-[#4460ef] transition-transform duration-300 group-hover:translate-x-[2px]"
                />
                واتساب مباشر
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex h-12 items-center justify-center gap-[8px] rounded-[14px] border border-[rgba(68,96,239,0.08)] bg-white px-[20px] text-[13px] font-semibold text-[#111827] shadow-[0_1px_3px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(68,96,239,0.18)] hover:shadow-[0_8px_20px_rgba(17,24,39,0.08)]"
              >
                <Mail
                  size={18}
                  strokeWidth={2}
                  className="text-[#4460ef] transition-transform duration-300 group-hover:translate-x-[2px]"
                />
                البريد الإلكتروني
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">روابط سريعة</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/55 transition-all duration-300 hover:text-[#4460ef] hover:translate-x-[-2px] inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">تواصل</h3>
            <ul className="space-y-2.5 text-sm text-foreground/55">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-all duration-300 hover:text-[#4460ef] hover:translate-x-[-2px] inline-block"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-[#4460ef] hover:translate-x-[-2px] inline-block"
                >
                  واتساب مباشر
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Divider & Copyright */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[rgba(17,24,39,0.08)] pt-6 sm:flex-row">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} {siteConfig.nameEn} - {siteConfig.name}. جميع الحقوق
            محفوظة.
          </p>
          <p className="text-xs text-foreground/40">
            حلول رقمية ذكية تساعد الشركات على النمو بكفاءة
          </p>
        </div>
      </div>
    </footer>
  );
}
