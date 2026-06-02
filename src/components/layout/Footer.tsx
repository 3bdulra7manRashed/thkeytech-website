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
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr]">
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

            {/* Brand accent line */}
            <div className="mt-4 h-[2px] w-14 rounded-full bg-[#4460ef]" />

            <p className="mt-4 max-w-[360px] text-[13px] leading-[1.85] text-foreground/55">
              نبني مواقع إلكترونية وتطبيقات وحلولًا رقمية تساعد الشركات على النمو وتحقيق نتائج قابلة للقياس.
            </p>
            <p className="mt-2.5 text-[11px] font-medium tracking-wider text-foreground/35">
              المواقع • التطبيقات • الأتمتة الذكية
            </p>

            {/* CTA Buttons — refined proportions */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[42px] items-center justify-center gap-[7px] rounded-xl border border-[rgba(68,96,239,0.06)] bg-white px-4 text-[12.5px] font-semibold text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(68,96,239,0.14)] hover:shadow-[0_6px_16px_rgba(17,24,39,0.05)]"
              >
                <RiWhatsappLine
                  size={17}
                  className="text-[#4460ef] transition-transform duration-300 group-hover:translate-x-[1px]"
                />
                واتساب مباشر
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex h-[42px] items-center justify-center gap-[7px] rounded-xl border border-[rgba(68,96,239,0.06)] bg-white px-4 text-[12.5px] font-semibold text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.03)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(68,96,239,0.14)] hover:shadow-[0_6px_16px_rgba(17,24,39,0.05)]"
              >
                <Mail
                  size={16}
                  strokeWidth={2}
                  className="text-[#4460ef] transition-transform duration-300 group-hover:translate-x-[1px]"
                />
                البريد الإلكتروني
              </a>
            </div>
          </div>

          {/* Quick Links — reduced visual weight */}
          <div>
            <h3 className="mb-3.5 text-[13px] font-bold text-foreground/80">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-[13px] text-foreground/50 transition-all duration-[250ms] ease-out hover:text-[#4460ef] hover:-translate-x-[3px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column — premium contact cards */}
          <div>
            <h3 className="mb-3.5 text-[13px] font-bold text-foreground/80">
              تواصل
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-[10px] border border-[rgba(17,24,39,0.05)] bg-white/60 px-3 py-2 text-[12.5px] text-foreground/55 transition-all duration-[250ms] hover:-translate-y-[1px] hover:border-[rgba(68,96,239,0.12)] hover:text-[#4460ef]"
                >
                  <Mail
                    size={14}
                    strokeWidth={2}
                    className="shrink-0 text-foreground/40 transition-colors duration-[250ms] group-hover:text-[#4460ef]"
                  />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-[10px] border border-[rgba(17,24,39,0.05)] bg-white/60 px-3 py-2 text-[12.5px] text-foreground/55 transition-all duration-[250ms] hover:-translate-y-[1px] hover:border-[rgba(68,96,239,0.12)] hover:text-[#4460ef]"
                >
                  <MessageCircle
                    size={14}
                    strokeWidth={2}
                    className="shrink-0 text-foreground/40 transition-colors duration-[250ms] group-hover:text-[#4460ef]"
                  />
                  <span>واتساب مباشر</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Divider & Copyright */}
        <div className="mt-10 border-t border-[rgba(17,24,39,0.08)] pt-6 text-center">
          <p className="text-[13px] font-medium text-foreground/50">
            حلول رقمية ذكية تساعد الشركات على النمو بكفاءة
          </p>
          <p className="mt-2.5 text-[11px] text-foreground/30 tracking-wide">
            © {new Date().getFullYear()} {siteConfig.nameEn} — جميع الحقوق
            محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
