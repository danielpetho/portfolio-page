import type { Metadata } from "next";
import { archia } from "./utils/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <html lang="en" className={archia.className}>
      <body >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
