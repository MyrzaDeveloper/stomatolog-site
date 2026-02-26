import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import LayoutSite from "@/components/layout/LayoutSite";
import AOSProvider from "./providers/AOSproviders";
// import icon from ""

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // домен чыкса алмаштырасың
  title: "Dent Clinic — Стоматология в Бишкеке | Лечение, чистка, отбеливание",
  description:
    "Dent Clinic — современная стоматология в Бишкеке. Лечение кариеса, чистка, отбеливание, протезирование. Запись в WhatsApp.",
  keywords: [
    "стоматология Бишкек",
    "лечение зубов Бишкек",
    "чистка зубов",
    "отбеливание",
    "протезирование",
    "Dent Clinic",
  ],
  openGraph: {
    title: "Dent Clinic — Стоматология в Бишкеке",
    description:
      "Современная стоматология: лечение, чистка, отбеливание. Запись в WhatsApp.",
    type: "website",
    images: ["/icon.png"], 
  },
  twitter: {
    card: "summary_large_image",
    title: "Dent Clinic — Стоматология в Бишкеке",
    description: "Лечение, чистка, отбеливание. Запись в WhatsApp.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider />
        <LayoutSite>{children}</LayoutSite>
      </body>
    </html>
  );
}
