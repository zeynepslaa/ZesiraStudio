"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", brand: "", message: "" });
  const [sent, setSent] = useState(false);

  // Intro states
  const [introPhase, setIntroPhase] = useState<"logo" | "text" | "dissolve" | "done">("logo");
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [logoBlur, setLogoBlur] = useState(8);
  const [textOpacity, setTextOpacity] = useState(0);
  const [microOpacity, setMicroOpacity] = useState(0);
  const [screenOpacity, setScreenOpacity] = useState(1);

  useEffect(() => {
    // Phase 1: Logo fades in slowly
    const t1 = setTimeout(() => { setLogoOpacity(1); setLogoBlur(0); }, 300);
    // Phase 2: Text appears beneath logo
    const t2 = setTimeout(() => { setTextOpacity(1); }, 1800);
    // Phase 3: Micro text
    const t3 = setTimeout(() => { setMicroOpacity(1); }, 2800);
    // Phase 4: Begin dissolve
    const t4 = setTimeout(() => { setScreenOpacity(0); }, 3800);
    // Phase 5: Done — remove intro
    const t5 = setTimeout(() => { setIntroPhase("done"); }, 5000);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  const handleSubmit = () => {
    if (!formData.name || !formData.message) return;
    const subject = `New inquiry from ${formData.name}${formData.brand ? ` — ${formData.brand}` : ""}`;
    const body = `Name: ${formData.name}\nBrand: ${formData.brand}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:info@zesirastudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main style={{ background: "#F5F0E8", color: "#2B1F1C", fontFamily: "'Bodoni Moda', Georgia, serif", overflowX: "hidden" }}>

      {/* ── INTRO SCREEN ── */}
      {introPhase !== "done" && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "#F5F0E8",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: screenOpacity,
          transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: screenOpacity === 0 ? "none" : "all",
        }}>

          {/* Film grain */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.045, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px", pointerEvents: "none" }} />

          {/* Vignette */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(43,31,28,0.18) 100%)", pointerEvents: "none" }} />

          {/* Ambient warm glow */}
          <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(196,168,130,0.12) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

          {/* ZS Logo */}
          <div style={{
            opacity: logoOpacity,
            filter: `blur(${logoBlur}px)`,
            transition: "opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1), filter 1.6s cubic-bezier(0.4, 0, 0.2, 1)",
            marginBottom: "40px",
          }}>
            <svg viewBox="0 0 400 400" style={{ width: "clamp(120px, 16vw, 200px)" }} xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="165" fill="none" stroke="#C4A882" strokeWidth="0.8" strokeOpacity="0.5" />
              <circle cx="200" cy="200" r="155" fill="none" stroke="#C4A882" strokeWidth="0.4" strokeOpacity="0.22" />
              <polygon points="200,30 203,40 213,40 205,46 208,57 200,51 192,57 195,46 187,40 197,40" fill="#C4A882" opacity="0.85" />
              <circle cx="55" cy="158" r="2.5" fill="#C4A882" opacity="0.35" />
              <circle cx="345" cy="158" r="2.5" fill="#C4A882" opacity="0.35" />
              <circle cx="75" cy="242" r="1.8" fill="#C4A882" opacity="0.25" />
              <circle cx="325" cy="242" r="1.8" fill="#C4A882" opacity="0.25" />
              <text x="200" y="228" textAnchor="middle" fontFamily="'Bodoni Moda', Georgia, serif" fontSize="110" fill="#2B1F1C" letterSpacing="-2" opacity="0.88">ZS</text>
              <line x1="144" y1="255" x2="196" y2="255" stroke="#C4A882" strokeWidth="0.8" opacity="0.6" />
              <circle cx="200" cy="255" r="2.5" fill="#C4A882" opacity="0.75" />
              <line x1="204" y1="255" x2="256" y2="255" stroke="#C4A882" strokeWidth="0.8" opacity="0.6" />
              <text x="200" y="290" textAnchor="middle" fontFamily="'Montserrat', sans-serif" fontSize="16" fill="#9A8878" letterSpacing="12" fontWeight="300">STUDIO</text>
            </svg>
          </div>

          {/* Studio name */}
          <div style={{
            opacity: textOpacity,
            transform: textOpacity === 1 ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1), transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            textAlign: "center",
            marginBottom: "16px",
          }}>
            <div style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontSize: "clamp(18px, 2.5vw, 26px)", letterSpacing: "0.18em", color: "#2B1F1C", fontWeight: 400, marginBottom: "6px" }}>
              ZESIRA STUDIO
            </div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#9A8878" }}>
              digital atelier for modern brands
            </div>
          </div>

          {/* Micro text */}
          <div style={{
            opacity: microOpacity,
            transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            textAlign: "center",
            marginBottom: "22px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
              <div style={{ width: "24px", height: "0.5px", background: "#C4A882", opacity: 0.6 }} />
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.22em", color: "#B09880", textTransform: "uppercase" }}>Not a website. A presence.</span>
              <div style={{ width: "24px", height: "0.5px", background: "#C4A882", opacity: 0.6 }} />
            </div>
          </div>

          {/* Bordo yıldız */}
          <div style={{
            opacity: microOpacity,
            transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
            fontSize: "18px",
            color: "#6B1E24",
            lineHeight: 1,
          }}>✦</div>
        </div>
      )}

      {/* Grain texture */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 200, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px" }} />

      {/* NAV */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(245,240,232,0.93)", backdropFilter: "blur(12px)", borderBottom: "0.5px solid rgba(43,31,28,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ textDecoration: "none" }}>
            <div style={{ fontSize: "8.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: "bold", color: "#2B1F1C", lineHeight: 1.4 }}>Zesira</div>
            <div style={{ fontSize: "8.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: "bold", color: "#2B1F1C", lineHeight: 1.4 }}>Studio</div>
          </a>

          <nav style={{ display: "flex", gap: "32px" }} className="hidden-mobile">
            {["Work", "Services", "About", "Journal", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9A8878", textDecoration: "none" }}>{item}</a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="hidden-mobile">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "#2B1F1C", background: "none", border: "none", cursor: "pointer" }}>EN</button>
              <span style={{ color: "rgba(43,31,28,0.25)", fontSize: "11px" }}>/</span>
              <button style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "#9A8878", background: "none", border: "none", cursor: "pointer" }}>TR</button>
            </div>
            <a href="#contact" style={{ background: "#6B1E24", color: "#F5F0E8", fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", padding: "8px 18px", fontWeight: 600, textDecoration: "none" }}>
              Let's Work Together
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }} className="show-mobile">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: "22px", height: "1px", background: "#2B1F1C", transition: "all 0.3s",
                transform: menuOpen ? (i === 0 ? "rotate(45deg) translateY(6px)" : i === 2 ? "rotate(-45deg) translateY(-6px)" : "none") : "none",
                opacity: menuOpen && i === 1 ? 0 : 1 }} />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: "#F5F0E8", borderTop: "0.5px solid rgba(43,31,28,0.1)", padding: "24px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {["Work", "Services", "About", "Journal", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9A8878", textDecoration: "none" }}>{item}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              style={{ background: "#6B1E24", color: "#F5F0E8", fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", padding: "12px 18px", textAlign: "center", textDecoration: "none", fontWeight: 600, marginTop: "8px" }}>
              Let's Work Together
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section style={{ paddingTop: "64px", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 40px 60px 60px" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#6B1E24", marginBottom: "20px" }}>Digital Atelier</p>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.18, color: "#2B1F1C", marginBottom: "20px", fontStyle: "italic", fontWeight: 400 }}>
            Quiet brands<br />leave the<br /><span style={{ fontStyle: "normal", color: "#6B1E24" }}>loudest marks.</span>
          </h1>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "#9A8878", lineHeight: 2, marginBottom: "28px", maxWidth: "280px" }}>
            We design digital atmospheres for brands that understand the power of restraint.
          </p>
          <a href="#work" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#6B1E24", color: "#F5F0E8", fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", padding: "12px 22px", fontWeight: 600, textDecoration: "none", width: "fit-content" }}>
            Enter the studio ↗
          </a>
        </div>

        <div style={{ position: "relative", overflow: "hidden", background: "#EDE4D8", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 40%, #E8D8C0 0%, #D4C4A8 50%, #BFB09A 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(43,31,28,0.1) 100%)" }} />
          {/* Lace pattern */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lace" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="8" fill="none" stroke="#2B1F1C" strokeWidth="0.5" />
                <circle cx="15" cy="15" r="1.5" fill="#2B1F1C" opacity="0.5" />
                <line x1="0" y1="15" x2="7" y2="15" stroke="#2B1F1C" strokeWidth="0.3" />
                <line x1="23" y1="15" x2="30" y2="15" stroke="#2B1F1C" strokeWidth="0.3" />
                <line x1="15" y1="0" x2="15" y2="7" stroke="#2B1F1C" strokeWidth="0.3" />
                <line x1="15" y1="23" x2="15" y2="30" stroke="#2B1F1C" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lace)" />
          </svg>
          {/* Logo */}
          <svg viewBox="0 0 400 400" style={{ width: "clamp(200px, 28vw, 340px)", position: "relative", zIndex: 2 }} xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="165" fill="none" stroke="#C4A882" strokeWidth="0.8" strokeOpacity="0.5" />
            <circle cx="200" cy="200" r="155" fill="none" stroke="#C4A882" strokeWidth="0.4" strokeOpacity="0.22" />
            <polygon points="200,30 203,40 213,40 205,46 208,57 200,51 192,57 195,46 187,40 197,40" fill="#C4A882" opacity="0.85" />
            <circle cx="55" cy="158" r="2.5" fill="#C4A882" opacity="0.35" />
            <circle cx="345" cy="158" r="2.5" fill="#C4A882" opacity="0.35" />
            <circle cx="75" cy="242" r="1.8" fill="#C4A882" opacity="0.25" />
            <circle cx="325" cy="242" r="1.8" fill="#C4A882" opacity="0.25" />
            <text x="200" y="228" textAnchor="middle" fontFamily="'Bodoni Moda', Georgia, serif" fontSize="110" fill="#2B1F1C" letterSpacing="-2" opacity="0.88">ZS</text>
            <line x1="144" y1="255" x2="196" y2="255" stroke="#C4A882" strokeWidth="0.8" opacity="0.6" />
            <circle cx="200" cy="255" r="2.5" fill="#C4A882" opacity="0.75" />
            <line x1="204" y1="255" x2="256" y2="255" stroke="#C4A882" strokeWidth="0.8" opacity="0.6" />
            <text x="200" y="290" textAnchor="middle" fontFamily="'Montserrat', sans-serif" fontSize="16" fill="#9A8878" letterSpacing="12" fontWeight="300">STUDIO</text>
          </svg>
        </div>
      </section>

      {/* PROCESS — koyu bordo #4A1219 */}
      <section style={{ background: "#4A1219", padding: "48px 60px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
        {[
          { num: "01", title: "Strategy", desc: "We understand your brand, audience and goals." },
          { num: "02", title: "Design", desc: "We craft a custom experience that fits your brand perfectly." },
          { num: "03", title: "Build", desc: "AI-powered systems help us deliver beautifully, fast." },
          { num: "04", title: "Launch", desc: "Your new website goes live and starts working for you." },
        ].map((s) => (
          <div key={s.num}>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: "#C4A882", marginBottom: "8px", letterSpacing: "0.14em" }}>{s.num}</div>
            <div style={{ fontSize: "14px", color: "#F5F0E8", marginBottom: "6px" }}>{s.title}</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: "rgba(245,240,232,0.38)", lineHeight: 1.8 }}>{s.desc}</div>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 60px", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "60px", alignItems: "center", borderBottom: "0.5px solid rgba(43,31,28,0.08)" }}>
        <div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#6B1E24", marginBottom: "16px" }}>AI-Powered Creative Studio</p>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "#9A8878", lineHeight: 2 }}>
            We combine AI-powered workflows with design, strategy and storytelling — giving your brand a digital presence that instantly stands out.
          </p>
        </div>
        <div style={{ paddingLeft: "40px", borderLeft: "0.5px solid rgba(43,31,28,0.08)" }}>
          <p style={{ fontSize: "22px", fontStyle: "italic", color: "#2B1F1C", lineHeight: 1.5, marginBottom: "12px" }}>Most websites are made to be seen.</p>
          <p style={{ fontSize: "22px", fontStyle: "italic", color: "#B09880", lineHeight: 1.5, marginBottom: "20px" }}>We create them to be felt.</p>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "#9A8878", lineHeight: 2 }}>
            A digital atelier for modern brands — where everything is intentional. A softness, a movement, a silence. Because aesthetics are never accidental. They are decisions.
          </p>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: "80px 60px", borderBottom: "0.5px solid rgba(43,31,28,0.08)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: "#6B1E24", marginBottom: "8px" }}>Selected Work</p>
            <h2 style={{ fontSize: "28px", color: "#2B1F1C", fontWeight: 400 }}>Every project is a world of its own.</h2>
          </div>
          <a href="#contact" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9A8878", borderBottom: "0.5px solid rgba(107,30,36,0.3)", paddingBottom: "2px", textDecoration: "none" }}>View All Projects →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>

          {/* MY CLUB — Real project */}
          <div className="work-card" style={{ cursor: "pointer" }}>
            <div style={{ aspectRatio: "4/3", background: "#EDE4D4", marginBottom: "12px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 35% 30%, #FFF8F0 0%, #EDE4D4 60%, #C4B09A 100%)" }} />
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="lc2" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                    <circle cx="9" cy="9" r="5.5" fill="none" stroke="rgba(180,160,130,0.5)" strokeWidth="0.5" />
                    <circle cx="9" cy="9" r="1" fill="rgba(180,160,130,0.4)" />
                    <line x1="0" y1="9" x2="3.5" y2="9" stroke="rgba(180,160,130,0.3)" strokeWidth="0.4" />
                    <line x1="14.5" y1="9" x2="18" y2="9" stroke="rgba(180,160,130,0.3)" strokeWidth="0.4" />
                    <line x1="9" y1="0" x2="9" y2="3.5" stroke="rgba(180,160,130,0.3)" strokeWidth="0.4" />
                    <line x1="9" y1="14.5" x2="9" y2="18" stroke="rgba(180,160,130,0.3)" strokeWidth="0.4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#lc2)" />
              </svg>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(43,31,28,0.2) 100%)" }} />
              <div style={{ position: "absolute", bottom: "12px", left: "14px", zIndex: 3 }}>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(107,30,36,0.6)", marginBottom: "2px" }}>Bridal Lace Atelier</div>
                <div style={{ fontSize: "14px", color: "rgba(43,31,28,0.75)", fontStyle: "italic" }}>My Club</div>
              </div>
              <div style={{ position: "absolute", bottom: "10px", right: "10px", zIndex: 3, background: "#6B1E24", color: "#F5F0E8", fontFamily: "Montserrat, sans-serif", fontSize: "9px", padding: "3px 8px", opacity: 0, transition: "opacity 0.4s" }} className="card-arrow">↗</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
              <div style={{ fontSize: "13px", color: "#2B1F1C" }}>My Club</div>
            </div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9A8878" }}>Brand & Website — Bridal Lace Atelier</div>
          </div>

          {/* LAVIN BEAUTY — Concept */}
          <div style={{ cursor: "default", opacity: 0.85 }}>
            <div style={{ aspectRatio: "4/3", background: "#E8E0D4", marginBottom: "12px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #EDE6DA 0%, #D4C8B8 100%)" }} />
              {/* Minimal placeholder cross */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="16" y1="4" x2="16" y2="28" stroke="rgba(43,31,28,0.15)" strokeWidth="0.8"/>
                  <line x1="4" y1="16" x2="28" y2="16" stroke="rgba(43,31,28,0.15)" strokeWidth="0.8"/>
                </svg>
              </div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(43,31,28,0.12) 100%)" }} />
              {/* Concept label */}
              <div style={{ position: "absolute", top: "12px", left: "12px", zIndex: 3, background: "rgba(245,240,232,0.85)", padding: "3px 8px" }}>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "7px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9A8878" }}>Concept Project</span>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "#2B1F1C", marginBottom: "4px" }}>Lavin Beauty</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#B09880" }}>Concept — Luxury Skincare</div>
          </div>

          {/* CAFÉ NOIR — Concept */}
          <div style={{ cursor: "default", opacity: 0.85 }}>
            <div style={{ aspectRatio: "4/3", background: "#2A1C14", marginBottom: "12px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #3D2518 0%, #1A1008 100%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="16" y1="4" x2="16" y2="28" stroke="rgba(196,168,130,0.2)" strokeWidth="0.8"/>
                  <line x1="4" y1="16" x2="28" y2="16" stroke="rgba(196,168,130,0.2)" strokeWidth="0.8"/>
                </svg>
              </div>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 50%, rgba(10,5,2,0.4) 100%)" }} />
              {/* Concept label */}
              <div style={{ position: "absolute", top: "12px", left: "12px", zIndex: 3, background: "rgba(26,16,8,0.8)", padding: "3px 8px" }}>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "7px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(196,168,130,0.7)" }}>Concept Project</span>
              </div>
            </div>
            <div style={{ fontSize: "13px", color: "#2B1F1C", marginBottom: "4px" }}>Café Noir</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#B09880" }}>Concept — Cinematic Café</div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div style={{ padding: "64px 60px 48px", borderBottom: "0.5px solid rgba(43,31,28,0.07)" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: "#6B1E24", marginBottom: "16px" }}>What We Build</p>
          <h2 style={{ fontSize: "26px", fontStyle: "italic", color: "#2B1F1C", lineHeight: 1.4, marginBottom: "12px" }}>Some brands are visited.<br />Others are entered.</h2>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "11px", color: "#9A8878", lineHeight: 2, maxWidth: "480px" }}>
            We don't build websites. We build worlds — atmospheric, intentional, impossible to forget.
          </p>
        </div>

        {[
          { num: "I", name: "Starter Presence", bg: "#F5F0E8", headline: "Your brand's first breath in a room.", quote: "Before a word is read, something is already felt.", body: "A color temperature. A silence between elements. Not a first website — a first impression, considered and quiet. We translate what you know about yourself into atmosphere.", for: "New brands and solo founders who refuse to begin with something generic.", outcome: "You stop apologizing for your early stage. You arrive.", cta: "Begin quietly →", includes: ["Single-page site", "Typography pairing", "Atmosphere direction", "Motion entrances", "Mobile-first build"] },
          { num: "II", name: "Editorial Brand Site", bg: "#6B1E24", dark: true, headline: "A world your clients step inside.", quote: "Every scroll is a reveal. Every section breathes.", body: "There is a difference between a brand that exists online and one that has a world. Your clients will not browse it. They will move through it — and leave feeling something they cannot name.", for: "Established brands ready for a presence that matches their actual level.", outcome: "You move from commodity to category.", cta: "Build your world →", includes: ["Multi-page site", "Editorial layout", "Scroll storytelling", "Motion design", "Typography system", "Brand voice"] },
          { num: "III", name: "Luxury Launch Experience", bg: "#F0EAE0", dark: false, headline: "This is not a launch. This is an arrival.", quote: "Some moments in a brand's life are thresholds.", body: "A rebrand. A new era. An entry into a market that doesn't yet know your name — but will. We treat your launch the way a fashion house treats a collection: with precision, restraint, and certainty.", for: "Brands entering a new era. Founders who understand the way you arrive shapes everything.", outcome: "Your brand occupies a position before it has history.", cta: "Let's talk →", includes: ["Full brand identity", "10-page site", "Motion system", "Photography direction", "Launch strategy", "30-day support"] },
        ].map((pkg, i) => (
          <div key={pkg.num} style={{ background: pkg.bg, padding: "56px 60px", borderBottom: i < 2 ? "0.5px solid rgba(43,31,28,0.07)" : "none", position: "relative" }}>
            {/* Watermark number */}
            <div style={{ position: "absolute", top: "24px", right: "56px", fontSize: "120px", fontStyle: "italic", color: pkg.dark ? "rgba(245,240,232,0.04)" : "rgba(43,31,28,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>{pkg.num}</div>

            {/* Divider glyph between packages */}
            {i > 0 && (
              <div style={{ display: "none" }} />
            )}

            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px" }}>
              <div>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", fontStyle: "italic", color: pkg.dark ? "#C4A882" : "#6B1E24", marginBottom: "12px", display: "block" }}>{pkg.num} — {pkg.name}</span>
                <h3 style={{ fontSize: "22px", color: pkg.dark ? "#F5F0E8" : "#2B1F1C", marginBottom: "12px", lineHeight: 1.25, fontWeight: 400 }}>{pkg.headline}</h3>
                <p style={{ fontSize: "12px", fontStyle: "italic", color: pkg.dark ? "rgba(245,240,232,0.42)" : "#7A6A5E", lineHeight: 1.8, marginBottom: "12px" }}>"{pkg.quote}"</p>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: pkg.dark ? "rgba(245,240,232,0.33)" : "#9A8878", lineHeight: 2 }}>{pkg.body}</p>
              </div>
              <div>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: pkg.dark ? "#C4A882" : "#6B1E24", marginBottom: "10px" }}>Who It's For</div>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: pkg.dark ? "rgba(245,240,232,0.33)" : "#9A8878", lineHeight: 1.9, marginBottom: "20px" }}>{pkg.for}</p>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: pkg.dark ? "#C4A882" : "#6B1E24", marginBottom: "10px" }}>What You Leave With</div>
                <p style={{ fontSize: "12px", fontStyle: "italic", color: pkg.dark ? "rgba(245,240,232,0.68)" : "#5C4A3E", lineHeight: 1.7 }}>{pkg.outcome}</p>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "28px", paddingTop: "20px", borderTop: `0.5px solid ${pkg.dark ? "rgba(245,240,232,0.07)" : "rgba(43,31,28,0.07)"}` }}>
              {pkg.includes.map((inc) => (
                <span key={inc} style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.08em", color: pkg.dark ? "rgba(245,240,232,0.2)" : "rgba(43,31,28,0.28)", border: `0.5px solid ${pkg.dark ? "rgba(245,240,232,0.09)" : "rgba(43,31,28,0.1)"}`, padding: "4px 10px" }}>{inc}</span>
              ))}
            </div>
            <div style={{ marginTop: "16px", display: "inline-block", fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: pkg.dark ? "rgba(245,240,232,0.22)" : "rgba(43,31,28,0.28)", borderBottom: `0.5px solid ${pkg.dark ? "rgba(245,240,232,0.1)" : "rgba(43,31,28,0.14)"}`, paddingBottom: "2px", cursor: "pointer" }}>{pkg.cta}</div>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", background: "linear-gradient(135deg, #F5F0E8, #F0EAE0)", borderTop: "0.5px solid rgba(43,31,28,0.08)" }}>
        <div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: "#6B1E24", marginBottom: "16px" }}>Contact</p>
          <h2 style={{ fontSize: "32px", color: "#2B1F1C", lineHeight: 1.3, marginBottom: "16px", fontStyle: "italic", fontWeight: 400 }}>Tell us about<br />your world.</h2>
          <p style={{ fontSize: "13px", fontStyle: "italic", color: "#9A8878", lineHeight: 1.9, marginBottom: "28px" }}>Every project begins with a conversation.<br />We'd love to hear about yours.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {["Website Design", "Brand Identity", "AI Creative Content"].map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#6B1E24", fontSize: "11px" }}>✦</span>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: "#9A8878" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {sent ? (
            <div style={{ padding: "60px 0", textAlign: "center" }}>
              <div style={{ width: "40px", height: "1px", background: "#C4A882", margin: "0 auto 28px" }} />
              <p style={{ fontSize: "20px", fontStyle: "italic", color: "#2B1F1C", marginBottom: "10px" }}>Your message is on its way.</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "10px", color: "#9A8878", letterSpacing: "0.1em" }}>We'll be in touch soon.</p>
            </div>
          ) : (
            <div>
              {[
                { key: "name", label: "Your name", placeholder: "How should we address you?" },
                { key: "brand", label: "Your brand", placeholder: "What world are we building?" },
                { key: "message", label: "Your message", placeholder: "Tell us about your vision, your brand, your world...", textarea: true },
              ].map((f) => (
                <div key={f.key} style={{ borderBottom: "0.5px solid rgba(43,31,28,0.12)", paddingBottom: "10px", marginBottom: "16px" }}>
                  <label style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9A8878", display: "block", marginBottom: "6px" }}>{f.label}</label>
                  {f.textarea ? (
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4} placeholder={f.placeholder}
                      style={{ width: "100%", background: "transparent", fontSize: "13px", fontStyle: "italic", color: "#2B1F1C", outline: "none", border: "none", resize: "none", fontFamily: "'Bodoni Moda', Georgia, serif" }} />
                  ) : (
                    <input type="text" value={formData[f.key as "name" | "brand"]}
                      onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      style={{ width: "100%", background: "transparent", fontSize: "13px", fontStyle: "italic", color: "#2B1F1C", outline: "none", border: "none", fontFamily: "'Bodoni Moda', Georgia, serif" }} />
                  )}
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", color: "rgba(43,31,28,0.28)" }}>info@zesirastudio.com</span>
                <button onClick={handleSubmit} style={{ background: "#6B1E24", color: "#F5F0E8", fontFamily: "Montserrat, sans-serif", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "10px 22px", fontWeight: 600, border: "none", cursor: "pointer" }}>Send →</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "24px 60px", borderTop: "0.5px solid rgba(43,31,28,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F5F0E8" }}>
        <span style={{ fontSize: "12px", fontStyle: "italic", color: "#2B1F1C" }}>Zesira Studio</span>
        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9A8878" }}>Not a website. A presence.</span>
        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", color: "rgba(43,31,28,0.28)" }}>© 2025</span>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Montserrat:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        input::placeholder, textarea::placeholder { color: rgba(43,31,28,0.2); font-style: italic; }
        .work-card:hover .card-arrow { opacity: 1 !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          section { grid-template-columns: 1fr !important; }
          h1 { font-size: 36px !important; }
          .pgrid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
