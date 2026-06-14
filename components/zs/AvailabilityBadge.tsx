"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AvailabilityBadge({ label, slots }: { label: string; slots: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="inline-flex items-center gap-2.5 rounded-full border border-[#C4A882]/25 bg-[#C4A882]/8 px-3.5 py-1.5 mb-6"
    >
      <span className="relative flex h-2 w-2">
        {!reduce && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
        )}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C4A882]">{label}</span>
      <span className="text-[11px] text-white/50">·</span>
      <span className="text-[11px] text-white/65">{slots}</span>
    </motion.div>
  );
}
