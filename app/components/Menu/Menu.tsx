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
    width: "",
    height: "",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    width: "13vw",
    height: "10vh",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const bgBlurVariants = {
  open: {
    opacity: 1,
    backdropFilter: "blur(10px)",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Menu = ({ showMenu, setShowMenu }: MenuProps) => {
  const [isBGBlurActive, setIsBGBlurActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const handleAnimationStart = () => {
    if (showMenu && !isBGBlurActive) {
      setIsBGBlurActive(true);
    } else if (!showMenu && isBGBlurActive) {
      setIsBGBlurActive(true);
    }

    if (!showMenu && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleAnimationComplete = () => {
    if (!showMenu && isBGBlurActive) {
      setIsBGBlurActive(false);
    }

    if (showMenu && !isMenuOpen) {
      setIsMenuOpen(true);
    } 
  };

  const handleContactMenuClick = () => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    setShowMenu(false);

    lenis.scrollTo("bottom", { duration: 1, lock: true });
  };

  const handleUpdate = (latest: any) => {

    if (!isMenuOpen && latest.opacity <= 0.1 && latest.opacity >= 0.09) {
      //setIsMenuOpen(true);
    }
  }

  return (
    <div className="hidden sm:block">
      <motion.div
        className={` ${
          isBGBlurActive ? "w-screen h-screen absolute" : "hidden w-0 h-0"
        }  top-0 left-0 bg-black/50 hidden sm:block`}
        variants={bgBlurVariants}
        animate={showMenu ? "open" : "closed"}
        initial="closed"
        onAnimationComplete={handleAnimationComplete}
        onAnimationStart={handleAnimationStart}
        onUpdate={handleUpdate}
      ></motion.div>
      <div className="absolute right-10 top-7">
        <motion.div
          className="w-[480px] h-[700px] relative bg-pale-white rounded-[25px] 2xl:rounded-[50px] 3xl:rounded-[75px] shadow-2xl"
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
    </div>
  );
};

export default Menu;
