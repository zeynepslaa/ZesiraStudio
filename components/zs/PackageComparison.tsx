"use client";

import { Check, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "./motion";
import { MagneticLink } from "./MagneticLink";
import { trackZsEvent } from "@/lib/zs/analytics";
import type { ZsCopy } from "@/lib/zs/i18n";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check size={16} className="text-[#C4A882] mx-auto" />;
  }
  if (value === false) {
    return <Minus size={16} className="text-white/20 mx-auto" />;
  }
  return <span className="text-sm text-white/70">{value}</span>;
}

export function PackageComparison({ copy }: { copy: ZsCopy["compare"] }) {
  return (
    <div className="mt-16">
      <Reveal className="text-center mb-10">
        <p className="zs-eyebrow-accent mb-3">{copy.eyebrow}</p>
        <h3 className="zs-title text-[clamp(22px,3vw,32px)] mb-3">{copy.title}</h3>
        <p className="text-sm text-white/45 max-w-md mx-auto">{copy.sub}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="overflow-x-auto zs-scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-xs font-medium text-white/35 py-4 pr-4 w-[34%]" />
                {copy.packages.map((p) => (
                  <th key={p} className="text-center text-sm font-semibold text-white py-4 px-3">
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.features.map((feature, i) => (
                <tr key={feature} className="border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors">
                  <td className="text-sm text-white/50 py-3.5 pr-4">{feature}</td>
                  {copy.rows[i].map((cell, j) => (
                    <td key={j} className="text-center py-3.5 px-3">
                      <Cell value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="mt-8 text-center">
        <p className="text-xs text-white/40 mb-4">{copy.note}</p>
        <MagneticLink
          href="#denetim"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4A882] hover:text-white no-underline transition-colors"
          onClick={() => trackZsEvent({ name: "cta_click", target: "compare_audit", href: "#denetim" })}
        >
          {copy.cta} <ArrowRight size={12} />
        </MagneticLink>
      </Reveal>
    </div>
  );
}
