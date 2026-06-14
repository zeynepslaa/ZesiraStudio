"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^(<?\s*)?(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : null;
  const suffix = match?.[3] ?? value;
  const [display, setDisplay] = useState(reduce || target === null ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!inView || reduce || target === null) return;

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      const formatted = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, reduce, target, prefix, suffix, value]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5 }}
    >
      {display}
    </motion.span>
  );
}
