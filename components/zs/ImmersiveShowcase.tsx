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
