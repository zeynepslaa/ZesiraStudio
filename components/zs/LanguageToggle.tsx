"use client";

import { type Lang } from "@/lib/zs/i18n";
import { trackZsEvent } from "@/lib/zs/analytics";

export function LanguageToggle({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
}) {
  const toggle = () => {
    const next = lang === "tr" ? "en" : "tr";
    trackZsEvent({ name: "lang_switch", lang: next });
    onChange(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "tr" ? "Switch to English" : "Türkçe'ye geç"}
      className="text-[11px] font-semibold tracking-wider uppercase text-white/40 hover:text-white/80 border border-white/10 hover:border-white/25 rounded-md px-2.5 py-1 bg-transparent cursor-pointer transition-colors"
    >
      {lang === "tr" ? "EN" : "TR"}
    </button>
  );
}
