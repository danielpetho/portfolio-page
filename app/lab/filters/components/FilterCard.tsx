"use client";

import { motion, useInView } from "framer-motion";

import { IoMdArrowForward } from "react-icons/io";

import { Filter } from "@/typings";
import { useEffect, useRef, useState } from "react";
import { useMyStore } from "@/app/store/store";
import BlurImage from "@/app/components/Placeholder/BlurImage";

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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const cardRef = useRef(null);
  const { isClientMobile } = useMyStore();

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoInView = useInView(videoRef, { margin: "50% 0px 50% 0px" });

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        console.log("loadeddata", idx)
        setVideoLoaded(true);
      });
    }
  }, []);

  useEffect(() => {

    if (videoInView) {
      if (videoRef.current?.paused) videoRef.current?.play()
    } else {
      if (!videoRef.current?.paused) videoRef.current?.pause();
    }
  }, [videoInView]);

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col cursor-pointer w-full h-full jusify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: idx * 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={!isClientMobile ? "hover" : ""}
    >
      <motion.div
        className="relative flex flex-row overflow-hidden  h-[70vh] sm:h-[70vh] max-h-[540px] md:h-[60vh] lg:h-[50vh] 2xl:h-[45vh] 3xl:h-[24vh] justify-center items-center"
        initial={{ borderRadius: "30px 30px" }}
        variants={videoContainerVariants}
      >
        <motion.div
          initial={{ scale: 1 }}
          variants={videoVariants}
          className="relative w-[100vw] h-full"
        >
          <video
            ref={videoRef}
            src={filter.preview.url}
            className="w-full h-full object-cover z-10"
            muted
            loop
            autoPlay
            playsInline
          />

          {!videoLoaded && (
            <BlurImage src={filter.previewImage.url} alt={filter.name} sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"} imageStyles={"object-cover -z-10"} priority={ idx == 0 } />

          )}
        </motion.div>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div
          className="flex flex-row flex-1 mt-3 w-full justify-start items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.05 + idx * 0.05,
          }}
        >
          <motion.div className="relative font w-full text-xl overflow-hidden flex flex-row items-center">
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
