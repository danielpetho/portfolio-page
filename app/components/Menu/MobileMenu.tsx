"use client";

import { motion } from "framer-motion";
import SocialLinks from "./Navigation/SocialLinks";
import InternalLinks from "./Navigation/InternalLinks";

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
    display: "block",
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
        <motion.div
          layout
          className={` ${"top-0 left-0 right-0 absolute sm:hidden w-screen h-screen bg-pale-white"}`}
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
    </>
  );
};

export default MobileMenu;
