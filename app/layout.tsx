import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proteomics Group Onboarding",
  description: "A practical guide to learning proteomics and running analyses on Biowulf.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
