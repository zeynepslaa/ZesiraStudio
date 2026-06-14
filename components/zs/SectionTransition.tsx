"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "./motion";

export function SectionTransition({
  children,
  className = "",
  id,
  as = "section",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      id={id}
      initial={reduce ? false : { opacity: 0, y: 48 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.75, ease }}
      className={className}
    >
      {children}
    </Tag>
  );
}
