import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zesirastudio.com"),
  title: "Zesira Studio — Modern Markalar İçin Web Siteleri ve Dijital Deneyimler",
  description: "Lüks ve butik markalar için sıfırdan tasarlanan web siteleri. Ücretsiz dijital denetim ile başlayın.",
  openGraph: {
    title: "Zesira Studio",
    description: "Lüks ve butik markalar için sıfırdan tasarlanan web siteleri ve dijital deneyimler.",
    url: "https://zesirastudio.com",
    siteName: "Zesira Studio",
    type: "website",
    images: [{ url: "/zs/vora-homepage.png", width: 1440, height: 900, alt: "Zesira Studio — VORA Istanbul çalışması" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zesira Studio",
    description: "Lüks ve butik markalar için sıfırdan tasarlanan web siteleri.",
    images: ["/zs/vora-homepage.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preload" as="image" href="/zs/vora-homepage.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
