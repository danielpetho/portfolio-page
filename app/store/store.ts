import { create } from "zustand";
import Lenis from "@studio-freight/lenis";

type Store = {
  isClientMobile: boolean;
  isClientBrowser: boolean;
  isMobileView: boolean;
  setIsClientMobile: (isMobile: boolean) => void;
  setIsClientBrowser: (isBrowser: boolean) => void;
  setIsMobileView: (isMobileView: boolean) => void;

  globalLenis: Lenis | null;
  setLenis: (lenis: Lenis) => void;

  showSelectedWorkImage: boolean;
  setShowSelectedWorkImage: (show: boolean) => void;
  selectedWorkImageIndex: number;
  setSelectedWorkImageIndex: (index: number) => void;
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
}));
