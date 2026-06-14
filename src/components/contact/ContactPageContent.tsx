"use client";

import React, { useState, useEffect } from "react";
import { Mail, Check, Lock } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const serviceOptions = [
  { id: "web", label: "🌐 موقع إلكتروني" },
  { id: "mobile", label: "📱 تطبيق موبايل" },
  { id: "ai", label: "🤖 أتمتة وذكاء اصطناعي" },
  { id: "other", label: "⚡ أخرى" },
];

const budgetOptions = [
  { id: "under-5k", label: "أقل من 5k" },
  { id: "5k-15k", label: "5k – 15k" },
  { id: "15k-50k", label: "15k – 50k" },
  { id: "above-50k", label: "+50k" },
];

export function ContactPageContent() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedService, setSelectedService] = useState("web");
  const [selectedBudget, setSelectedBudget] = useState("5k-15k");
  const [message, setMessage] = useState("");

  const [animatedSteps, setAnimatedSteps] = useState([false, false, false, false]);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    const steps = [0, 1, 2, 3];
    steps.forEach((i) => {
      setTimeout(() => {
        setAnimatedSteps((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        if (i === 0) {
          setTimeout(() => {
            setPulseActive(true);
          }, 400);
        }
      }, i * 160 + 200);
    });
  }, []);

  const [errors, setErrors] = useState({
    name: false,
    contact: false,
    service: false,
    message: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "مرحباً فريق ذكي تك، أود مناقشة مشروع جديد."
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = name.trim() === "";
    const contactError = contact.trim() === "";
    const serviceError = !selectedService;
    const messageError = message.trim() === "";

    setErrors({
      name: nameError,
      contact: contactError,
      service: serviceError,
      message: messageError,
    });

    if (nameError || contactError || serviceError || messageError) {
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#F7F7F2] min-h-screen text-[#1A1A2A] pt-[128px] pb-12 px-5 md:px-8 font-cairo">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* ─── SECTION 1 — HERO ─── */}
        <div className="text-center flex flex-col items-center gap-4 mx-auto max-w-[600px]">
          <span className="inline-flex items-center rounded-full border border-brand-primary/20 md:border-brand-primary/30 bg-brand-primary/[0.06] md:bg-brand-primary/10 px-5 md:px-4 py-1.5 text-xs font-medium md:font-semibold text-brand-primary dark:text-brand-light">
            ابدأ مشروعك
          </span>
          <h1 className="text-2xl md:text-[32px] font-extrabold text-[#1A1A2A] leading-tight font-cairo">
            لنتحدث عن مشروعك
          </h1>
          <p className="text-sm md:text-[15px] font-normal text-[#6B6B80] leading-relaxed font-cairo text-center">
            أخبرنا بفكرتك وسنرد عليك خلال 24 ساعة باقتراح مبدئي مجاني.
          </p>
        </div>

        {/* ─── SECTION 2 — STEP INDICATOR ─── */}
        <div className="relative w-full py-4 select-none">
          <style>{`
            @keyframes pa {
              0% {
                opacity: 0.5;
                transform: scale(1);
              }
              100% {
                opacity: 0;
                transform: scale(2);
              }
            }
            .pulse-ring-anim {
              animation: pa 2.2s ease-out infinite;
            }
            .pulse-ring-anim-delayed {
              animation: pa 2.2s ease-out infinite 0.7s;
            }
          `}</style>

          {/* Connector line */}
          <div className="absolute top-[36px] right-[12.5%] left-[12.5%] h-[2px] bg-[rgba(68,96,239,0.1)] rounded-[2px]" />
          
          <div className="relative flex justify-between items-start z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2.5 w-1/4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm select-none relative transition-all duration-[550ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  animatedSteps[0] ? "scale-100 opacity-100" : "scale-[0.6] opacity-0"
                }`}
                style={{ background: "linear-gradient(135deg, #FC3196 0%, #4460EF 100%)" }}
              >
                <span>1</span>
                {/* Pulse rings */}
                <div className={`absolute inset-0 rounded-full border-2 border-[#FC3196] opacity-0 pointer-events-none ${pulseActive ? "pulse-ring-anim" : ""}`} />
                <div className={`absolute inset-0 rounded-full border-2 border-[#4460EF] opacity-0 pointer-events-none ${pulseActive ? "pulse-ring-anim-delayed" : ""}`} />
              </div>
              <span className={`text-center text-[11px] font-bold text-[#3F37CA] leading-normal transition-all duration-400 delay-100 ${
                animatedSteps[0] ? "translate-y-0 opacity-100" : "translate-y-[5px] opacity-0"
              }`}>
                أرسل تفاصيل<br />مشروعك
              </span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-2.5 w-1/4">
              <div className={`w-10 h-10 rounded-full bg-white border-[1.5px] border-[#4460EF] text-[#4460EF] flex items-center justify-center font-bold text-sm select-none transition-all duration-[550ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                animatedSteps[1] ? "scale-100 opacity-100" : "scale-[0.6] opacity-0"
              }`}>
                <span>2</span>
              </div>
              <span className={`text-center text-[11px] text-[#6B6B80] leading-normal transition-all duration-400 delay-100 ${
                animatedSteps[1] ? "translate-y-0 opacity-100" : "translate-y-[5px] opacity-0"
              }`}>
                نراجع ونتواصل<br />خلال 24 ساعة
              </span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-2.5 w-1/4">
              <div className={`w-10 h-10 rounded-full bg-white border-[1.5px] border-[#4460EF] text-[#4460EF] flex items-center justify-center font-bold text-sm select-none transition-all duration-[550ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                animatedSteps[2] ? "scale-100 opacity-100" : "scale-[0.6] opacity-0"
              }`}>
                <span>3</span>
              </div>
              <span className={`text-center text-[11px] text-[#6B6B80] leading-normal transition-all duration-400 delay-100 ${
                animatedSteps[2] ? "translate-y-0 opacity-100" : "translate-y-[5px] opacity-0"
              }`}>
                استشارة مجانية<br />ومقترح أولي
              </span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-2.5 w-1/4">
              <div className={`w-10 h-10 rounded-full bg-white border-[1.5px] border-[#4460EF] text-[#4460EF] flex items-center justify-center font-bold text-sm select-none transition-all duration-[550ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                animatedSteps[3] ? "scale-100 opacity-100" : "scale-[0.6] opacity-0"
              }`}>
                <span>4</span>
              </div>
              <span className={`text-center text-[11px] text-[#6B6B80] leading-normal transition-all duration-400 delay-100 ${
                animatedSteps[3] ? "translate-y-0 opacity-100" : "translate-y-[5px] opacity-0"
              }`}>
                نبدأ بناء<br />مشروعك
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-5 mt-6 flex-wrap">
            <div className="flex items-center gap-1.5 text-[11px] text-[#6B6B80] font-normal font-cairo">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "linear-gradient(135deg, #FC3196, #4460EF)" }} />
              <span>الخطوة الحالية</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#6B6B80] font-normal font-cairo">
              <div className="w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-[#4460EF]" />
              <span>خطوات قادمة</span>
            </div>
          </div>
        </div>

        {/* ─── SECTION 3 — TWO COLUMN GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6">
          
          {/* LEFT: FORM CARD */}
          <div className="bg-white border border-[rgba(68,96,239,0.12)] rounded-[20px] p-5 sm:p-8 flex flex-col gap-6">
            <h2 className="text-lg font-extrabold text-[#1A1A2A] font-cairo">
              أخبرنا عن مشروعك
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Field 1: Name */}
              <div className="flex flex-col gap-1.5 text-right">
                <label className="text-xs font-bold text-[#6B6B80] font-cairo">
                  الاسم الكريم <span className="text-[#FC3196]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
                  }}
                  placeholder="أدخل اسمك الكامل"
                  className={`w-full bg-[#F7F7F2] border ${
                    errors.name ? "border-[#FC3196]" : "border-[rgba(68,96,239,0.15)]"
                  } rounded-[10px] px-3.5 py-3 text-sm text-[#1A1A2A] placeholder:text-[#6B6B80]/50 font-cairo transition-colors duration-200 focus:border-[#4460EF] focus:outline-none`}
                />
              </div>

              {/* Field 2: Contact Info */}
              <div className="flex flex-col gap-1.5 text-right">
                <label className="text-xs font-bold text-[#6B6B80] font-cairo">
                  البريد الإلكتروني أو واتساب <span className="text-[#FC3196]">*</span>
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                    if (errors.contact) setErrors((prev) => ({ ...prev, contact: false }));
                  }}
                  placeholder="example@email.com أو رقم واتساب"
                  className={`w-full bg-[#F7F7F2] border ${
                    errors.contact ? "border-[#FC3196]" : "border-[rgba(68,96,239,0.15)]"
                  } rounded-[10px] px-3.5 py-3 text-sm text-[#1A1A2A] placeholder:text-[#6B6B80]/50 font-cairo transition-colors duration-200 focus:border-[#4460EF] focus:outline-none`}
                />
              </div>

              {/* Field 3: Service Chips */}
              <div className="flex flex-col gap-1.5 text-right">
                <label className="text-xs font-bold text-[#6B6B80] font-cairo">
                  نوع الخدمة المطلوبة <span className="text-[#FC3196]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  {serviceOptions.map((opt) => {
                    const isActive = selectedService === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedService(opt.id)}
                        className={`text-right rounded-[10px] px-3.5 py-2.5 text-xs font-bold font-cairo transition-all duration-200 ${
                          isActive
                            ? "bg-[rgba(68,96,239,0.08)] border-[1.5px] border-[#4460EF] text-[#3F37CA]"
                            : "bg-[#F7F7F2] border border-[rgba(68,96,239,0.15)] text-[#6B6B80]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 4: Budget Pills */}
              <div className="flex flex-col gap-1.5 text-right">
                <label className="text-xs font-bold text-[#6B6B80] font-cairo">
                  الميزانية التقريبية
                </label>
                <div className="flex flex-wrap gap-2.5 mt-1 justify-start">
                  {budgetOptions.map((opt) => {
                    const isActive = selectedBudget === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedBudget(opt.id)}
                        className={`rounded-[20px] px-4 py-2.5 text-xs font-bold font-cairo transition-all duration-200 ${
                          isActive
                            ? "bg-[rgba(68,96,239,0.08)] border-[1.5px] border-[#4460EF] text-[#3F37CA]"
                            : "bg-[#F7F7F2] border border-[rgba(68,96,239,0.15)] text-[#6B6B80]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 5: Textarea */}
              <div className="flex flex-col gap-1.5 text-right">
                <label className="text-xs font-bold text-[#6B6B80] font-cairo">
                  تفاصيل المشروع <span className="text-[#FC3196]">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: false }));
                  }}
                  placeholder="صف فكرتك باختصار — ما المشكلة التي تريد حلها؟"
                  className={`w-full bg-[#F7F7F2] border ${
                    errors.message ? "border-[#FC3196]" : "border-[rgba(68,96,239,0.15)]"
                  } rounded-[10px] px-3.5 py-3 text-sm text-[#1A1A2A] placeholder:text-[#6B6B80]/50 min-h-[110px] resize-y font-cairo transition-colors duration-200 focus:border-[#4460EF] focus:outline-none`}
                />
              </div>

              {/* Submit Area */}
              <div className="mt-4">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-2 text-center text-[#3F37CA] font-bold text-sm font-cairo">
                    <span>✅ تم الإرسال! سنتواصل معك خلال 24 ساعة.</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white font-bold text-[15px] font-cairo py-3.5 rounded-[12px] transition-opacity duration-200 hover:opacity-90 active:scale-[0.99]"
                    style={{ background: "linear-gradient(135deg, #FC3196 0%, #4460EF 100%)" }}
                  >
                    إرسال وانتظر ردنا ←
                  </button>
                )}
              </div>

              {/* Privacy Note */}
              <div className="flex items-center justify-center gap-1 mt-2 text-[#6B6B80] text-[11px] font-normal font-cairo">
                <span>🔒</span>
                <span>بياناتك محمية ولن تُشارك مع أي طرف ثالث</span>
              </div>
            </form>
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="flex flex-col gap-4">
            
            {/* Card 1: WhatsApp */}
            <div className="bg-white border border-[rgba(68,96,239,0.12)] rounded-[16px] p-5 flex flex-col gap-4 text-right">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-[10px] bg-[rgba(75,201,241,0.12)] text-[#4BC9F1] flex items-center justify-center shrink-0">
                  <WhatsAppIcon />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-bold text-[#1A1A2A] font-cairo">واتساب</h3>
                  <p className="text-[12px] font-normal text-[#6B6B80] font-cairo">رد فوري — متاح الآن</p>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-[rgba(75,201,241,0.1)] border border-[rgba(75,201,241,0.4)] text-[#0F7A96] rounded-[10px] font-bold text-xs sm:text-[13px] font-cairo transition-opacity duration-200 hover:opacity-90"
              >
                تواصل الآن عبر واتساب
              </a>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white border border-[rgba(68,96,239,0.12)] rounded-[16px] p-5 flex flex-col gap-4 text-right">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-[10px] bg-[rgba(252,49,150,0.1)] text-[#FC3196] flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-bold text-[#1A1A2A] font-cairo">البريد الإلكتروني</h3>
                  <p className="text-[12px] font-normal text-[#6B6B80] font-cairo">hello@thekeytech.com</p>
                </div>
              </div>
              <a
                href="mailto:hello@thekeytech.com"
                className="w-full text-center py-2.5 bg-[rgba(252,49,150,0.08)] border border-[rgba(252,49,150,0.3)] text-[#C4186E] rounded-[10px] font-bold text-xs sm:text-[13px] font-cairo transition-opacity duration-200 hover:opacity-90"
              >
                أرسل بريداً إلكترونياً
              </a>
            </div>

            {/* Card 3: Trust */}
            <div className="bg-white border border-[rgba(68,96,239,0.12)] rounded-[16px] p-5 flex flex-col gap-4 text-right">
              <h3 className="text-[13px] font-bold text-[#1A1A2A] font-cairo">
                لماذا يختارنا عملاؤنا؟
              </h3>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#4BC9F1] shrink-0 mt-0.5" />
                  <span className="text-[12px] font-normal text-[#6B6B80] font-cairo">
                    رد مضمون خلال 24 ساعة عمل
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#4BC9F1] shrink-0 mt-0.5" />
                  <span className="text-[12px] font-normal text-[#6B6B80] font-cairo">
                    استشارة أولية مجانية بالكامل
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#4BC9F1] shrink-0 mt-0.5" />
                  <span className="text-[12px] font-normal text-[#6B6B80] font-cairo">
                    بياناتك محمية وسرية تماماً
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#4BC9F1] shrink-0 mt-0.5" />
                  <span className="text-[12px] font-normal text-[#6B6B80] font-cairo">
                    نخدم عملاء في كل المنطقة العربية
                  </span>
                </div>
              </div>

              {/* MINI STATS GRID */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="bg-[#F7F7F2] rounded-[10px] p-3 text-center">
                  <div className="text-xl font-extrabold text-[#4460EF] font-cairo leading-none mb-1">
                    +150
                  </div>
                  <div className="text-[11px] font-normal text-[#6B6B80] font-cairo leading-none">
                    مشروع منجز
                  </div>
                </div>
                <div className="bg-[#F7F7F2] rounded-[10px] p-3 text-center">
                  <div className="text-xl font-extrabold text-[#4460EF] font-cairo leading-none mb-1">
                    98%
                  </div>
                  <div className="text-[11px] font-normal text-[#6B6B80] font-cairo leading-none">
                    رضا العملاء
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
