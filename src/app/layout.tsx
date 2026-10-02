import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spectrumgalactic.xyz"),
  title: {
    default: "Spectrum Galactic - Satellite Backhaul Plan",
    template: "%s | Spectrum Galactic",
  },
  description: "An early-stage plan for satellite backhaul for the Sovereign Stack. No satellites are in orbit yet.",
  keywords: ["satellite", "LEO", "connectivity", "sovereign stack", "decentralized", "satellite backhaul"],
  openGraph: {
    title: "Spectrum Galactic - Satellite Backhaul Plan",
    description: "An early-stage plan for satellite backhaul for the Sovereign Stack. No satellites are in orbit yet.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Spectrum Galactic | Satellite Backhaul Plan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectrum Galactic - Satellite Backhaul Plan",
    description: "An early-stage plan for satellite backhaul for the Sovereign Stack. No satellites are in orbit yet.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
