type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-champagne/80">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[0.95] text-porcelain md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-fog md:text-lg">{body}</p>
    </div>
  );
}
