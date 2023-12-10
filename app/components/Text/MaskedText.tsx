"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MaskedHeaderProps {
  phrases: string[];
  tailwindClasses: string;
  delay: number;
}

const MaskedText: React.FC<MaskedHeaderProps> = ({
  phrases,
  tailwindClasses,
  delay,
}) => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "75%" });

  return (
    <div ref={body} className={`${tailwindClasses}`}>
      {phrases &&
        phrases.length > 0 &&
        phrases.map((phrase: string, idx: number) => {
          return (
            <div key={idx} className="overflow-visible">
              <motion.p
                initial={{ opacity: 0,  filter: "blur(5px)" }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
              >
                {phrase}
              </motion.p>
            </div>
          );
        })}
    </div>
  );
};

export default MaskedText;
