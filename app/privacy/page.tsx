import Link from "next/link";

export const metadata = {
  title: "Gizlilik Politikası — Zesira Studio",
  description: "Zesira Studio gizlilik politikası.",
};

export default function PrivacyPage() {
  return (
    <main style={{
      background: "#0a0a0a",
      minHeight: "100vh",
      color: "#f5f0eb",
      fontFamily: "inherit",
    }}>
      <div style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "80px 32px 120px",
      }}>

        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <Link href="/" style={{
            display: "inline-block",
            color: "#f5f0eb",
            textDecoration: "none",
            fontSize: "20px",
            letterSpacing: "0.12em",
            fontWeight: 400,
            marginBottom: "48px",
          }}>
            Zesira<span style={{ opacity: 0.4 }}>.</span>
          </Link>

          <div style={{ marginBottom: "12px" }}>
            <Link href="/" style={{
              fontSize: "12px",
              color: "rgba(245,240,235,0.4)",
              textDecoration: "none",
              letterSpacing: "0.08em",
            }}>
              ← Ana sayfaya dön
            </Link>
          </div>

          <h1 style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            marginTop: "32px",
            marginBottom: "12px",
          }}>
            Gizlilik Politikası
          </h1>
          <p style={{
            fontSize: "13px",
            color: "rgba(245,240,235,0.35)",
            letterSpacing: "0.06em",
          }}>
            Son güncelleme: Haziran 2025
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(245,240,235,0.08)", marginBottom: "64px" }} />

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>

          <Section num="01" title="Toplanan Veriler">
            Zesira Studio, yalnızca iletişim formları aracılığıyla iletilen bilgileri toplar. Bu bilgiler; ad, e-posta adresi ve proje hakkında paylaşılan notları kapsamaktadır. Otomatik olarak hiçbir kişisel veri toplanmaz.
          </Section>

          <Section num="02" title="Kullanım Amacı">
            Toplanan veriler yalnızca proje iletişimi amacıyla kullanılır. Bilgileriniz pazarlama, reklam veya üçüncü taraflarla paylaşım için kullanılmaz. Her iletişim talebi yalnızca ilgili proje kapsamında değerlendirilir.
          </Section>

          <Section num="03" title="Üçüncü Taraflar">
            Kişisel verileriniz hiçbir koşulda üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz. Tek istisna, yasal zorunluluk halinde resmi makamlarla gerçekleştirilebilecek paylaşımdır.
          </Section>

          <Section num="04" title="Çerezler">
            Zesira Studio, yalnızca temel analitik amaçlarla çerez kullanabilir. Bu çerezler ziyaretçi sayısı ve sayfa performansı gibi anonim verileri kapsar; kişisel bilgi içermez. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
          </Section>

          <Section num="05" title="Haklarınız">
            Tarafımıza ilettiğiniz verilerin silinmesini, düzeltilmesini veya erişimini talep etme hakkına sahipsiniz. Bu talepleri iletmek için aşağıdaki e-posta adresine yazabilirsiniz. Talepler en geç 30 gün içinde yanıtlanır.
          </Section>

          <Section num="06" title="İletişim">
            Gizlilik politikamızla ilgili tüm soru ve talepleriniz için:
            <br /><br />
            <a href="mailto:info@zesirastudio.com" style={{
              color: "#f5f0eb",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              opacity: 0.7,
            }}>
              info@zesirastudio.com
            </a>
          </Section>

        </div>

        {/* Footer */}
        <div style={{
          marginTop: "96px",
          paddingTop: "32px",
          borderTop: "1px solid rgba(245,240,235,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <span style={{ fontSize: "12px", color: "rgba(245,240,235,0.2)", letterSpacing: "0.06em" }}>
            © 2025 Zesira Studio
          </span>
          <Link href="/terms" style={{
            fontSize: "12px",
            color: "rgba(245,240,235,0.35)",
            textDecoration: "none",
            letterSpacing: "0.06em",
          }}>
            Kullanım Koşulları →
          </Link>
        </div>

      </div>
    </main>
  );
}

function Section({ num, title, children }: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "24px" }}>
      <span style={{
        fontSize: "11px",
        color: "rgba(245,240,235,0.25)",
        letterSpacing: "0.1em",
        paddingTop: "4px",
        fontVariantNumeric: "tabular-nums",
      }}>
        {num}
      </span>
      <div>
        <h2 style={{
          fontSize: "16px",
          fontWeight: 400,
          letterSpacing: "0.04em",
          marginBottom: "16px",
          color: "#f5f0eb",
        }}>
          {title}
        </h2>
        <p style={{
          fontSize: "14px",
          lineHeight: 1.85,
          color: "rgba(245,240,235,0.55)",
          fontWeight: 300,
        }}>
          {children}
        </p>
      </div>
    </div>
  );
}
