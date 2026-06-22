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
    title: "Dört şeyi mükemmel yapıyoruz — geri kalanı değil.",
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
      {
        title: "Akıllı Otomasyon",
        tag: "İş süreçleri",
        desc: "Web siteniz ve iş süreçleriniz artık sizin yerinize çalışıyor. Müşteri takibi, otomatik bildirimler ve CRM entegrasyonlarıyla zamandan kazanın, gelirden değil.",
        bullets: ["Otomatik müşteri takibi", "E-posta & bildirim akışları", "CRM entegrasyonu"],
        cta: "Otomasyon Kur",
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
    title: "AFTER — members club lansmanı",
    problem: "Problem",
    problemText:
      "Gizemli bir gece mekânı için dijitalde sinematik ilk izlenim gerekiyordu — şablon siteler atmosferi taşımıyordu.",
    solution: "Çözüm",
    solutionText:
      "Scroll chapter deneyimi: kapı animasyonu, video katmanları, yatay program vitrini ve TR/EN dil desteği.",
    result: "Sonuç",
    metrics: [
      { label: "Sayfa", value: "5" },
      { label: "Animasyon", value: "8+" },
      { label: "Dil", value: "TR / EN" },
      { label: "Paket", value: "Lansman" },
    ],
    cta: "Canlı demoyu incele",
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
    title: "We do four things exceptionally — nothing else.",
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
      {
        title: "Smart Automation",
        tag: "Workflows",
        desc: "Your website and business processes now work for you. Save time — not revenue — with client tracking, automated notifications, and CRM integrations.",
        bullets: ["Automated client follow-up", "Email & notification flows", "CRM integration"],
        cta: "Set Up Automation",
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
    title: "AFTER — members club launch",
    problem: "Problem",
    problemText:
      "A mysterious night venue needed a cinematic digital first impression — template sites couldn't carry the atmosphere.",
    solution: "Solution",
    solutionText:
      "Scroll chapter experience: door animation, video layers, horizontal program showcase, and TR/EN support.",
    result: "Outcome",
    metrics: [
      { label: "Pages", value: "5" },
      { label: "Motion", value: "8+" },
      { label: "Languages", value: "TR / EN" },
      { label: "Package", value: "Launch" },
    ],
    cta: "View live demo",
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
