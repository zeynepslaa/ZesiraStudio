"use client";

import { motion, useReducedMotion } from "framer-motion";

export const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
}) {
  const reduce = useReducedMotion();
  const variants = {
    up: { opacity: 0, y: 32 },
    left: { opacity: 0, x: -36 },
    right: { opacity: 0, x: 36 },
    scale: { opacity: 0, scale: 0.94 },
  };
  const animate = {
    up: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial={reduce ? false : variants[variant]}
      whileInView={reduce ? undefined : animate[variant]}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Float({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
