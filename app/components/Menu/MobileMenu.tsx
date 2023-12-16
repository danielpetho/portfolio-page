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
}

const menuVariants = {
  open: {
    opacity: 1,
    w: "100vw",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
    display: "block",

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
}: MenuProps) => {
  return (
    <>
      <div className="absolute top-0 left-0 sm:hidden">
        <motion.div
        layout
          className="w-screen h-screen bg-pale-white shadow-2xl"
          variants={menuVariants}
          animate={showMenu ? "open" : "closed"}
          initial="closed"
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
