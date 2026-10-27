import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/src/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.companyName} | Class 'A' Government Contractor & Heavy Infrastructure`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.shortDescription,
  keywords: [
    "Construction Company Nepal",
    "Class A Contractor Nepal",
    "Lumbini Builders",
    "Commercial Complex Builder Butwal",
    "Bhairahawa Highway Bridge Contractor",
    "Seismic Retrofitting NBC 105 Nepal",
    "Government Tender Contractor Nepal",
  ],
  authors: [{ name: siteConfig.companyName }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-yellow-500 selection:text-slate-950">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
