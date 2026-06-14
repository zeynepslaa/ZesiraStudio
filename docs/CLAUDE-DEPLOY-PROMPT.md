# Claude'a yapıştır — Deploy prompt

Aşağıdaki metni Claude'a kopyala. Zip veya export dosyasını da ekle.

---

## PROMPT (kopyala)

```
Görev: zesirastudio.com canlı sitesini güncelle.

Repo: github.com/zeynepslaa/ZesiraStudio
Deploy: Vercel (main branch push → otomatik deploy)
Domain: zesirastudio.com (zaten bağlı, yeni proje açma)

Yapılacaklar:
1. Ekteki zip'i aç VEYA docs/CLAUDE-FULL-CODE-EXPORT.md dosyasındaki tüm dosyaları oluştur/güncelle
2. Eksik klasörleri oluştur: components/zs/, lib/zs/, public/zs/
3. public/zs/vora-homepage.png ve vora-hero-aerial.png dosyalarını zip'ten kopyala (binary)
4. npm install && npm run build — hata varsa düzelt
5. git add -A && git commit -m "Redesign homepage: dark studio, conversion flow, i18n"
6. git push origin main
7. Vercel deploy bitene kadar bekle, zesirastudio.com'u kontrol et

Önemli dosyalar:
- app/page.tsx (ana sayfa — tamamen yeni)
- app/layout.tsx (fontlar + metadata)
- app/globals.css (dark tema)
- components/zs/* (tüm bileşenler)
- lib/zs/i18n.ts (TR/EN)
- lib/zs/analytics.ts

Formlar Formspree kullanıyor: formspree.io/f/mqeoypwz — env variable gerekmez.

/clink route'u da deploy edilecek — şimdilik bırak.

Build komutu: npm run build
Framework: Next.js 15
```

---

## Dosya konumları (Mac)

| Dosya | Yol |
|-------|-----|
| Zip (tüm proje) | `/Users/zeynepsilayilmaz/ZesiraStudio/zesira-studio-deploy.zip` |
| Kod export (tek markdown) | `/Users/zeynepsilayilmaz/ZesiraStudio/docs/CLAUDE-FULL-CODE-EXPORT.md` |
| Bu prompt | `/Users/zeynepsilayilmaz/ZesiraStudio/docs/CLAUDE-DEPLOY-PROMPT.md` |

## Claude'a nasıl verilir?

**Seçenek A (en kolay):** Zip'i Claude'a upload et + yukarıdaki prompt'u yapıştır

**Seçenek B:** `CLAUDE-FULL-CODE-EXPORT.md` dosyasını Claude'a upload et (124KB, tüm kaynak kod)

**Seçenek C:** Claude Projects'e zip'i ekle, "bu projeyi zesirastudio.com'a deploy et" de
