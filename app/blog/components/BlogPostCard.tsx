"use client";

import { motion } from "framer-motion";

import { IoMdArrowForward } from "react-icons/io";

import { BlogPost } from "@/typings";
import { useRef } from "react";
import { useMyStore } from "@/src/store/store";
import BlurImage from "@/app/components/Placeholder/BlurImage";
import formatDate from "@/src/utils/formatValues";

type BlogPostCardProps = {
  blogPost: BlogPost;
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
    scale: 1.1,
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

const BlogPostCard: React.FC<BlogPostCardProps> = ({ blogPost, idx }) => {
  const cardRef = useRef(null);
  const { isClientMobile } = useMyStore();

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
        className="relative flex flex-row overflow-hidden  h-[40vh] sm:h-[40vh] max-h-[540px] md:h-[40vh] lg:h-[40vh] 2xl:h-[40vh] 3xl:h-[24vh] justify-center items-center"
        initial={{ borderRadius: "30px 30px" }}
        variants={videoContainerVariants}
      >
        <motion.div
          initial={{ scale: 1 }}
          variants={videoVariants}
          className="relative w-[100vw] h-full"
        >
         
            <BlurImage src={blogPost.thumbnail.url} alt={blogPost.title} sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"} imageStyles={"object-cover -z-10"} priority={ idx == 0 } />

        </motion.div>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div
          className="flex flex-col flex-1 mt-3 w-full justify-start items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.05 + idx * 0.05,
          }}
        >
          <p className="text-pale-black ml-1 mt-2 text-sm">{formatDate(blogPost.date)}</p>
          <motion.div className="relative font w-full text-2xl overflow-hidden flex flex-row items-center">
            <motion.span
              className="absolute left-0 w-full h-full -ml-9 mt-1.5 text-2xl"
              initial={{ color: "#f2eff2" }}
              variants={arrowIconVariants}
            >
              <IoMdArrowForward />
            </motion.span>

            <motion.h2 className="ml-1" variants={headerVariants}>
              {blogPost.title}
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
