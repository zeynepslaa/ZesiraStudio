import Link from "next/link";

export default function ClinkContactPage() {
  return (
    <main className="min-h-screen bg-clink-base px-6 pb-24 pt-28 text-clink-text">
      <div className="mx-auto max-w-lg">
        <Link href="/clink" className="font-body text-xs text-clink-muted hover:text-clink-text">
          ← Ana
        </Link>
        <h1 className="mt-6 font-display text-4xl font-extrabold">İletişim</h1>
        <p className="mt-4 font-body text-sm text-clink-muted">Stokist ve toptan satış için.</p>

        <form className="mt-12 space-y-6">
          <div>
            <label className="font-body text-xs uppercase tracking-widest text-clink-muted">İşletme adı</label>
            <input
              type="text"
              className="mt-2 w-full border border-clink-border bg-clink-surface px-4 py-3 font-body text-sm text-clink-text outline-none focus:border-clink-text"
            />
          </div>
          <div>
            <label className="font-body text-xs uppercase tracking-widest text-clink-muted">E-posta</label>
            <input
              type="email"
              className="mt-2 w-full border border-clink-border bg-clink-surface px-4 py-3 font-body text-sm text-clink-text outline-none focus:border-clink-text"
            />
          </div>
          <div>
            <label className="font-body text-xs uppercase tracking-widest text-clink-muted">Mesaj</label>
            <textarea
              rows={4}
              className="mt-2 w-full resize-none border border-clink-border bg-clink-surface px-4 py-3 font-body text-sm text-clink-text outline-none focus:border-clink-text"
            />
          </div>
          <button
            type="submit"
            className="w-full border border-clink-text py-3 font-body text-sm font-medium transition-colors hover:bg-clink-text hover:text-clink-base"
          >
            Gönder
          </button>
        </form>
      </div>
    </main>
  );
}
