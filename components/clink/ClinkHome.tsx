"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ClinkCan } from "@/components/clink/ClinkCan";
import { CLINK_PRODUCTS } from "@/app/clink/data/products";

gsap.registerPlugin(ScrollTrigger);

const heroProducts = CLINK_PRODUCTS.filter((p) => p.isNew);

export function ClinkHome() {
  const mainRef = useRef<HTMLElement>(null);
  const pinkRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);
  const pourLayerRef = useRef<HTMLDivElement>(null);
  const streamOuterRef = useRef<HTMLDivElement>(null);
  const streamInnerRef = useRef<HTMLDivElement>(null);
  const poolRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({ duration: 1.1 });
    lenis.on("scroll", ScrollTrigger.update);
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        if (poolRef.current) gsap.set(poolRef.current, { scaleY: 0.45, opacity: 0.7 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.8,
        },
      });

      tl.to(pinkRef.current, { rotateX: 38, rotateZ: 42, x: 28, y: 8, duration: 1.2 }, 0)
        .to(blueRef.current, { rotateX: 38, rotateZ: -42, x: -28, y: 8, duration: 1.2 }, 0)

        .to(pourLayerRef.current, { opacity: 1, duration: 0.35 }, 0.45)
        // Yumuşak sıvı şeridi — aşağı uzar (nokta/çizgi yok)
        .fromTo(
          streamOuterRef.current,
          { scaleY: 0, opacity: 0 },
          { scaleY: 1, opacity: 0.75, duration: 2.2, ease: "power1.inOut" },
          0.55
        )
        .fromTo(
          streamInnerRef.current,
          { scaleY: 0, opacity: 0 },
          { scaleY: 1, opacity: 0.9, duration: 2, ease: "power1.inOut" },
          0.7
        )
        .fromTo(
          poolRef.current,
          { scaleY: 0, opacity: 0 },
          { scaleY: 1, opacity: 0.8, duration: 1.3, ease: "power2.out" },
          2.3
        );
    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={mainRef} className="relative bg-clink-base text-clink-text">
      {/* Sıvı katmanı — bulanık şerit + alttan birikinti */}
      <div
        ref={pourLayerRef}
        className="pointer-events-none fixed inset-0 z-[35] opacity-0"
        aria-hidden
      >
        {/* Dış halo — sızma hissi */}
        <div
          ref={streamOuterRef}
          className="clink-stream-outer absolute left-1/2 top-[34vh] h-[58vh] w-[min(100px,18vw)] origin-top -translate-x-1/2 scale-y-0 opacity-0"
        />
        {/* İç akış — daha yoğun */}
        <div
          ref={streamInnerRef}
          className="clink-stream-inner absolute left-1/2 top-[35vh] h-[56vh] w-[min(52px,10vw)] origin-top -translate-x-1/2 scale-y-0 opacity-0"
        />

        <div
          ref={poolRef}
          className="clink-pool absolute inset-x-0 bottom-0 origin-bottom scale-y-0 opacity-0"
        />
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_30%_50%,#FF4D6D18,transparent_70%)]" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_70%_50%,#1B4FD818,transparent_70%)]" />
        </div>

        <p className="relative z-10 mb-2 font-body text-xs uppercase tracking-[0.35em] text-clink-muted">
          İki yeni çeşit
        </p>
        <h1 className="relative z-10 text-center font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
          CLINK
        </h1>
        <p className="relative z-10 mt-4 max-w-md text-center font-body text-sm text-clink-muted">
          Lezzeti keşfedin, her yudumda.
        </p>

        <div className="relative z-10 mt-16 flex items-end justify-center gap-8 sm:gap-14">
          <div
            ref={pinkRef}
            className="relative"
            style={{ perspective: 1200, transformStyle: "preserve-3d", transformOrigin: "50% 92%" }}
          >
            <ClinkCan product={heroProducts[0]} size="hero" floatDelay={0} showSpout />
            <p className="mt-6 text-center font-display text-sm font-bold text-[#FF4D6D]">PINK HEAT</p>
          </div>

          <div
            ref={blueRef}
            className="relative"
            style={{ perspective: 1200, transformStyle: "preserve-3d", transformOrigin: "50% 92%" }}
          >
            <ClinkCan product={heroProducts[1]} size="hero" floatDelay={0.6} showSpout />
            <p className="mt-6 text-center font-display text-sm font-bold text-[#7DD3FC]">BLUE TIDE</p>
          </div>
        </div>

        <p className="relative z-10 mt-20 font-body text-xs uppercase tracking-widest text-clink-muted">
          Kaydır
        </p>
      </section>

      <section className="relative z-10 border-t border-clink-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Aile</h2>
          <p className="mt-2 font-body text-sm text-clink-muted">Yedi çeşit. İkisi yeni.</p>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {CLINK_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col items-center rounded-2xl border border-clink-border bg-clink-surface/90 p-6 backdrop-blur-sm transition-transform hover:scale-[1.02]"
              >
                {product.isNew && (
                  <span className="absolute right-3 top-3 rounded-full bg-[#FF4D6D] px-2 py-0.5 font-body text-[9px] font-semibold uppercase tracking-wider text-white">
                    Yeni
                  </span>
                )}
                <ClinkCan product={product} />
                <p className="mt-4 font-display text-xs font-bold">{product.name}</p>
                <p className="mt-1 text-center font-body text-[10px] text-clink-muted">{product.flavor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-clink-border px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-extrabold">Craft gazlı. Konserve. Cesur.</h2>
          <p className="mt-6 font-body text-sm leading-relaxed text-clink-muted">
            CLINK, kutuda karakter taşıyan craft gazlı içecekler üretir. Yedi çeşit, iki yeni lansman — poster
            renkleri, sinema ışığı, gerçek tat.
          </p>
        </div>
      </section>

      <section className="relative z-10 border-t border-clink-border px-6 py-16 text-center">
        <p className="font-body text-sm text-clink-muted">Stokist ve satış noktaları</p>
        <a
          href="/clink/contact"
          className="mt-4 inline-block border border-clink-text px-8 py-3 font-body text-sm font-medium transition-colors hover:bg-clink-text hover:text-clink-base"
        >
          Bize ulaşın
        </a>
      </section>

      <footer className="relative z-10 border-t border-clink-border px-6 py-16 text-center">
        <p className="font-body text-[10px] uppercase tracking-widest text-clink-muted">
          CLINK · Vitrin paketi demosu · Zesira Studio
        </p>
      </footer>
    </main>
  );
}
