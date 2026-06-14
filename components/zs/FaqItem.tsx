"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-white/[0.08] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left bg-transparent border-none cursor-pointer group"
      >
        <span className="text-sm font-medium text-white group-hover:text-[#C4A882] transition-colors">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reduce ? 0 : 0.25 }}
          className="shrink-0 text-white/40"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-white/50 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
