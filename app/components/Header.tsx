"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useAnimate,
} from "framer-motion";
import useDimension from "../hooks/useDimension";
import MaskedHeader from "./Text/MaskedText";

const Header = () => {
  const currentRoute = usePathname();
  const { viewportWidth, viewportHeight, documentWidth, documentHeight } =
    useDimension();

  const [footerPosition, setFooterPosition] = useState(0);
  const [reachedFooter, setReachedFooter] = useState(false);
  const [scope, animate] = useAnimate();
  const [showMenu, setShowMenu] = useState(true);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (documentHeight > 0) {
      setFooterPosition((documentHeight - 80) / documentHeight);
    }
  }, [documentHeight]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(footerPosition);
    console.log(documentHeight);
    if (latest >= footerPosition) {
      setReachedFooter(true);
    } else {
      setReachedFooter(false);
    }
  });

  useEffect(() => {
    if (reachedFooter) {
      animate(
        scope.current,
        { backgroundColor: "#00000000", color: "#ffffff" },
        { duration: 0.5, ease: "easeInOut" }
      );
    } else {
      animate(
        scope.current,
        { backgroundColor: "#f2eff2", color: "#000000" },
        { duration: 0.5, ease: "easeInOut" }
      );
    }
  }, [reachedFooter]);

  return (
    <motion.header
      className="fixed top-0 w-full bg-pale-white text-black z-10"
      ref={scope}
    >
      <div className="flex justify-center items-center ">
        <div className=" py-4 px-6 sm:px-10 md:px-24 flex w-full justify-between items-center h-16 md:h-20 ">
          <div className="py-2 ">
            <Link
              href="/"
              className="text-xl md:text-2xl  font-medium bg-transparent"
            >
              <MaskedHeader
                delay={0}
                phrases={["Daniel Petho"]}
                tailwindClasses={""}
              />
            </Link>
          </div>

          <button
            className="bg-transparent relative"
            onClick={() => setShowMenu(!showMenu)}
          >
              <MaskedHeader
                phrases={["Menu"]}
                delay={0.1}
                tailwindClasses={"text-xl font-medium flex w-full h-full"}
              />
              <p className="text-xl font-medium  w-full h-full absolute top-100">
                Close
              </p>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
