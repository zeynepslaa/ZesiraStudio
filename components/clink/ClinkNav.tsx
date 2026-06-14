import Link from "next/link";

const links = [
  { href: "/clink", label: "Ana" },
  { href: "/clink/products", label: "Ürünler" },
  { href: "/clink/contact", label: "İletişim" },
];

export function ClinkNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-clink-border/60 bg-clink-base/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/clink" className="font-display text-xl font-extrabold tracking-tight text-clink-text">
          CLINK
        </Link>
        <nav className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-clink-muted transition-colors hover:text-clink-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="hidden rounded-full border border-clink-border px-3 py-1 font-body text-[10px] uppercase tracking-widest text-clink-muted sm:block">
          Vitrin · Demo
        </span>
      </div>
    </header>
  );
}
