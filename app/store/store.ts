import { create } from "zustand";
import Lenis from "@studio-freight/lenis";

type Store = {
  globalLenis: Lenis | null;
  setLenis: (lenis: Lenis) => void;
};

export const useMyStore = create<Store>((set) => ({
  globalLenis: null,
  setLenis: (lenis: Lenis) => set({ globalLenis: lenis }),
}));
