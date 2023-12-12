"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface InternalLinkTextProps {
  text: string;
  link: string;
  isMenuOpen: boolean;
  tailwindClasses?: string;
  delay: number;
}

const InternalLinkText = ({
  text,
  link,
  isMenuOpen,
  tailwindClasses,
  delay,
}: InternalLinkTextProps) => {
  const headerVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.33, ease: "easeInOut", delay: 0 },
      transitionEnd: {
        y: 25,
      }
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.33, ease: "easeInOut", delay: delay },
    },
  };

  return (
    <motion.div
      className={`${tailwindClasses} py-1 sm:py-2 `}
      animate={isMenuOpen ? "show" : "hidden"}
      initial="hidden"
      variants={headerVariants}
    >
      <Link className={`text-3xl sm:text-4xl font-semibold py-2`} href={link}>
        {text}
      </Link>
    </motion.div>
  );
};

export default InternalLinkText;
