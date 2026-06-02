import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
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
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr_1fr] lg:gap-12">
          {/* Brand Column — Visual Anchor */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/brand/logo.svg"
                alt={siteConfig.nameEn}
                width={184}
                height={54}
                className="h-[52px] w-auto"
              />
            </Link>

            {/* Brand accent line — subtle premium mark */}
            <div className="mt-4 h-[2px] w-11 rounded-full bg-[#4460ef] opacity-75" />

            <p className="mt-4 max-w-[360px] text-[13px] leading-[1.85] text-foreground/55">
              نبني مواقع إلكترونية وتطبيقات وحلولًا رقمية تساعد الشركات على النمو وتحقيق نتائج قابلة للقياس.
            </p>
            <p className="mt-4 text-[10.5px] font-medium tracking-wider text-foreground/28">
              المواقع • التطبيقات • الأتمتة الذكية
            </p>

            {/* Contact actions — refined proportions */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[38px] items-center justify-center gap-2 rounded-xl border border-[rgba(68,96,239,0.06)] bg-white px-3.5 text-[12px] font-semibold text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(68,96,239,0.14)] hover:shadow-[0_6px_16px_rgba(17,24,39,0.05)]"
              >
                <RiWhatsappLine
                  size={18}
                  className="text-[#4460ef] transition-transform duration-300 group-hover:translate-x-[1px]"
                />
                واتساب مباشر
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex h-[38px] items-center justify-center gap-2 rounded-xl border border-[rgba(68,96,239,0.06)] bg-white px-3.5 text-[12px] font-semibold text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(68,96,239,0.14)] hover:shadow-[0_6px_16px_rgba(17,24,39,0.05)]"
              >
                <Mail
                  size={17}
                  strokeWidth={2}
                  className="text-[#4460ef] transition-transform duration-300 group-hover:translate-x-[1px]"
                />
                البريد الإلكتروني
              </a>
            </div>
          </div>

          {/* Quick Links — refined vertical rhythm */}
          <div>
            <h3 className="mb-4 text-[13px] font-bold text-foreground/80">
              روابط سريعة
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-[13px] text-foreground/50 transition-colors duration-300 ease-out hover:text-[#4460ef]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column — premium contact cards */}
          <div>
            <h3 className="mb-4 text-[13px] font-bold text-foreground/80">
              تواصل
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-[10px] border border-[rgba(17,24,39,0.05)] bg-white/60 px-3 py-2 text-[12.5px] text-foreground/55 transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(68,96,239,0.12)] hover:text-[#4460ef]"
                >
                  <Mail
                    size={14}
                    strokeWidth={2}
                    className="shrink-0 text-foreground/40 transition-colors duration-300 group-hover:text-[#4460ef]"
                  />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-[10px] border border-[rgba(17,24,39,0.05)] bg-white/60 px-3 py-2 text-[12.5px] text-foreground/55 transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(68,96,239,0.12)] hover:text-[#4460ef]"
                >
                  <MessageCircle
                    size={14}
                    strokeWidth={2}
                    className="shrink-0 text-foreground/40 transition-colors duration-300 group-hover:text-[#4460ef]"
                  />
                  <span>واتساب مباشر</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Divider & Copyright — polished finish */}
        <div className="mt-12 border-t border-[rgba(17,24,39,0.06)] pt-7 text-center">
          <p className="text-[12.5px] font-medium text-foreground/42">
            حلول رقمية ذكية تساعد الشركات على النمو بكفاءة
          </p>
          <p className="mt-2.5 text-[11px] tracking-wide text-foreground/25">
            © {new Date().getFullYear()} {siteConfig.nameEn} — جميع الحقوق
            محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
