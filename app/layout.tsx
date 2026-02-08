import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getMetadataBase } from "@/app/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Projektová Dokumentace | QIK",
    template: "%s | QIK",
  },
  alternates: {
    canonical: "/",
  },
  description:
    "Projektová dokumentace od QIK pro všechny typy staveb. Rychlejší tvorba technických zpráv a dokumentace v souladu s aktuálními vyhláškami.",
  applicationName: "Projektová Dokumentace",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Projektová Dokumentace",
    url: "/",
    title: "Projektová Dokumentace | QIK",
    description:
      "Projektová dokumentace od QIK pro všechny typy staveb. Rychlejší tvorba technických zpráv a dokumentace v souladu s aktuálními vyhláškami.",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
