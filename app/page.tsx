"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: any[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1.8 + Math.random() * 3.2,
        baseOp: 0.22 + Math.random() * 0.38,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -(0.06 + Math.random() * 0.14),
        twinkleSpeed: 0.004 + Math.random() * 0.009,
        twinkleOffset: Math.random() * Math.PI * 2,
        type: Math.random() < 0.55 ? "star" : "dot",
      });
    }

    let t = 0;
    let animId: number;

    const drawStar = (cx: number, cy: number, r: number) => {
      const pts = 5, inner = r * 0.42;
      ctx.beginPath();
      for (let i = 0; i < pts * 2; i++) {
        const angle = (i * Math.PI) / pts - Math.PI / 2;
        const rad = i % 2 === 0 ? r : inner;
        i === 0
          ? ctx.moveTo(cx + Math.cos(angle) * rad, cy + Math.sin(angle) * rad)
          : ctx.lineTo(cx + Math.cos(angle) * rad, cy + Math.sin(angle) * rad);
      }
      ctx.closePath();
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t++;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        const op = p.baseOp * (0.45 + 0.55 * Math.abs(Math.sin(t * p.twinkleSpeed + p.twinkleOffset)));
        ctx.save();
        ctx.globalAlpha = op;
        ctx.fillStyle = "rgb(196,168,130)";
        if (p.type === "star") {
          drawStar(p.x, p.y, p.size);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-canvas overflow-x-hidden">

      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-130px] right-[-90px] w-[520px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(210,185,155,0.32) 0%, transparent 65%)", filter: "blur(90px)", animation: "drift1 14s ease-in-out infinite alternate" }} />
        <div className="absolute bottom-[-130px] left-[-70px] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(228,210,188,0.22) 0%, transparent 65%)", filter: "blur(90px)", animation: "drift2 17s ease-in-out infinite alternate" }} />
      </div>

      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between">
        <span className="font-serif text-base tracking-[0.22em] uppercase text-noir">
          Zesira Studio
        </span>
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Studio", "Services", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="font-sans text-[10px] tracking-[0.18em] uppercase text-ash hover:text-sand transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="font-sans text-[10px] tracking-[0.14em] uppercase text-sand border-b border-sand/40 pb-0.5">EN</button>
          <span className="text-ash/40 text-xs">/</span>
          <button className="font-sans text-[10px] tracking-[0.14em] uppercase text-ash hover:text-sand transition-colors duration-300">TR</button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-8 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.26em] uppercase text-sand mb-10 opacity-0 animate-fadeUp" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Digital Atelier
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-noir leading-[1.25] italic mb-8 opacity-0 animate-fadeUp" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Some brands try to be noticed.<br />
            Others simply leave a mark.
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
            <div className="w-6 h-px bg-sand" />
            <div className="w-1.5 h-1.5 rounded-full bg-sand" />
            <div className="w-6 h-px bg-sand" />
          </div>
          <p className="font-serif italic text-ash text-sm md:text-base leading-loose mb-12 opacity-0 animate-fadeUp" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
            A digital atelier for modern brands.<br />Slow. Elegant. Felt.
          </p>
          <a href="#services" className="inline-block font-sans text-[10px] tracking-[0.22em] uppercase text-noir border-b border-sand/50 pb-1 hover:text-sand hover:border-sand transition-colors duration-300 opacity-0 animate-fadeUp" style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}>
            Discover the studio
          </a>
        </div>
      </section>

      <section className="relative z-10 py-32 px-8 md:px-16 lg:px-32">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif italic text-noir text-xl md:text-2xl leading-[2] mb-6">Most websites are made to be seen.</p>
          <p className="font-serif italic text-ash text-xl md:text-2xl leading-[2] mb-6">We create them to be felt.</p>
          <p className="font-serif text-noir text-xl md:text-2xl leading-[2] mb-6">Zesira is not an agency. Not a tool.</p>
          <p className="font-serif italic text-sand text-xl md:text-2xl leading-[2] mb-12">A digital atelier for modern brands.</p>
          <div className="w-8 h-px bg-sand mb-12" />
          <p className="font-serif italic text-ash text-lg leading-[2] mb-6">
            Here, everything is intentional —<br />a softness, a movement, a silence.
          </p>
          <p className="font-serif italic text-noir text-lg leading-[2] mb-12">
            Because aesthetics are never accidental.<br />They are decisions.
          </p>
          <p className="font-serif text-ash text-lg leading-[2] mb-6">
            You may not have a luxury budget.<br />But your brand still deserves a cinematic presence.
          </p>
          <p className="font-serif italic text-noir text-2xl md:text-3xl mt-12">Not a website. A presence.</p>
        </div>
      </section>

      <section id="services" className="relative z-10 py-32 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-sand mb-4">What we offer</p>
          <h2 className="font-serif italic text-noir text-3xl md:text-4xl mb-6">
            Each project is a world of its own.
          </h2>
          <p className="font-sans text-[12px] text-ash leading-relaxed mb-24 max-w-xl">
            We don't offer templates or packages. We offer experiences — crafted around your brand's energy, story, and audience. Every project begins with a conversation.
          </p>

          <div className="space-y-0">
            {[
              {
                num: "I",
                name: "Starter Presence",
                feeling: "Your first step into the world — quiet, but unforgettable.",
                transformation: "From invisible to felt. A minimal but emotionally resonant digital home that speaks before you do.",
                for: "New brands, solo founders, first digital presence.",
                cta: "Begin quietly →",
              },
              {
                num: "II",
                name: "Editorial Brand Site",
                feeling: "Your brand, given a cinematic world to live in.",
                transformation: "From a website to an experience. Every scroll reveals something new. Every section feels intentional.",
                for: "Established brands ready to go deeper.",
                cta: "Build your world →",
              },
              {
                num: "III",
                name: "Luxury Launch Experience",
                feeling: "Not a launch. An arrival.",
                transformation: "A complete digital universe — site, motion, visuals, creative direction, launch strategy. Everything aligned. Everything felt.",
                for: "Brands that deserve more than a website.",
                cta: "Let's talk →",
              },
            ].map((pkg) => (
              <div key={pkg.num}
                className="group border-t border-sand/20 py-16 grid md:grid-cols-[80px_1fr_1fr] gap-8 hover:bg-linen/30 transition-colors duration-700 px-4">
                <div className="flex items-start pt-1">
                  <span className="font-serif italic text-sand/60 text-2xl">{pkg.num}</span>
                </div>
                <div>
                  <h3 className="font-serif italic text-noir text-2xl md:text-3xl mb-4">{pkg.name}</h3>
                  <p className="font-serif italic text-sand text-base mb-6 leading-relaxed">{pkg.feeling}</p>
                  <p className="font-sans text-[11px] text-ash leading-relaxed mb-6">{pkg.transformation}</p>
                  <p className="font-sans text-[10px] tracking-[0.12em] uppercase text-ash/60">
                    <span className="text-sand/60 mr-2">✦</span>{pkg.for}
                  </p>
                </div>
                <div className="flex md:justify-end md:items-start">
                  <a href="#contact"
                    className="font-sans text-[10px] tracking-[0.18em] uppercase text-noir border-b border-sand/40 pb-1 hover:text-sand hover:border-sand transition-colors duration-300 self-start mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
            <div className="border-t border-sand/20" />
          </div>

          <div className="mt-20 text-center">
            <p className="font-serif italic text-ash text-lg mb-8">
              Every project begins with a conversation.
            </p>
            <a href="#contact"
              className="inline-block font-sans text-[10px] tracking-[0.22em] uppercase text-noir border-b border-sand/50 pb-1 hover:text-sand hover:border-sand transition-colors duration-300">
              Start yours
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-32 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-sand mb-8">Contact</p>
          <h2 className="font-serif italic text-noir text-3xl md:text-5xl leading-[1.3] mb-12">
            Tell us about<br />your world.
          </h2>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-6 h-px bg-sand" />
            <div className="w-1.5 h-1.5 rounded-full bg-sand" />
            <div className="w-6 h-px bg-sand" />
          </div>
          <a href="mailto:info@zesirastudio.com"
            className="inline-block font-sans text-[11px] tracking-[0.18em] uppercase text-noir border-b border-sand/50 pb-1 hover:text-sand hover:border-sand transition-colors duration-300">
            info@zesirastudio.com
          </a>
        </div>
      </section>

      <footer className="relative z-10 py-10 px-8 border-t border-sand/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif italic text-noir text-base">Zesira Studio</span>
          <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-ash">Not a website. A presence.</span>
          <span className="font-sans text-[10px] tracking-[0.1em] text-ash/50">© 2025</span>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drift1 {
          from { transform: translate(0,0); }
          to { transform: translate(-18px, 22px); }
        }
        @keyframes drift2 {
          from { transform: translate(0,0); }
          to { transform: translate(16px, -18px); }
        }
        .animate-fadeUp { animation: fadeUp 1.8s ease forwards; }
        .animate-fadeIn { animation: fadeIn 1.5s ease forwards; }
      `}</style>
    </main>
  );
}
