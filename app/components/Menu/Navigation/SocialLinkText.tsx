"use client";

import {  motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";

interface SocialLinkTextProps {
  text: string;
  link: string;
  isMenuOpen: boolean;
  tailwindClasses?: string;
  delay: number;
}

const SocialLinkText: React.FC<SocialLinkTextProps> = ({
  text,
  link,
  isMenuOpen,
  tailwindClasses,
  delay,
}) => {
  const arrowIconVariants = {
    hover: {
      rotate: -45,
      transition: { duration: 0.33, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const headerVariants = {
    hover: {
      x: 28,
      transition: { duration: 0.33, ease: [0.76, 0, 0.24, 1] },
    },
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      transitionEnd: {
        display: "none",
      },
      transition: { duration: 0.33, ease: "easeInOut", delay: 0. },
    },
    show: {
      opacity: 1,
      display: "block",
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.33, ease: "easeInOut", delay: delay },
    },
  };

  return (
    <motion.div
      className={`${tailwindClasses} w-full flex flex-row  overflow-hidden`}
    >
      <motion.div
        className="relative"
        variants={headerVariants}
        whileHover="hover"
        animate={isMenuOpen ? "show" : "hidden"}
        initial="hidden"
      >
        <motion.span
          className="absolute left-0 -ml-6 mt-0.5 text-xl "
          variants={arrowIconVariants}
        >
          <IoMdArrowForward />
        </motion.span>

        <motion.a
          href={link}
          className="ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default SocialLinkText;
