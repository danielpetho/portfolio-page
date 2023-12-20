"use client";

import { motion } from "framer-motion";

export const Loading = () => (
  <motion.div
    className="w-32 h-32 bg-gray -z-10 absolute"
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 180, 180, 0],
      borderRadius: ["25%", "50%", "100%", "50%", "25%"],
    }}
    transition={{
      duration: 3,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />
);
