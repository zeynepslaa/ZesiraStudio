"use client";

import { FileText, Shield, LayoutDashboard } from "lucide-react";
import { Reveal } from "./motion";
import type { ZsCopy } from "@/lib/zs/i18n";

const icons = [FileText, Shield, LayoutDashboard];

function MockPanel({
  title,
  lines,
  accent,
}: {
  title: string;
  lines: number;
  accent: string;
}) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-[#0A0A0B] overflow-hidden h-full">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <span className={`w-2 h-2 rounded-full ${accent}`} />
        <span className="text-[11px] font-medium text-white/50">{title}</span>
      </div>
      <div className="p-4 space-y-2.5">
        <div className="h-2 rounded bg-white/10 w-3/4" />
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded bg-white/[0.06]"
            style={{ width: `${55 + (i % 3) * 12}%` }}
          />
        ))}
        <div className="mt-4 h-16 rounded-lg bg-[#6B1E24]/15 border border-[#6B1E24]/25" />
      </div>
      <div className="absolute inset-0 backdrop-blur-[2px] bg-[#050505]/20 pointer-events-none" />
      <div className="absolute bottom-3 right-3 text-[9px] font-medium uppercase tracking-widest text-white/25">
        Örnek
      </div>
    </div>
  );
}

export function ProcessProof({ copy }: { copy: ZsCopy["process"]["proof"] }) {
  const accents = ["bg-[#C4A882]", "bg-[#6B1E24]", "bg-emerald-500/80"];

  return (
    <div className="mt-16 pt-16 border-t border-white/[0.06]">
      <Reveal className="text-center mb-10">
        <p className="zs-eyebrow-accent mb-3">{copy.eyebrow}</p>
        <h3 className="zs-title text-[clamp(22px,3vw,32px)] mb-3">{copy.title}</h3>
        <p className="text-sm text-white/45 max-w-lg mx-auto">{copy.sub}</p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-4">
        {copy.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 0.08} variant="scale">
              <div className="flex flex-col gap-4 h-full">
                <MockPanel title={item.title} lines={4 + i} accent={accents[i]} />
                <div className="flex gap-3 items-start px-1">
                  <Icon size={16} className="text-[#C4A882] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
