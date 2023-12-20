"use client";

import { FaSnapchatGhost, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion, useScroll, useInView } from "framer-motion";

import { IoMdArrowForward } from "react-icons/io";

import { Filter } from "@/typings";
import { useRef } from "react";

type FilterCardProps = {
  filter: Filter;
  idx: number;
};

const headerVariants = {
  hover: {
    x: 40,
    transition: { duration: 0.33, ease: [0.76, 0, 0.24, 1] },
  },
};

const videoContainerVariants = {
  hover: {
    borderRadius: "100px 30px",
    transition: { duration: 0.33, ease: "easeInOut" },
  },
};

const videoVariants = {
  hover: {
    scale: 1.2,
    transition: { duration: 0.33, ease: "easeInOut" },
  },
};

const arrowIconVariants = {
  hover: {
    x: 40,
    color: "#333333",
    transition: { duration: 0.33, ease: [0.76, 0, 0.24, 1] },
  },
};

const FilterCard: React.FC<FilterCardProps> = ({ filter, idx }) => {
  const cardRef = useRef(null)

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 + idx * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
    >
      <motion.div
        className="relative overflow-hidden"
        initial={{ borderRadius: "30px 30px" }}
        variants={videoContainerVariants}
      >
        <motion.video
          src={filter.preview.url}
          initial={{ scale: 1 }}
          muted  
          variants={videoVariants}
        ></motion.video>
      </motion.div>

      <div className="overflow-hidden">
      <motion.div
        className="flex flex-row flex-1 mt-3 w-full justify-start items-start"
        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.1 + idx * 0.1,
        }}
      >

        <motion.div 
        className="relative font-medium w-full text-xl overflow-hidden flex flex-row items-center"
        >

          <motion.span
            className="absolute left-0 w-full h-full -ml-9 mt-1 text-2xl"
            initial={{ color: "#f2eff2" }}
            variants={arrowIconVariants}
          >
            <IoMdArrowForward />
          </motion.span>

          <motion.h2 className="ml-1" variants={headerVariants}>
            {filter.name}
          </motion.h2>
        </motion.div>

        
      </motion.div>
      </div>
    </motion.div>
  );
};

export default FilterCard;
