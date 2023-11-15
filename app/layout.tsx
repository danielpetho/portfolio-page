import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Petho",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
      <Analytics />
    </html>
  );
}
