"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { MagneticLink } from "./MagneticLink";
import { trackZsEvent } from "@/lib/zs/analytics";

export function StickyMiniCta({ text, cta }: { text: string; cta: string }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearFooter = y + window.innerHeight > document.documentElement.scrollHeight - 900;
      setVisible(y > 520 && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (reduce) return null;

  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-0 inset-x-0 z-40 pb-4 px-4 md:px-6 ${visible ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#0A0A0B]/95 backdrop-blur-xl px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
          <p className="text-xs md:text-sm text-white/55 leading-snug hidden sm:block">{text}</p>
          <MagneticLink
            href="#denetim"
            className="zs-btn-primary zs-btn-glow text-xs md:text-sm px-4 py-2 shrink-0 ml-auto"
            onClick={() => trackZsEvent({ name: "cta_click", target: "sticky_audit", href: "#denetim" })}
          >
            <Play size={12} fill="currentColor" /> {cta}
          </MagneticLink>
        </div>
      </div>
    </motion.div>
  );
}
