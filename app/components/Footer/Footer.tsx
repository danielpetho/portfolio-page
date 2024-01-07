"use client"

import React, { useRef, useState } from "react";
import useElementSize from '@/src/hooks/useElementSize';
import Contact from "./Contact";
import Bottom from "./Bottom";
import { useTransform, motion, useScroll } from "framer-motion";

const Footer: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = React.useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize(footerRef);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "start start"]
  });

  const bottomRef = useRef<HTMLDivElement>(null);
  const opac = useTransform(scrollYProgress, [0, .5], [0.0, 1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    const x = clientX / width;
    const y = clientY / height;
    setMousePosition({ x, y });

  };

  return (
    <motion.footer id="contact" className="text-white text-[1vw]  flex w-screen items-center flex-col h-full min-h-screen justify-center"
      onMouseMove={handleMouseMove}
      ref={footerRef}
    >

      <div className="w-full px-[5vw] h-full mt-[9vh] sm:mt-[10vh] md:h-[76vh] md:mt-[14vh]">
        <Contact mousePosition={mousePosition} />
      </div>
      <div className="w-full" ref={bottomRef}>
        <Bottom />
      </div>
    </motion.footer>
  );
};

export default Footer;
