import type { Metadata } from "next";
import { archia } from "../src/utils/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Lenify from "@/app/components/Lenify";
import { Layout } from "@/src/utils/r3f/Layout";
import dynamic from "next/dynamic";
import OldScene from "./components/R3F/OldScene";

const Scene = dynamic(() => import('@/app/components/R3F/Scene'), { ssr: false })

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
      <body >

        <Lenify>
          <div className="w-screen h-screen fixed top-0 left-0">
            <Scene />
          </div>
          <div id="__next" />
          <Header />
          {children}
          <Footer />

        </Lenify>
        {/*<OldScene mousePosition={{x: 0, y: 0}} />*/}

      </body>
    </html>
  );
}
