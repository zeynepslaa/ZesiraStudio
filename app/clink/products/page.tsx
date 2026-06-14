import Link from "next/link";
import { ClinkCan } from "@/components/clink/ClinkCan";
import { CLINK_PRODUCTS } from "@/app/clink/data/products";

export default function ClinkProductsPage() {
  const newProducts = CLINK_PRODUCTS.filter((p) => p.isNew);
  const classics = CLINK_PRODUCTS.filter((p) => !p.isNew);

  return (
    <main className="min-h-screen bg-clink-base px-6 pb-24 pt-28 text-clink-text">
      <div className="mx-auto max-w-6xl">
        <Link href="/clink" className="font-body text-xs text-clink-muted hover:text-clink-text">
          ← Ana
        </Link>
        <h1 className="mt-6 font-display text-4xl font-extrabold">Ürünler</h1>

        <section className="mt-16">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#FF4D6D]">Yeni</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {newProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-8 rounded-2xl border border-clink-border bg-clink-surface p-8"
              >
                <ClinkCan product={product} size="hero" />
                <div>
                  <span className="rounded-full bg-[#FF4D6D] px-2 py-0.5 font-body text-[9px] font-semibold uppercase text-white">
                    Yeni
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold">{product.name}</h3>
                  <p className="mt-2 font-body text-sm text-clink-muted">{product.flavor}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-clink-muted">Klasik</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {classics.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center rounded-2xl border border-clink-border bg-clink-surface p-6"
              >
                <ClinkCan product={product} />
                <p className="mt-4 font-display text-xs font-bold">{product.name}</p>
                <p className="mt-1 text-center font-body text-[10px] text-clink-muted">{product.flavor}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
