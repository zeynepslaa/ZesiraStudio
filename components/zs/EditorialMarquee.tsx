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
