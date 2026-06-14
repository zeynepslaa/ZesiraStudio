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
