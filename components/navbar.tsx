"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "@/components/motion";
import { links, navigation } from "@/data/studio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-porcelain/10 bg-charcoal/58 px-4 py-3 shadow-editorial backdrop-blur-xl md:px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-champagne/40 bg-porcelain/8 font-display text-lg text-champagne">
            Z
          </span>
          <span>
            <span className="block font-display text-xl leading-none text-porcelain">Zesira Studio</span>
            <span className="block text-[10px] uppercase tracking-[0.24em] text-fog/70">
              Living Sims Universe
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-fog transition hover:bg-porcelain/8 hover:text-porcelain"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={links.patreon}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-porcelain px-5 py-2.5 text-sm font-semibold text-espresso transition hover:bg-champagne md:inline-flex"
        >
          Join Patreon
        </a>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-porcelain/10 bg-porcelain/5 text-porcelain lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 w-[calc(100%-16px)] max-w-7xl rounded-[28px] border border-porcelain/10 bg-charcoal/92 p-4 shadow-editorial backdrop-blur-xl lg:hidden"
        >
          <div className="grid gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-fog transition hover:bg-porcelain/8 hover:text-porcelain"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.patreon}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-porcelain px-4 py-3 text-center text-sm font-semibold text-espresso"
            >
              Join Patreon
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
