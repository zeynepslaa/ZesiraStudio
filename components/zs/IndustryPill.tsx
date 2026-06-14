"use client";

import { motion, useReducedMotion } from "framer-motion";

export function IndustryPill({ label }: { label: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      whileHover={
        reduce
          ? undefined
          : {
              scale: 1.04,
              borderColor: "rgba(196, 168, 130, 0.45)",
              backgroundColor: "rgba(107, 30, 36, 0.2)",
            }
      }
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="relative overflow-hidden text-sm font-medium text-white/70 border border-white/15 px-4 py-2 rounded-full cursor-default"
    >
      <span className="relative z-10">{label}</span>
      {!reduce && (
        <motion.span
          className="absolute inset-0 bg-[#C4A882]/10 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 2.5, opacity: 1 }}
          transition={{ duration: 0.45 }}
        />
      )}
    </motion.span>
  );
}
