"use client";

// @ts-ignore
import Tempus from "@studio-freight/tempus";
import Lenis from "@studio-freight/lenis";
import { useContext, useLayoutEffect, useRef } from "react";
import router from "next/router";
import { createContext } from "react";
import { useMyStore } from "../../src/store/store";

export const lenisCTX = createContext<Lenis | null>(null);

export const useLenis = () => useContext(lenisCTX);

export default function Lenify({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  const { setLenis } = useMyStore();

  useLayoutEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    setLenis(lenis);

    const resize = setInterval(() => {
      lenis.resize();
    }, 150);
    function onFrame(time: number) {
      lenis.raf(time);
    }
    const unsubscribe = Tempus.add(onFrame);

    router.events.on("routeChangeStart", () => {
      lenis.scrollTo(0, { immediate: true });
    });

    return () => {
      unsubscribe();
      clearInterval(resize);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  return (
    <lenisCTX.Provider value={lenisRef.current}>{children}</lenisCTX.Provider>
  );
}