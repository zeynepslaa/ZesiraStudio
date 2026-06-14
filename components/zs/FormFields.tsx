"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
};

export function ZsFormField({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative pb-3">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#C4A882]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ originX: 0 }}
      />
      <div className={`border-b pb-3 transition-colors duration-300 ${focused ? "border-transparent" : "border-white/10"}`}>
        <label className="text-xs font-medium text-white/40 block mb-1.5">{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-sm text-[#F8F5F0] placeholder:text-white/20 placeholder:italic font-sans"
        />
      </div>
    </div>
  );
}

export function ZsFormSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative pb-3">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#C4A882]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ originX: 0 }}
      />
      <div className={`border-b pb-3 transition-colors duration-300 ${focused ? "border-transparent" : "border-white/10"}`}>
        <label className="text-xs font-medium text-white/40 block mb-1.5">{label}</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-none outline-none text-sm text-[#F8F5F0] cursor-pointer font-sans"
        >
          <option value="" className="bg-[#0C0B09]">Seçiniz</option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#1A1714]">{o}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function ZsFormTextarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative pb-3">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#C4A882]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ originX: 0 }}
      />
      <div className={`border-b pb-3 transition-colors duration-300 ${focused ? "border-transparent" : "border-white/10"}`}>
        <label className="text-xs font-medium text-white/40 block mb-1.5">{label}</label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={rows}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none resize-none text-sm text-[#F8F5F0] placeholder:text-white/20 placeholder:italic font-sans"
        />
      </div>
    </div>
  );
}

export function ZsSubmitButton({
  onClick,
  children,
  className = "",
  variant = "primary",
}: {
  onClick: () => void | Promise<void>;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "gold";
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  const base =
    variant === "gold"
      ? "text-[#0A0A0B] bg-[#C4A882] hover:bg-white disabled:opacity-70"
      : "zs-btn-primary disabled:opacity-70";

  return (
    <motion.button
      onClick={handleClick}
      disabled={loading}
      whileTap={loading ? undefined : { scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-lg border-none cursor-pointer transition-colors w-full ${base} ${className}`}
    >
      {loading ? <Loader2 size={14} className="animate-spin" /> : children}
    </motion.button>
  );
}

export function ZsAuditField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: FieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="mb-4">
      <label className="text-xs font-medium text-white/40 block mb-2">{label}</label>
      <motion.input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        animate={{
          borderColor: focused ? "rgba(196, 168, 130, 0.55)" : "rgba(255, 255, 255, 0.15)",
          boxShadow: focused ? "0 0 0 3px rgba(196, 168, 130, 0.12)" : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.25 }}
        className="w-full bg-transparent border rounded-lg px-3 py-2.5 text-sm text-[#F8F5F0] outline-none placeholder:text-white/25 font-sans"
      />
    </div>
  );
}

export function ZsAuditSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="mb-4">
      <label className="text-xs font-medium text-white/40 block mb-2">{label}</label>
      <motion.select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        animate={{
          borderColor: focused ? "rgba(196, 168, 130, 0.55)" : "rgba(255, 255, 255, 0.15)",
          boxShadow: focused ? "0 0 0 3px rgba(196, 168, 130, 0.12)" : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.25 }}
        className="w-full bg-transparent border rounded-lg px-3 py-2.5 text-sm text-[#F8F5F0] outline-none cursor-pointer font-sans"
      >
        <option value="" className="bg-[#0C0B09]">Seçiniz</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#1A1714]">{o}</option>
        ))}
      </motion.select>
    </div>
  );
}

export function ZsSuccessMessage({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="pt-12 text-center"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="w-10 h-px bg-[#C4A882] mx-auto mb-8 origin-center"
      />
      <p className="font-serif text-2xl text-[#F8F5F0] mb-3 font-semibold">{title}</p>
      <p className="text-sm text-white/40">{subtitle}</p>
    </motion.div>
  );
}
