"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowRight, Check, Zap, Shield, Clock, Play, Smartphone, Search, Sparkles } from "lucide-react";
import { HeroShowcase } from "@/components/zs/HeroShowcase";
import { ImmersiveShowcase } from "@/components/zs/ImmersiveShowcase";
import { WorkProofCard } from "@/components/zs/WorkProofCard";
import { EditorialMarquee } from "@/components/zs/EditorialMarquee";
import { ScrollCraftScene } from "@/components/zs/ScrollCraftScene";
import { TypographyBreak } from "@/components/zs/TypographyBreak";
import { ZsStudioChrome } from "@/components/zs/ZsStudioChrome";
import { Reveal } from "@/components/zs/motion";
import { Stagger, StaggerItem } from "@/components/zs/Stagger";
import { FaqItem } from "@/components/zs/FaqItem";
import { MagneticLink } from "@/components/zs/MagneticLink";
import { SectionTransition } from "@/components/zs/SectionTransition";
import { IndustryPill } from "@/components/zs/IndustryPill";
import { LanguageToggle } from "@/components/zs/LanguageToggle";
import { StickyMiniCta } from "@/components/zs/StickyMiniCta";
import { AvailabilityBadge } from "@/components/zs/AvailabilityBadge";
import { PackageComparison } from "@/components/zs/PackageComparison";
import { CaseStudy } from "@/components/zs/CaseStudy";
import { ProcessProof } from "@/components/zs/ProcessProof";
import { ZsFooter } from "@/components/zs/ZsFooter";
import {
  ZsFormField,
  ZsFormSelect,
  ZsFormTextarea,
  ZsSubmitButton,
  ZsSuccessMessage,
  ZsAuditField,
  ZsAuditSelect,
} from "@/components/zs/FormFields";
import { getCopy, type Lang } from "@/lib/zs/i18n";
import { trackZsEvent, getAnalyticsSessionId } from "@/lib/zs/analytics";

const trustBrands = [
  { name: "VORA Istanbul", url: "https://vora-istanbul.vercel.app" },
  { name: "Maison Céleste", url: "https://maison-celeste-xi.vercel.app" },
  { name: "Aurelle Skin Atelier", url: "https://aurelle-nine.vercel.app" },
];

const IMG = {
  voraHomepage: "/zs/vora-homepage.png",
  vora: "https://vora-istanbul.vercel.app/images/facade-detail.png",
};

const HERO_PROJECT = {
  name: "VORA Istanbul",
  paket: "Luxury Launch Experience",
  url: "vora-istanbul.vercel.app",
  href: "https://vora-istanbul.vercel.app",
  img: IMG.voraHomepage,
};

const workProofs = [
  {
    project: "VORA Istanbul",
    paket: "Luxury Launch Experience",
    highlight: "Çoklu dil, scroll animasyonu ve editoryal lansman mimarisi.",
    metric: "12 sayfa",
    url: "https://vora-istanbul.vercel.app",
  },
  {
    project: "Maison Céleste",
    paket: "Editorial Brand Site",
    highlight: "Bridal couture estetiği — koleksiyon ve hikâye odaklı sayfa akışı.",
    metric: "6+ sayfa",
    url: "https://maison-celeste-xi.vercel.app",
  },
  {
    project: "Aurelle Skin Atelier",
    paket: "Starter Presence",
    highlight: "Sade, güven veren dijital varlık — mobil öncelikli minimal tasarım.",
    metric: "< 2sn",
    url: "https://aurelle-nine.vercel.app",
  },
];

const integrations = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/ffffff" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
  { name: "Sanity", icon: "https://cdn.simpleicons.org/sanity/ffffff" },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [lang, setLang] = useState<Lang>("tr");
  const t = useMemo(() => getCopy(lang), [lang]);

  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 80], [0.85, 0.97]);
  const headerBorder = useTransform(scrollY, [0, 80], [0.06, 0.14]);
  const headerBackground = useMotionTemplate`rgba(5, 5, 5, ${headerBg})`;
  const headerBorderColor = useMotionTemplate`rgba(255, 255, 255, ${headerBorder})`;

  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  const [auditSent, setAuditSent] = useState(false);
  const [form, setForm] = useState({ brand: "", name: "", email: "", paket: "", mesaj: "" });
  const [auditForm, setAuditForm] = useState({ email: "", bottleneck: "" });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const analyticsMeta = () => ({
    session_id: getAnalyticsSessionId(),
    page_lang: lang,
  });

  const handleAuditSubmit = async () => {
    if (!auditForm.email || !auditForm.bottleneck) return;
    trackZsEvent({ name: "form_submit", form: "audit" });
    try {
      const res = await fetch("https://formspree.io/f/mqeoypwz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          tip: "Ücretsiz Dijital Denetim",
          email: auditForm.email,
          engel: auditForm.bottleneck,
          _analytics: analyticsMeta(),
        }),
      });
      if (res.ok) setAuditSent(true);
    } catch {
      setAuditSent(true);
    }
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    trackZsEvent({ name: "form_submit", form: "contact", package: form.paket || undefined });
    try {
      const res = await fetch("https://formspree.io/f/mqeoypwz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          marka: form.brand,
          isim: form.name,
          email: form.email,
          paket: form.paket,
          mesaj: form.mesaj,
          _analytics: analyticsMeta(),
        }),
      });
      if (res.ok) setSent(true);
    } catch {
      setSent(true);
    }
  };

  const microFeatures = [
    { icon: Smartphone, title: t.micro.mobile, desc: t.micro.mobileSub },
    { icon: Search, title: t.micro.seo, desc: t.micro.seoSub },
    { icon: Sparkles, title: t.micro.custom, desc: t.micro.customSub },
  ];

  const stats = [
    { icon: Shield, val: t.stats.design, label: t.stats.designSub },
    { icon: Zap, val: t.stats.motion, label: t.stats.motionSub },
    { icon: Clock, val: t.stats.perf, label: t.stats.perfSub },
  ];

  return (
    <>
      <ZsStudioChrome />
      <StickyMiniCta text={t.sticky.text} cta={t.sticky.cta} />

      <main className="bg-[#050505] text-white font-sans overflow-x-hidden">
        {/* ── NAV ── */}
        <motion.header
          style={
            reduceMotion
              ? undefined
              : { backgroundColor: headerBackground, borderBottomColor: headerBorderColor }
          }
          className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-white/[0.06]"
        >
          <div className="max-w-6xl mx-auto px-5 md:px-10 h-14 flex items-center justify-between gap-4">
            <a href="#" className="font-serif text-lg font-bold tracking-tight text-[#F8F5F0] no-underline shrink-0">
              Zesira<span className="text-white/50">.</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {t.nav.links.map(([label, href]) => (
                <a key={href} href={href} className="zs-nav-link">
                  {label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3 shrink-0">
              <LanguageToggle lang={lang} onChange={setLang} />
              <MagneticLink
                href="#denetim"
                className="zs-btn-primary zs-btn-glow text-sm px-5 py-2"
                onClick={() => trackZsEvent({ name: "cta_click", target: "nav_audit", href: "#denetim" })}
              >
                {t.nav.audit}
              </MagneticLink>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle lang={lang} onChange={setLang} />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
                aria-label={t.nav.menu}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block w-5 h-px bg-[#F8F5F0] transition-all duration-300"
                    style={{
                      transform: menuOpen
                        ? i === 0 ? "rotate(45deg) translateY(5px)" : i === 2 ? "rotate(-45deg) translateY(-5px)" : "none"
                        : "none",
                      opacity: menuOpen && i === 1 ? 0 : 1,
                    }}
                  />
                ))}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-[#0A0A0B] border-t border-white/[0.06] px-5 py-6 flex flex-col gap-5">
              {t.nav.links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/60 no-underline">
                  {label}
                </a>
              ))}
              <a href="#denetim" onClick={() => setMenuOpen(false)} className="zs-btn-primary w-fit text-sm px-5 py-2.5">
                {t.nav.audit}
              </a>
            </div>
          )}
        </motion.header>

        <HeroShowcase project={HERO_PROJECT} copy={t.hero} availability={t.availability} />
        <EditorialMarquee />

        {/* Trust band */}
        <div className="relative bg-[#050505] border-t border-white/[0.06]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="py-8 overflow-hidden"
          >
            <p className="text-center text-sm text-white/30 mb-6">{t.trust.label}</p>
            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <motion.div
                className="flex shrink-0 gap-12 md:gap-20 px-6"
                animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                {[...trustBrands, ...trustBrands].map((brand, i) => (
                  <a
                    key={`${brand.name}-${i}`}
                    href={brand.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base md:text-lg font-medium text-white/25 hover:text-[#C4A882] transition-colors no-underline whitespace-nowrap"
                  >
                    {brand.name}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-5 md:px-10 pb-10 grid sm:grid-cols-3 gap-3">
            {microFeatures.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="zs-card zs-card-hover p-4"
              >
                <Icon size={16} className="text-[#C4A882] mb-2" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                <p className="text-xs text-white/40">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
              {stats.map(({ icon: Icon, val, label }, i) => (
                <motion.div
                  key={label}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center gap-4 py-6 sm:px-8 first:sm:pl-0"
                >
                  <Icon size={18} className="text-[#C4A882] shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="font-serif text-xl font-bold tracking-tight text-white">{val}</div>
                    <div className="text-sm text-white/40 mt-0.5">{label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] py-10">
            <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {integrations.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 opacity-50 hover:opacity-90 transition-opacity">
                  <img src={tool.icon} alt={tool.name} className="h-5 w-auto" />
                  <span className="text-xs text-white/40 font-medium hidden sm:inline">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionTransition as="div">
          <ScrollCraftScene />
        </SectionTransition>
        <SectionTransition as="div">
          <ImmersiveShowcase />
        </SectionTransition>

        <SectionTransition className="border-t border-white/[0.06] bg-[#0A0A0B] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-14">
              <Reveal variant="left">
                <p className="zs-eyebrow-accent mb-4">{t.why.eyebrow}</p>
                <h2 className="zs-editorial-display text-[clamp(1.75rem,4vw,2.75rem)] mb-5">{t.why.title}</h2>
                <p className="text-base text-white/55 leading-relaxed max-w-md">{t.why.sub}</p>
              </Reveal>
              <Reveal variant="right" delay={0.1}>
                <div className="grid grid-cols-2 gap-3">
                  {t.why.cards.map((item) => (
                    <div key={item.title} className="zs-card zs-card-hover p-5">
                      <div className="text-xs font-semibold text-[#C4A882] mb-2">{item.title}</div>
                      <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {t.why.bottom.map(({ title, desc }, i) => {
                const icons = [Zap, Search, Shield];
                const Icon = icons[i];
                return (
                  <Reveal key={title} delay={i * 0.06} variant="scale">
                    <div className="zs-card zs-card-hover p-6 h-full">
                      <Icon size={18} className="text-[#C4A882] mb-4" strokeWidth={1.5} />
                      <h3 className="font-serif text-base font-bold text-white mb-2">{title}</h3>
                      <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </SectionTransition>

        <SectionTransition id="hizmetler" className="py-16 md:py-24 bg-[#0A0A0B] border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <Reveal className="text-center mb-8">
              <p className="zs-eyebrow-accent mb-3">{t.services.eyebrow}</p>
              <h2 className="zs-title text-[clamp(28px,3.5vw,44px)] mb-4">{t.services.title}</h2>
              <p className="text-sm zs-muted max-w-lg mx-auto leading-relaxed mb-6">{t.services.sub}</p>
              <div className="flex justify-center">
                <AvailabilityBadge label={t.availability.label} slots={t.availability.slots} />
              </div>
            </Reveal>

            <Stagger className="grid md:grid-cols-3 gap-4">
              {t.services.offerings.map((o, idx) => (
                <StaggerItem key={o.title}>
                  <div
                    className={`flex flex-col p-7 rounded-2xl h-full border transition-all duration-300 ${
                      idx === 1 ? "bg-[#6B1E24]/25 border-[#6B1E24]/50 zs-card-hover" : "zs-card zs-card-hover"
                    }`}
                  >
                    {idx === 1 ? (
                      <span className="text-xs font-semibold bg-[#C4A882] text-[#0A0A0B] px-2.5 py-1 rounded w-fit mb-4">{o.tag}</span>
                    ) : (
                      <span className="text-xs font-medium text-white/40 mb-4">{o.tag}</span>
                    )}
                    <h3 className="font-serif text-xl font-bold tracking-tight text-white mb-3">{o.title}</h3>
                    <p className="text-sm leading-relaxed mb-6 flex-1 text-white/55">{o.desc}</p>
                    <ul className="flex flex-col gap-2.5 mb-7">
                      {o.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start text-sm">
                          <Check size={14} className="shrink-0 mt-0.5 text-[#C4A882]" />
                          <span className="text-white/70">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#iletisim"
                      onClick={() => trackZsEvent({ name: "cta_click", target: `package_${o.title}`, href: "#iletisim" })}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4A882] hover:text-white no-underline w-fit transition-colors"
                    >
                      {o.cta} <ArrowRight size={12} />
                    </a>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <PackageComparison copy={t.compare} />
          </div>
        </SectionTransition>

        <SectionTransition className="py-14 md:py-20 border-t border-white/[0.06] bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-5 md:px-10 text-center">
            <p className="zs-eyebrow-light mb-3">{t.builtFor.eyebrow}</p>
            <h2 className="zs-title text-[clamp(24px,3vw,36px)] mb-10">{t.builtFor.title}</h2>
            <div className="flex flex-wrap justify-center gap-2.5">
              {t.builtFor.industries.map((ind) => (
                <IndustryPill key={ind} label={ind} />
              ))}
            </div>
          </div>
        </SectionTransition>

        <SectionTransition id="projeler" className="relative py-16 md:py-24 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <Reveal className="text-center mb-12">
              <p className="zs-eyebrow-accent mb-3">{t.proof.eyebrow}</p>
              <h2 className="zs-title text-[clamp(28px,3vw,40px)] mb-4">{t.proof.title}</h2>
              <p className="text-sm zs-muted max-w-lg mx-auto">{t.proof.sub}</p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4">
              {workProofs.map((w, i) => (
                <Reveal key={w.project} delay={i * 0.08} variant="scale">
                  <WorkProofCard {...w} />
                </Reveal>
              ))}
            </div>
          </div>
        </SectionTransition>

        <SectionTransition as="div">
          <CaseStudy copy={t.caseStudy} image={IMG.voraHomepage} />
        </SectionTransition>

        <SectionTransition id="surec" className="py-16 md:py-24 border-t border-white/[0.06] bg-[#0A0A0B]">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <div className="text-center mb-14">
              <p className="zs-eyebrow-accent mb-3">{t.process.eyebrow}</p>
              <h2 className="zs-title text-[clamp(28px,3vw,40px)] mb-4">{t.process.title}</h2>
              <p className="text-sm zs-muted max-w-md mx-auto">{t.process.sub}</p>
            </div>

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="zs-process-line" aria-hidden />
              {t.process.steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.07} variant={i % 2 === 0 ? "left" : "right"}>
                  <div className="zs-card zs-card-hover p-6 h-full relative z-10">
                    <div className="text-sm font-bold text-[#C4A882] mb-3">{s.n}</div>
                    <h3 className="font-serif text-base font-bold tracking-tight text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 text-center">
              <MagneticLink
                href="#denetim"
                className="zs-btn-primary zs-btn-glow"
                onClick={() => trackZsEvent({ name: "cta_click", target: "process_audit", href: "#denetim" })}
              >
                {t.process.cta} <ArrowRight size={14} />
              </MagneticLink>
            </div>

            <ProcessProof copy={t.process.proof} />
          </div>
        </SectionTransition>

        <SectionTransition id="sss" className="py-16 md:py-24 border-t border-white/[0.06] bg-white/[0.02]">
          <div className="max-w-3xl mx-auto px-5 md:px-10">
            <div className="text-center mb-12">
              <p className="zs-eyebrow-accent mb-3">{t.faq.eyebrow}</p>
              <h2 className="zs-title text-[clamp(28px,3vw,40px)]">{t.faq.title}</h2>
            </div>
            <div className="flex flex-col zs-card overflow-hidden">
              {t.faq.items.map((faq, i) => (
                <FaqItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </SectionTransition>

        <SectionTransition as="div">
          <TypographyBreak />
        </SectionTransition>

        <SectionTransition id="denetim" className="relative py-20 md:py-28 border-t border-white/[0.06] bg-[#6B1E24] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(196,168,130,0.15)_0%,transparent_50%)]" />
          <div className="relative max-w-6xl mx-auto px-5 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <Reveal>
                <p className="zs-eyebrow-light mb-4">{t.audit.eyebrow}</p>
                <h2 className="zs-title text-[clamp(28px,4vw,48px)] leading-tight mb-5">{t.audit.title}</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-lg">{t.audit.sub}</p>

                <div className="hidden lg:block relative rounded-2xl border border-white/15 overflow-hidden bg-black/30 shadow-2xl">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="zs-ken-burns-wrap w-full h-full">
                      <img
                        src={IMG.voraHomepage}
                        alt="Denetim önizlemesi"
                        className="w-full h-[140%] object-cover object-top opacity-90 zs-mockup-scroll"
                      />
                    </div>
                    <div className="absolute inset-0 bg-[#0A0A0B]/50 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play size={22} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-xs text-white/50">{t.audit.previewTitle}</p>
                      <p className="text-sm font-medium text-white">{t.audit.previewSub}</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div>
                {auditSent ? (
                  <Reveal>
                    <ZsSuccessMessage title={t.audit.successTitle} subtitle={t.audit.successSub} />
                  </Reveal>
                ) : (
                  <Reveal delay={0.1}>
                    <div className="zs-card p-6 md:p-8 text-left bg-black/30">
                      <p className="text-sm font-semibold text-white mb-1">{t.audit.formTitle}</p>
                      <p className="text-xs text-white/40 mb-6">{t.audit.formSub}</p>

                      <ZsAuditSelect
                        label={t.audit.bottleneck}
                        value={auditForm.bottleneck}
                        onChange={(v) => setAuditForm({ ...auditForm, bottleneck: v })}
                        options={t.audit.bottlenecks}
                      />

                      <ZsAuditField
                        label={t.audit.email}
                        type="email"
                        value={auditForm.email}
                        onChange={(v) => setAuditForm({ ...auditForm, email: v })}
                        placeholder="email@adresiniz.com"
                      />

                      <ZsSubmitButton variant="gold" onClick={handleAuditSubmit}>
                        <span className="inline-flex items-center gap-2">
                          <Play size={14} fill="currentColor" /> {t.audit.cta}
                        </span>
                      </ZsSubmitButton>
                    </div>
                    <p className="text-xs text-white/30 mt-5 text-center lg:text-left">{t.audit.disclaimer}</p>

                    <div className="lg:hidden mt-8 relative rounded-2xl border border-white/15 overflow-hidden bg-black/30">
                      <div className="aspect-video relative overflow-hidden">
                        <div className="zs-ken-burns-wrap w-full h-full">
                          <img src={IMG.voraHomepage} alt="Denetim önizlemesi" className="w-full h-[140%] object-cover object-top opacity-90 zs-mockup-scroll" />
                        </div>
                        <div className="absolute inset-0 bg-[#0A0A0B]/50 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                            <Play size={18} className="text-white ml-0.5" fill="white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </SectionTransition>

        <SectionTransition id="iletisim" className="bg-[#0A0A0B] py-16 md:py-24 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="zs-eyebrow-light mb-4">{t.contact.eyebrow}</p>
              <h2 className="zs-title text-[clamp(28px,3vw,40px)] leading-snug mb-5">{t.contact.title}</h2>
              <p className="text-sm text-white/45 leading-relaxed mb-8">{t.contact.sub}</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:slaaylmzz8@gmail.com" className="text-[11px] text-white/40 no-underline tracking-wide hover:text-white/70 transition-colors">
                  slaaylmzz8@gmail.com
                </a>
                <a
                  href="https://wa.me/905456649930"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F8F5F0] bg-[#6B1E24] px-5 py-2.5 rounded-lg no-underline w-fit hover:bg-[#8B2E35] transition-colors"
                  onClick={() => trackZsEvent({ name: "cta_click", target: "whatsapp", href: "https://wa.me/905456649930" })}
                >
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>

            <div>
              {sent ? (
                <ZsSuccessMessage title={t.contact.successTitle} subtitle={t.contact.successSub} />
              ) : (
                <div className="flex flex-col gap-4">
                  <ZsFormField label={t.contact.brand} value={form.brand} onChange={(v) => setForm({ ...form, brand: v })} placeholder="Markanızın adı" />
                  <ZsFormField label={t.contact.name} value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Adınız ve soyadınız" />
                  <ZsFormField label={t.contact.email} type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="email@adresiniz.com" />
                  <ZsFormSelect
                    label={t.contact.package}
                    value={form.paket}
                    onChange={(v) => {
                      setForm({ ...form, paket: v });
                      if (v) trackZsEvent({ name: "package_select", package: v });
                    }}
                    options={t.contact.packages}
                  />
                  <ZsFormTextarea
                    label={t.contact.message}
                    value={form.mesaj}
                    onChange={(v) => setForm({ ...form, mesaj: v })}
                    placeholder={t.contact.messagePh}
                  />
                  <ZsSubmitButton onClick={handleSubmit} className="mt-2">
                    {t.contact.submit} <ArrowRight size={14} />
                  </ZsSubmitButton>
                </div>
              )}
            </div>
          </div>
        </SectionTransition>

        <ZsFooter copy={t.footer} />
      </main>
    </>
  );
}
