"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import SocialLinks from "./Navigation/SocialLinks";
import InternalLinks from "./Navigation/InternalLinks";

interface MenuProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

const menuVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const MobileMenu = ({ showMenu, setShowMenu }: MenuProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  const handleContactMenuClick = () => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    setShowMenu(false);

    lenis.scrollTo("bottom", { duration: 1, lock: true });
  };


  return (
    <>
      <div className="absolute top-0 left-0 sm:hidden">
        <motion.div
          className="w-screen h-screen bg-pale-white shadow-2xl"
          variants={menuVariants}
          animate={showMenu ? "open" : "closed"}
          initial="closed"
        >
          <nav className="flex flex-col justify-between h-full text-black">
            <InternalLinks isMenuOpen={showMenu} />
            <SocialLinks isMenuOpen={showMenu} />
          </nav>
        </motion.div>
      </div>
    </>
  );
};

export default MobileMenu;
