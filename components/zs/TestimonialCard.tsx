type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo: string;
};

export function TestimonialCard({ quote, name, role, company, photo }: TestimonialCardProps) {
  return (
    <div className="zs-card p-6 md:p-7 h-full flex flex-col">
      <p className="text-sm text-white/70 leading-relaxed flex-1 mb-6">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
        <img
          src={photo}
          alt={name}
          className="w-11 h-11 rounded-full object-cover border border-white/10 shrink-0"
        />
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/45">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}
