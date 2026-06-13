"use client";
import { useState, useEffect } from "react";
import { Pricing } from "@/components/ui/pricing";

export default function Home() {
  // ── Intro states ──
  const [introDone, setIntroDone] = useState(false);
  const [voraOp, setVoraOp] = useState(0);
  const [celesteOp, setCelesteOp] = useState(0);
  const [aurelleOp, setAurelleOp] = useState(0);
  const [studioOp, setStudioOp] = useState(0);
  const [tagOp, setTagOp] = useState(0);
  const [overlayOp, setOverlayOp] = useState(1);

  // ── UI states ──
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    brand: "", name: "", email: "", phone: "",
    social: "", paket: "", butce: "", asama: "", mesaj: "",
  });

  useEffect(() => {
    const seq: [number, () => void][] = [
      [300,  () => setVoraOp(1)],
      [1900, () => { setCelesteOp(1); setVoraOp(0); }],
      [3500, () => { setAurelleOp(1); setCelesteOp(0); }],
      [5100, () => setAurelleOp(0)],
      [5700, () => setStudioOp(1)],
      [6600, () => setTagOp(1)],
      [7800, () => setOverlayOp(0)],
      [9500, () => setIntroDone(true)],
    ];
    const timers = seq.map(([t, fn]) => setTimeout(fn, t));
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    try {
      const res = await fetch("https://formspree.io/f/mqeoypwz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          marka:    form.brand,
          isim:     form.name,
          email:    form.email,
          telefon:  form.phone,
          social:   form.social,
          paket:    form.paket,
          butce:    form.butce,
          asama:    form.asama,
          mesaj:    form.mesaj,
        }),
      });
      if (res.ok) setSent(true);
    } catch {
      setSent(true); // fallback — show success anyway
    }
  };

  // ── Design tokens ──
  const C = {
    bg:     "#F8F5F0",
    ink:    "#1A1714",
    ash:    "#7A7268",
    bordo:  "#6B1E24",
    dark:   "#14110E",
    sand:   "#C4A882",
    border: "rgba(26,23,20,0.08)",
    serif:  "'Bodoni Moda', Georgia, serif",
    sans:   "Montserrat, sans-serif",
  };

  // ── Image URLs from real project sites ──
  const IMG = {
    voraHero:      "https://vora-istanbul.vercel.app/images/vision.png",
    celesteHero:   "https://maison-celeste-xi.vercel.app/images/homepage.png",
    aurelleHero:   "https://aurelle-nine.vercel.app/images/hero-reception.jpg",
    voraCard:      "https://vora-istanbul.vercel.app/images/facade-detail.png",
    celesteCard:   "https://maison-celeste-xi.vercel.app/images/thehouse.png",
    aurelleCard:   "https://aurelle-nine.vercel.app/images/philosophy-book.jpg",
  };

  // ── Project data ──
  const projects = [
    {
      num: "01", name: "VORA Istanbul",
      real: true, type: "GERÇEK PROJE",
      paket: "Luxury Launch Experience",
      sektor: "Konut · Lüks Rezidans · Boğaz",
      desc: "Boğaz'da on iki rezidans için tam kapsamlı marka lansmanı. Çift dilli deneyim, hareket tasarımı ve kapsamlı içerik sistemi.",
      tags: ["Web Sitesi", "TR / EN", "Animasyon", "CMS", "Sosyal Medya Kiti"],
      url: "https://vora-istanbul.vercel.app",
      img: IMG.voraCard,
      flip: false,
    },
    {
      num: "02", name: "Maison Céleste",
      real: false, type: "KONSEPT PROJE",
      paket: "Editorial Brand Site",
      sektor: "Moda · Bridal Couture · Paris",
      desc: "Paris merkezli bir bridal couture evi için editoryal marka deneyimi. Koleksiyon sayfaları, atölye anlatımı ve hikâye odaklı tasarım.",
      tags: ["Web Sitesi", "Editoryal Tasarım", "Koleksiyon Sayfaları", "Marka Hikâyesi"],
      url: "https://maison-celeste-xi.vercel.app",
      img: IMG.celesteCard,
      flip: true,
    },
    {
      num: "03", name: "Aurelle Skin Atelier",
      real: false, type: "KONSEPT PROJE",
      paket: "Starter Presence",
      sektor: "Güzellik · Dermatoloji · Nişantaşı",
      desc: "Dermatoloji liderliğinde bir cilt atölyesi için sade ve güven veren dijital varlık. Minimal ama profesyonel bir ilk izlenim.",
      tags: ["Web Sitesi", "Randevu Sistemi", "Marka Yönlendirmesi", "Mobil Uyumlu"],
      url: "https://aurelle-nine.vercel.app",
      img: IMG.aurelleCard,
      flip: false,
    },
  ];

  // ── Package data ──
  const packages = [
    {
      num: "I", name: "Starter Presence",
      price: "9.900 ₺", normalPrice: "14.900 ₺",
      tagline: "Dijital varlığını oluşturmak isteyen markalar için.",
      kimFor: "Yeni kurulan markalar, solo kurucular ve dijital varlığına ilk adımını atan işletmeler.",
      includes: [
        "3 sayfaya kadar özel tasarım",
        "Mobil uyumlu tasarım",
        "İletişim formu",
        "WhatsApp butonu",
        "Temel SEO ayarları",
        "Domain bağlantısı",
        "Yayına alma desteği",
        "1 revizyon turu",
      ],
      excludes: ["CMS (içerik yönetim sistemi)", "Animasyon", "Çoklu dil desteği"],
      platform: "Framer / Next.js",
      timeline: "2–3 hafta",
      revisions: "1 tur",
      project: { name: "Aurelle Skin Atelier", url: "https://aurelle-nine.vercel.app" },
      dark: false,
    },
    {
      num: "II", name: "Editorial Brand Site",
      price: "24.900 ₺", normalPrice: "34.900 ₺",
      badge: "En Çok Tercih Edilen",
      tagline: "Marka deneyimini derinleştirmek isteyen işletmeler için.",
      kimFor: "Büyüyen markalar, hizmet sunan işletmeler, hikâyesini ve estetiğini öne çıkarmak isteyen stüdyolar.",
      includes: [
        "Starter kapsamındaki her şey",
        "6 sayfaya kadar özel tasarım",
        "Koleksiyon / hizmet sunum sayfaları",
        "Marka hikâyesi bölümü",
        "Gelişmiş içerik yapısı",
        "Editoryal tasarım anlayışı",
        "Stratejik yönlendirme",
        "Google Business Profili kurulumu",
        "2 revizyon turu",
      ],
      excludes: ["CMS (içerik yönetim sistemi)", "Animasyon", "Çoklu dil desteği"],
      platform: "Framer / Next.js / WordPress",
      timeline: "4–6 hafta",
      revisions: "2 tur",
      project: { name: "Maison Céleste", url: "https://maison-celeste-xi.vercel.app" },
      dark: true,
    },
    {
      num: "III", name: "Luxury Launch Experience",
      price: "44.900 ₺", normalPrice: "64.900 ₺",
      tagline: "Kalıcı bir izlenim bırakmak isteyen markalar için.",
      kimFor: "Yeni bir dönem açan markalar, prestijli lansman gerektiren projeler ve uluslararası hedef kitleye hitap eden işletmeler.",
      includes: [
        "Editorial kapsamındaki her şey",
        "Animasyon ve hareket tasarımı",
        "Çoklu dil desteği (TR / EN)",
        "CMS — içerik yönetim sistemi",
        "Sosyal medya kiti",
        "Google Business Profili",
        "3 revizyon turu",
        "30 gün yayın sonrası destek",
      ],
      excludes: [],
      platform: "Next.js (önerilir)",
      timeline: "6–10 hafta",
      revisions: "3 tur",
      project: { name: "VORA Istanbul", url: "https://vora-istanbul.vercel.app" },
      dark: false,
    },
  ];

  // ── Process steps ──
  const steps = [
    { n: "01", title: "Keşif",       desc: "Markanızı, hedef kitlenizi ve proje kapsamını birlikte belirliyoruz." },
    { n: "02", title: "Teklif",      desc: "Detaylı proje teklifi ve bütçe netleştirilir." },
    { n: "03", title: "Sözleşme",    desc: "Sözleşme imzalanır, ön ödeme alınır. Proje resmi olarak başlar." },
    { n: "04", title: "İçerik",      desc: "Tüm metin, görsel ve marka materyalleri toplanır." },
    { n: "05", title: "Tasarım",     desc: "Sayfa tasarımları hazırlanır ve onaylanır." },
    { n: "06", title: "Yayın",       desc: "Site inşa edilir, test edilir ve yayına alınır." },
    { n: "07", title: "Destek",      desc: "Yayın sonrası 30 gün teknik destek ve küçük düzeltmeler." },
  ];

  return (
    <main style={{ background: C.bg, color: C.ink, fontFamily: C.sans, overflowX: "hidden" }}>

      {/* ─────────────────── INTRO ─────────────────── */}
      {!introDone && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "#0C0B09",
          opacity: overlayOp,
          transition: "opacity 2s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: overlayOp < 0.05 ? "none" : "all",
        }}>
          {/* Project images — cross-fading */}
          {[
            { src: IMG.voraHero,    op: voraOp },
            { src: IMG.celesteHero, op: celesteOp },
            { src: IMG.aurelleHero, op: aurelleOp },
          ].map((img, i) => (
            <img key={i} src={img.src} alt="" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover",
              opacity: img.op * 0.6,
              transition: "opacity 1.6s ease",
            }} />
          ))}

          {/* Vignette */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(12,11,9,0.2) 0%, rgba(12,11,9,0.65) 100%)" }} />

          {/* Studio reveal */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "14px",
          }}>
            <div className="intro-wordmark" style={{
              opacity: studioOp,
              transition: "opacity 1.8s ease",
              fontFamily: C.serif,
              fontSize: "clamp(22px, 3.5vw, 46px)",
              letterSpacing: "0.22em",
              color: "#F8F5F0",
              fontWeight: 400,
              textTransform: "uppercase",
            }}>
              Zesira Studio
            </div>
            <div className="intro-tagline" style={{
              opacity: tagOp,
              transition: "opacity 1.4s ease",
              fontFamily: C.sans,
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "rgba(248,245,240,0.45)",
              textTransform: "uppercase",
              textAlign: "center",
              maxWidth: "440px",
              padding: "0 24px",
            }}>
              Modern markalar için web siteleri, kimlik sistemleri ve dijital deneyimler
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────── NAV ─────────────────── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(248,245,240,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: `0.5px solid ${C.border}`,
      }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          padding: "0 48px", height: "60px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <a href="#" style={{ textDecoration: "none", color: C.ink }}>
            <span style={{ fontFamily: C.serif, fontSize: "15px", letterSpacing: "0.05em" }}>Zesira Studio</span>
          </a>

          <nav style={{ display: "flex", gap: "36px" }} className="nav-desktop">
            {[["Projeler","#projeler"],["Paketler","#paketler"],["Süreç","#surec"],["Hakkında","#hakkinda"],["İletişim","#iletisim"]].map(([label, href]) => (
              <a key={href} href={href} style={{
                fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.18em",
                textTransform: "uppercase", color: C.ash, textDecoration: "none",
              }}>{label}</a>
            ))}
          </nav>

          <a href="#iletisim" className="nav-desktop" style={{
            fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#F8F5F0",
            background: C.bordo, padding: "8px 18px", textDecoration: "none",
          }}>
            Başlayalım
          </a>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile" style={{
            background: "none", border: "none", cursor: "pointer",
            display: "none", flexDirection: "column", gap: "5px", padding: "4px",
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: "22px", height: "1px", background: C.ink, transition: "all 0.3s",
                transform: menuOpen ? (i===0 ? "rotate(45deg) translateY(6px)" : i===2 ? "rotate(-45deg) translateY(-6px)" : "none") : "none",
                opacity: menuOpen && i===1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div style={{
            background: C.bg, borderTop: `0.5px solid ${C.border}`,
            padding: "24px 48px", display: "flex", flexDirection: "column", gap: "20px",
          }}>
            {[["Projeler","#projeler"],["Paketler","#paketler"],["Süreç","#surec"],["Hakkında","#hakkinda"],["İletişim","#iletisim"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                fontFamily: C.sans, fontSize: "11px", letterSpacing: "0.2em",
                textTransform: "uppercase", color: C.ash, textDecoration: "none",
              }}>{label}</a>
            ))}
            <a href="#iletisim" onClick={() => setMenuOpen(false)} style={{
              fontFamily: C.sans, fontSize: "11px", letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#F8F5F0",
              background: C.bordo, padding: "10px 18px", textDecoration: "none",
              display: "inline-block", width: "fit-content",
            }}>Başlayalım</a>
          </div>
        )}
      </header>

      {/* ─────────────────── DEĞER ÖNERİSİ ─────────────────── */}
      <section style={{ paddingTop: "120px", borderBottom: `0.5px solid ${C.border}` }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 48px" }}>
          <p style={{
            fontFamily: C.serif,
            fontSize: "clamp(17px, 2vw, 24px)",
            fontWeight: 400,
            color: C.ash,
            lineHeight: 1.7,
            maxWidth: "680px",
          }}>
            Hazır şablonlar üretmiyoruz. Her proje, o markanın kimliği için sıfırdan tasarlanır — teslimattan önce bile süreç başlamış olur.
          </p>
        </div>
      </section>

      {/* ─────────────────── PROJELER ─────────────────── */}
      <section id="projeler">
        {/* Section header */}
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 48px 56px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p style={{ fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: C.bordo, marginBottom: "12px" }}>Seçili Projeler</p>
              <h2 style={{ fontFamily: C.serif, fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, color: C.ink, lineHeight: 1.2 }}>
                Her proje bir dünyadır.
              </h2>
            </div>
            <p style={{ fontFamily: C.sans, fontSize: "10px", color: C.ash, maxWidth: "260px", lineHeight: 2, textAlign: "right" }} className="nav-desktop">
              Gerçek projeler ve konsept çalışmalar — her biri farklı bir paketi temsil eder.
            </p>
          </div>
        </div>

        {/* Project rows */}
        {projects.map((p) => (
          <div key={p.num} style={{ borderTop: `0.5px solid ${C.border}` }}>
            <div style={{
              maxWidth: "1200px", margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }} className="project-row">
              {/* Image */}
              <div style={{
                order: p.flip ? 2 : 1,
                aspectRatio: "4/3",
                overflow: "hidden",
                position: "relative",
              }}>
                <img src={p.img} alt={p.name} style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", display: "block",
                  transition: "transform 0.6s ease",
                }} className="project-img" />
              </div>

              {/* Info */}
              <div className="project-info" style={{
                order: p.flip ? 1 : 2,
                padding: "56px 52px",
                display: "flex", flexDirection: "column", justifyContent: "center",
                borderLeft: p.flip ? "none" : `0.5px solid ${C.border}`,
                borderRight: p.flip ? `0.5px solid ${C.border}` : "none",
              }}>
                {/* Type badge */}
                <div style={{ marginBottom: "20px" }}>
                  <span style={{
                    fontFamily: C.sans, fontSize: "8.5px", letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    background: p.real ? C.bordo : "transparent",
                    color: p.real ? "#F8F5F0" : C.ash,
                    border: p.real ? "none" : `0.5px solid ${C.border}`,
                    padding: "3px 10px",
                  }}>
                    {p.type}
                  </span>
                </div>

                <div style={{ fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(26,23,20,0.3)", marginBottom: "6px" }}>{p.num}</div>

                <h3 style={{
                  fontFamily: C.serif, fontSize: "clamp(20px, 2.2vw, 30px)",
                  fontWeight: 400, color: C.ink, lineHeight: 1.2, marginBottom: "6px",
                }}>{p.name}</h3>

                <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: C.bordo, marginBottom: "24px" }}>{p.paket}</div>

                <div style={{ width: "28px", height: "0.5px", background: C.border, marginBottom: "20px" }} />

                <p style={{ fontFamily: C.sans, fontSize: "11px", color: C.ash, lineHeight: 2, marginBottom: "16px", maxWidth: "340px" }}>{p.desc}</p>

                <div style={{ fontFamily: C.sans, fontSize: "10px", color: "rgba(26,23,20,0.35)", marginBottom: "24px", letterSpacing: "0.06em" }}>{p.sektor}</div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "32px" }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: C.sans, fontSize: "8.5px", letterSpacing: "0.08em",
                      color: "rgba(26,23,20,0.38)", border: `0.5px solid ${C.border}`,
                      padding: "3px 10px",
                    }}>{tag}</span>
                  ))}
                </div>

                <a href={p.url} target="_blank" rel="noreferrer" style={{
                  fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.18em",
                  textTransform: "uppercase", color: C.ink, textDecoration: "none",
                  borderBottom: `0.5px solid ${C.ink}`, paddingBottom: "2px",
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  width: "fit-content", transition: "color 0.3s, border-color 0.3s",
                }}>
                  Projeyi İncele <span>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ─────────────────── PAKETLER ─────────────────── */}
      <Pricing
        title="Hangi paket size uygun?"
        description="Her paket farklı bir ihtiyaca ve sürece göre tasarlandı."
        plans={[
          {
            name: "Starter Presence",
            price: "9.900 ₺",
            normalPrice: "14.900 ₺",
            features: [
              "3 sayfaya kadar özel tasarım",
              "Mobil uyumlu tasarım",
              "İletişim formu",
              "WhatsApp butonu",
              "Temel SEO ayarları",
              "Domain bağlantısı",
              "Yayına alma desteği",
              "1 revizyon turu",
            ],
            notIncluded: ["CMS (içerik yönetim sistemi)", "Animasyon", "Çoklu dil desteği"],
            description: "Yeni kurulan markalar, solo kurucular ve dijital varlığına ilk adımını atan işletmeler.",
            buttonText: "Teklif Al",
            href: "#iletisim",
            isPopular: false,
            platform: "Framer / Next.js",
            delivery: "2–3 hafta",
            revisions: "1 tur",
          },
          {
            name: "Editorial Brand Site",
            price: "24.900 ₺",
            normalPrice: "34.900 ₺",
            badge: "En Çok Tercih Edilen",
            features: [
              "Starter kapsamındaki her şey",
              "6 sayfaya kadar özel tasarım",
              "Koleksiyon / hizmet sunum sayfaları",
              "Marka hikâyesi bölümü",
              "Gelişmiş içerik yapısı",
              "Editoryal tasarım anlayışı",
              "Stratejik yönlendirme",
              "Google Business Profili kurulumu",
              "2 revizyon turu",
            ],
            notIncluded: ["CMS (içerik yönetim sistemi)", "Animasyon", "Çoklu dil desteği"],
            description: "Büyüyen markalar, hizmet sunan işletmeler, hikâyesini ve estetiğini öne çıkarmak isteyen stüdyolar.",
            buttonText: "Teklif Al",
            href: "#iletisim",
            isPopular: true,
            platform: "Framer / Next.js / WordPress",
            delivery: "4–6 hafta",
            revisions: "2 tur",
          },
          {
            name: "Luxury Launch Experience",
            price: "44.900 ₺",
            normalPrice: "64.900 ₺",
            features: [
              "Editorial kapsamındaki her şey",
              "Animasyon ve hareket tasarımı",
              "Çoklu dil desteği (TR / EN)",
              "CMS — içerik yönetim sistemi",
              "Sosyal medya kiti",
              "Google Business Profili",
              "3 revizyon turu",
              "30 gün yayın sonrası destek",
            ],
            description: "Yeni bir dönem açan markalar, prestijli lansman gerektiren projeler ve uluslararası hedef kitleye hitap eden işletmeler.",
            buttonText: "Teklif Al",
            href: "#iletisim",
            isPopular: false,
            platform: "Next.js (önerilir)",
            delivery: "6–10 hafta",
            revisions: "3 tur",
          },
        ]}
      />

      {/* ─────────────────── SÜREÇ ─────────────────── */}
      <section id="surec" style={{ borderTop: `0.5px solid ${C.border}`, padding: "100px 0" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: "60px" }}>
            <p style={{ fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: C.bordo, marginBottom: "12px" }}>Süreç</p>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, marginBottom: "14px" }}>Nasıl çalışıyoruz?</h2>
            <p style={{ fontFamily: C.sans, fontSize: "11px", color: C.ash, lineHeight: 2, maxWidth: "440px" }}>
              Her proje keşiften desteğe yedi adımda ilerler. Şeffaf bir süreç, net beklentiler.
            </p>
          </div>

          {/* Steps */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }} className="steps-grid">
            {steps.map((s, i) => (
              <div key={s.n} style={{
                borderLeft: `0.5px solid ${C.border}`,
                padding: "24px 18px",
              }}>
                <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.14em", color: C.bordo, marginBottom: "12px" }}>{s.n}</div>
                <div style={{ fontFamily: C.serif, fontSize: "14px", color: C.ink, marginBottom: "10px" }}>{s.title}</div>
                <p style={{ fontFamily: C.sans, fontSize: "9.5px", color: C.ash, lineHeight: 1.9 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* System note */}
          <div style={{ marginTop: "52px" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "1px", background: C.border,
              border: `0.5px solid ${C.border}`,
            }} className="system-grid">
              {[
                { title: "Teklif PDF'i",          desc: "Her müşteriye kapsam, fiyat ve takvimi içeren özel teklif belgesi hazırlanır." },
                { title: "İmzalı Sözleşme",        desc: "Proje başlamadan önce her iki tarafı koruyan standart sözleşme imzalanır." },
                { title: "İçerik Talep Formu",     desc: "Ön ödeme sonrası müşteri, proje için gereken tüm içerikleri yapılandırılmış formla sunar." },
                { title: "Müşteri Portalı",        desc: "Müşteri zesirastudio.com/baslangic üzerinden tüm adımları tek yerden yönetir." },
              ].map(item => (
                <div key={item.title} style={{ background: C.bg, padding: "24px 26px" }}>
                  <div style={{ fontFamily: C.sans, fontSize: "8.5px", letterSpacing: "0.18em", textTransform: "uppercase", color: C.bordo, marginBottom: "10px" }}>{item.title}</div>
                  <p style={{ fontFamily: C.sans, fontSize: "10px", color: C.ash, lineHeight: 1.9 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px", padding: "16px 20px", background: "rgba(107,30,36,0.04)", borderLeft: `2px solid ${C.bordo}` }}>
              <p style={{ fontFamily: C.sans, fontSize: "10px", color: C.ash, lineHeight: 2 }}>
                Çoğu freelancer DM → WhatsApp → dosya gönder süreciyle ilerler. Zesira'da her proje keşiften desteğe standart bir sistemle yürür. Müşteri her aşamada ne olduğunu, ne zaman olacağını ve ne beklemesi gerektiğini bilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── HAKKINDA / ARŞİV ─────────────────── */}
      <section id="hakkinda" style={{ borderTop: `0.5px solid ${C.border}`, padding: "100px 0" }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto", padding: "0 48px",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "80px",
        }} className="about-grid container">

          {/* Left — Archive */}
          <div>
            <p style={{ fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: C.bordo, marginBottom: "32px" }}>Zesira Arşivi — 2025–2026</p>

            {[
              { name: "VORA Istanbul",       paket: "Luxury Launch Experience", img: IMG.voraCard,    url: "https://vora-istanbul.vercel.app",      real: true  },
              { name: "Maison Céleste",       paket: "Editorial Brand Site",     img: IMG.celesteCard, url: "https://maison-celeste-xi.vercel.app", real: false },
              { name: "Aurelle Skin Atelier", paket: "Starter Presence",         img: IMG.aurelleCard, url: "https://aurelle-nine.vercel.app",      real: false },
            ].map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block" }}>
                <div style={{
                  display: "grid", gridTemplateColumns: "56px 1fr",
                  gap: "16px", alignItems: "center",
                  borderTop: `0.5px solid ${C.border}`,
                  padding: "16px 0",
                  transition: "opacity 0.2s",
                }} className="archive-row">
                  {/* Thumbnail */}
                  <div style={{ width: "56px", height: "40px", overflow: "hidden", flexShrink: 0 }}>
                    <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  {/* Info */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: C.serif, fontSize: "14px", color: C.ink, marginBottom: "3px" }}>{p.name}</div>
                      <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: C.ash }}>{p.paket}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {p.real && (
                        <span style={{ fontFamily: C.sans, fontSize: "7.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#F8F5F0", background: C.bordo, padding: "2px 7px" }}>Gerçek</span>
                      )}
                      <span style={{ fontFamily: C.sans, fontSize: "11px", color: "rgba(26,23,20,0.25)" }}>→</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            <div style={{ borderTop: `0.5px solid ${C.border}`, paddingTop: "20px", marginTop: "4px" }}>
              <span style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(26,23,20,0.3)" }}>
                My Club — yakında
              </span>
            </div>
          </div>

          {/* Right — Bio */}
          <div style={{ paddingTop: "48px" }}>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(20px, 2.2vw, 30px)", fontWeight: 400, lineHeight: 1.4, marginBottom: "28px", color: C.ink }}>
              Türkiye'deki modern markalar için editoryal web deneyimleri tasarlıyoruz.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              <p style={{ fontFamily: C.sans, fontSize: "11px", color: C.ash, lineHeight: 2 }}>
                Zesira'nın arkasında Zeynep Sıla Yılmaz var. Markaların dijital varlıklarını oluştururken yalnızca güzel görünen değil, gerçekten işe yarayan sistemler kurmayı önemsiyor.
              </p>
              <p style={{ fontFamily: C.sans, fontSize: "11px", color: C.ink, lineHeight: 2, fontStyle: "italic", borderLeft: `2px solid ${C.bordo}`, paddingLeft: "16px" }}>
                "Türkiye'deki modern markalar, uluslararası kalitede bir dijital deneyimi neden burada bulamasın?"
              </p>
            </div>

            <div style={{ display: "flex", gap: "32px" }}>
              {[["3+", "Yıl Deneyim"], ["3", "Aktif Paket"], ["7", "Adımlı Süreç"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: C.serif, fontSize: "26px", color: C.ink, marginBottom: "4px" }}>{n}</div>
                  <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: C.ash }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── İLETİŞİM ─────────────────── */}
      <section id="iletisim" style={{ background: C.dark, padding: "100px 0" }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto", padding: "0 48px",
          display: "grid", gridTemplateColumns: "1fr 1.4fr",
          gap: "80px",
        }} className="contact-grid container">
          {/* Left */}
          <div>
            <p style={{ fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: C.sand, marginBottom: "20px" }}>İletişim</p>
            <h2 style={{ fontFamily: C.serif, fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 400, lineHeight: 1.35, color: "#F8F5F0", marginBottom: "24px" }}>
              Projenizi konuşalım.
            </h2>
            <p style={{ fontFamily: C.sans, fontSize: "11px", color: "rgba(248,245,240,0.4)", lineHeight: 2, marginBottom: "36px" }}>
              Formu doldurun ya da doğrudan WhatsApp'tan ulaşın. 24 saat içinde geri dönerim.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a href="mailto:slaaylmzz8@gmail.com" style={{ fontFamily: C.sans, fontSize: "10px", color: "rgba(248,245,240,0.45)", textDecoration: "none", letterSpacing: "0.06em" }}>
                slaaylmzz8@gmail.com
              </a>
              <a href="https://wa.me/905456649930" target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.16em",
                textTransform: "uppercase", color: "#F8F5F0",
                background: C.bordo, padding: "10px 20px",
                textDecoration: "none", width: "fit-content",
              }}>
                WhatsApp ile Ulaş
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ paddingTop: "60px", textAlign: "center" }}>
                <div style={{ width: "40px", height: "0.5px", background: C.sand, margin: "0 auto 32px" }} />
                <p style={{ fontFamily: C.serif, fontSize: "22px", color: "#F8F5F0", marginBottom: "12px", fontWeight: 400 }}>Başvurunuz alındı.</p>
                <p style={{ fontFamily: C.sans, fontSize: "10px", color: "rgba(248,245,240,0.4)", letterSpacing: "0.1em" }}>24 saat içinde geri dönüyorum.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { key: "brand", label: "Marka Adı",            placeholder: "Markanızın adı" },
                  { key: "name",  label: "Ad Soyad",             placeholder: "Adınız ve soyadınız" },
                  { key: "email", label: "E-posta",              placeholder: "email@adresiniz.com" },
                  { key: "phone", label: "Telefon / WhatsApp",   placeholder: "+90 5XX XXX XX XX" },
                  { key: "social",label: "Instagram / Website",  placeholder: "@marka veya www.marka.com" },
                ].map(f => (
                  <div key={f.key} style={{ borderBottom: "0.5px solid rgba(248,245,240,0.1)", paddingBottom: "12px", marginBottom: "16px" }}>
                    <label style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,245,240,0.3)", display: "block", marginBottom: "6px" }}>{f.label}</label>
                    <input
                      type="text"
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      style={{ width: "100%", background: "transparent", border: "none", outline: "none", fontFamily: C.sans, fontSize: "12px", color: "#F8F5F0" }}
                    />
                  </div>
                ))}

                {/* Selects */}
                {[
                  { key: "paket", label: "İlgilenilen Paket", opts: ["Starter Presence","Editorial Brand Site","Luxury Launch Experience","Henüz karar vermedim"] },
                  { key: "butce", label: "Bütçe Aralığı",     opts: ["10.000 – 25.000 ₺","25.000 – 50.000 ₺","50.000 – 100.000 ₺","100.000 ₺ üzeri","Henüz bilmiyorum"] },
                  { key: "asama", label: "Proje Aşaması",     opts: ["Fikir aşamasında","Marka hazır, site yok","Mevcut siteyi yenilemek istiyorum","Acil — lansman tarihi var"] },
                ].map(f => (
                  <div key={f.key} style={{ borderBottom: "0.5px solid rgba(248,245,240,0.1)", paddingBottom: "12px", marginBottom: "16px" }}>
                    <label style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,245,240,0.3)", display: "block", marginBottom: "6px" }}>{f.label}</label>
                    <select
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      style={{ width: "100%", background: "transparent", border: "none", outline: "none", fontFamily: C.sans, fontSize: "12px", color: "#F8F5F0", cursor: "pointer" }}
                    >
                      <option value="" style={{ background: C.dark, color: C.ink }}>Seçiniz</option>
                      {f.opts.map(o => <option key={o} value={o} style={{ background: "#1E1A16", color: "#F8F5F0" }}>{o}</option>)}
                    </select>
                  </div>
                ))}

                {/* Message */}
                <div style={{ borderBottom: "0.5px solid rgba(248,245,240,0.1)", paddingBottom: "12px", marginBottom: "28px" }}>
                  <label style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,245,240,0.3)", display: "block", marginBottom: "6px" }}>Proje Hakkında</label>
                  <textarea
                    value={form.mesaj}
                    onChange={e => setForm({ ...form, mesaj: e.target.value })}
                    rows={4}
                    placeholder="Markanızı, projenizi ve beklentilerinizi kısaca anlatın..."
                    style={{ width: "100%", background: "transparent", border: "none", outline: "none", resize: "none", fontFamily: C.sans, fontSize: "12px", color: "#F8F5F0" }}
                  />
                </div>

                <button onClick={handleSubmit} style={{
                  background: C.bordo, color: "#F8F5F0",
                  fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.18em",
                  textTransform: "uppercase", padding: "14px 32px",
                  border: "none", cursor: "pointer", width: "fit-content",
                }}>
                  Başvuruyu Gönder →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────── FOOTER ─────────────────── */}
      <footer style={{
        background: C.dark, borderTop: "0.5px solid rgba(248,245,240,0.07)",
        padding: "20px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontFamily: C.serif, fontSize: "13px", color: "rgba(248,245,240,0.45)" }}>Zesira Studio</span>
        <span style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(248,245,240,0.22)" }}>© 2025</span>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Montserrat:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #F8F5F0; }
        input::placeholder, textarea::placeholder { color: rgba(248,245,240,0.2); font-style: italic; }

        /* ── Desktop ── */
        .nav-desktop { display: flex !important; }
        .nav-mobile  { display: none  !important; }
        .project-img:hover { transform: scale(1.03); }
        .archive-row:hover { opacity: 0.65; }

        /* ── Tablet ≤ 900px ── */
        @media (max-width: 900px) {
          .nav-desktop  { display: none !important; }
          .nav-mobile   { display: flex !important; }
          .project-row  { grid-template-columns: 1fr !important; }
          .package-grid { grid-template-columns: 1fr !important; }
          .about-grid   { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .steps-grid   { grid-template-columns: repeat(4, 1fr) !important; }
          .system-grid  { grid-template-columns: repeat(2, 1fr) !important; }
          /* image always on top in project rows */
          .project-row > div { order: unset !important; }
          .project-row > div:first-child { order: 1 !important; }
          .project-row > div:nth-child(2) { order: 2 !important; }
        }

        /* ── Mobile ≤ 640px ── */
        @media (max-width: 640px) {
          /* Nav */
          header > div[style] { padding-left: 20px !important; padding-right: 20px !important; }

          /* All main content containers */
          .container { padding-left: 20px !important; padding-right: 20px !important; }

          /* Section vertical padding */
          #surec,
          #hakkinda { padding: 60px 0 !important; }
          #iletisim  { padding: 60px 0 !important; }

          /* Value prop section */
          .container[style*="72px"] { padding-top: 40px !important; padding-bottom: 40px !important; }

          /* Project section header */
          .container[style*="60px 48px 56px"] { padding-top: 40px !important; padding-bottom: 32px !important; }

          /* Package header container */
          .container[style*="80px 48px 56px"] { padding-top: 52px !important; padding-bottom: 32px !important; }

          /* Package grid bottom padding */
          .package-grid.container { padding-bottom: 0 !important; }
          .package-grid > div { padding: 28px 20px 32px !important; border-right: none !important; }

          /* Project info panel */
          .project-info { padding: 32px 20px !important; border-left: none !important; border-right: none !important; }

          /* Steps */
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-grid > div { padding: 16px 14px !important; }

          /* System grid */
          .system-grid { grid-template-columns: 1fr !important; }

          /* Footer */
          footer { padding: 16px 20px !important; }

          /* Intro: smaller text on mobile */
          .intro-wordmark { font-size: 18px !important; letter-spacing: 0.14em !important; }
          .intro-tagline  { font-size: 9px !important; }
        }
      `}</style>
    </main>
  );
}
