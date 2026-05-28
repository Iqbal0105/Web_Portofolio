import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Iqbal.dev | Portfolio Magang Full-Stack & IoT",
  description: "Portofolio profesional Iqbal - Mahasiswa IT & Pengembang solusi otomatis yang memadukan Full-Stack Web Development, Internet of Things (IoT), dan Machine Learning.",
  keywords: ["Iqbal", "Iqbal dev", "Portfolio Magang", "Full-Stack Developer", "IoT Specialist", "Machine Learning Indonesia", "Next.js Portfolio"],
  authors: [{ name: "Iqbal" }],
  openGraph: {
    title: "Iqbal.dev | Portfolio Magang Full-Stack & IoT",
    description: "Portofolio profesional otomatis terintegrasi GitHub API. Menampilkan pembuktian proyek nyata Web Dev, IoT, dan Machine Learning.",
    url: "https://iqbal.dev",
    siteName: "Iqbal Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iqbal.dev Professional Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqbal.dev | Portfolio Magang Full-Stack & IoT",
    description: "Portofolio profesional terintegrasi GitHub API. Menampilkan proyek nyata Web Dev, IoT, dan Machine Learning.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-dark-bg text-slate-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300 min-h-screen flex flex-col">
        {/* Sticky Translucent Header */}
        <Navbar />
        
        {/* Core Sections Container */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
