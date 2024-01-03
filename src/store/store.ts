import { create } from "zustand";
import Lenis from "@studio-freight/lenis";
import { createRef } from "react";

type Store = {
  // views
  isClientMobile: boolean;
  isClientBrowser: boolean;
  isMobileView: boolean;
  setIsClientMobile: (isMobile: boolean) => void;
  setIsClientBrowser: (isBrowser: boolean) => void;
  setIsMobileView: (isMobileView: boolean) => void;

  // lenis scroll
  globalLenis: Lenis | null;
  setLenis: (lenis: Lenis) => void;

  // this shouldn't be here, look into react portal!!!!
  showSelectedWorkImage: boolean;
  setShowSelectedWorkImage: (show: boolean) => void;
  selectedWorkImageIndex: number;
  setSelectedWorkImageIndex: (index: number) => void;

  // refs for r3f
  footerRef: React.MutableRefObject<HTMLDivElement>;
  setFooterRef: (ref: React.MutableRefObject<HTMLDivElement>) => void;

  landingPageRef: React.MutableRefObject<HTMLDivElement>;
  setLandingPageRef: (ref: React.MutableRefObject<HTMLDivElement>) => void;
};

export const useMyStore = create<Store>((set) => ({
  globalLenis: null,
  setLenis: (lenis: Lenis) => set({ globalLenis: lenis }),

  isClientMobile: false,
  isClientBrowser: false,
  isMobileView: false,
  setIsClientMobile: (isMobile: boolean) => set({ isClientMobile: isMobile }),
  setIsClientBrowser: (isBrowser: boolean) =>
    set({ isClientBrowser: isBrowser }),
  setIsMobileView: (isMobileView: boolean) => set({ isMobileView: isMobileView }),

  showSelectedWorkImage: false,
  setShowSelectedWorkImage: (show: boolean) =>
    set({ showSelectedWorkImage: show }),
  selectedWorkImageIndex: 0,
  setSelectedWorkImageIndex: (index: number) =>
    set({ selectedWorkImageIndex: index }),

  footerRef: createRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>,
  setFooterRef: (ref: React.MutableRefObject<HTMLDivElement>) =>
    set({ footerRef: ref }),

  landingPageRef: createRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>,
  setLandingPageRef: (ref: React.MutableRefObject<HTMLDivElement>) =>
    set({ landingPageRef: ref }),

}));
