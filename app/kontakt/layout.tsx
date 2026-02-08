import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte tým QIK. Ozvěte se nám pro demo nebo pomoc s platformou Projektová dokumentace QIK.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    url: "/kontakt",
    title: "Kontakt",
    description:
      "Kontaktujte tým QIK. Ozvěte se nám pro demo nebo pomoc s platformou Projektová dokumentace QIK.",
  },
};

export default function KontaktLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
