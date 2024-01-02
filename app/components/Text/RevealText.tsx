"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface RevealTextProps {
  text: string;
  tailwindClasses?: string;
  delay: number;
  once: boolean;
  y: number
}

const RevealText: React.FC<RevealTextProps> = ({
  text,
  tailwindClasses,
  delay,
  once = true,
  y = 50
}) => {
  const body = useRef(null);

  return (
    <span ref={body} className={`${tailwindClasses}`}>

      <motion.span
        initial={{ opacity: 0, y: y }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: delay }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: once }}>

        {text}
      </motion.span>
    </span>
  );
};

export default RevealText;
