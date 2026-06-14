"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type BrowserMockupProps = {
  url: string;
  image: string;
  alt: string;
  label?: string;
  className?: string;
  autoScroll?: boolean;
  cinematicLoop?: boolean;
  videoSrc?: string;
  priority?: boolean;
  liveLabel?: string;
  featuredLabel?: string;
};

export function BrowserMockup({
  url,
  image,
  alt,
  label,
  className = "",
  autoScroll = true,
  cinematicLoop = false,
  videoSrc,
  priority = false,
  liveLabel = "Canlı",
  featuredLabel = "Öne çıkan",
}: BrowserMockupProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className={`relative ${className}`} ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="absolute -inset-6 rounded-[32px] bg-[#6B1E24]/25 blur-3xl zs-orb-pulse" />

      <motion.div
        style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative rounded-2xl border border-white/10 bg-[#111113] shadow-[0_40px_100px_-24px_rgba(0,0,0,0.85)] overflow-hidden"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08] bg-[#050505]">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-[11px] text-white/35 text-center truncate font-mono">
            {url}
          </div>
        </div>

        <div className="relative aspect-[10/13] sm:aspect-[4/5] overflow-hidden bg-[#0A0A0B]">
          {videoSrc && !reduce ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className={cinematicLoop && !reduce ? "zs-ken-burns-wrap w-full h-full relative" : "w-full h-full relative"}>
              <Image
                src={image}
                alt={alt}
                width={1440}
                height={2520}
                priority={priority}
                sizes="(max-width: 768px) 100vw, 672px"
                className={`w-full ${
                  autoScroll && !reduce
                    ? "zs-mockup-scroll h-[180%] object-cover object-top"
                    : "h-full object-cover object-top"
                }`}
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/50 via-transparent to-[#0A0A0B]/10 pointer-events-none" />
          <div className="absolute top-3 right-3 flex items-center gap-1.5 zs-floating-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-medium text-white/80">{liveLabel}</span>
          </div>
        </div>
      </motion.div>

      {label && (
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -bottom-4 -left-5 md:-left-10 zs-floating-card px-4 py-3"
        >
          <p className="text-[10px] font-semibold text-[#C4A882] uppercase tracking-wide mb-0.5">{featuredLabel}</p>
          <p className="font-serif text-sm font-bold text-white">{label}</p>
        </motion.div>
      )}
    </div>
  );
}
