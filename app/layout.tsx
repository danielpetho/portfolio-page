import type { Metadata } from "next";
import { archia } from "./utils/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lenify from "@/app/components/Lenify";

export const metadata = {
  metadataBase: new URL("https://www.danielpetho.com"),
  title: "Daniel Petho - Creative Developer & Technologist",
  description: "",
  keywords: "web development, immersive, creative technology, design, code",
  openGraph: {
    type: "website",
    title: "Daniel Petho - Creative Developer & Technologist",
    description: "",
    url: "https://www.danielpetho.com",
    siteName: "Daniel Petho",
    /*images: [
      {
        url: "main-og-image.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],*/
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archia.className}>
      <body>
        <Lenify>
          <Header />
          {children}
          <Footer />
        </Lenify>

        <Analytics />
      </body>
    </html>
  );
}
