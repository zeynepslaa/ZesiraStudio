"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", brand: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.message) return;
    const subject = `New inquiry from ${formData.name}${formData.brand ? ` — ${formData.brand}` : ""}`;
    const body = `Name: ${formData.name}\nBrand: ${formData.brand}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:info@zesirastudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main className="overflow-x-hidden" style={{ background: "#6B1E24", color: "#F6F2EC" }}>

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: "rgba(74,18,25,0.95)", borderBottom: "0.5px solid rgba(246,242,236,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-serif text-sm tracking-[0.2em] uppercase font-bold" style={{ color: "#F6F2EC" }}>Zesira</span>
            <span className="font-serif text-sm tracking-[0.2em] uppercase font-bold" style={{ color: "#F6F2EC" }}>Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {["Work", "Services", "About", "Journal", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="font-sans text-[11px] tracking-[0.18em] uppercase transition-colors duration-200"
                style={{ color: "rgba(246,242,236,0.55)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F6F2EC")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(246,242,236,0.55)")}>
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="font-sans text-[10px] tracking-[0.14em] uppercase" style={{ color: "#F6F2EC" }}>EN</button>
              <span className="text-xs" style={{ color: "rgba(246,242,236,0.3)" }}>/</span>
              <button className="font-sans text-[10px] tracking-[0.14em] uppercase transition-colors" style={{ color: "rgba(246,242,236,0.55)" }}>TR</button>
            </div>
            <a href="#contact" className="font-sans text-[10px] tracking-[0.16em] uppercase px-5 py-2.5 transition-colors duration-200 font-semibold"
              style={{ background: "#F6F2EC", color: "#6B1E24" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#E9DED2")}
              onMouseLeave={e => (e.currentTarget.style.background = "#F6F2EC")}>
              Let's Work Together
            </a>
          </div>

          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="block w-6 transition-all duration-300" style={{ height: "1px", background: "#F6F2EC", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span className="block w-6 transition-all duration-300" style={{ height: "1px", background: "#F6F2EC", opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 transition-all duration-300" style={{ height: "1px", background: "#F6F2EC", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-6 flex flex-col gap-5" style={{ background: "#4A1219", borderTop: "0.5px solid rgba(246,242,236,0.12)" }}>
            {["Work", "Services", "About", "Journal", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="font-sans text-[12px] tracking-[0.2em] uppercase transition-colors"
                style={{ color: "rgba(246,242,236,0.6)" }}>
                {item}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="font-sans text-[10px] tracking-[0.16em] uppercase px-5 py-3 text-center font-semibold mt-2"
              style={{ background: "#F6F2EC", color: "#6B1E24" }}>
              Let's Work Together
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="pt-16 min-h-screen grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-0">
          <p className="font-sans text-[10px] tracking-[0.28em] uppercase mb-8" style={{ color: "#C4A882" }}>Digital Atelier</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] mb-8" style={{ color: "#F6F2EC" }}>
            Beautiful<br />websites for<br />modern brands.
          </h1>
          <p className="font-sans text-[12px] leading-relaxed mb-10 max-w-xs" style={{ color: "rgba(246,242,236,0.6)" }}>
            We create aesthetic, fast and conversion-focused websites for businesses that deserve to look expensive.
          </p>
          <a href="#work"
            className="font-sans text-[10px] tracking-[0.18em] uppercase px-6 py-3 transition-colors duration-200 flex items-center gap-2 w-fit font-semibold"
            style={{ background: "#F6F2EC", color: "#6B1E24" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#E9DED2")}
            onMouseLeave={e => (e.currentTarget.style.background = "#F6F2EC")}>
            View Our Work <span className="text-sm">↗</span>
          </a>
        </div>

        <div className="relative min-h-[420px] md:min-h-0 flex items-center justify-center overflow-hidden" style={{ background: "#5a1820" }}>
          <svg viewBox="0 0 400 400" className="w-[280px] md:w-[340px] lg:w-[380px] select-none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="165" fill="none" stroke="#C4A882" strokeWidth="0.8" strokeOpacity="0.5" />
            <circle cx="200" cy="200" r="155" fill="none" stroke="#C4A882" strokeWidth="0.4" strokeOpacity="0.25" />
            <polygon points="200,30 203,40 213,40 205,46 208,57 200,51 192,57 195,46 187,40 197,40" fill="#C4A882" opacity="0.9" />
            <circle cx="60" cy="155" r="2" fill="#C4A882" opacity="0.4" />
            <circle cx="340" cy="155" r="2" fill="#C4A882" opacity="0.4" />
            <circle cx="80" cy="240" r="1.5" fill="#C4A882" opacity="0.3" />
            <circle cx="320" cy="240" r="1.5" fill="#C4A882" opacity="0.3" />
            <circle cx="130" cy="80" r="1.5" fill="#C4A882" opacity="0.3" />
            <circle cx="270" cy="80" r="1.5" fill="#C4A882" opacity="0.3" />
            <text x="200" y="228" textAnchor="middle" fontFamily="'Bodoni Moda', Georgia, serif"
              fontSize="110" fill="#F6F2EC" letterSpacing="-2">ZS</text>
            <line x1="140" y1="255" x2="196" y2="255" stroke="#C4A882" strokeWidth="0.8" opacity="0.7" />
            <circle cx="200" cy="255" r="2.5" fill="#C4A882" opacity="0.8" />
            <line x1="204" y1="255" x2="260" y2="255" stroke="#C4A882" strokeWidth="0.8" opacity="0.7" />
            <text x="200" y="290" textAnchor="middle" fontFamily="'Montserrat', sans-serif"
              fontSize="16" fill="#C4A882" letterSpacing="12" fontWeight="300">STUDIO</text>
          </svg>
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <section style={{ background: "#4A1219", borderTop: "0.5px solid rgba(246,242,236,0.1)", borderBottom: "0.5px solid rgba(246,242,236,0.1)" }} className="py-12 px-8 md:px-14 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Strategy", desc: "We understand your brand, audience and goals." },
              { num: "02", title: "Design", desc: "We craft a custom website that fits your brand perfectly." },
              { num: "03", title: "Build", desc: "AI-powered systems help us deliver beautifully, fast." },
              { num: "04", title: "Launch", desc: "Your new website goes live and starts working for you." },
            ].map((step) => (
              <div key={step.num} className="flex flex-col gap-3">
                <span className="font-sans text-[11px] tracking-[0.2em]" style={{ color: "#C4A882" }}>{step.num}</span>
                <h3 className="font-serif text-lg" style={{ color: "#F6F2EC" }}>{step.title}</h3>
                <p className="font-sans text-[11px] leading-relaxed" style={{ color: "rgba(246,242,236,0.45)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 px-8 md:px-14 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12 items-center">
          <div>
            <p className="font-sans text-[10px] tracking-[0.26em] uppercase mb-6" style={{ color: "#C4A882" }}>AI-Powered Creative Studio</p>
            <p className="font-sans text-[12px] leading-relaxed" style={{ color: "rgba(246,242,236,0.55)" }}>
              We combine AI-powered workflows with design, strategy and storytelling to give your brand a digital presence that instantly stands out.
            </p>
          </div>
          <div className="hidden md:block pl-12" style={{ borderLeft: "0.5px solid rgba(246,242,236,0.15)" }}>
            <p className="font-serif italic text-2xl md:text-3xl leading-[1.5] mb-6" style={{ color: "#F6F2EC" }}>
              Most websites are made to be seen.
            </p>
            <p className="font-serif italic text-2xl md:text-3xl leading-[1.5] mb-6" style={{ color: "rgba(246,242,236,0.5)" }}>
              We create them to be felt.
            </p>
            <p className="font-sans text-[11px] leading-relaxed max-w-md" style={{ color: "rgba(246,242,236,0.45)" }}>
              Zesira is not an agency. Not a tool. A digital atelier for modern brands — where everything is intentional. A softness, a movement, a silence. Because aesthetics are never accidental. They are decisions.
            </p>
          </div>
          <div className="md:hidden">
            <p className="font-serif italic text-2xl leading-[1.5] mb-4" style={{ color: "#F6F2EC" }}>Most websites are made to be seen.</p>
            <p className="font-serif italic text-xl leading-[1.5] mb-6" style={{ color: "rgba(246,242,236,0.5)" }}>We create them to be felt.</p>
            <p className="font-sans text-[11px] leading-relaxed" style={{ color: "rgba(246,242,236,0.45)" }}>A digital atelier for modern brands — where everything is intentional.</p>
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section id="work" className="py-20 px-8 md:px-14 lg:px-20" style={{ borderTop: "0.5px solid rgba(246,242,236,0.12)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-sans text-[10px] tracking-[0.26em] uppercase mb-3" style={{ color: "#C4A882" }}>Featured Work</p>
              <h2 className="font-serif text-3xl md:text-4xl" style={{ color: "#F6F2EC" }}>Every project is a world of its own.</h2>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] uppercase transition-colors pb-1"
              style={{ color: "rgba(246,242,236,0.45)", borderBottom: "0.5px solid rgba(246,242,236,0.25)" }}>
              View All Projects <span>→</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Bridal House", tag: "Redesign", bg: "#8B2E35" },
              { title: "Lavin Beauty", tag: "Website Design", bg: "#7a2530" },
              { title: "Café Noir", tag: "Brand & Website", bg: "#3d0e14" },
            ].map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-4 relative" style={{ background: project.bg }}>
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: project.bg }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-3xl" style={{ opacity: 0.15, color: "#F6F2EC" }}>{project.title.charAt(0)}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-sans text-[9px] tracking-widest uppercase px-3 py-1.5" style={{ background: "#F6F2EC", color: "#6B1E24" }}>↗</span>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-serif text-lg" style={{ color: "#F6F2EC" }}>{project.title}</p>
                    <p className="font-sans text-[10px] tracking-[0.14em] uppercase mt-1" style={{ color: "rgba(246,242,236,0.45)" }}>{project.tag}</p>
                  </div>
                  <span className="text-sm transition-colors duration-300" style={{ color: "rgba(246,242,236,0.4)" }}>↗</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <a href="#contact" className="font-sans text-[10px] tracking-[0.18em] uppercase pb-1"
              style={{ color: "rgba(246,242,236,0.45)", borderBottom: "0.5px solid rgba(246,242,236,0.25)" }}>
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES (cream on bordo) ── */}
      <section id="services" className="py-20 px-8 md:px-14 lg:px-20" style={{ background: "#F6F2EC", color: "#2B1F1C" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
            <div>
              <p className="font-sans text-[10px] tracking-[0.26em] uppercase mb-4" style={{ color: "#6B1E24" }}>What We Offer</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.2]" style={{ color: "#2B1F1C" }}>
                Design that<br />feels like your<br />brand.
              </h2>
            </div>
            <p className="font-sans text-[12px] leading-relaxed max-w-sm self-end" style={{ color: "#9A8878" }}>
              We don't offer templates or packages. We offer experiences — crafted around your brand's energy, story, and audience.
            </p>
          </div>

          <div className="space-y-0">
            {[
              { num: "I", name: "Starter Presence", feeling: "Your first step into the world — quiet, but unforgettable.", for: "New brands, solo founders, first digital presence.", cta: "Begin quietly →" },
              { num: "II", name: "Editorial Brand Site", feeling: "Your brand, given a cinematic world to live in.", for: "Established brands ready to go deeper.", cta: "Build your world →" },
              { num: "III", name: "Luxury Launch Experience", feeling: "Not a launch. An arrival.", for: "Brands that deserve more than a website.", cta: "Let's talk →" },
            ].map((pkg) => (
              <div key={pkg.num} className="group py-10 grid md:grid-cols-[60px_1fr_auto] gap-6 items-start px-2 transition-colors duration-500"
                style={{ borderTop: "0.5px solid #E9DED2" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(107,30,36,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                <span className="font-serif italic text-xl" style={{ color: "#6B1E24", opacity: 0.6 }}>{pkg.num}</span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl mb-3" style={{ color: "#2B1F1C" }}>{pkg.name}</h3>
                  <p className="font-serif italic text-sm leading-relaxed mb-3" style={{ color: "#9A8878" }}>{pkg.feeling}</p>
                  <p className="font-sans text-[10px] tracking-[0.12em] uppercase" style={{ color: "#C4A882" }}>
                    <span style={{ color: "#6B1E24", marginRight: "6px" }}>✦</span>{pkg.for}
                  </p>
                </div>
                <a href="#contact" className="font-sans text-[10px] tracking-[0.18em] uppercase pb-1 self-start mt-1 whitespace-nowrap transition-all duration-300"
                  style={{ color: "#9A8878", borderBottom: "0.5px solid transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#6B1E24"; e.currentTarget.style.borderBottomColor = "#6B1E24"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#9A8878"; e.currentTarget.style.borderBottomColor = "transparent"; }}>
                  {pkg.cta}
                </a>
              </div>
            ))}
            <div style={{ borderTop: "0.5px solid #E9DED2" }} />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-8 md:px-14 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-[10px] tracking-[0.26em] uppercase mb-6" style={{ color: "#C4A882" }}>Contact</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.2] mb-8" style={{ color: "#F6F2EC" }}>
              Tell us about<br />your world.
            </h2>
            <p className="font-serif italic text-base leading-relaxed mb-10" style={{ color: "rgba(246,242,236,0.5)" }}>
              Every project begins with a conversation.<br />We'd love to hear about yours.
            </p>
            <div className="space-y-4">
              {["Website Design", "Brand Identity", "AI Creative Content"].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <span style={{ color: "#C4A882", fontSize: "10px" }}>✦</span>
                  <span className="font-sans text-[11px] tracking-[0.08em]" style={{ color: "rgba(246,242,236,0.55)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="py-16 text-center">
                <div className="w-12 h-px mx-auto mb-8" style={{ background: "#C4A882" }} />
                <p className="font-serif italic text-2xl mb-4" style={{ color: "#F6F2EC" }}>Your message is on its way.</p>
                <p className="font-sans text-[11px] tracking-[0.1em]" style={{ color: "rgba(246,242,236,0.5)" }}>We'll be in touch soon.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {[
                  { key: "name", label: "Your name", placeholder: "How should we address you?" },
                  { key: "brand", label: "Your brand", placeholder: "What world are we building?" },
                ].map((field) => (
                  <div key={field.key} className="pb-3" style={{ borderBottom: "0.5px solid rgba(246,242,236,0.2)" }}>
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase block mb-3" style={{ color: "rgba(246,242,236,0.5)" }}>{field.label}</label>
                    <input type="text" value={formData[field.key as "name" | "brand"]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full font-serif text-lg outline-none"
                      style={{ background: "transparent", color: "#F6F2EC" }}
                      placeholder={field.placeholder} />
                  </div>
                ))}
                <div className="pb-3" style={{ borderBottom: "0.5px solid rgba(246,242,236,0.2)" }}>
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase block mb-3" style={{ color: "rgba(246,242,236,0.5)" }}>Your message</label>
                  <textarea value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4} className="w-full font-serif text-lg outline-none resize-none"
                    style={{ background: "transparent", color: "#F6F2EC" }}
                    placeholder="Tell us about your brand, your vision, your world..." />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <p className="font-sans text-[10px] tracking-[0.08em]" style={{ color: "rgba(246,242,236,0.35)" }}>info@zesirastudio.com</p>
                  <button onClick={handleSubmit}
                    className="font-sans text-[10px] tracking-[0.2em] uppercase px-6 py-3 transition-colors duration-200 font-semibold"
                    style={{ background: "#F6F2EC", color: "#6B1E24" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#E9DED2")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#F6F2EC")}>
                    Send →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-8 md:px-14 lg:px-20" style={{ borderTop: "0.5px solid rgba(246,242,236,0.12)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif italic text-base" style={{ color: "#F6F2EC" }}>Zesira Studio</span>
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(246,242,236,0.45)" }}>Not a website. A presence.</span>
          <span className="font-sans text-[10px] tracking-[0.1em]" style={{ color: "rgba(246,242,236,0.3)" }}>© 2025</span>
        </div>
      </footer>
    </main>
  );
}
