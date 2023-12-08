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
      setFooterPosition((documentHeight - 64) / documentHeight );
    }
  }, [documentHeight]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(footerPosition);
    console.log(documentHeight)
    if (latest >= footerPosition) {
      setReachedFooter(true);
    } else {
      setReachedFooter(false);
    }
  });

  useEffect(() => {
    if (reachedFooter) {
      animate(scope.current, { backgroundColor: "#00000000", color: "#ffffff" }, { duration: 0.5, ease: "easeInOut" });
    } else {
      animate(scope.current, { backgroundColor: "#f2eff2", color: "#000000" }, { duration: 0.5, ease: "easeInOut" });
    }
  }, [reachedFooter]);

  return (
    <header className="fixed top-0 w-full bg-transparent z-10">
      <div className="flex justify-center items-center ">
        <motion.div
          ref={scope}
          className="max-w-[1920px] text-black py-4 px-6 sm:px-10 md:px-24 flex w-full justify-between items-center h-16 md:h-20 bg-pale-white"
        >
          <div className="py-2 ">
            <Link
              href="/"
              className="text-xl md:text-2xl  font-medium bg-transparent"
            >
              Daniel Petho
            </Link>
          </div>

          <button
            className="bg-transparent"
            onClick={() => setShowMenu(!showMenu)}
          >
            <p className=" text-xl font-medium font-regular flex">Menu</p>
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
