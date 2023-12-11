"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface MenuProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

const menuVariants = {
  open: {
    width: "",
    height: "",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    width: "13vw",
    height: "10vh",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const bgBlurVariants = {
  open: {
    opacity: 1,
    backdropFilter: "blur(10px)",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Menu = ({ showMenu, setShowMenu }: MenuProps) => {
  const [isBGBlurActive, setIsBGBlurActive] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  const handleAnimationStart = () => {
    if (showMenu && !isBGBlurActive) setIsBGBlurActive(true);
    else if (!showMenu && isBGBlurActive) setIsBGBlurActive(true);
  };

  const handleAnimationComplete = () => {
    if (!showMenu && isBGBlurActive) setIsBGBlurActive(false);
  };

  const handleContactMenuClick = () => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    setShowMenu(false);

    console.log(lenis);
    lenis.scrollTo("bottom", { duration: 1, lock: true });
  }

  return (
    <>
      <motion.div
        className={` ${
          isBGBlurActive ? "w-screen h-screen absolute" : "hidden w-0 h-0 "
        }  top-0 left-0 bg-black/50`}
        variants={bgBlurVariants}
        animate={showMenu ? "open" : "closed"}
        initial="closed"
        onAnimationComplete={handleAnimationComplete}
        onAnimationStart={handleAnimationStart}
      ></motion.div>
      <div className="absolute right-10 top-7">
        <motion.div
          className="w-[480px] h-[700px] relative bg-pale-white rounded-[25px] 2xl:rounded-[50px] 3xl:rounded-[75px] shadow-2xl"
          variants={menuVariants}
          animate={showMenu ? "open" : "closed"}
          initial="closed"
        >

          <nav className="flex flex-col justify-between h-full text-black">
            <ul className="flex flex-col justify-start items-start pt-24 pl-14 h-full ">
            <Link className="text-4xl font-semibold py-2" href="/about">
                Home
              </Link>
              <Link className="text-4xl font-semibold py-2" href="/works">
                Works
              </Link>
              <Link className="text-4xl font-semibold py-2" href="/about">
                About
              </Link>
              
              <Link className="text-4xl font-semibold py-2" scroll={true} onClick={handleContactMenuClick} href="#contact">
                Contact
              </Link>
              <Link className="text-4xl font-semibold py-2 pt-14" href="/blog">
                Tutorials / Blog
              </Link>
              <Link className="text-4xl font-semibold py-2" href="/lab">
                Experiments
              </Link>
              <Link className="text-4xl font-semibold py-2" href="/lab/filters">
                Filters
              </Link>
            </ul>

            <div className="flex flex-row text pl-14 w-4/6 pr-6 pt-16 h-full font-medium justify-between">
                <div className="flex flex-col justify-start text-left">
                  <a
                    href="https://www.instagram.com/nonzeroexitcode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Instagram</a>
                  <a
                    href="https://www.x.com/nonzeroexitcode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Twitter / X</a>
              </div>

              <div className="flex flex-col justify-start text-left font-medium">
                  <a
                    href="https://www.linkedin.com/in/danielpetho"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Linkedin</a>
                  <a
                    href="https://github.com/danielpetho"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Github</a>
              </div>
            </div>

          </nav>
        </motion.div>
      </div>
    </>
  );
};

export default Menu;
