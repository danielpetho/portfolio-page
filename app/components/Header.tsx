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
import MaskedText from "./Text/MaskedText";
import Menu from "./Menu/Menu";
import MenuButton from "./Menu/MenuButton";
import MobileMenu from "./Menu/MobileMenu";

const Header = () => {
  const currentRoute = usePathname();
  const { viewportWidth, viewportHeight, documentWidth, documentHeight } =
    useDimension();

  const [footerPosition, setFooterPosition] = useState(0);
  const [reachedFooter, setReachedFooter] = useState(false);
  const [scope, animate] = useAnimate();
  const [showMenu, setShowMenu] = useState(false);

  const { scrollYProgress } = useScroll();

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (documentHeight > 0) {
      setFooterPosition((documentHeight - 80) / documentHeight);
    }
  }, [documentHeight]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
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
      className="fixed top-0 left-0 w-full bg-pale-white text-black z-10"
      ref={scope}
    >
      <div className="flex justify-center items-center ">
        <div className="px-10 sm:px-12 md:px-14 lg:px-16 xl:px-20 2xl:px-32 3xl:px-48 flex w-full items-center justify-between h-24 md:h-28 lg:h-30 xl:h-36 2xl:h-40 3xl:h-[16vh] ">
          
          <div className="py-2 ">
            <Link
              href="/"
              className="text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl font-medium bg-transparent"
            >
              <MaskedText
                delay={0}
                phrases={["Daniel Petho"]}
                tailwindClasses={""}
              />
            </Link>
          </div>
          
          <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
          <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />

          <div className="flex relative items-center justify-center text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl">
          <MenuButton
            showMenu={showMenu}
            handleButtonClick={handleButtonClick}
          />
          
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
