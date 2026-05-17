"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-7 w-7 rounded-full border border-champagne/70 mix-blend-screen md:block"
      animate={{
        x: position.x - 14,
        y: position.y - 14,
        scale: pressed ? 0.68 : 1
      }}
      transition={{ type: "spring", damping: 28, stiffness: 420, mass: 0.4 }}
    />
  );
}
