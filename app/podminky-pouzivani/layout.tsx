import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podmínky používání",
  description:
    "Podmínky používání aplikace QIK pro projektovou dokumentaci ve stavebnictví. Provozovatel QIK Solutions s.r.o.",
  alternates: {
    canonical: "/podminky-pouzivani",
  },
  openGraph: {
    url: "/podminky-pouzivani",
    title: "Podmínky používání",
    description:
      "Podmínky používání aplikace QIK pro projektovou dokumentaci ve stavebnictví. Provozovatel QIK Solutions s.r.o.",
  },
};

export default function PodminkyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
