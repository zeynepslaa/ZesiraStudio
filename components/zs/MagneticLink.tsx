"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

type MagneticLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  strength?: number;
  onClick?: () => void;
};

export function MagneticLink({
  children,
  className = "",
  href,
  strength = 0.28,
  onClick,
}: MagneticLinkProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 18 });
  const y = useSpring(0, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={reduce ? undefined : { x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.a>
  );
}
