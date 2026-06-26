"use client";
import { useState } from "react";

// ── Design tokens ──────────────────────────────────────────────────────────────
const C = {
  bg:     "#F8F5F0",
  ink:    "#1A1714",
  ash:    "#7A7268",
  bordo:  "#6B1E24",
  dark:   "#14110E",
  sand:   "#C4A882",
  border: "rgba(26,23,20,0.08)",
  serif:  "'Bodoni Moda', Georgia, serif",
  sans:   "Montserrat, sans-serif",
};

// ── Form sections ──────────────────────────────────────────────────────────────
type Sektör = "moda" | "beauty" | "hospitality" | "personal" | "diger" | "";

type FormData = {
  // Bölüm 1
  marka: string; isim: string; email: string; telefon: string;
  instagram: string; sektor: Sektör;
  // Bölüm 2
  tanitim: string; ozellikler: string;
  ton: string[];
  begenilenSiteler: string; rakipSiteler: string;
  renkTercih: string; renkKodlari: string;
  // Bölüm 3
  logoDurum: string; fotografDurum: string;
  fotografLink: string; hakkimizda: string; iletisimBilgi: string;
  // Bölüm 4
  sayfalar: string; fiyatGoruns: string; iletisimYontem: string[];
  // Bölüm 5
  domainDurum: string; domainAdi: string; hostingDurum: string;
  // Sektör spesifik
  koleksiyonSayi: string; koleksiyonIsim: string; fotografKoleksiyon: string;
  randevuModa: string; lookbook: string; hedefKitle: string;
  hizmetler: string; fiyatBeauty: string; randevuBeauty: string;
  ekipTanitim: string; ekipBilgi: string;
  odalar: string; kapasite: string; randevuHosp: string;
  cokluDil: string; menu: string;
  uzmanlik: string; programlar: string; neSunulacak: string[];
  takvim: string; blog: string; hedefKitlePersonal: string; referanslar: string;
  // Bölüm 7
  beklenti: string[]; lansman: string; kendinGuncelle: string;
  ekNotlar: string; icerikHazir: string;
};

const initial: FormData = {
  marka:"", isim:"", email:"", telefon:"", instagram:"", sektor:"",
  tanitim:"", ozellikler:"", ton:[], begenilenSiteler:"", rakipSiteler:"",
  renkTercih:"", renkKodlari:"",
  logoDurum:"", fotografDurum:"", fotografLink:"", hakkimizda:"", iletisimBilgi:"",
  sayfalar:"", fiyatGoruns:"", iletisimYontem:[],
  domainDurum:"", domainAdi:"", hostingDurum:"",
  koleksiyonSayi:"", koleksiyonIsim:"", fotografKoleksiyon:"", randevuModa:"", lookbook:"", hedefKitle:"",
  hizmetler:"", fiyatBeauty:"", randevuBeauty:"", ekipTanitim:"", ekipBilgi:"",
  odalar:"", kapasite:"", randevuHosp:"", cokluDil:"", menu:"",
  uzmanlik:"", programlar:"", neSunulacak:[], takvim:"", blog:"", hedefKitlePersonal:"", referanslar:"",
  beklenti:[], lansman:"", kendinGuncelle:"", ekNotlar:"", icerikHazir:"",
};

function toggleArr(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val];
}

export default function Baslangic() {
  const [step, setStep] = useState(0); // 0 = portal, 1-7 = form steps
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormData, v: string) => setForm(f => ({ ...f, [k]: v }));
  const tog = (k: keyof FormData, v: string) =>
    setForm(f => ({ ...f, [k]: toggleArr(f[k] as string[], v) }));

  // Steps definition
  const steps = [
    "Genel Bilgiler",
    "Marka Kimliği",
    "İçerikler & Dosyalar",
    "Site Yapısı",
    "Teknik Bilgiler",
    form.sektor ? sektorLabel(form.sektor) : "Sektör Detayları",
    "Son Adım",
  ];

  const totalSteps = 7;

  function sektorLabel(s: Sektör): string {
    const map: Record<string, string> = {
      moda: "Moda & Bridal",
      beauty: "Beauty & Wellness",
      hospitality: "Hospitality",
      personal: "Personal Brand",
      diger: "Sektör Detayları",
    };
    return map[s] || "Sektör Detayları";
  }

  const handleSubmit = () => {
    const lines = [
      `MARKA: ${form.marka}`,
      `AD SOYAD: ${form.isim}`,
      `E-POSTA: ${form.email}`,
      `TELEFON: ${form.telefon}`,
      `INSTAGRAM: ${form.instagram}`,
      `SEKTÖR: ${form.sektor}`,
      ``,
      `MARKA TANITIM: ${form.tanitim}`,
      `ÖZELLİKLER: ${form.ozellikler}`,
      `TON: ${form.ton.join(", ")}`,
      `BEĞENİLEN SİTELER: ${form.begenilenSiteler}`,
      `RAKİP SİTELER: ${form.rakipSiteler}`,
      `RENK TERCİH: ${form.renkTercih}`,
      `RENK KODLARI: ${form.renkKodlari}`,
      ``,
      `LOGO: ${form.logoDurum}`,
      `FOTOĞRAF: ${form.fotografDurum}`,
      `FOTOĞRAF LİNK: ${form.fotografLink}`,
      `HAKKIMIZDA METİN: ${form.hakkimizda}`,
      `İLETİŞİM BİLGİ: ${form.iletisimBilgi}`,
      ``,
      `SAYFALAR: ${form.sayfalar}`,
      `FİYAT GÖRÜNÜM: ${form.fiyatGoruns}`,
      `İLETİŞİM YÖNTEMLERİ: ${form.iletisimYontem.join(", ")}`,
      ``,
      `DOMAIN: ${form.domainDurum} — ${form.domainAdi}`,
      `HOSTİNG: ${form.hostingDurum}`,
      ``,
      `EK NOTLAR: ${form.ekNotlar}`,
      `BEKLENTI: ${form.beklenti.join(", ")}`,
      `LANSMAN TARİHİ: ${form.lansman}`,
      `İÇERİK HAZIR: ${form.icerikHazir}`,
    ].join("\n");

    window.location.href = `mailto:info@zesirastudio.com?subject=${encodeURIComponent(`İçerik Talep Formu — ${form.marka}`)}&body=${encodeURIComponent(lines)}`;
    setSubmitted(true);
  };

  // ── Input helpers ──────────────────────────────────────────────────────────────
  const Input = ({ k, label, placeholder, required }: { k: keyof FormData; label: string; placeholder?: string; required?: boolean }) => (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash, display: "block", marginBottom: "6px" }}>
        {label}{required && <span style={{ color: C.bordo }}> *</span>}
      </label>
      <input
        type="text"
        value={form[k] as string}
        onChange={e => set(k, e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%", background: "transparent",
          border: "none", borderBottom: `0.5px solid ${C.border}`,
          outline: "none", fontFamily: C.sans, fontSize: "13px", color: C.ink,
          padding: "8px 0", borderRadius: 0,
        }}
      />
    </div>
  );

  const Textarea = ({ k, label, placeholder, required }: { k: keyof FormData; label: string; placeholder?: string; required?: boolean }) => (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash, display: "block", marginBottom: "6px" }}>
        {label}{required && <span style={{ color: C.bordo }}> *</span>}
      </label>
      <textarea
        value={form[k] as string}
        onChange={e => set(k, e.target.value)}
        placeholder={placeholder}
        rows={4}
        style={{
          width: "100%", background: "transparent",
          border: `0.5px solid ${C.border}`,
          outline: "none", fontFamily: C.sans, fontSize: "13px", color: C.ink,
          padding: "10px 12px", resize: "vertical", borderRadius: 0,
        }}
      />
    </div>
  );

  const Radio = ({ k, val, label }: { k: keyof FormData; val: string; label: string }) => (
    <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", marginBottom: "10px" }}>
      <input
        type="radio"
        name={k}
        checked={form[k] === val}
        onChange={() => set(k, val)}
        style={{ accentColor: C.bordo }}
      />
      <span style={{ fontFamily: C.sans, fontSize: "11px", color: C.ink }}>{label}</span>
    </label>
  );

  const Check = ({ k, val, label }: { k: keyof FormData; val: string; label: string }) => (
    <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={(form[k] as string[]).includes(val)}
        onChange={() => tog(k, val)}
        style={{ accentColor: C.bordo }}
      />
      <span style={{ fontFamily: C.sans, fontSize: "11px", color: C.ink }}>{label}</span>
    </label>
  );

  const RadioGroup = ({ k, label, opts, required }: { k: keyof FormData; label: string; opts: string[]; required?: boolean }) => (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash, marginBottom: "12px" }}>
        {label}{required && <span style={{ color: C.bordo }}> *</span>}
      </div>
      {opts.map(o => <Radio key={o} k={k} val={o} label={o} />)}
    </div>
  );

  const CheckGroup = ({ k, label, opts }: { k: keyof FormData; label: string; opts: string[] }) => (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash, marginBottom: "12px" }}>
        {label} <span style={{ fontWeight: 300, textTransform: "none", letterSpacing: 0 }}>(birden fazla seçilebilir)</span>
      </div>
      {opts.map(o => <Check key={o} k={k} val={o} label={o} />)}
    </div>
  );

  const Divider = () => <div style={{ height: "0.5px", background: C.border, margin: "28px 0" }} />;

  // ── Form step content ──────────────────────────────────────────────────────────
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 style={sH}>Genel Bilgiler</h2>
            <p style={sDesc}>Temel iletişim ve marka bilgileri.</p>
            <Divider />
            <Input k="marka"     label="İşletme / Marka Adı"        placeholder="tam ve doğru yazınız"                  required />
            <Input k="isim"      label="Yetkili Kişi Adı Soyadı"     placeholder="Ad Soyad"                              required />
            <Input k="email"     label="E-posta Adresi"              placeholder="email@adresiniz.com"                   required />
            <Input k="telefon"   label="Telefon Numarası"            placeholder="+90 5XX XXX XX XX"                     required />
            <Input k="instagram" label="Instagram Kullanıcı Adı"     placeholder="@kullaniciadi"                         />
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash, marginBottom: "12px" }}>
                İşletme Türünüz<span style={{ color: C.bordo }}> *</span>
              </div>
              {([
                { val: "moda",        label: "Moda & Bridal (Gelinlikçi, Nişanlık, Abiye)" },
                { val: "beauty",      label: "Beauty & Wellness (Güzellik Salonu, Kuaför, Spa)" },
                { val: "hospitality", label: "Hospitality (Otel, Butik, Konaklama)" },
                { val: "personal",    label: "Personal Brand (Psikolog, Koç, Danışman, Eğitimci)" },
                { val: "diger",       label: "Diğer" },
              ] as { val: Sektör; label: string }[]).map(o => (
                <label key={o.val} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", marginBottom: "10px" }}>
                  <input type="radio" name="sektor" checked={form.sektor === o.val} onChange={() => setForm(f => ({ ...f, sektor: o.val }))} style={{ accentColor: C.bordo }} />
                  <span style={{ fontFamily: C.sans, fontSize: "11px", color: C.ink }}>{o.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 style={sH}>Marka Kimliği</h2>
            <p style={sDesc}>Markanızı ve stilinizi tanıyabilmemiz için.</p>
            <Divider />
            <Textarea k="tanitim" label="Markanızı 2–3 cümleyle tanıtın" placeholder="Ne yapıyorsunuz? Kime hizmet veriyorsunuz? Ne zamandan beri?" required />
            <Textarea k="ozellikler" label="Markanızın en önemli 3 özelliği" placeholder="Örn: Kişiselleştirilmiş hizmet, lüks malzeme, hızlı teslimat" required />
            <CheckGroup k="ton" label="Markanızın genel tonu / kişiliği" opts={[
              "Minimal & Modern",
              "Lüks & Sofistike",
              "Sıcak & Davetkar",
              "Cesur & Yaratıcı",
              "Doğal & Organik",
              "Kurumsal & Profesyonel",
            ]} />
            <Textarea k="begenilenSiteler" label="Beğendiğiniz 2–3 web sitesi" placeholder="Link + neden beğendiğinizi kısaca belirtin" />
            <Textarea k="rakipSiteler" label="Rakip / sektör siteleri" placeholder="Beğenmeseler bile — neyi istemediğinizi anlamak için yararlı" />
            <RadioGroup k="renkTercih" label="Renk tercihiniz" opts={[
              "Siyah & Beyaz (monokrom)",
              "Krem & Bej tonları",
              "Pastel renkler",
              "Koyu & Dramatik tonlar",
              "Canlı & Renkli",
              "Zaten bir marka renk paletimiz var (yükleyeceğim)",
            ]} />
            <Input k="renkKodlari" label="Marka renk kodlarınız (HEX — varsa)" placeholder="Örn: #1A1A2E, #C9A84C" />
          </div>
        );

      case 3:
        return (
          <div>
            <h2 style={sH}>İçerikler & Dosyalar</h2>
            <p style={sDesc}>Site için gerekli tüm materyaller — eksik içerik teslim süresini etkiler.</p>
            <Divider />
            <RadioGroup k="logoDurum" label="Logo durumunuz" required opts={[
              "Hazır logom var — yükleyeceğim",
              "Logom var ama vektör (AI/SVG) formatında değil",
              "Logomu yenilemek / yeniden tasarlatmak istiyorum (add-on)",
              "Logo yok — logo tasarımı hizmeti almak istiyorum",
            ]} />
            <RadioGroup k="fotografDurum" label="Fotoğraflarınız var mı" required opts={[
              "Evet, profesyonel çekimlerim var — yükleyeceğim",
              "Var ama kaliteli değil / yenisine ihtiyaç duyuyorum",
              "Yok — stok fotoğraf kullanılabilir",
            ]} />
            <Input k="fotografLink" label="Google Drive / Dropbox fotoğraf linki (varsa)" placeholder="drive.google.com/..." />
            <Textarea k="hakkimizda" label="'Hakkımızda' sayfası için metin (varsa)" placeholder="Yoksa boş bırakın — taslak yazım hizmetimiz için ayrıca ücretlendirilir." />
            <Textarea k="iletisimBilgi" label="İletişim bilgileri" placeholder="Telefon, e-posta, adres, harita linki — sitede görüneceği şekilde yazın" required />
          </div>
        );

      case 4:
        return (
          <div>
            <h2 style={sH}>Site Yapısı</h2>
            <p style={sDesc}>Hangi sayfalar olacak ve içerikler nasıl düzenlenecek?</p>
            <Divider />
            <Textarea k="sayfalar" label="Sitede olmasını istediğiniz sayfalar" placeholder="Örn: Ana Sayfa, Hakkımızda, Hizmetler, İletişim, Galeri, Fiyatlar..." required />
            <RadioGroup k="fiyatGoruns" label="Fiyatlar sitede görünecek mi" required opts={[
              "Evet, fiyatları sitede yayınlamak istiyorum",
              "Hayır, 'Fiyat için iletişime geçin' şeklinde olsun",
              "Bir kısmı görünsün, karar vermedim",
            ]} />
            <CheckGroup k="iletisimYontem" label="Sitede hangi iletişim yöntemleri olsun" opts={[
              "İletişim formu",
              "WhatsApp butonu",
              "Telefon numarası",
              "E-posta linki",
              "Instagram linki",
              "Google Harita konumu",
            ]} />
          </div>
        );

      case 5:
        return (
          <div>
            <h2 style={sH}>Teknik Bilgiler</h2>
            <p style={sDesc}>Domain ve hosting bilgileri.</p>
            <Divider />
            <RadioGroup k="domainDurum" label="Domain (alan adı) durumunuz" required opts={[
              "Domainim var, aktif — bağlantı için giriş bilgilerimi paylaşacağım",
              "Domainim var ama henüz almadım",
              "Domain almam gerekiyor — öneride bulunur musunuz?",
            ]} />
            <Input k="domainAdi" label="Alan adınız (varsa)" placeholder="Örn: markaadi.com" />
            <RadioGroup k="hostingDurum" label="Hosting (sunucu) durumunuz" required opts={[
              "Hosting hesabım var",
              "Yok — öneride bulunur musunuz?",
              "Bilmiyorum",
            ]} />
          </div>
        );

      case 6:
        return renderSektorStep();

      case 7:
        return (
          <div>
            <h2 style={sH}>Son Adım</h2>
            <p style={sDesc}>Web sitenizden beklentiler ve proje takvimi.</p>
            <Divider />
            <CheckGroup k="beklenti" label="Web sitenizden en önemli beklentiniz nedir" opts={[
              "Daha fazla müşteri kazanmak",
              "Marka algısını güçlendirmek",
              "Online randevu almak",
              "Koleksiyonları sergilemek",
              "Kurumsal görünmek",
            ]} />
            <Input k="lansman" label="Belirli bir lansman tarihi veya etkinlik var mı?" placeholder="Örn: 15 Eylül, fuar açılışı, yeni sezon..." />
            <RadioGroup k="kendinGuncelle" label="Yayın sonrası içerikleri kendiniz güncellemek ister misiniz?" required opts={[
              "Evet — içerikleri kendim yönetmek istiyorum",
              "Hayır — güncellemeleri sizden talep edeceğim",
              "Kararsızım — öneri alabilir miyim?",
            ]} />
            <Textarea k="ekNotlar" label="Ek notlar ve istekler" placeholder="Özel sayfa, animasyon, özellik veya herhangi bir not..." />
            <RadioGroup k="icerikHazir" label="Projeye başlamamız için tüm içerikler hazır mı?" required opts={[
              "Evet, bu formdaki tüm içeriklerimi paylaştım",
              "Hayır, bazı içerikler eksik — gönderirken belirttim",
              "Bazı içerikler 3–5 iş günü içinde ulaşacak",
            ]} />
            <div style={{
              padding: "14px 16px", background: "rgba(107,30,36,0.05)",
              borderLeft: `2px solid ${C.bordo}`, marginTop: "24px",
            }}>
              <p style={{ fontFamily: C.sans, fontSize: "10px", color: C.ash, lineHeight: 1.9 }}>
                Eksik içerik teslimatı proje takvimini geciktirir. Sözleşmemizde belirtildiği üzere içerik gecikmesi, proje teslim tarihini aynı süre kadar uzatır.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  function renderSektorStep() {
    const s = form.sektor;
    if (!s || s === "diger") {
      return (
        <div>
          <h2 style={sH}>Sektör Detayları</h2>
          <p style={sDesc}>İşletmenize özel ek bilgiler.</p>
          <Divider />
          <Textarea k="ekNotlar" label="Sektörünüze veya projenize özel paylaşmak istediğiniz bilgiler" placeholder="Hizmetleriniz, hedef kitleniz, özel gereksinimleriniz..." />
        </div>
      );
    }
    if (s === "moda") return (
      <div>
        <h2 style={sH}>Moda & Bridal</h2>
        <Divider />
        <Input k="koleksiyonSayi" label="Kaç koleksiyonunuz / ürün kategoriniz var?" placeholder="Örn: Gelinlik, Nişanlık, Abiye — 3 kategori" required />
        <Textarea k="koleksiyonIsim" label="Koleksiyon / kategori isimleri" required />
        <RadioGroup k="fotografKoleksiyon" label="Koleksiyon fotoğrafları var mı?" required opts={[
          "Her koleksiyon için ayrı çekimlerim var",
          "Genel çekim var ama kategorilere ayrılmamış",
          "Yok",
        ]} />
        <RadioGroup k="randevuModa" label="Sitede randevu talebi alınacak mı?" required opts={[
          "Evet — Reservation/Appointment sistemi eklensin",
          "Hayır — WhatsApp veya telefon yeterli",
          "Karar vermedim",
        ]} />
        <RadioGroup k="lookbook" label="Lookbook / katalog bölümü olacak mı?" opts={["Evet","Hayır","İleride ekleyebiliriz"]} />
        <Textarea k="hedefKitle" label="Markanızın hedef kitlesi kim?" placeholder="Örn: 25–40 yaş arası, orta-üst segment, İstanbul" required />
      </div>
    );
    if (s === "beauty") return (
      <div>
        <h2 style={sH}>Beauty & Wellness</h2>
        <Divider />
        <Textarea k="hizmetler" label="Sunduğunuz hizmetlerin listesi" placeholder="Saç boyama, Makyaj, Kalıcı oje, Cilt bakımı..." required />
        <RadioGroup k="fiyatBeauty" label="Fiyatlar sitede görünecek mi?" required opts={[
          "Evet, hizmet fiyat listemizi yayınlamak istiyoruz",
          "Hayır",
          "Sadece fiyat aralığı (Başlayan fiyatlardan...)",
        ]} />
        <RadioGroup k="randevuBeauty" label="Online randevu sistemi istiyor musunuz?" required opts={[
          "Evet — entegre randevu sistemi eklensin",
          "Hayır — WhatsApp/telefon yeterli",
          "İleride değerlendirilebilir",
        ]} />
        <RadioGroup k="ekipTanitim" label="Ekip / uzman tanıtımı olacak mı?" opts={["Evet","Hayır"]} />
        <Textarea k="ekipBilgi" label="Ekip üyelerinin adları ve uzmanlıkları (varsa)" />
      </div>
    );
    if (s === "hospitality") return (
      <div>
        <h2 style={sH}>Hospitality</h2>
        <Divider />
        <Textarea k="odalar" label="Oda / suite kategorileri ve açıklamaları" required />
        <Textarea k="kapasite" label="Kapasite ve fiyat bilgisi (varsa)" />
        <RadioGroup k="randevuHosp" label="Rezervasyon sistemi istiyor musunuz?" required opts={[
          "Evet — online rezervasyon entegrasyonu eklensin",
          "Hayır — telefon / e-posta yeterli",
          "Mevcut bir sistemimiz var, entegre etmek istiyoruz",
        ]} />
        <RadioGroup k="cokluDil" label="Çoklu dil gerekiyor mu?" required opts={[
          "Evet — Türkçe + İngilizce",
          "Evet — Türkçe + İngilizce + başka dil(ler)",
          "Hayır, sadece Türkçe",
        ]} />
        <RadioGroup k="menu" label="Sitede menü / hizmet kataloğu olacak mı?" opts={["Evet","Hayır"]} />
      </div>
    );
    if (s === "personal") return (
      <div>
        <h2 style={sH}>Personal Brand</h2>
        <Divider />
        <Input k="uzmanlik" label="Uzmanlık alanınız nedir?" placeholder="Psikolog, İş Koçu, Diyetisyen, Finansal Danışman" required />
        <Textarea k="programlar" label="Sunduğunuz hizmetler / programlar" placeholder="Bireysel seans, online program, grup koçluğu..." required />
        <CheckGroup k="neSunulacak" label="Sitede ne sunulacak?" opts={[
          "Bireysel görüşme / seans randevusu",
          "Online kurs veya program satışı",
          "Ücretsiz içerik / blog / podcast",
          "E-posta listesi / lead magnet",
          "Konuşmacı / eğitim teklif talebi",
        ]} />
        <RadioGroup k="takvim" label="Online randevu / takvim sistemi gerekiyor mu?" required opts={[
          "Evet — Calendly veya benzeri entegrasyon",
          "Hayır",
          "İleride",
        ]} />
        <RadioGroup k="blog" label="Blog veya içerik bölümü olacak mı?" opts={["Evet","Hayır","İleride"]} />
        <Textarea k="hedefKitlePersonal" label="Hedef kitlenizi tanımlayın" placeholder="Kim sizinle çalışmak istiyor? Hangi problemi çözüyorsunuz?" required />
        <Textarea k="referanslar" label="Referans veya başarı hikayeleriniz var mı?" placeholder="Müşteri yorumları, medya röportajları, başarı örnekleri" />
      </div>
    );
    return null;
  }

  const sH: React.CSSProperties = {
    fontFamily: C.serif, fontSize: "clamp(20px, 2vw, 28px)",
    fontWeight: 400, color: C.ink, marginBottom: "8px",
  };
  const sDesc: React.CSSProperties = {
    fontFamily: C.sans, fontSize: "11px", color: C.ash, lineHeight: 2,
  };

  // ── Portal (step 0) ────────────────────────────────────────────────────────────
  const PortalView = () => (
    <div>
      {/* Welcome */}
      <div style={{ marginBottom: "64px" }}>
        <p style={{ fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: C.bordo, marginBottom: "16px" }}>
          Proje Başlangıç Merkezi
        </p>
        <h1 style={{ fontFamily: C.serif, fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 400, color: C.ink, lineHeight: 1.3, marginBottom: "16px" }}>
          Projenize Hoş Geldiniz.
        </h1>
        <p style={{ fontFamily: C.sans, fontSize: "12px", color: C.ash, lineHeight: 2, maxWidth: "480px" }}>
          Sözleşmeniz tamamlandı ve ön ödemeniz alındı — süreç başlıyor. Bu sayfa projenize ait tüm adımları yönetmeniz için hazırlandı.
        </p>
      </div>

      {/* Steps */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: C.border }} className="portal-grid">

        {/* Adım 1 — İçerik Formu */}
        <div style={{ background: C.bg, padding: "36px 32px" }}>
          <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.bordo, marginBottom: "16px" }}>Adım 01</div>
          <h2 style={{ fontFamily: C.serif, fontSize: "20px", fontWeight: 400, color: C.ink, marginBottom: "10px" }}>İçerik Talep Formu</h2>
          <p style={{ fontFamily: C.sans, fontSize: "11px", color: C.ash, lineHeight: 2, marginBottom: "24px" }}>
            Projenizin doğru tasarlanması için tüm bilgi ve içerikleri paylaşın. Formun eksiksiz doldurulması teslim süresini doğrudan etkiler.
          </p>
          <button
            onClick={() => setStep(1)}
            style={{
              background: C.bordo, color: "#F8F5F0",
              fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.18em",
              textTransform: "uppercase", padding: "11px 22px",
              border: "none", cursor: "pointer",
            }}
          >
            Formu Doldur →
          </button>
        </div>

        {/* Adım 2 — Dosyalar */}
        <div style={{ background: C.bg, padding: "36px 32px" }}>
          <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash, marginBottom: "16px" }}>Adım 02</div>
          <h2 style={{ fontFamily: C.serif, fontSize: "20px", fontWeight: 400, color: C.ink, marginBottom: "10px" }}>Logo & Dosyalar</h2>
          <p style={{ fontFamily: C.sans, fontSize: "11px", color: C.ash, lineHeight: 2, marginBottom: "24px" }}>
            Logo (SVG / AI / PNG), fotoğraflar ve diğer marka materyallerini paylaşılan Drive klasörüne yükleyin. Klasör linki e-posta ile iletildi.
          </p>
          <div style={{
            fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.14em",
            textTransform: "uppercase", color: C.ash,
            border: `0.5px solid ${C.border}`, padding: "11px 22px",
            display: "inline-block",
          }}>
            Klasör Linki E-postanızda ✓
          </div>
        </div>

        {/* Adım 3 — Süreç Rehberi */}
        <div style={{ background: C.bg, padding: "36px 32px" }}>
          <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash, marginBottom: "16px" }}>Adım 03</div>
          <h2 style={{ fontFamily: C.serif, fontSize: "20px", fontWeight: 400, color: C.ink, marginBottom: "10px" }}>Proje Başlangıç Rehberi</h2>
          <p style={{ fontFamily: C.sans, fontSize: "11px", color: C.ash, lineHeight: 2, marginBottom: "24px" }}>
            Projenizin nasıl ilerlediğini, her aşamada neler bekleneceğini ve süreçleri anlatan rehber dokümanı okuyun.
          </p>
          <div style={{
            fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.14em",
            textTransform: "uppercase", color: C.ash,
            border: `0.5px solid ${C.border}`, padding: "11px 22px",
            display: "inline-block",
          }}>
            PDF E-postanızda ✓
          </div>
        </div>

        {/* Adım 4 — İletişim */}
        <div style={{ background: C.bg, padding: "36px 32px" }}>
          <div style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash, marginBottom: "16px" }}>Adım 04</div>
          <h2 style={{ fontFamily: C.serif, fontSize: "20px", fontWeight: 400, color: C.ink, marginBottom: "10px" }}>İletişim</h2>
          <p style={{ fontFamily: C.sans, fontSize: "11px", color: C.ash, lineHeight: 2, marginBottom: "24px" }}>
            Proje sürecinde bir sorunuz mu var? WhatsApp veya e-posta ile ulaşabilirsiniz.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="https://wa.me/905456649930" target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#F8F5F0",
              background: "#25D366", padding: "10px 18px", textDecoration: "none",
              width: "fit-content",
            }}>
              WhatsApp
            </a>
            <a href="mailto:info@zesirastudio.com" style={{
              fontFamily: C.sans, fontSize: "10px", color: C.ash,
              textDecoration: "none", letterSpacing: "0.06em",
            }}>
              info@zesirastudio.com
            </a>
          </div>
        </div>
      </div>

      {/* Process reminder */}
      <div style={{
        marginTop: "1px", background: C.bg,
        padding: "28px 32px",
        borderTop: `0.5px solid ${C.border}`,
      }}>
        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
          {["01 Keşif","02 Teklif","03 Sözleşme ✓","04 İçerik ←","05 Tasarım","06 Yayın","07 Destek"].map((s, i) => (
            <div key={i} style={{
              fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: s.includes("✓") ? C.bordo : s.includes("←") ? C.ink : "rgba(26,23,20,0.3)",
              fontWeight: s.includes("←") ? 600 : 400,
            }}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  );

  // ── Layout ─────────────────────────────────────────────────────────────────────
  return (
    <main style={{ background: C.bg, color: C.ink, fontFamily: C.sans, minHeight: "100vh" }}>

      {/* Nav */}
      <header style={{
        borderBottom: `0.5px solid ${C.border}`,
        padding: "0 48px", height: "60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="/" style={{ textDecoration: "none", color: C.ink }}>
          <span style={{ fontFamily: C.serif, fontSize: "15px", letterSpacing: "0.05em" }}>Zesira Studio</span>
        </a>
        <span style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash }}>
          Müşteri Portalı
        </span>
      </header>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 48px 80px" }}>

        {/* Form mode */}
        {step > 0 && !submitted && (
          <div>
            {/* Progress */}
            <div style={{ marginBottom: "48px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: C.ash }}>
                  {step} / {totalSteps} — {steps[step - 1]}
                </span>
                <button onClick={() => setStep(0)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: C.sans, fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: C.ash }}>
                  ← Ana Sayfa
                </button>
              </div>
              <div style={{ height: "2px", background: C.border, borderRadius: "1px" }}>
                <div style={{ height: "100%", background: C.bordo, width: `${(step / totalSteps) * 100}%`, transition: "width 0.4s ease" }} />
              </div>
            </div>

            {/* Content */}
            {renderStep()}

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px", paddingTop: "24px", borderTop: `0.5px solid ${C.border}` }}>
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                style={{
                  background: "none", color: C.ash,
                  fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.16em",
                  textTransform: "uppercase", padding: "11px 22px",
                  border: `0.5px solid ${C.border}`, cursor: "pointer",
                  display: step === 1 ? "none" : "block",
                }}
              >
                ← Geri
              </button>
              <div />
              {step < totalSteps ? (
                <button
                  onClick={() => setStep(step + 1)}
                  style={{
                    background: C.ink, color: "#F8F5F0",
                    fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.18em",
                    textTransform: "uppercase", padding: "11px 28px",
                    border: "none", cursor: "pointer",
                  }}
                >
                  İleri →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  style={{
                    background: C.bordo, color: "#F8F5F0",
                    fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.18em",
                    textTransform: "uppercase", padding: "11px 28px",
                    border: "none", cursor: "pointer",
                  }}
                >
                  Formu Gönder →
                </button>
              )}
            </div>
          </div>
        )}

        {/* Submitted */}
        {submitted && (
          <div style={{ textAlign: "center", paddingTop: "80px" }}>
            <div style={{ width: "32px", height: "0.5px", background: C.bordo, margin: "0 auto 32px" }} />
            <h2 style={{ fontFamily: C.serif, fontSize: "28px", fontWeight: 400, color: C.ink, marginBottom: "12px" }}>
              Form alındı.
            </h2>
            <p style={{ fontFamily: C.sans, fontSize: "11px", color: C.ash, lineHeight: 2, marginBottom: "32px" }}>
              İçerik bilgileri e-posta olarak iletildi. 1–2 iş günü içinde proje takvimini paylaşacağım.
            </p>
            <button onClick={() => { setSubmitted(false); setStep(0); }} style={{
              background: "none", color: C.ash,
              fontFamily: C.sans, fontSize: "10px", letterSpacing: "0.16em",
              textTransform: "uppercase", padding: "10px 22px",
              border: `0.5px solid ${C.border}`, cursor: "pointer",
            }}>
              Ana Sayfaya Dön
            </button>
          </div>
        )}

        {/* Portal view */}
        {step === 0 && !submitted && <PortalView />}
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Montserrat:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #F8F5F0; }
        input[type="radio"], input[type="checkbox"] { cursor: pointer; }
        @media (max-width: 640px) {
          .portal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
