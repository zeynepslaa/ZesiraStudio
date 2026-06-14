"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ZsStudioChrome() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (reduce) return;

    const move = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor]"));
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, [reduce]);

  return (
    <>
      <div className="zs-grain pointer-events-none fixed inset-0 z-[60]" aria-hidden />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C4A882] origin-left z-[70]"
        style={{ scaleX }}
      />
      {!reduce && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block mix-blend-difference"
          animate={{
            x: pos.x - (hovering ? 20 : 8),
            y: pos.y - (hovering ? 20 : 8),
            width: hovering ? 40 : 16,
            height: hovering ? 40 : 16,
          }}
          transition={{ type: "spring", damping: 22, stiffness: 350, mass: 0.5 }}
          style={{
            borderRadius: hovering ? "50%" : "2px",
            border: "1px solid rgba(196, 168, 130, 0.8)",
          }}
        />
      )}
    </>
  );
}
