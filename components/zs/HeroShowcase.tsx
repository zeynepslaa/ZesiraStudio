"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowRight } from "lucide-react";
import { BrowserMockup } from "./BrowserMockup";
import { SplitReveal } from "./SplitReveal";
import { MagneticLink } from "./MagneticLink";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { trackZsEvent } from "@/lib/zs/analytics";
import type { ZsCopy } from "@/lib/zs/i18n";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type HeroShowcaseProps = {
  project: {
    name: string;
    paket: string;
    url: string;
    href: string;
    img: string;
  };
  copy: ZsCopy["hero"];
  availability: ZsCopy["availability"];
};

export function HeroShowcase({ project, copy, availability }: HeroShowcaseProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const item = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 + i * 0.12, duration: 0.75, ease },
        };

  return (
    <section ref={ref} className="relative bg-[#050505] pt-14 overflow-hidden min-h-[92vh] flex flex-col">
      <div className="absolute inset-0 zs-grid-lines opacity-20 pointer-events-none" />
      <div className="zs-orb zs-orb-1" />
      <div className="zs-orb zs-orb-2" />
      <div className="zs-orb zs-orb-3" />

      <div className="relative flex-1 max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          <motion.div style={reduce ? undefined : { y: textY }}>
            <motion.p {...item(0)} className="zs-eyebrow-light mb-6">
              {copy.eyebrow}
            </motion.p>

            <AvailabilityBadge label={availability.label} slots={availability.slots} />

            <motion.h1 {...item(1)} className="zs-title zs-hero-display max-w-[14ch] mb-7">
              <SplitReveal text={copy.h1a} delay={0.2} className="block" />
              <span className="zs-gradient-text zs-gradient-animate inline-block mt-1">{copy.h1b}</span>{" "}
              <SplitReveal text={copy.h1c} delay={0.55} className="inline-block" />
            </motion.h1>

            <motion.p {...item(2)} className="text-lg md:text-xl text-white/60 leading-relaxed max-w-md mb-10">
              {copy.sub}
            </motion.p>

            <motion.div {...item(3)} className="flex flex-col sm:flex-row gap-3 mb-6">
              <MagneticLink
                href="#denetim"
                className="zs-btn-primary zs-btn-glow zs-btn-energy"
                onClick={() => trackZsEvent({ name: "cta_click", target: "hero_audit", href: "#denetim" })}
              >
                <Play size={14} fill="currentColor" /> {copy.ctaAudit}
              </MagneticLink>
              <MagneticLink
                href="#vitrin"
                className="zs-btn-ghost"
                onClick={() => trackZsEvent({ name: "cta_click", target: "hero_vitrin", href: "#vitrin" })}
              >
                {copy.ctaVitrin} <ArrowRight size={14} />
              </MagneticLink>
            </motion.div>

            <motion.p {...item(4)} className="text-sm text-white/30">
              {copy.note}
            </motion.p>
          </motion.div>

          <motion.div
            style={reduce ? undefined : { y: visualY, scale: visualScale }}
            className="relative lg:justify-self-end w-full max-w-2xl mx-auto lg:mx-0"
          >
            <a href={project.href} target="_blank" rel="noreferrer" className="block no-underline group">
              <BrowserMockup
                url={project.url}
                image={project.img}
                alt={project.name}
                label={project.name}
                autoScroll
                cinematicLoop
                priority
                liveLabel={copy.live}
                featuredLabel={copy.featured}
              />
            </a>

            <p className="mt-10 text-center text-xs text-white/35">
              {project.paket} ·{" "}
              <span className="text-[#C4A882] group-hover:text-white transition-colors">{copy.openSite}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
