import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Přihlášení",
  alternates: {
    canonical: "/login",
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
