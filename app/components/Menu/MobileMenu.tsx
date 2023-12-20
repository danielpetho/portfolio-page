"use client";

import { motion } from "framer-motion";
import SocialLinks from "./Navigation/SocialLinks";
import InternalLinks from "./Navigation/InternalLinks";
import { useState } from "react";

interface MenuProps {
  showMenu: boolean;
  linkHovered: string;
  handleLinkClick: (link: string) => void;
  onHoverLink: (link: string) => void;
  onLeaveLink: () => void;
  setIsMenuTransitioning: (isMenuTransitioning: boolean) => void;
}

const menuVariants = {
  open: {
    opacity: 1,
    width: "100vw",
    height: "100vh",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    width: "",
    height: "",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const MobileMenu = ({
  showMenu,
  linkHovered,
  handleLinkClick,
  onHoverLink,
  onLeaveLink,
  setIsMenuTransitioning,
}: MenuProps) => {

  const handleAnimationStart = () => {
    setIsMenuTransitioning(true);
  };

  const handleAnimationComplete = () => {
    setIsMenuTransitioning(false);
  };

  return (
    <>
      <div className="absolute top-0 left-0 sm:hidden">
        <motion.div
          layout
          className={` ${"top-0 left-0 absolute sm:hidden w-screen h-screen bg-pale-white"}`}
          variants={menuVariants}
          animate={showMenu ? "open" : "closed"}
          initial="closed"
          onAnimationComplete={handleAnimationComplete}
          onAnimationStart={handleAnimationStart}
        >
          <nav className="flex flex-col justify-between h-full text-black">
            <InternalLinks
              isMenuOpen={showMenu}
              handleLinkClick={handleLinkClick}
              hoverLink={onHoverLink}
              leaveLink={onLeaveLink}
              linkHovered={linkHovered}
            />
            <SocialLinks isMenuOpen={showMenu} />
          </nav>
        </motion.div>
      </div>
    </>
  );
};

export default MobileMenu;
