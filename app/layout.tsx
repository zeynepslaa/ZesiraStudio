import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zesira Studio | A Living Sims Universe",
  description:
    "A cinematic creator studio for Sims characters, builds, save files, diaries, and evolving world stories.",
  openGraph: {
    title: "Zesira Studio",
    description: "Not just CC. A living universe.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
