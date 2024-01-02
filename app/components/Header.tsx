"use client";

import { useState, useEffect } from "react";
import {
  isBrowser,
  isMobile,
} from "react-device-detect";
import Link from "next/link";

import Menu from "./Menu/Menu";
import MenuButton from "./Menu/MenuButton";
import MobileMenu from "./Menu/MobileMenu";
import { useMyStore } from "../store/store";
import RandomStaggeredText from "./Text/RandomStaggeredText";

const Header = () => {
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


  return (
    <header
      className="fixed top-0 left-0 w-full bg-pale-white text-black z-10"
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
    </header>
  );
};

export default Header;
