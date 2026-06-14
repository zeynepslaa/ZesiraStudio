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
