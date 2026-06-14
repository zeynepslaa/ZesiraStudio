# Zesira Studio — Full Code Export
Generated: Mon Jun 15 00:18:08 +03 2026

## Deploy: push to github.com/zeynepslaa/ZesiraStudio → Vercel auto-deploys zesirastudio.com


---

## FILE: `package.json`

```
{
  "name": "zesira-studio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "dev:clean": "rm -rf .next && next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@next/third-parties": "^15.0.0",
    "clsx": "^2.1.1",
    "framer-motion": "^11.15.0",
    "gsap": "^3.15.0",
    "lenis": "^1.3.23",
    "lucide-react": "^0.468.0",
    "next": "^15.0.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "@types/react": "^19.0.1",
    "@types/react-dom": "^19.0.2",
    "eslint": "^9.16.0",
    "eslint-config-next": "^15.0.4",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.7.2"
  }
}
```

---

## FILE: `next.config.ts`

```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "vora-istanbul.vercel.app",
      },
    ],
  }
};

export default nextConfig;
```

---

## FILE: `vercel.json`

```
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

---

## FILE: `tailwind.config.ts`

```
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        serif: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        display: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
      },
      colors: {
        canvas: "#F6F2EC",
        linen: "#E9DED2",
        noir: "#2B1F1C",
        ash: "#9A8878",
        sand: "#C4A882",
        dusk: "#A89888",
        bordo: "#6B1E24",
        "bordo-dark": "#4A1219",
        "bordo-light": "#8B2E35",
        clink: {
          base: "#0E0E12",
          surface: "#16161C",
          elevated: "#1E1E26",
          border: "#2A2A34",
          text: "#EEEEF2",
          muted: "#888894",
        },
      },
      letterSpacing: {
        widest: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## FILE: `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## FILE: `postcss.config.mjs`

```
const config = {
  plugins: {
    tailwindcss: {}
  }
};

export default config;
```

---

## FILE: `app/layout.tsx`

```
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zesirastudio.com"),
  title: "Zesira Studio — Modern Markalar İçin Web Siteleri ve Dijital Deneyimler",
  description: "Lüks ve butik markalar için sıfırdan tasarlanan web siteleri. Ücretsiz dijital denetim ile başlayın.",
  openGraph: {
    title: "Zesira Studio",
    description: "Lüks ve butik markalar için sıfırdan tasarlanan web siteleri ve dijital deneyimler.",
    url: "https://zesirastudio.com",
    siteName: "Zesira Studio",
    type: "website",
    images: [{ url: "/zs/vora-homepage.png", width: 1440, height: 900, alt: "Zesira Studio — VORA Istanbul çalışması" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zesira Studio",
    description: "Lüks ve butik markalar için sıfırdan tasarlanan web siteleri.",
    images: ["/zs/vora-homepage.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preload" as="image" href="/zs/vora-homepage.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

---

## FILE: `app/page.tsx`

```
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
```

---

## FILE: `app/globals.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #050505;
  color: #f4f4f5;
  font-family: var(--font-body), "Inter", sans-serif;
  font-weight: 400;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: #6b1e24;
  color: #f4f4f5;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #0a0a0b;
}

::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 2px;
}

@layer components {
  .zs-eyebrow-light {
    @apply text-sm font-semibold tracking-normal text-[#c4a882];
  }
  .zs-eyebrow-accent {
    @apply text-sm font-semibold tracking-normal text-[#c4a882];
  }
  .zs-title {
    @apply font-serif font-bold tracking-tight text-white;
  }
  .zs-nav-link {
    @apply relative text-sm font-medium text-white/55 hover:text-white transition-colors no-underline;
  }
  .zs-nav-link::after {
    content: "";
    @apply absolute left-0 -bottom-0.5 h-px w-0 bg-[#c4a882] transition-all duration-300;
  }
  .zs-nav-link:hover::after {
    @apply w-full;
  }
  .zs-btn {
    @apply inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-normal rounded-lg transition-colors no-underline;
  }
  .zs-btn-primary {
    @apply zs-btn text-white bg-[#6b1e24] px-6 py-3 hover:bg-[#8b2e35];
  }
  .zs-btn-ghost {
    @apply zs-btn font-medium text-white/80 border border-white/15 px-6 py-3 hover:border-white/30 hover:text-white bg-white/[0.03];
  }
  .zs-glass {
    @apply bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm;
  }
  .zs-card {
    @apply zs-glass rounded-2xl;
  }
  .zs-muted {
    @apply text-white/55;
  }
  .zs-gradient-text {
    @apply bg-gradient-to-r from-[#F4F4F5] via-[#C4A882] to-[#F4F4F5] bg-clip-text text-transparent;
  }
  .zs-btn-glow {
    box-shadow: 0 0 0 1px rgba(107, 30, 36, 0.5), 0 8px 32px -6px rgba(107, 30, 36, 0.6), 0 0 60px -20px rgba(196, 168, 130, 0.15);
  }
  .zs-btn-glow:hover {
    box-shadow: 0 0 0 1px rgba(196, 168, 130, 0.3), 0 14px 48px -8px rgba(107, 30, 36, 0.7), 0 0 80px -16px rgba(196, 168, 130, 0.25);
  }
  .zs-section-alt {
    @apply bg-white/[0.02] border-t border-white/[0.06];
  }
  .zs-integration-logo {
    @apply h-5 md:h-6 w-auto opacity-40 hover:opacity-70 transition-opacity grayscale;
  }
  .zs-hero-display {
    font-size: clamp(2.75rem, 6.5vw, 4.75rem);
    line-height: 1.02;
    letter-spacing: -0.03em;
  }
  .zs-editorial-display {
    @apply font-serif font-bold tracking-tight text-white;
    font-size: clamp(2rem, 5vw, 3.75rem);
    line-height: 1.05;
    letter-spacing: -0.025em;
  }
  .zs-gradient-animate {
    background-size: 200% auto;
    animation: zs-shimmer 6s ease-in-out infinite;
  }
  .zs-btn-energy {
    @apply transition-all duration-300;
  }
  .zs-btn-energy:hover {
    transform: translateY(-1px);
  }
  .zs-floating-card {
    @apply rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)];
  }
  .zs-floating-badge {
    @apply rounded-full px-2.5 py-1 border border-white/15 bg-black/50 backdrop-blur-md;
  }
  .zs-card-hover {
    @apply transition-all duration-300;
  }
  .zs-card-hover:hover {
    @apply border-white/20 -translate-y-1;
    box-shadow: 0 20px 50px -20px rgba(107, 30, 36, 0.25);
  }
  .zs-orb {
    @apply pointer-events-none absolute rounded-full blur-[100px];
    animation: zs-orb-drift 12s ease-in-out infinite;
  }
  .zs-orb-1 {
    top: -15%;
    right: -8%;
    width: 520px;
    height: 520px;
    background: rgba(107, 30, 36, 0.22);
  }
  .zs-orb-2 {
    bottom: 5%;
    left: -12%;
    width: 440px;
    height: 440px;
    background: rgba(196, 168, 130, 0.12);
    animation-delay: -4s;
  }
  .zs-orb-3 {
    top: 35%;
    right: 20%;
    width: 280px;
    height: 280px;
    background: rgba(107, 30, 36, 0.15);
    animation-delay: -7s;
  }
  .zs-orb-pulse {
    animation: zs-pulse-glow 4s ease-in-out infinite;
  }
  .zs-dashed-ring {
    animation: zs-spin-slow 30s linear infinite;
  }
  .zs-mockup-scroll {
    animation: zs-mockup-scroll 16s ease-in-out infinite;
  }
  .zs-ken-burns-wrap {
    animation: zs-ken-burns 14s ease-in-out infinite alternate;
    transform-origin: center top;
  }
  .zs-scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .zs-scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .zs-process-line {
    @apply hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-px border-t border-dashed border-white/10 -translate-y-1/2;
  }
  .zs-craft-headline {
    @apply font-serif font-bold tracking-tight text-white;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
  }
  .zs-mega-type {
    @apply font-serif font-bold tracking-tight text-white;
    font-size: clamp(2.75rem, 9vw, 6.5rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
  }
  .zs-grid-lines {
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 64px 64px;
  }
  .zs-grain {
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
}

@keyframes zs-shimmer {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

@keyframes zs-orb-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -15px) scale(1.05); }
  66% { transform: translate(-15px, 10px) scale(0.95); }
}

@keyframes zs-pulse-glow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes zs-spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes zs-mockup-scroll {
  0%, 12% { transform: translateY(0); }
  88%, 100% { transform: translateY(-44%); }
}

@keyframes zs-ken-burns {
  from { transform: scale(1); }
  to { transform: scale(1.07); }
}

@media (prefers-reduced-motion: reduce) {
  .zs-mockup-scroll,
  .zs-ken-burns-wrap,
  .zs-orb,
  .zs-dashed-ring,
  .zs-gradient-animate,
  .zs-orb-pulse {
    animation: none !important;
  }
}
```

---

## FILE: `lib/zs/i18n.ts`

```
export type Lang = "tr" | "en";

export type ZsCopy = {
  nav: { links: [string, string][]; audit: string; menu: string };
  hero: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    h1c: string;
    sub: string;
    ctaAudit: string;
    ctaVitrin: string;
    note: string;
    live: string;
    featured: string;
    openSite: string;
  };
  trust: { label: string };
  stats: { design: string; designSub: string; motion: string; motionSub: string; perf: string; perfSub: string };
  micro: { mobile: string; mobileSub: string; seo: string; seoSub: string; custom: string; customSub: string };
  availability: { label: string; slots: string };
  why: {
    eyebrow: string;
    title: string;
    sub: string;
    cards: { title: string; desc: string }[];
    bottom: { title: string; desc: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    sub: string;
    offerings: { title: string; tag: string; desc: string; bullets: string[]; cta: string }[];
  };
  compare: {
    eyebrow: string;
    title: string;
    sub: string;
    features: string[];
    packages: [string, string, string];
    rows: (string | boolean)[][];
    note: string;
    cta: string;
  };
  builtFor: { eyebrow: string; title: string; industries: string[] };
  proof: { eyebrow: string; title: string; sub: string; studio: string };
  caseStudy: {
    eyebrow: string;
    title: string;
    problem: string;
    problemText: string;
    solution: string;
    solutionText: string;
    result: string;
    metrics: { label: string; value: string }[];
    cta: string;
  };
  process: {
    eyebrow: string;
    title: string;
    sub: string;
    steps: { n: string; title: string; desc: string }[];
    cta: string;
    proof: { eyebrow: string; title: string; sub: string; items: { title: string; desc: string }[] };
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  audit: {
    eyebrow: string;
    title: string;
    sub: string;
    previewTitle: string;
    previewSub: string;
    formTitle: string;
    formSub: string;
    bottleneck: string;
    email: string;
    cta: string;
    disclaimer: string;
    successTitle: string;
    successSub: string;
    bottlenecks: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    whatsapp: string;
    brand: string;
    name: string;
    email: string;
    package: string;
    message: string;
    messagePh: string;
    submit: string;
    successTitle: string;
    successSub: string;
    packages: string[];
  };
  footer: {
    tagline: string;
    nav: { label: string; href: string }[];
    contact: string;
    rights: string;
  };
  sticky: { text: string; cta: string };
};

const tr: ZsCopy = {
  nav: {
    links: [
      ["Deneyim", "#deneyim"],
      ["Vitrin", "#vitrin"],
      ["Hizmetler", "#hizmetler"],
      ["Süreç", "#surec"],
      ["Denetim", "#denetim"],
    ],
    audit: "Denetim Al",
    menu: "Menü",
  },
  hero: {
    eyebrow: "Lüks markalar için dijital stüdyo",
    h1a: "Rakipleriniz daha",
    h1b: "prestijli",
    h1c: "görünüyor.",
    sub: "Siteniz markanızı taşımıyorsa, müşteri kaybedersiniz. Sıfırdan tasarlanan, animasyonlu, editoryal web deneyimleri inşa ediyoruz.",
    ctaAudit: "Ücretsiz dijital denetim",
    ctaVitrin: "Stüdyo vitrinini gör",
    note: "Rakip analizi dahil · 24 saat içinde dönüş",
    live: "Canlı",
    featured: "Öne çıkan",
    openSite: "Canlı siteyi aç →",
  },
  trust: { label: "Seçilmiş stüdyo çalışmaları — canlı önizleme" },
  stats: {
    design: "Özel tasarım",
    designSub: "Şablon yok, markanıza özgü",
    motion: "Hareket",
    motionSub: "Scroll & giriş animasyonları",
    perf: "Performans",
    perfSub: "Hızlı yükleme hedefi",
  },
  micro: {
    mobile: "Mobil öncelikli",
    mobileSub: "Her ekranda kusursuz ilk izlenim.",
    seo: "SEO altyapısı",
    seoSub: "Google'da bulunmanız için temelden kurulum.",
    custom: "Sıfırdan tasarım",
    customSub: "Şablon yok — markanıza özgü arayüz.",
  },
  availability: { label: "Müsaitlik", slots: "Q2 2026 · 2 proje slotu kaldı" },
  why: {
    eyebrow: "Neden Zesira?",
    title: "Dijital vitrininiz, markanız kadar değerli olmalı.",
    sub: "Ucuz şablonlar prestij kaybettirir. Her proje özel tasarım, animasyon ve performans odaklı kod ile inşa edilir.",
    cards: [
      { title: "Özel arayüz", desc: "Markanıza özgü tipografi ve layout." },
      { title: "Hareket tasarımı", desc: "Scroll ve giriş animasyonları." },
      { title: "SEO altyapısı", desc: "Google'da bulunmanız için temel." },
      { title: "Modern stack", desc: "Next.js, Vercel, Sanity." },
    ],
    bottom: [
      { title: "Yıldırım hızında", desc: "Performans odaklı, optimize kod." },
      { title: "Google'da görünür", desc: "GBP + temel SEO dahil." },
      { title: "Dönüşüm mimarisi", desc: "Ziyaretçiyi müşteriye çeviren akış." },
    ],
  },
  services: {
    eyebrow: "Hizmetler",
    title: "Üç şeyi mükemmel yapıyoruz — geri kalanı değil.",
    sub: "İhtiyacınıza göre net paketler. Fiyat ve kapsam keşif sonrası teklif PDF'inde — önce doğru eşleşme.",
    offerings: [
      {
        title: "Starter Presence",
        tag: "İlk izlenim",
        desc: "Yeni markalar için hızlı, güven veren ve mobil uyumlu dijital varlık. Şablon yok — markanıza özel tasarım.",
        bullets: ["3 sayfaya kadar özel tasarım", "İletişim formu + WhatsApp", "Temel SEO & domain bağlantısı"],
        cta: "Teklif Al",
      },
      {
        title: "Editorial Brand Site",
        tag: "En çok tercih edilen",
        desc: "Hikâyenizi, koleksiyonlarınızı ve estetiğinizi öne çıkaran editoryal marka deneyimi.",
        bullets: ["6 sayfaya kadar özel tasarım", "Marka hikâyesi & koleksiyon sayfaları", "Google Business Profili kurulumu"],
        cta: "Teklif Al",
      },
      {
        title: "Luxury Launch Experience",
        tag: "Tam lansman",
        desc: "Animasyon, çoklu dil ve CMS ile uluslararası kalitede lansman deneyimi.",
        bullets: ["TR / EN çoklu dil", "Animasyon & hareket tasarımı", "CMS + sosyal medya kiti"],
        cta: "Lansmanı Planla",
      },
    ],
  },
  compare: {
    eyebrow: "Paket karşılaştırma",
    title: "Hangisi size uygun?",
    sub: "Fiyat yok — önce kapsam. Keşif sonrası teklif PDF'inde netleşir.",
    features: ["Sayfa sayısı", "Revizyon turu", "Hareket tasarımı", "CMS", "Çoklu dil", "Tahmini süre", "Yayın sonrası destek"],
    packages: ["Starter", "Editorial", "Luxury"],
    rows: [
      ["3 sayfa", "6 sayfa", "12+ sayfa"],
      ["1 tur", "2 tur", "3 tur"],
      ["Temel", true, true],
      [false, false, true],
      [false, false, "TR / EN"],
      ["2–3 hafta", "4–6 hafta", "6–10 hafta"],
      ["30 gün", "30 gün", "30 gün"],
    ],
    note: "Kararsızsanız ücretsiz denetimle başlayın — size uygun paketi birlikte belirleriz.",
    cta: "Ücretsiz denetimle başla",
  },
  builtFor: {
    eyebrow: "Kimler için?",
    title: "Modern markalar için tasarlandı.",
    industries: ["Lüks Konut & Rezidans", "Moda & Bridal", "Güzellik & Wellness", "Butik Hizmetler", "Yeni Kurulan Markalar", "Profesyonel Stüdyolar"],
  },
  proof: {
    eyebrow: "Kanıt",
    title: "Vaat ettiğimiz kalite, çalışmalarda görünür.",
    sub: "Stüdyo çalışmaları — her biri farklı bir paketi temsil eder. Sahte müşteri yorumu yok; canlı site var.",
    studio: "Stüdyo çalışması",
  },
  caseStudy: {
    eyebrow: "Case study",
    title: "VORA Istanbul — lansman deneyimi",
    problem: "Problem",
    problemText: "Yeni lüks konut projesi için dijitalde güçlü bir ilk izlenim gerekiyordu — şablon çözümler marka konumuna uymuyordu.",
    solution: "Çözüm",
    solutionText: "12 sayfalık editoryal site: scroll animasyonları, TR/EN dil desteği, koleksiyon ve lokasyon odaklı sayfa mimarisi.",
    result: "Sonuç",
    metrics: [
      { label: "Sayfa", value: "12" },
      { label: "Yükleme", value: "< 2sn" },
      { label: "Dil", value: "TR / EN" },
      { label: "Paket", value: "Luxury Launch" },
    ],
    cta: "Canlı siteyi incele",
  },
  process: {
    eyebrow: "Süreç",
    title: "Belirsizlik yok — kanıtlanmış teslimat.",
    sub: "Her proje aynı şeffaf sistemle ilerler — sürpriz yok, belirsizlik yok.",
    steps: [
      { n: "01", title: "Keşif & Teklif", desc: "Markanızı, kapsamı ve bütçeyi netleştiriyoruz. Özel teklif PDF'i hazırlanır." },
      { n: "02", title: "Tasarım & İçerik", desc: "Sayfa tasarımları onaylanır, tüm içerik ve marka materyalleri toplanır." },
      { n: "03", title: "İnşa & Yayın", desc: "Site kodlanır, test edilir ve domain'e bağlanarak yayına alınır." },
      { n: "04", title: "Destek", desc: "Yayın sonrası 30 gün teknik destek ve küçük düzeltmeler dahil." },
    ],
    cta: "Süreci Başlat",
    proof: {
      eyebrow: "Sistem kanıtı",
      title: "Her adım belgelenir — belirsizlik yok.",
      sub: "Teklif PDF'i, imzalı sözleşme ve müşteri portalı ile proje şeffaf ilerler.",
      items: [
        { title: "Teklif PDF", desc: "Kapsam, süre ve teslimatlar tek belgede." },
        { title: "Standart sözleşme", desc: "Her iki tarafı koruyan net şartlar." },
        { title: "Müşteri portalı", desc: "İlerleme, dosyalar ve revizyonlar tek yerde." },
      ],
    },
  },
  faq: {
    eyebrow: "SSS",
    title: "Sık sorulan sorular.",
    items: [
      { q: "Freelancer veya ajanslardan farkınız ne?", a: "DM → WhatsApp → dosya gönder döngüsü yok. Her proje keşiften desteğe 7 adımlı standart bir sistemle yürür: teklif PDF'i, imzalı sözleşme, içerik formu ve müşteri portalı dahil." },
      { q: "Proje ne kadar sürer?", a: "Starter Presence 2–3 hafta, Editorial Brand Site 4–6 hafta, Luxury Launch Experience 6–10 hafta. Süre içerik hazırlığına bağlı olarak değişebilir." },
      { q: "Revizyon nasıl işler?", a: "Her pakette belirli sayıda revizyon turu dahildir (1, 2 veya 3 tur). Kapsam dışı talepler ayrıca tekliflendirilir — sürpriz yok." },
      { q: "CMS ve çoklu dil hangi pakette?", a: "CMS ve TR/EN çoklu dil desteği yalnızca Luxury Launch Experience paketinde standart olarak yer alır." },
      { q: "Sözleşme ve ödeme nasıl?", a: "Proje başlamadan önce her iki tarafı koruyan standart sözleşme imzalanır. Ön ödeme ile proje resmi olarak başlar." },
    ],
  },
  audit: {
    eyebrow: "Ücretsiz · Kişiye özel video denetim",
    title: "Sitenizi ve rakiplerinizi birlikte analiz edelim.",
    sub: "E-postanızı bırakın — mevcut dijital varlığınızı, rakiplerinizi ve marka konumunuzu inceleyip size özel bir yol haritası videosu gönderiyorum.",
    previewTitle: "Örnek denetim formatı",
    previewSub: "Rakip analizi + dijital yol haritası",
    formTitle: "Ücretsiz denetim talebi",
    formSub: "2 dakikada doldurun — 24 saat içinde dönüş.",
    bottleneck: "En büyük engeliniz nedir?",
    email: "E-posta",
    cta: "Ücretsiz Denetim İste",
    disclaimer: "Kredi kartı gerekmez · Uzun süreli sözleşme yok",
    successTitle: "Talebiniz alındı.",
    successSub: "24 saat içinde denetim özetiyle dönüyorum.",
    bottlenecks: ["Sitem yok veya çok eski", "Marka kimliğim dijitalde yansımıyor", "Rakiplerimden geride kalıyorum", "Lansman tarihim yaklaşıyor", "Henüz emin değilim"],
  },
  contact: {
    eyebrow: "İletişim",
    title: "Markanızı anlatalım — 24 saat içinde dönüş.",
    sub: "Formu doldurun — 24 saat içinde geri dönerim. Ya da doğrudan WhatsApp'tan ulaşın.",
    whatsapp: "WhatsApp ile Ulaş",
    brand: "Marka Adı",
    name: "Ad Soyad",
    email: "E-posta",
    package: "İlgilenilen paket",
    message: "Proje hakkında",
    messagePh: "Markanızı ve beklentilerinizi kısaca anlatın...",
    submit: "Başvuruyu Gönder",
    successTitle: "Başvurunuz alındı.",
    successSub: "24 saat içinde geri dönüyorum.",
    packages: ["Starter Presence", "Editorial Brand Site", "Luxury Launch Experience", "Henüz karar vermedim"],
  },
  footer: {
    tagline: "Lüks ve butik markalar için sıfırdan tasarlanan dijital deneyimler.",
    nav: [
      { label: "Hizmetler", href: "#hizmetler" },
      { label: "Projeler", href: "#projeler" },
      { label: "Süreç", href: "#surec" },
      { label: "Denetim", href: "#denetim" },
      { label: "İletişim", href: "#iletisim" },
    ],
    contact: "İletişim",
    rights: "© 2025 Zesira Studio",
  },
  sticky: { text: "Ücretsiz dijital denetim — rakip analizi dahil", cta: "Denetim Al" },
};

const en: ZsCopy = {
  nav: {
    links: [
      ["Experience", "#deneyim"],
      ["Showcase", "#vitrin"],
      ["Services", "#hizmetler"],
      ["Process", "#surec"],
      ["Audit", "#denetim"],
    ],
    audit: "Get Audit",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Digital studio for luxury brands",
    h1a: "Your competitors look",
    h1b: "more prestigious",
    h1c: "than you.",
    sub: "If your site doesn't carry your brand, you lose clients. We build bespoke, animated, editorial web experiences from scratch.",
    ctaAudit: "Free digital audit",
    ctaVitrin: "View studio showcase",
    note: "Competitor analysis included · Reply within 24h",
    live: "Live",
    featured: "Featured",
    openSite: "Open live site →",
  },
  trust: { label: "Selected studio work — live preview" },
  stats: {
    design: "Bespoke design",
    designSub: "No templates — built for your brand",
    motion: "Motion",
    motionSub: "Scroll & entrance animations",
    perf: "Performance",
    perfSub: "Fast load targets",
  },
  micro: {
    mobile: "Mobile-first",
    mobileSub: "Flawless first impression on every screen.",
    seo: "SEO foundation",
    seoSub: "Built for discoverability from day one.",
    custom: "From-scratch design",
    customSub: "No templates — a UI unique to your brand.",
  },
  availability: { label: "Availability", slots: "Q2 2026 · 2 project slots left" },
  why: {
    eyebrow: "Why Zesira?",
    title: "Your digital storefront should match your brand.",
    sub: "Cheap templates erode prestige. Every project is built with bespoke design, motion, and performance-first code.",
    cards: [
      { title: "Custom interface", desc: "Typography and layout unique to your brand." },
      { title: "Motion design", desc: "Scroll and entrance animations." },
      { title: "SEO foundation", desc: "The basics for being found on Google." },
      { title: "Modern stack", desc: "Next.js, Vercel, Sanity." },
    ],
    bottom: [
      { title: "Lightning fast", desc: "Performance-focused, optimized code." },
      { title: "Visible on Google", desc: "GBP + foundational SEO included." },
      { title: "Conversion architecture", desc: "Flows that turn visitors into clients." },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "We do three things exceptionally — nothing else.",
    sub: "Clear packages for your needs. Pricing and scope in a proposal PDF after discovery — fit first.",
    offerings: [
      {
        title: "Starter Presence",
        tag: "First impression",
        desc: "Fast, trustworthy, mobile-ready digital presence for new brands. No templates — design built for you.",
        bullets: ["Up to 3 bespoke pages", "Contact form + WhatsApp", "Basic SEO & domain setup"],
        cta: "Get Proposal",
      },
      {
        title: "Editorial Brand Site",
        tag: "Most popular",
        desc: "Editorial brand experience that highlights your story, collections, and aesthetic.",
        bullets: ["Up to 6 bespoke pages", "Brand story & collection pages", "Google Business Profile setup"],
        cta: "Get Proposal",
      },
      {
        title: "Luxury Launch Experience",
        tag: "Full launch",
        desc: "International-quality launch with animation, multilingual support, and CMS.",
        bullets: ["TR / EN multilingual", "Animation & motion design", "CMS + social media kit"],
        cta: "Plan Launch",
      },
    ],
  },
  compare: {
    eyebrow: "Package comparison",
    title: "Which fits you?",
    sub: "No prices here — scope first. Finalized in your proposal PDF after discovery.",
    features: ["Page count", "Revision rounds", "Motion design", "CMS", "Multilingual", "Est. timeline", "Post-launch support"],
    packages: ["Starter", "Editorial", "Luxury"],
    rows: [
      ["3 pages", "6 pages", "12+ pages"],
      ["1 round", "2 rounds", "3 rounds"],
      ["Basic", true, true],
      [false, false, true],
      [false, false, "TR / EN"],
      ["2–3 weeks", "4–6 weeks", "6–10 weeks"],
      ["30 days", "30 days", "30 days"],
    ],
    note: "Unsure? Start with a free audit — we'll identify the right package together.",
    cta: "Start with free audit",
  },
  builtFor: {
    eyebrow: "Built for",
    title: "Designed for modern brands.",
    industries: ["Luxury Real Estate", "Fashion & Bridal", "Beauty & Wellness", "Boutique Services", "New Brands", "Professional Studios"],
  },
  proof: {
    eyebrow: "Proof",
    title: "The quality we promise is visible in the work.",
    sub: "Studio projects — each represents a different package. No fake testimonials; live sites.",
    studio: "Studio work",
  },
  caseStudy: {
    eyebrow: "Case study",
    title: "VORA Istanbul — launch experience",
    problem: "Problem",
    problemText: "A new luxury residential project needed a strong digital first impression — template solutions didn't match the brand position.",
    solution: "Solution",
    solutionText: "12-page editorial site: scroll animations, TR/EN support, collection and location-focused page architecture.",
    result: "Outcome",
    metrics: [
      { label: "Pages", value: "12" },
      { label: "Load", value: "< 2s" },
      { label: "Languages", value: "TR / EN" },
      { label: "Package", value: "Luxury Launch" },
    ],
    cta: "View live site",
  },
  process: {
    eyebrow: "Process",
    title: "No ambiguity — proven delivery.",
    sub: "Every project follows the same transparent system — no surprises.",
    steps: [
      { n: "01", title: "Discovery & Proposal", desc: "We clarify your brand, scope, and budget. A custom proposal PDF is prepared." },
      { n: "02", title: "Design & Content", desc: "Page designs are approved; all content and brand assets are collected." },
      { n: "03", title: "Build & Launch", desc: "The site is coded, tested, and connected to your domain." },
      { n: "04", title: "Support", desc: "30 days of post-launch technical support and minor fixes included." },
    ],
    cta: "Start the Process",
    proof: {
      eyebrow: "System proof",
      title: "Every step is documented — no guesswork.",
      sub: "Proposal PDF, signed contract, and client portal keep the project transparent.",
      items: [
        { title: "Proposal PDF", desc: "Scope, timeline, and deliverables in one document." },
        { title: "Standard contract", desc: "Clear terms that protect both parties." },
        { title: "Client portal", desc: "Progress, files, and revisions in one place." },
      ],
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions.",
    items: [
      { q: "How are you different from freelancers or agencies?", a: "No DM → WhatsApp → file chaos. Every project runs on a 7-step system from discovery to support: proposal PDF, signed contract, content form, and client portal included." },
      { q: "How long does a project take?", a: "Starter Presence 2–3 weeks, Editorial Brand Site 4–6 weeks, Luxury Launch Experience 6–10 weeks. Timeline depends on content readiness." },
      { q: "How do revisions work?", a: "Each package includes a set number of revision rounds (1, 2, or 3). Out-of-scope requests are quoted separately — no surprises." },
      { q: "Which package includes CMS and multilingual?", a: "CMS and TR/EN multilingual support are standard only in Luxury Launch Experience." },
      { q: "Contract and payment?", a: "A standard contract protecting both parties is signed before work begins. The project officially starts with an upfront payment." },
    ],
  },
  audit: {
    eyebrow: "Free · Personalized video audit",
    title: "Let's analyze your site and competitors together.",
    sub: "Leave your email — I'll review your digital presence, competitors, and brand position, then send a personalized roadmap video.",
    previewTitle: "Sample audit format",
    previewSub: "Competitor analysis + digital roadmap",
    formTitle: "Free audit request",
    formSub: "Takes 2 minutes — reply within 24h.",
    bottleneck: "What's your biggest blocker?",
    email: "Email",
    cta: "Request Free Audit",
    disclaimer: "No credit card · No long-term contract",
    successTitle: "Request received.",
    successSub: "I'll reply with your audit summary within 24 hours.",
    bottlenecks: ["No site or very outdated", "Brand identity doesn't show digitally", "Falling behind competitors", "Launch date approaching", "Not sure yet"],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell me about your brand — reply within 24h.",
    sub: "Fill out the form — I'll get back within 24 hours. Or reach out directly on WhatsApp.",
    whatsapp: "Contact on WhatsApp",
    brand: "Brand Name",
    name: "Full Name",
    email: "Email",
    package: "Package of interest",
    message: "About the project",
    messagePh: "Briefly describe your brand and expectations...",
    submit: "Submit Application",
    successTitle: "Application received.",
    successSub: "I'll get back within 24 hours.",
    packages: ["Starter Presence", "Editorial Brand Site", "Luxury Launch Experience", "Not decided yet"],
  },
  footer: {
    tagline: "Bespoke digital experiences for luxury and boutique brands.",
    nav: [
      { label: "Services", href: "#hizmetler" },
      { label: "Projects", href: "#projeler" },
      { label: "Process", href: "#surec" },
      { label: "Audit", href: "#denetim" },
      { label: "Contact", href: "#iletisim" },
    ],
    contact: "Contact",
    rights: "© 2025 Zesira Studio",
  },
  sticky: { text: "Free digital audit — competitor analysis included", cta: "Get Audit" },
};

export function getCopy(lang: Lang): ZsCopy {
  return lang === "en" ? en : tr;
}
```

---

## FILE: `lib/zs/analytics.ts`

```
export type ZsAnalyticsEvent =
  | { name: "cta_click"; target: string; href: string }
  | { name: "form_submit"; form: "contact" | "audit"; package?: string }
  | { name: "package_select"; package: string }
  | { name: "lang_switch"; lang: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackZsEvent(event: ZsAnalyticsEvent) {
  if (typeof window === "undefined") return;

  const payload = { event: `zs_${event.name}`, ...event, ts: Date.now() };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", event.name, event);
  }

  try {
    const log = JSON.parse(sessionStorage.getItem("zs_events") || "[]") as unknown[];
    log.push(payload);
    sessionStorage.setItem("zs_events", JSON.stringify(log.slice(-50)));
  } catch {
    /* ignore */
  }
}

export function getAnalyticsSessionId() {
  if (typeof window === "undefined") return "server";
  let id = sessionStorage.getItem("zs_session");
  if (!id) {
    id = `zs_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    sessionStorage.setItem("zs_session", id);
  }
  return id;
}
```

---

## FILE: `lib/utils.ts`

```
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

---

## FILE: `components/zs/BrowserMockup.tsx`

```
"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type BrowserMockupProps = {
  url: string;
  image: string;
  alt: string;
  label?: string;
  className?: string;
  autoScroll?: boolean;
  cinematicLoop?: boolean;
  videoSrc?: string;
  priority?: boolean;
  liveLabel?: string;
  featuredLabel?: string;
};

export function BrowserMockup({
  url,
  image,
  alt,
  label,
  className = "",
  autoScroll = true,
  cinematicLoop = false,
  videoSrc,
  priority = false,
  liveLabel = "Canlı",
  featuredLabel = "Öne çıkan",
}: BrowserMockupProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className={`relative ${className}`} ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="absolute -inset-6 rounded-[32px] bg-[#6B1E24]/25 blur-3xl zs-orb-pulse" />

      <motion.div
        style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative rounded-2xl border border-white/10 bg-[#111113] shadow-[0_40px_100px_-24px_rgba(0,0,0,0.85)] overflow-hidden"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08] bg-[#050505]">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-[11px] text-white/35 text-center truncate font-mono">
            {url}
          </div>
        </div>

        <div className="relative aspect-[10/13] sm:aspect-[4/5] overflow-hidden bg-[#0A0A0B]">
          {videoSrc && !reduce ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className={cinematicLoop && !reduce ? "zs-ken-burns-wrap w-full h-full relative" : "w-full h-full relative"}>
              <Image
                src={image}
                alt={alt}
                width={1440}
                height={2520}
                priority={priority}
                sizes="(max-width: 768px) 100vw, 672px"
                className={`w-full ${
                  autoScroll && !reduce
                    ? "zs-mockup-scroll h-[180%] object-cover object-top"
                    : "h-full object-cover object-top"
                }`}
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/50 via-transparent to-[#0A0A0B]/10 pointer-events-none" />
          <div className="absolute top-3 right-3 flex items-center gap-1.5 zs-floating-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-medium text-white/80">{liveLabel}</span>
          </div>
        </div>
      </motion.div>

      {label && (
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -bottom-4 -left-5 md:-left-10 zs-floating-card px-4 py-3"
        >
          <p className="text-[10px] font-semibold text-[#C4A882] uppercase tracking-wide mb-0.5">{featuredLabel}</p>
          <p className="font-serif text-sm font-bold text-white">{label}</p>
        </motion.div>
      )}
    </div>
  );
}
```

---

## FILE: `components/zs/HeroShowcase.tsx`

```
"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowRight } from "lucide-react";
import { BrowserMockup } from "./BrowserMockup";
import { SplitReveal } from "./SplitReveal";
import { MagneticLink } from "./MagneticLink";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { trackZsEvent } from "@/lib/zs/analytics";
import type { ZsCopy } from "@/lib/zs/i18n";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type HeroShowcaseProps = {
  project: {
    name: string;
    paket: string;
    url: string;
    href: string;
    img: string;
  };
  copy: ZsCopy["hero"];
  availability: ZsCopy["availability"];
};

export function HeroShowcase({ project, copy, availability }: HeroShowcaseProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const item = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 + i * 0.12, duration: 0.75, ease },
        };

  return (
    <section ref={ref} className="relative bg-[#050505] pt-14 overflow-hidden min-h-[92vh] flex flex-col">
      <div className="absolute inset-0 zs-grid-lines opacity-20 pointer-events-none" />
      <div className="zs-orb zs-orb-1" />
      <div className="zs-orb zs-orb-2" />
      <div className="zs-orb zs-orb-3" />

      <div className="relative flex-1 max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          <motion.div style={reduce ? undefined : { y: textY }}>
            <motion.p {...item(0)} className="zs-eyebrow-light mb-6">
              {copy.eyebrow}
            </motion.p>

            <AvailabilityBadge label={availability.label} slots={availability.slots} />

            <motion.h1 {...item(1)} className="zs-title zs-hero-display max-w-[14ch] mb-7">
              <SplitReveal text={copy.h1a} delay={0.2} className="block" />
              <span className="zs-gradient-text zs-gradient-animate inline-block mt-1">{copy.h1b}</span>{" "}
              <SplitReveal text={copy.h1c} delay={0.55} className="inline-block" />
            </motion.h1>

            <motion.p {...item(2)} className="text-lg md:text-xl text-white/60 leading-relaxed max-w-md mb-10">
              {copy.sub}
            </motion.p>

            <motion.div {...item(3)} className="flex flex-col sm:flex-row gap-3 mb-6">
              <MagneticLink
                href="#denetim"
                className="zs-btn-primary zs-btn-glow zs-btn-energy"
                onClick={() => trackZsEvent({ name: "cta_click", target: "hero_audit", href: "#denetim" })}
              >
                <Play size={14} fill="currentColor" /> {copy.ctaAudit}
              </MagneticLink>
              <MagneticLink
                href="#vitrin"
                className="zs-btn-ghost"
                onClick={() => trackZsEvent({ name: "cta_click", target: "hero_vitrin", href: "#vitrin" })}
              >
                {copy.ctaVitrin} <ArrowRight size={14} />
              </MagneticLink>
            </motion.div>

            <motion.p {...item(4)} className="text-sm text-white/30">
              {copy.note}
            </motion.p>
          </motion.div>

          <motion.div
            style={reduce ? undefined : { y: visualY, scale: visualScale }}
            className="relative lg:justify-self-end w-full max-w-2xl mx-auto lg:mx-0"
          >
            <a href={project.href} target="_blank" rel="noreferrer" className="block no-underline group">
              <BrowserMockup
                url={project.url}
                image={project.img}
                alt={project.name}
                label={project.name}
                autoScroll
                cinematicLoop
                priority
                liveLabel={copy.live}
                featuredLabel={copy.featured}
              />
            </a>

            <p className="mt-10 text-center text-xs text-white/35">
              {project.paket} ·{" "}
              <span className="text-[#C4A882] group-hover:text-white transition-colors">{copy.openSite}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

## FILE: `components/zs/ImmersiveShowcase.tsx`

```
"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SplitReveal } from "./SplitReveal";
import { HorizontalVitrin } from "./HorizontalVitrin";

const showcases = [
  {
    name: "VORA Istanbul",
    tag: "Luxury Launch",
    img: "https://vora-istanbul.vercel.app/images/vision.png",
    url: "https://vora-istanbul.vercel.app",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Maison Céleste",
    tag: "Editorial Brand",
    img: "https://maison-celeste-xi.vercel.app/images/thehouse.png",
    url: "https://maison-celeste-xi.vercel.app",
    span: "",
  },
  {
    name: "Aurelle",
    tag: "Starter Presence",
    img: "https://aurelle-nine.vercel.app/images/philosophy-book.jpg",
    url: "https://aurelle-nine.vercel.app",
    span: "",
  },
];

export function ImmersiveShowcase() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section id="vitrin" ref={ref} className="relative py-20 md:py-32 overflow-hidden border-t border-white/[0.06]">
      <motion.div
        style={reduce ? undefined : { y: bgY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(107,30,36,0.18)_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(196,168,130,0.1)_0%,transparent_45%)]"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 mb-14">
        <p className="zs-eyebrow-accent mb-4">Stüdyo vitrini</p>
        <h2 className="zs-editorial-display max-w-4xl mb-5">
          <SplitReveal text="Bu sayfa da böyle hissettirmeli." delay={0.1} as="span" className="block" />
        </h2>
        <p className="text-base text-white/50 max-w-xl leading-relaxed">
          Müşterilerinize vaat ettiğimiz editoryal tasarım, hareket ve özel arayüz — seçilmiş stüdyo çalışmalarında canlı.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4">
          {showcases.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              initial={reduce ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              whileInView={reduce ? undefined : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={reduce ? undefined : { scale: 1.01 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] no-underline zs-card-hover ${s.span}`}
            >
              <div className={`overflow-hidden ${s.span ? "aspect-[4/3] md:aspect-auto md:min-h-[420px]" : "aspect-[4/3]"}`}>
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold text-[#C4A882] uppercase tracking-wider mb-1">Stüdyo çalışması</p>
                  <p className="font-serif text-xl md:text-2xl font-bold text-white">{s.name}</p>
                  <p className="text-xs text-white/45 mt-1">{s.tag}</p>
                </div>
                <span className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <HorizontalVitrin />
        </div>
      </div>
    </section>
  );
}
```

---

## FILE: `components/zs/ScrollCraftScene.tsx`

```
"use client";

import { Reveal } from "./motion";
import { ParallaxImage } from "./ParallaxImage";

const acts = [
  {
    num: "01",
    title: "Tasarım",
    headline: "Her piksel\nmarkanız için.",
    desc: "Şablon yok. Tipografi, grid ve kompozisyon markanızın editoryal dilinden doğar.",
    image: "https://vora-istanbul.vercel.app/images/facade-detail.png",
    imageAlt: "VORA Istanbul editoryal tasarım",
  },
  {
    num: "02",
    title: "Hareket",
    headline: "Scroll\nbir sahne.",
    desc: "Giriş animasyonları, parallax ve mikro etkileşimler — statik sayfa değil, deneyim.",
    image: "https://vora-istanbul.vercel.app/images/vision.png",
    imageAlt: "VORA Istanbul scroll deneyimi",
  },
  {
    num: "03",
    title: "Performans",
    headline: "Hız da\nlüksün parçası.",
    desc: "Next.js altyapısı, optimize görseller ve sub-saniye yükleme hedefi.",
    image: "https://maison-celeste-xi.vercel.app/images/thehouse.png",
    imageAlt: "Maison Céleste performans odaklı site",
  },
];

export function ScrollCraftScene() {
  return (
    <section id="deneyim" className="relative py-14 md:py-20 bg-[#050505] border-t border-white/[0.06]">
      <div className="absolute inset-0 zs-grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <Reveal className="mb-10 md:mb-14">
          <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-2">Nasıl inşa ediyoruz</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Tasarım · Hareket · Performans</h2>
        </Reveal>

        <div className="space-y-10 md:space-y-12">
          {acts.map((act, i) => (
            <Reveal
              key={act.num}
              delay={i * 0.05}
              variant={i % 2 === 0 ? "left" : "right"}
            >
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-sm font-bold text-[#C4A882] mb-3">{act.num} — {act.title}</p>
                  <h3 className="zs-craft-headline whitespace-pre-line mb-4">{act.headline}</h3>
                  <p className="text-white/50 leading-relaxed max-w-md">{act.desc}</p>
                </div>
                <div className={`relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] shadow-xl ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ParallaxImage src={act.image} alt={act.imageAlt} className="w-full h-full" speed={0.12} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  {i === 2 && (
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs text-white/60">Hedef yükleme</span>
                      <span className="font-serif text-2xl font-bold text-white">0.8s</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## FILE: `components/zs/EditorialMarquee.tsx`

```
"use client";

import { motion, useReducedMotion } from "framer-motion";

const words = ["Editoryal", "Hareket", "Özel", "Prestij", "Zesira"];

export function EditorialMarquee() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-t border-white/[0.06] bg-[#050505] py-6 overflow-hidden" aria-hidden>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      <motion.div
        className="flex gap-12 md:gap-20 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...words, ...words, ...words].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="font-serif text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight text-white/[0.06] select-none"
          >
            {word}
            <span className="text-[#C4A882]/30 mx-6 md:mx-10">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
```

---

## FILE: `components/zs/TypographyBreak.tsx`

```
"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TypographyBreak() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(107,30,36,0.12)_0%,transparent_65%)]" />
      <motion.div
        style={reduce ? undefined : { y, opacity, scale }}
        className="relative max-w-7xl mx-auto px-5 md:px-10 text-center"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A882] mb-8">
          Zesira standardı
        </p>
        <h2 className="zs-mega-type mb-6">
          Şablon değil.
          <br />
          <span className="zs-gradient-text zs-gradient-animate">Stüdyo işi.</span>
        </h2>
        <p className="text-base md:text-lg text-white/45 max-w-lg mx-auto leading-relaxed">
          Sattığımız deneyimi bu sayfada da yaşıyorsunuz — scroll, tipografi, hareket.
        </p>
      </motion.div>
    </section>
  );
}
```

---

## FILE: `components/zs/ZsStudioChrome.tsx`

```
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ZsStudioChrome() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (reduce) return;

    const move = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor]"));
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, [reduce]);

  return (
    <>
      <div className="zs-grain pointer-events-none fixed inset-0 z-[60]" aria-hidden />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C4A882] origin-left z-[70]"
        style={{ scaleX }}
      />
      {!reduce && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block mix-blend-difference"
          animate={{
            x: pos.x - (hovering ? 20 : 8),
            y: pos.y - (hovering ? 20 : 8),
            width: hovering ? 40 : 16,
            height: hovering ? 40 : 16,
          }}
          transition={{ type: "spring", damping: 22, stiffness: 350, mass: 0.5 }}
          style={{
            borderRadius: hovering ? "50%" : "2px",
            border: "1px solid rgba(196, 168, 130, 0.8)",
          }}
        />
      )}
    </>
  );
}
```

---

## FILE: `components/zs/WorkProofCard.tsx`

```
"use client";

import { CountUp } from "./CountUp";

type WorkProofCardProps = {
  project: string;
  paket: string;
  highlight: string;
  metric: string;
  url: string;
};

export function WorkProofCard({ project, paket, highlight, metric, url }: WorkProofCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block zs-card zs-card-hover p-6 h-full no-underline"
    >
      <p className="text-[10px] font-semibold text-[#C4A882] uppercase tracking-wider mb-3">Stüdyo çalışması</p>
      <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-[#C4A882] transition-colors">{project}</h3>
      <p className="text-xs text-white/40 mb-4">{paket}</p>
      <p className="text-sm text-white/55 leading-relaxed mb-5">{highlight}</p>
      <CountUp value={metric} className="text-2xl font-serif font-bold text-white block" />
      <p className="text-[10px] text-white/30 mt-1">Canlı önizleme ile inceleyin →</p>
    </a>
  );
}
```

---

## FILE: `components/zs/motion.tsx`

```
"use client";

import { motion, useReducedMotion } from "framer-motion";

export const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
}) {
  const reduce = useReducedMotion();
  const variants = {
    up: { opacity: 0, y: 32 },
    left: { opacity: 0, x: -36 },
    right: { opacity: 0, x: 36 },
    scale: { opacity: 0, scale: 0.94 },
  };
  const animate = {
    up: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial={reduce ? false : variants[variant]}
      whileInView={reduce ? undefined : animate[variant]}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Float({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

## FILE: `components/zs/SplitReveal.tsx`

```
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "./motion";

export function SplitReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "p" | "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = motion[Tag] as typeof motion.span;

  if (reduce) {
    const Plain = Tag;
    return <Plain className={className}>{text}</Plain>;
  }

  return (
    <MotionTag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + i * 0.06, duration: 0.65, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
```

---

## FILE: `components/zs/MagneticLink.tsx`

```
"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

type MagneticLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  strength?: number;
  onClick?: () => void;
};

export function MagneticLink({
  children,
  className = "",
  href,
  strength = 0.28,
  onClick,
}: MagneticLinkProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 18 });
  const y = useSpring(0, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={reduce ? undefined : { x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.a>
  );
}
```

---

## FILE: `components/zs/CountUp.tsx`

```
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^(<?\s*)?(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : null;
  const suffix = match?.[3] ?? value;
  const [display, setDisplay] = useState(reduce || target === null ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!inView || reduce || target === null) return;

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      const formatted = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, reduce, target, prefix, suffix, value]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5 }}
    >
      {display}
    </motion.span>
  );
}
```

---

## FILE: `components/zs/Stagger.tsx`

```
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "./motion";

export function Stagger({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

## FILE: `components/zs/FaqItem.tsx`

```
"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-white/[0.08] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left bg-transparent border-none cursor-pointer group"
      >
        <span className="text-sm font-medium text-white group-hover:text-[#C4A882] transition-colors">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reduce ? 0 : 0.25 }}
          className="shrink-0 text-white/40"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-white/50 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## FILE: `components/zs/SectionTransition.tsx`

```
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "./motion";

export function SectionTransition({
  children,
  className = "",
  id,
  as = "section",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      id={id}
      initial={reduce ? false : { opacity: 0, y: 48 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.75, ease }}
      className={className}
    >
      {children}
    </Tag>
  );
}
```

---

## FILE: `components/zs/HorizontalVitrin.tsx`

```
"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const showcases = [
  {
    name: "VORA Istanbul",
    tag: "Luxury Launch",
    img: "https://vora-istanbul.vercel.app/images/vision.png",
    url: "https://vora-istanbul.vercel.app",
    wide: true,
  },
  {
    name: "Maison Céleste",
    tag: "Editorial Brand",
    img: "https://maison-celeste-xi.vercel.app/images/thehouse.png",
    url: "https://maison-celeste-xi.vercel.app",
    wide: false,
  },
  {
    name: "Aurelle",
    tag: "Starter Presence",
    img: "https://aurelle-nine.vercel.app/images/philosophy-book.jpg",
    url: "https://aurelle-nine.vercel.app",
    wide: false,
  },
];

export function HorizontalVitrin() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: ref, axis: "x" });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative">
      <div className="hidden md:flex items-center justify-between mb-4 px-1">
        <p className="text-[10px] text-white/30 uppercase tracking-widest">Kaydırarak keşfedin</p>
        <div className="h-px w-32 bg-white/10 overflow-hidden rounded-full">
          <motion.div className="h-full bg-[#C4A882]" style={{ width: progressWidth }} />
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory zs-scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0 cursor-grab active:cursor-grabbing"
      >
        {showcases.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            initial={reduce ? false : { opacity: 0, x: 40 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.65 }}
            whileHover={reduce ? undefined : { y: -4 }}
            className={`group relative shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111] no-underline zs-card-hover ${
              s.wide ? "w-[min(88vw,640px)]" : "w-[min(78vw,380px)]"
            }`}
          >
            <div className={`overflow-hidden ${s.wide ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
              <img
                src={s.img}
                alt={s.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold text-[#C4A882] uppercase tracking-wider mb-1">Stüdyo çalışması</p>
                <p className="font-serif text-xl font-bold text-white">{s.name}</p>
                <p className="text-xs text-white/45 mt-1">{s.tag}</p>
              </div>
              <span className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
```

---

## FILE: `components/zs/IndustryPill.tsx`

```
"use client";

import { motion, useReducedMotion } from "framer-motion";

export function IndustryPill({ label }: { label: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      whileHover={
        reduce
          ? undefined
          : {
              scale: 1.04,
              borderColor: "rgba(196, 168, 130, 0.45)",
              backgroundColor: "rgba(107, 30, 36, 0.2)",
            }
      }
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="relative overflow-hidden text-sm font-medium text-white/70 border border-white/15 px-4 py-2 rounded-full cursor-default"
    >
      <span className="relative z-10">{label}</span>
      {!reduce && (
        <motion.span
          className="absolute inset-0 bg-[#C4A882]/10 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 2.5, opacity: 1 }}
          transition={{ duration: 0.45 }}
        />
      )}
    </motion.span>
  );
}
```

---

## FILE: `components/zs/FormFields.tsx`

```
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
};

export function ZsFormField({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative pb-3">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#C4A882]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ originX: 0 }}
      />
      <div className={`border-b pb-3 transition-colors duration-300 ${focused ? "border-transparent" : "border-white/10"}`}>
        <label className="text-xs font-medium text-white/40 block mb-1.5">{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-sm text-[#F8F5F0] placeholder:text-white/20 placeholder:italic font-sans"
        />
      </div>
    </div>
  );
}

export function ZsFormSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative pb-3">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#C4A882]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ originX: 0 }}
      />
      <div className={`border-b pb-3 transition-colors duration-300 ${focused ? "border-transparent" : "border-white/10"}`}>
        <label className="text-xs font-medium text-white/40 block mb-1.5">{label}</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-none outline-none text-sm text-[#F8F5F0] cursor-pointer font-sans"
        >
          <option value="" className="bg-[#0C0B09]">Seçiniz</option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#1A1714]">{o}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function ZsFormTextarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative pb-3">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#C4A882]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ originX: 0 }}
      />
      <div className={`border-b pb-3 transition-colors duration-300 ${focused ? "border-transparent" : "border-white/10"}`}>
        <label className="text-xs font-medium text-white/40 block mb-1.5">{label}</label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={rows}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none resize-none text-sm text-[#F8F5F0] placeholder:text-white/20 placeholder:italic font-sans"
        />
      </div>
    </div>
  );
}

export function ZsSubmitButton({
  onClick,
  children,
  className = "",
  variant = "primary",
}: {
  onClick: () => void | Promise<void>;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "gold";
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  const base =
    variant === "gold"
      ? "text-[#0A0A0B] bg-[#C4A882] hover:bg-white disabled:opacity-70"
      : "zs-btn-primary disabled:opacity-70";

  return (
    <motion.button
      onClick={handleClick}
      disabled={loading}
      whileTap={loading ? undefined : { scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-lg border-none cursor-pointer transition-colors w-full ${base} ${className}`}
    >
      {loading ? <Loader2 size={14} className="animate-spin" /> : children}
    </motion.button>
  );
}

export function ZsAuditField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: FieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="mb-4">
      <label className="text-xs font-medium text-white/40 block mb-2">{label}</label>
      <motion.input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        animate={{
          borderColor: focused ? "rgba(196, 168, 130, 0.55)" : "rgba(255, 255, 255, 0.15)",
          boxShadow: focused ? "0 0 0 3px rgba(196, 168, 130, 0.12)" : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.25 }}
        className="w-full bg-transparent border rounded-lg px-3 py-2.5 text-sm text-[#F8F5F0] outline-none placeholder:text-white/25 font-sans"
      />
    </div>
  );
}

export function ZsAuditSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="mb-4">
      <label className="text-xs font-medium text-white/40 block mb-2">{label}</label>
      <motion.select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        animate={{
          borderColor: focused ? "rgba(196, 168, 130, 0.55)" : "rgba(255, 255, 255, 0.15)",
          boxShadow: focused ? "0 0 0 3px rgba(196, 168, 130, 0.12)" : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.25 }}
        className="w-full bg-transparent border rounded-lg px-3 py-2.5 text-sm text-[#F8F5F0] outline-none cursor-pointer font-sans"
      >
        <option value="" className="bg-[#0C0B09]">Seçiniz</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#1A1714]">{o}</option>
        ))}
      </motion.select>
    </div>
  );
}

export function ZsSuccessMessage({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="pt-12 text-center"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="w-10 h-px bg-[#C4A882] mx-auto mb-8 origin-center"
      />
      <p className="font-serif text-2xl text-[#F8F5F0] mb-3 font-semibold">{title}</p>
      <p className="text-sm text-white/40">{subtitle}</p>
    </motion.div>
  );
}
```

---

## FILE: `components/zs/LanguageToggle.tsx`

```
"use client";

import { type Lang } from "@/lib/zs/i18n";
import { trackZsEvent } from "@/lib/zs/analytics";

export function LanguageToggle({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
}) {
  const toggle = () => {
    const next = lang === "tr" ? "en" : "tr";
    trackZsEvent({ name: "lang_switch", lang: next });
    onChange(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "tr" ? "Switch to English" : "Türkçe'ye geç"}
      className="text-[11px] font-semibold tracking-wider uppercase text-white/40 hover:text-white/80 border border-white/10 hover:border-white/25 rounded-md px-2.5 py-1 bg-transparent cursor-pointer transition-colors"
    >
      {lang === "tr" ? "EN" : "TR"}
    </button>
  );
}
```

---

## FILE: `components/zs/StickyMiniCta.tsx`

```
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { MagneticLink } from "./MagneticLink";
import { trackZsEvent } from "@/lib/zs/analytics";

export function StickyMiniCta({ text, cta }: { text: string; cta: string }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearFooter = y + window.innerHeight > document.documentElement.scrollHeight - 900;
      setVisible(y > 520 && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (reduce) return null;

  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-0 inset-x-0 z-40 pb-4 px-4 md:px-6 ${visible ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#0A0A0B]/95 backdrop-blur-xl px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
          <p className="text-xs md:text-sm text-white/55 leading-snug hidden sm:block">{text}</p>
          <MagneticLink
            href="#denetim"
            className="zs-btn-primary zs-btn-glow text-xs md:text-sm px-4 py-2 shrink-0 ml-auto"
            onClick={() => trackZsEvent({ name: "cta_click", target: "sticky_audit", href: "#denetim" })}
          >
            <Play size={12} fill="currentColor" /> {cta}
          </MagneticLink>
        </div>
      </div>
    </motion.div>
  );
}
```

---

## FILE: `components/zs/AvailabilityBadge.tsx`

```
"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AvailabilityBadge({ label, slots }: { label: string; slots: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="inline-flex items-center gap-2.5 rounded-full border border-[#C4A882]/25 bg-[#C4A882]/8 px-3.5 py-1.5 mb-6"
    >
      <span className="relative flex h-2 w-2">
        {!reduce && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
        )}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C4A882]">{label}</span>
      <span className="text-[11px] text-white/50">·</span>
      <span className="text-[11px] text-white/65">{slots}</span>
    </motion.div>
  );
}
```

---

## FILE: `components/zs/PackageComparison.tsx`

```
"use client";

import { Check, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "./motion";
import { MagneticLink } from "./MagneticLink";
import { trackZsEvent } from "@/lib/zs/analytics";
import type { ZsCopy } from "@/lib/zs/i18n";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check size={16} className="text-[#C4A882] mx-auto" />;
  }
  if (value === false) {
    return <Minus size={16} className="text-white/20 mx-auto" />;
  }
  return <span className="text-sm text-white/70">{value}</span>;
}

export function PackageComparison({ copy }: { copy: ZsCopy["compare"] }) {
  return (
    <div className="mt-16">
      <Reveal className="text-center mb-10">
        <p className="zs-eyebrow-accent mb-3">{copy.eyebrow}</p>
        <h3 className="zs-title text-[clamp(22px,3vw,32px)] mb-3">{copy.title}</h3>
        <p className="text-sm text-white/45 max-w-md mx-auto">{copy.sub}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="overflow-x-auto zs-scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-xs font-medium text-white/35 py-4 pr-4 w-[34%]" />
                {copy.packages.map((p) => (
                  <th key={p} className="text-center text-sm font-semibold text-white py-4 px-3">
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.features.map((feature, i) => (
                <tr key={feature} className="border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors">
                  <td className="text-sm text-white/50 py-3.5 pr-4">{feature}</td>
                  {copy.rows[i].map((cell, j) => (
                    <td key={j} className="text-center py-3.5 px-3">
                      <Cell value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="mt-8 text-center">
        <p className="text-xs text-white/40 mb-4">{copy.note}</p>
        <MagneticLink
          href="#denetim"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4A882] hover:text-white no-underline transition-colors"
          onClick={() => trackZsEvent({ name: "cta_click", target: "compare_audit", href: "#denetim" })}
        >
          {copy.cta} <ArrowRight size={12} />
        </MagneticLink>
      </Reveal>
    </div>
  );
}
```

---

## FILE: `components/zs/CaseStudy.tsx`

```
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";
import { CountUp } from "./CountUp";
import type { ZsCopy } from "@/lib/zs/i18n";

const VORA_URL = "https://vora-istanbul.vercel.app";

export function CaseStudy({ copy, image }: { copy: ZsCopy["caseStudy"]; image: string }) {
  return (
    <section id="case-study" className="relative py-16 md:py-24 border-t border-white/[0.06] bg-[#0A0A0B] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(107,30,36,0.12)_0%,transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <Reveal className="mb-12">
          <p className="zs-eyebrow-accent mb-3">{copy.eyebrow}</p>
          <h2 className="zs-title text-[clamp(28px,3.5vw,44px)]">{copy.title}</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal variant="left">
            <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#111]">
              <div className="aspect-[4/3] relative">
                <Image
                  src={image}
                  alt="VORA Istanbul"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            {[
              { label: copy.problem, text: copy.problemText },
              { label: copy.solution, text: copy.solutionText },
            ].map((block, i) => (
              <Reveal key={block.label} delay={i * 0.08} variant="right">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C4A882] mb-2">{block.label}</p>
                  <p className="text-base text-white/60 leading-relaxed">{block.text}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.16} variant="right">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C4A882] mb-4">{copy.result}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {copy.metrics.map((m) => (
                    <div key={m.label} className="zs-card p-4 text-center">
                      <div className="font-serif text-xl font-bold text-white mb-1">
                        <CountUp value={m.value} />
                      </div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wide">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={VORA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4A882] hover:text-white no-underline transition-colors w-fit"
              >
                {copy.cta} <ArrowUpRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## FILE: `components/zs/ProcessProof.tsx`

```
"use client";

import { FileText, Shield, LayoutDashboard } from "lucide-react";
import { Reveal } from "./motion";
import type { ZsCopy } from "@/lib/zs/i18n";

const icons = [FileText, Shield, LayoutDashboard];

function MockPanel({
  title,
  lines,
  accent,
}: {
  title: string;
  lines: number;
  accent: string;
}) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-[#0A0A0B] overflow-hidden h-full">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <span className={`w-2 h-2 rounded-full ${accent}`} />
        <span className="text-[11px] font-medium text-white/50">{title}</span>
      </div>
      <div className="p-4 space-y-2.5">
        <div className="h-2 rounded bg-white/10 w-3/4" />
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded bg-white/[0.06]"
            style={{ width: `${55 + (i % 3) * 12}%` }}
          />
        ))}
        <div className="mt-4 h-16 rounded-lg bg-[#6B1E24]/15 border border-[#6B1E24]/25" />
      </div>
      <div className="absolute inset-0 backdrop-blur-[2px] bg-[#050505]/20 pointer-events-none" />
      <div className="absolute bottom-3 right-3 text-[9px] font-medium uppercase tracking-widest text-white/25">
        Örnek
      </div>
    </div>
  );
}

export function ProcessProof({ copy }: { copy: ZsCopy["process"]["proof"] }) {
  const accents = ["bg-[#C4A882]", "bg-[#6B1E24]", "bg-emerald-500/80"];

  return (
    <div className="mt-16 pt-16 border-t border-white/[0.06]">
      <Reveal className="text-center mb-10">
        <p className="zs-eyebrow-accent mb-3">{copy.eyebrow}</p>
        <h3 className="zs-title text-[clamp(22px,3vw,32px)] mb-3">{copy.title}</h3>
        <p className="text-sm text-white/45 max-w-lg mx-auto">{copy.sub}</p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-4">
        {copy.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 0.08} variant="scale">
              <div className="flex flex-col gap-4 h-full">
                <MockPanel title={item.title} lines={4 + i} accent={accents[i]} />
                <div className="flex gap-3 items-start px-1">
                  <Icon size={16} className="text-[#C4A882] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
```

---

## FILE: `components/zs/ZsFooter.tsx`

```
"use client";

import type { ZsCopy } from "@/lib/zs/i18n";

export function ZsFooter({ copy }: { copy: ZsCopy["footer"] }) {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-12 mb-10">
          <div>
            <a href="#" className="font-serif text-xl font-bold text-[#F8F5F0] no-underline block mb-4">
              Zesira<span className="text-white/50">.</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">{copy.tagline}</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">Nav</p>
            <nav className="flex flex-col gap-2.5">
              {copy.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 no-underline hover:text-[#C4A882] transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">{copy.contact}</p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:slaaylmzz8@gmail.com"
                className="text-sm text-white/50 no-underline hover:text-white/80 transition-colors"
              >
                slaaylmzz8@gmail.com
              </a>
              <a
                href="https://wa.me/905456649930"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/50 no-underline hover:text-[#C4A882] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="#denetim"
                className="text-sm text-[#C4A882] no-underline hover:text-white transition-colors w-fit"
              >
                {copy.nav.find((l) => l.href === "#denetim")?.label ?? "Denetim"}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-white/25">{copy.rights}</span>
          <span className="text-[10px] text-white/20">Istanbul · Remote-first</span>
        </div>
      </div>
    </footer>
  );
}
```

---

## FILE: `components/zs/ParallaxImage.tsx`

```
"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.15,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={reduce ? undefined : { y }}
        className="w-full h-[115%] object-cover -mt-[7.5%]"
      />
    </div>
  );
}
```
