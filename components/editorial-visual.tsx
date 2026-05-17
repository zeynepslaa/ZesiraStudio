import { cn } from "@/lib/utils";

type EditorialVisualProps = {
  label: string;
  tone?: string;
  className?: string;
  variant?: "portrait" | "wide" | "square";
};

export function EditorialVisual({
  label,
  tone,
  className,
  variant = "portrait"
}: EditorialVisualProps) {
  return (
    <div
      className={cn(
        "editorial-image isolate flex items-end rounded-[1.75rem] p-5 shadow-editorial",
        variant === "portrait" && "aspect-[4/5]",
        variant === "wide" && "aspect-[16/10]",
        variant === "square" && "aspect-square",
        className
      )}
    >
      <div className="relative z-10">
        <p className="text-[10px] uppercase tracking-[0.28em] text-champagne/85">{tone}</p>
        <p className="mt-2 font-display text-3xl font-semibold leading-none text-porcelain drop-shadow">
          {label}
        </p>
      </div>
    </div>
  );
}
