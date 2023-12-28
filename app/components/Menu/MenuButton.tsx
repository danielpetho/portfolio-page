"use client";

import { motion } from "framer-motion";
import BlurredText from "../Text/BlurredText";

interface MenuButtonProps {
  showMenu: boolean;
  handleButtonClick: () => void;
}

const MenuButton = ({ showMenu, handleButtonClick }: MenuButtonProps) => {
  return (
    <button
      className="absolute cursor-pointer w-24 right-0 sm:w-32 2xl:w-48  h-6 sm:h-8 3xl:h-14 overflow-hidden"
      onClick={handleButtonClick}
    >
      <motion.div
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full h-full justify-end items-center"
        animate={{ top: showMenu ? "-100%" : "0" }}
      >
        <BlurredText
          text={"Menu"}
          delay={0.1}
          tailwindClasses={
            " font-medium flex justify-end items-center w-full pr-1 h-full"
          }
          once={true}
        />
        <p
          className={
            " text-black font-medium justify-end text-lg sm:text-2xl items-center h-full flex pr-1 absolute right-0"
          }
        >
          Close
        </p>
      </motion.div>
    </button>
  );
};

export default MenuButton;
