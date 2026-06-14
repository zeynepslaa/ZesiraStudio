"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  price: string;
  normalPrice: string;
  period?: string;
  features: string[];
  notIncluded?: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  badge?: string;
  platform?: string;
  delivery?: string;
  revisions?: string;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

function launchConfetti(x: number, y: number) {
  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d")!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#5A3E28", "#C4A882", "#8B6A40", "#F0EBE3", "#241E18"];
  const particles: {
    x: number; y: number; vx: number; vy: number;
    color: string; size: number; alpha: number; rot: number; rotV: number;
  }[] = [];

  for (let i = 0; i < 60; i++) {
    const angle = (Math.random() * Math.PI * 2);
    const speed = Math.random() * 8 + 3;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 3,
      alpha: 1,
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 8,
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25;
      p.vx *= 0.98;
      p.alpha -= 0.018;
      p.rot += p.rotV;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    frame++;
    if (frame < 80) requestAnimationFrame(animate);
    else canvas.remove();
  }
  animate();
}

export function Pricing({
  plans,
  title = "Paketler",
  description = "Her paket farklı bir ihtiyaca göre tasarlandı.",
}: PricingProps) {
  const [isLansman, setIsLansman] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleToggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!isLansman) {
      launchConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
    setIsLansman((v) => !v);
  }, [isLansman]);

  return (
    <section id="paketler" style={{ padding: "100px 40px", background: "#F8F5F0" }}>
      {/* Başlık */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p style={{
          fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase",
          color: "#6B1E24", marginBottom: "12px",
          fontFamily: "'Inter', sans-serif", fontWeight: 600,
        }}>
          Fiyatlandırma
        </p>
        <h2 style={{
          fontFamily: "'Space Grotesk', serif",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 400, color: "#1A1714", marginBottom: "16px",
        }}>
          {title}
        </h2>
        <p style={{
          fontSize: "14px", color: "#7A7268", lineHeight: 1.7,
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
        }}>
          {description}
        </p>

        {/* Toggle */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "14px", marginTop: "36px",
        }}>
          <span style={{
            fontSize: "12px", letterSpacing: "0.08em",
            color: !isLansman ? "#1A1714" : "#7A7268",
            fontFamily: "'Inter', sans-serif", fontWeight: 300,
            transition: "color 0.2s",
          }}>
            Normal Fiyat
          </span>
          <button
            onClick={handleToggle}
            style={{
              position: "relative", width: "48px", height: "26px",
              borderRadius: "13px", border: "none", cursor: "pointer",
              background: isLansman ? "#1A1714" : "#C4A882",
              transition: "background 0.3s",
              flexShrink: 0,
            }}
          >
            <motion.span
              animate={{ x: isLansman ? 22 : 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              style={{
                position: "absolute", top: "3px",
                width: "20px", height: "20px",
                borderRadius: "50%", background: "#F7F2EC",
                display: "block",
              }}
            />
          </button>
          <span style={{
            fontSize: "12px", letterSpacing: "0.08em",
            color: isLansman ? "#1A1714" : "#7A7268",
            fontFamily: "'Inter', sans-serif", fontWeight: 300,
            transition: "color 0.2s",
          }}>
            Lansman Fiyatı{" "}
            <span style={{ color: "#8B6A40", fontWeight: 400 }}>
              (30 Haz'a kadar)
            </span>
          </span>
        </div>
      </div>

      {/* Kartlar */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isDesktop ? "repeat(3, 1fr)" : "1fr",
        gap: "16px", maxWidth: "1100px", margin: "0 auto",
        alignItems: "start",
      }}>
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 40, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -16 : 0,
                    opacity: 1,
                    scale: plan.isPopular ? 1.03 : 0.97,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
            style={{
              background: plan.isPopular ? "#241E18" : "#FDFAF6",
              border: plan.isPopular
                ? "2px solid #241E18"
                : "1px solid #E0D8CE",
              padding: "36px 32px",
              position: "relative",
              display: "flex", flexDirection: "column",
            }}
          >
            {/* Popüler rozet */}
            {plan.isPopular && (
              <div style={{
                position: "absolute", top: 0, right: 0,
                background: "#C4A882",
                padding: "6px 14px",
                display: "flex", alignItems: "center", gap: "6px",
              }}>
                <Star size={12} fill="#241E18" color="#241E18" />
                <span style={{
                  fontSize: "10px", letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "#241E18",
                  fontFamily: "'Inter', sans-serif", fontWeight: 400,
                }}>
                  {plan.badge || "En Çok Tercih Edilen"}
                </span>
              </div>
            )}

            {/* Paket numarası */}
            <p style={{
              fontFamily: "'Space Grotesk', serif",
              fontSize: "13px", letterSpacing: "0.2em",
              color: plan.isPopular ? "#C4A882" : "#8B6A40",
              marginBottom: "8px",
            }}>
              {["I", "II", "III"][index]}
            </p>

            {/* Paket adı */}
            <h3 style={{
              fontFamily: "'Space Grotesk', serif",
              fontSize: "22px", fontWeight: 400, lineHeight: 1.2,
              color: plan.isPopular ? "#F7F2EC" : "#241E18",
              marginBottom: "6px",
            }}>
              {plan.name}
            </h3>

            {/* Fiyat */}
            <div style={{ margin: "20px 0 24px", minHeight: "56px", position: "relative", overflow: "hidden" }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isLansman ? "L" : "N"}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ position: "absolute", width: "100%" }}
                >
                  <div style={{
                    fontFamily: "'Space Grotesk', serif",
                    fontSize: "38px", fontWeight: 400,
                    color: plan.isPopular ? "#F7F2EC" : "#241E18",
                    lineHeight: 1,
                  }}>
                    {isLansman ? plan.price : plan.normalPrice}
                  </div>
                  <div style={{
                    fontSize: "11px",
                    color: plan.isPopular ? "rgba(247,242,236,0.45)" : "#B0A090",
                    fontFamily: "'Inter', sans-serif",
                    marginTop: "6px", letterSpacing: "0.06em",
                  }}>
                    {isLansman
                      ? `normal: ${plan.normalPrice}`
                      : `lansman: ${plan.price}`}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Özellikler */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              {plan.features.map((f) => (
                <li key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <Check
                    size={14}
                    style={{ color: plan.isPopular ? "#C4A882" : "#8B6A40", flexShrink: 0, marginTop: "2px" }}
                  />
                  <span style={{
                    fontSize: "12px", lineHeight: 1.6,
                    color: plan.isPopular ? "rgba(247,242,236,0.8)" : "#4A3D30",
                    fontFamily: "'Inter', sans-serif", fontWeight: 300,
                  }}>
                    {f}
                  </span>
                </li>
              ))}
              {plan.notIncluded?.map((f) => (
                <li key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start", opacity: 0.4 }}>
                  <span style={{ width: "14px", flexShrink: 0, textAlign: "center", fontSize: "12px",
                    color: plan.isPopular ? "#F7F2EC" : "#241E18", marginTop: "1px" }}>—</span>
                  <span style={{
                    fontSize: "12px", lineHeight: 1.6,
                    color: plan.isPopular ? "rgba(247,242,236,0.5)" : "#6B5D4F",
                    fontFamily: "'Inter', sans-serif", fontWeight: 300,
                    textDecoration: "line-through",
                  }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* Ayraç çizgi */}
            <div style={{
              borderTop: plan.isPopular ? "1px solid rgba(255,255,255,0.12)" : "1px solid #E0D8CE",
              margin: "24px 0 16px",
            }} />

            {/* Teknik bilgi */}
            <div style={{
              display: "flex", gap: "16px", marginBottom: "20px", flexWrap: "wrap",
            }}>
              {[
                { label: "Platform", val: plan.platform },
                { label: "Teslim", val: plan.delivery },
                { label: "Revizyon", val: plan.revisions },
              ].map(({ label, val }) => val ? (
                <div key={label}>
                  <div style={{
                    fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase",
                    color: plan.isPopular ? "rgba(196,168,130,0.7)" : "#B0A090",
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                  }}>{label}</div>
                  <div style={{
                    fontSize: "11px", color: plan.isPopular ? "#C4A882" : "#241E18",
                    fontFamily: "'Inter', sans-serif", fontWeight: 300,
                    marginTop: "2px",
                  }}>{val}</div>
                </div>
              ) : null)}
            </div>

            {/* CTA Butonu */}
            <Link
              href={plan.href}
              style={{
                display: "block", textAlign: "center",
                padding: "14px",
                background: plan.isPopular ? "#C4A882" : "#241E18",
                color: plan.isPopular ? "#241E18" : "#F7F2EC",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px", letterSpacing: "0.18em", fontWeight: 400,
                textTransform: "uppercase",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {plan.buttonText}
            </Link>

            <p style={{
              fontSize: "11px", color: plan.isPopular ? "rgba(247,242,236,0.35)" : "#B0A090",
              fontFamily: "'Inter', sans-serif", fontWeight: 300,
              textAlign: "center", marginTop: "12px", lineHeight: 1.6,
            }}>
              {plan.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
