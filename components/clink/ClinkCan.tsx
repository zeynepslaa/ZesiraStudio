"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ClinkProduct } from "@/app/clink/data/products";

type ClinkCanProps = {
  product: ClinkProduct;
  size?: "hero" | "card";
  tilt?: number;
  floatDelay?: number;
  showSpout?: boolean;
};

export function ClinkCan({ product, size = "card", tilt = 0, floatDelay = 0, showSpout = false }: ClinkCanProps) {
  const isHero = size === "hero";
  const hasImage = Boolean(product.image);

  return (
    <motion.div
      className="relative"
      style={{ perspective: 1200 }}
      animate={{
        y: showSpout ? [0, -8, 0] : [0, -12, 0],
        rotateX: tilt,
        rotateY: isHero && !showSpout ? [-8, 8, -8] : 0,
      }}
      transition={{
        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
        rotateY: isHero && !showSpout ? { duration: 8, repeat: Infinity, ease: "easeInOut" } : undefined,
        rotateX: { duration: 0.1 },
      }}
    >
      <div
        className={`relative mx-auto ${isHero ? "h-[280px] w-[120px] sm:h-[340px] sm:w-[140px]" : "h-[160px] w-[68px]"}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-[18px] shadow-2xl"
          style={
            hasImage
              ? {
                  background: "#0e0e12",
                  boxShadow: `0 24px 60px -12px ${product.colors[0]}66`,
                }
              : {
                  background: `linear-gradient(165deg, ${product.colors[0]} 0%, ${product.colors[1]} 55%, ${product.colors[1]}dd 100%)`,
                  boxShadow: `0 24px 60px -12px ${product.colors[0]}66, inset 0 1px 0 rgba(255,255,255,0.25)`,
                }
          }
        >
          {hasImage && (
            <Image
              src={product.image!}
              alt={product.name}
              fill
              className="object-cover object-center"
              sizes={isHero ? "140px" : "68px"}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}

          {/* Üst ağız — dökülme buradan */}
          <div
            className={`absolute left-0 right-0 top-0 z-10 rounded-t-[18px] ${showSpout ? "h-[10%]" : "h-[14%]"}`}
            style={{
              background: hasImage
                ? "linear-gradient(180deg, #e8e8ec 0%, #c8c8cc 50%, transparent 100%)"
                : `linear-gradient(180deg, #e8e8ec 0%, ${product.colors[0]}88 100%)`,
              boxShadow: showSpout ? "inset 0 -2px 4px rgba(0,0,0,0.3)" : undefined,
            }}
          />
          {showSpout && (
            <div
              className="absolute left-[18%] right-[18%] top-[4%] z-20 h-[3%] rounded-full bg-[#d4d4d8]"
              style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.6)" }}
            />
          )}

          {!hasImage && (
            <div className="absolute left-[12%] top-[18%] h-[55%] w-[18%] rounded-full bg-white/20 blur-[1px]" />
          )}

          <div className="absolute bottom-[22%] left-[8%] right-[8%] z-10 text-center">
            <p
              className={`font-display font-extrabold tracking-tight text-white drop-shadow-md ${isHero ? "text-[11px] sm:text-xs" : "text-[7px]"}`}
            >
              CLINK
            </p>
            <p
              className={`mt-0.5 font-display font-bold text-white/90 ${isHero ? "text-[9px] sm:text-[10px]" : "text-[6px]"}`}
            >
              {product.name.split(" ")[0]}
            </p>
          </div>

          {!hasImage && (
            <div className="absolute inset-0 opacity-30">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-white/60"
                  style={{ left: `${20 + i * 12}%`, top: `${35 + (i % 3) * 15}%` }}
                />
              ))}
            </div>
          )}
        </div>

        <div
          className="absolute -bottom-4 left-1/2 h-4 w-[80%] -translate-x-1/2 rounded-[50%] blur-md"
          style={{ background: `${product.colors[0]}44` }}
        />
      </div>
    </motion.div>
  );
}
