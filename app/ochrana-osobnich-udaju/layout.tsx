import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Zásady ochrany osobních údajů aplikace QIK. Správce QIK Solutions s.r.o. zpracovává údaje v souladu s GDPR.",
  alternates: {
    canonical: "/ochrana-osobnich-udaju",
  },
  openGraph: {
    url: "/ochrana-osobnich-udaju",
    title: "Ochrana osobních údajů",
    description:
      "Zásady ochrany osobních údajů aplikace QIK. Správce QIK Solutions s.r.o. zpracovává údaje v souladu s GDPR.",
  },
};

export default function OchranaOsobnichUdajuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
