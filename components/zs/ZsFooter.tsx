"use client";

import type { ZsCopy } from "@/lib/zs/i18n";

export function ZsFooter({ copy }: { copy: ZsCopy["footer"] }) {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-12 mb-10">
          <div>
            <a href="#" className="font-serif text-xl font-bold text-[#F8F5F0] no-underline block mb-4">
              Zesira<span className="text-white/50">.</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">{copy.tagline}</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">Nav</p>
            <nav className="flex flex-col gap-2.5">
              {copy.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 no-underline hover:text-[#C4A882] transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">{copy.contact}</p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:slaaylmzz8@gmail.com"
                className="text-sm text-white/50 no-underline hover:text-white/80 transition-colors"
              >
                slaaylmzz8@gmail.com
              </a>
              <a
                href="https://wa.me/905456649930"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/50 no-underline hover:text-[#C4A882] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="#denetim"
                className="text-sm text-[#C4A882] no-underline hover:text-white transition-colors w-fit"
              >
                {copy.nav.find((l) => l.href === "#denetim")?.label ?? "Denetim"}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-white/25">{copy.rights}</span>
          <span className="text-[10px] text-white/20">Istanbul · Remote-first</span>
        </div>
      </div>
    </footer>
  );
}
