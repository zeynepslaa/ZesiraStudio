"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "./motion";

export function SplitReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "p" | "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = motion[Tag] as typeof motion.span;

  if (reduce) {
    const Plain = Tag;
    return <Plain className={className}>{text}</Plain>;
  }

  return (
    <MotionTag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + i * 0.06, duration: 0.65, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
