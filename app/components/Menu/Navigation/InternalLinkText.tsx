"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface InternalLinkTextProps {
  idx: number;
  text: string;
  link: string;
  isMenuOpen: boolean;
  linkHovered: string;
  handleLinkClick: (link: string) => void;
  hoverLink: (link: string) => void;
  leaveLink: () => void;
  tailwindClasses?: string;
  delay: number;
}

const InternalLinkText = ({
  idx,
  text,
  link,
  isMenuOpen,
  linkHovered,
  handleLinkClick,
  hoverLink,
  leaveLink,
  tailwindClasses,
  delay,
}: InternalLinkTextProps) => {
  const [shouldPlayHoverAnimation, setShouldPlayHoverAnimation] =
    useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const headerVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.33, ease: "easeInOut", delay: 0 },
      transitionEnd: {
        y: 25,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.33, ease: "easeInOut", delay: delay },
    },
  };

  const linkVariants = {
    hovered: (shouldPlayHoverAnimation: boolean) => ({
      filter: "blur(0px)",
      transition: {
        duration: 0.33,
        ease: "easeInOut",
      },
    }),
    unhovered: (shouldPlayHoverAnimation: boolean) => ({
      filter: shouldPlayHoverAnimation ? "blur(5px)" : "blur(0px)",
      transition: {
        duration: 0.33,
        ease: "easeInOut",
      },
    }),
  };

  useEffect(() => {
    if (linkHovered != "") {

      setShouldPlayHoverAnimation(true);
      
      if (linkHovered === link) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    } else {
      setShouldPlayHoverAnimation(false);
    }

    console.log(shouldPlayHoverAnimation)

  }, [linkHovered]);

  return (
    <motion.li
      variants={linkVariants}
      animate={isHovered ? "hovered" : "unhovered"}
      initial="unhovered"
      custom={shouldPlayHoverAnimation}
    >
      <motion.div
        className={`${tailwindClasses} py-1 sm:py-2 `}
        animate={!isMenuOpen ? "hidden" : "show"}
        initial="hidden"
        variants={headerVariants}
        onClick={() => handleLinkClick(link)}
        onMouseEnter={() => hoverLink(link)}
        onMouseLeave={() => leaveLink()}
      >
        <Link className={`text-3xl sm:text-4xl font-semibold py-2`} href={link}>
          {text}
        </Link>
      </motion.div>
    </motion.li>
  );
};

export default InternalLinkText;