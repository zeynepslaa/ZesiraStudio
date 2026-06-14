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
