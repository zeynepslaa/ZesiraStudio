import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ClinkNav } from "@/components/clink/ClinkNav";
import "./clink.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "CLINK — Craft Gazlı İçecek",
  description: "Vitrin paketi demosu · Zesira Studio",
};

export default function ClinkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`clink-root min-h-screen ${syne.variable} ${dmSans.variable}`}>
      <ClinkNav />
      {children}
    </div>
  );
}
