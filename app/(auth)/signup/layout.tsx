import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Založení pracoviště",
  alternates: {
    canonical: "/signup",
  },
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
