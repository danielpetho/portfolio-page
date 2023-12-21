"use client";

import { useMyStore } from "@/app/store/store";
import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";

interface MaskedExternalLinkProps {
  text: string;
  link: string;
  tailwindClasses?: string;
  arrowSize?: string;
  delay: number;
}

const arrowIconVariants = {
  hover: {
    rotate: -45,
    transition: { duration: 0.33, ease: [0.76, 0, 0.24, 1] },
  },
};

const textVariants = {
  hover: {
    x: 40,
    transition: { duration: 0.33, ease: [0.76, 0, 0.24, 1] },
  },
};

const MaskedExternalLink: React.FC<MaskedExternalLinkProps> = ({
  text,
  link,
  tailwindClasses,
  arrowSize,
  delay,
}) => {

  const { isClientMobile} = useMyStore();

  return (
    <motion.div
      className={`${tailwindClasses} w-full flex flex-row flex-grow overflow-hidden`}
    >
      <motion.div
        className="relative"
        variants={textVariants}
        whileHover={!isClientMobile ? "hover" : ""}
      >
        <motion.span
          className={`${arrowSize ? arrowSize : "text-2xl"} absolute left-0 -ml-8 mt-0.5`}	
          variants={arrowIconVariants}
        >
          <IoMdArrowForward />
        </motion.span>

        <motion.a
          initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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

export default MaskedExternalLink;
