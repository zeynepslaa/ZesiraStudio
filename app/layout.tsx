import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zesira Studio — Not a website. A presence.",
  description: "A digital atelier for modern brands. Cinematic, editorial, emotionally immersive web experiences.",
  openGraph: {
    title: "Zesira Studio",
    description: "Not a website. A presence.",
    url: "https://zesirastudio.com",
    siteName: "Zesira Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
