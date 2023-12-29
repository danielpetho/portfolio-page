"use client"

import React, { useEffect, useRef, useState } from "react";
import useElementSize from '../../hooks/useElementSize';
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
  const { width: bottomWidth, height: bottomHeight } = useElementSize(bottomRef);

  const { scrollYProgress: bottomScrollYProgress } = useScroll({
    target: bottomRef,
    offset: ["start end", "start start"]
  });

  const opac = useTransform(scrollYProgress, [0, .5], [0.0, 1]);
  const radius = useTransform(scrollYProgress, [0.7, 1.], [50, 0] );
  const y = useTransform(bottomScrollYProgress, [0.3, 1], [0, -bottomHeight]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    const x = clientX / width;
    const y = clientY / height;
    setMousePosition({ x, y });

  };

  return (
    <motion.footer id="contact" className="text-white text-xl flex w-screen  items-center flex-col h-screen justify-center bg-gradient-to-b from-transparent to-black "
      onMouseMove={handleMouseMove}
      ref={footerRef}
      style={{ opacity: opac } }
    >
      <motion.div className="w-full h-full">
        <Contact mousePosition={mousePosition} scrollProgress={radius}  />
      </motion.div>
      <motion.div className="w-full" ref={bottomRef}>
        <Bottom />
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
