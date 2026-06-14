"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";
import { CountUp } from "./CountUp";
import type { ZsCopy } from "@/lib/zs/i18n";

const VORA_URL = "https://vora-istanbul.vercel.app";

export function CaseStudy({ copy, image }: { copy: ZsCopy["caseStudy"]; image: string }) {
  return (
    <section id="case-study" className="relative py-16 md:py-24 border-t border-white/[0.06] bg-[#0A0A0B] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(107,30,36,0.12)_0%,transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <Reveal className="mb-12">
          <p className="zs-eyebrow-accent mb-3">{copy.eyebrow}</p>
          <h2 className="zs-title text-[clamp(28px,3.5vw,44px)]">{copy.title}</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal variant="left">
            <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#111]">
              <div className="aspect-[4/3] relative">
                <Image
                  src={image}
                  alt="VORA Istanbul"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            {[
              { label: copy.problem, text: copy.problemText },
              { label: copy.solution, text: copy.solutionText },
            ].map((block, i) => (
              <Reveal key={block.label} delay={i * 0.08} variant="right">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C4A882] mb-2">{block.label}</p>
                  <p className="text-base text-white/60 leading-relaxed">{block.text}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.16} variant="right">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C4A882] mb-4">{copy.result}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {copy.metrics.map((m) => (
                    <div key={m.label} className="zs-card p-4 text-center">
                      <div className="font-serif text-xl font-bold text-white mb-1">
                        <CountUp value={m.value} />
                      </div>
                      <p className="text-[10px] text-white/40 uppercase tracking-wide">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={VORA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4A882] hover:text-white no-underline transition-colors w-fit"
              >
                {copy.cta} <ArrowUpRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
