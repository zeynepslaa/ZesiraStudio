"use client";

import { CountUp } from "./CountUp";

type WorkProofCardProps = {
  project: string;
  paket: string;
  highlight: string;
  metric: string;
  url: string;
};

export function WorkProofCard({ project, paket, highlight, metric, url }: WorkProofCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block zs-card zs-card-hover p-6 h-full no-underline"
    >
      <p className="text-[10px] font-semibold text-[#C4A882] uppercase tracking-wider mb-3">Stüdyo çalışması</p>
      <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-[#C4A882] transition-colors">{project}</h3>
      <p className="text-xs text-white/40 mb-4">{paket}</p>
      <p className="text-sm text-white/55 leading-relaxed mb-5">{highlight}</p>
      <CountUp value={metric} className="text-2xl font-serif font-bold text-white block" />
      <p className="text-[10px] text-white/30 mt-1">Canlı önizleme ile inceleyin →</p>
    </a>
  );
}
