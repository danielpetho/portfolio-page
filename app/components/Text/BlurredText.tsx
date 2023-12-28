"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurredTextProps {
  text: string;
  tailwindClasses: string;
  delay: number;
  once: boolean;
}

const BlurredText: React.FC<BlurredTextProps> = ({
  text,
  tailwindClasses,
  delay,
  once = true,
}) => {
  const body = useRef(null);

  return (
    <div ref={body} className={`${tailwindClasses}`}>

      <motion.p
        initial={{ opacity: 0, filter: "blur(5px)" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: once }}>

        {text}
      </motion.p>
    </div>
  );
};

export default BlurredText;
