import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modul Stavba",
  description:
    "Modul Stavba v QIK pro projektovou dokumentaci: vady a nedodělky, fotodokumentace a stavební deník. Stránka je aktuálně ve vývoji.",
  alternates: {
    canonical: "/stavba",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    url: "/stavba",
    title: "Modul Stavba",
    description:
      "Modul Stavba v QIK pro projektovou dokumentaci: vady a nedodělky, fotodokumentace a stavební deník. Stránka je aktuálně ve vývoji.",
  },
};

export default function StavbaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
