"use client";

import { useState, useEffect } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useAnimate,
} from "framer-motion";
import useDimension from "../hooks/useDimension";
import Menu from "./Menu/Menu";
import MenuButton from "./Menu/MenuButton";
import MobileMenu from "./Menu/MobileMenu";
import { useMyStore } from "../store/store";
import RandomStaggeredText from "./Text/RandomStaggeredText";

const Header = () => {
  const currentRoute = usePathname();
  const { viewportWidth, viewportHeight, documentWidth, documentHeight } =
    useDimension();

  const [footerPosition, setFooterPosition] = useState(0);
  const [reachedFooter, setReachedFooter] = useState(false);
  const [scope, animate] = useAnimate();

  const [showMenu, setShowMenu] = useState(false);
  const [isMenuTransitioning, setIsMenuTransitioning] = useState(false);
  const [linkHovered, setLinkHovered] = useState("");

  const {
    globalLenis,
    isMobileView,
    isClientMobile,
    setIsClientBrowser,
    setIsClientMobile,
  } = useMyStore();

  const { scrollYProgress } = useScroll();

  const handleButtonClick = () => {
    if (!isMenuTransitioning) {
      setShowMenu(!showMenu);
    }
  };

  const handleLinkClick = (link: string) => {
    setShowMenu(false);

    if (link === "#contact") {
      globalLenis?.scrollTo("bottom", { duration: 2, lock: true });
    }
  };

  const onMouseEnterLink = (link: string) => {
    if (isClientMobile) return;
    setLinkHovered(link);
  };

  const onMouseLeaveLink = () => {
    if (isClientMobile) return;
    setLinkHovered("");
  };

  useEffect(() => {
    setIsClientBrowser(isBrowser);
    setIsClientMobile(isMobile);
  }, [isMobile, isBrowser]);

  /*useEffect(() => {
    if (documentHeight > 0) {
      setFooterPosition((documentHeight - 160) / documentHeight);
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
        { backgroundColor: "#f8f6f8", color: "#000000" },
        { duration: 0.5, ease: "easeInOut" }
      );
    }
  }, [reachedFooter]);*/

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-pale-white text-black z-10"
      ref={scope}
    >
      <div className="flex justify-center items-center ">
        <div className="px-[5vw] flex w-full items-center justify-between h-[8vh] sm:h-[10vh] md:h-[14vh] ">
          <div className="py-2 ">
            <Link
              href="/"
              className="text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl font-medium bg-transparent"
            >
              <span className="flex flex-row">
                <RandomStaggeredText
                  revealDelay={0}
                  hoverDelay={0.1}
                  hoverDuration={0.5}
                  hoverStagger={0.02}
                  text={"Daniel\u2009Petho"}
                  tailwindClasses={""}
                  once={true}
                />

              </span>
            </Link>
          </div>

          {isMobileView ? (
            <MobileMenu
              showMenu={showMenu}
              setIsMenuTransitioning={setIsMenuTransitioning}
              handleLinkClick={handleLinkClick}
              onHoverLink={onMouseEnterLink}
              onLeaveLink={onMouseLeaveLink}
              linkHovered={linkHovered}
            />
          ) : (
            <Menu
              showMenu={showMenu}
              handleLinkClick={handleLinkClick}
              onHoverLink={onMouseEnterLink}
              onLeaveLink={onMouseLeaveLink}
              linkHovered={linkHovered}
            />
          )}

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
