// app/template.tsx
"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 1,
    x: 0,
    y: 0,
    width: 0,
    height: "100vh",
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    width: "100vw",
    height: "100vh",
  },
  faded: {
    opacity: 0,
    transitionEnd: {
        display: "none",
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 1.6,
    },
  },
};

const divList = [
  { id: 1, color: "red" },
  { id: 2, color: "green" },
  { id: 3, color: "blue" },
  { id: 4, color: "yellow" },
  { id: 5, color: "orange" },
  { id: 6, color: "purple" },
];

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {divList.map((div) => {
        return (
          <motion.div
            key={div.id}
            variants={variants}
            initial="hidden"
            animate={["enter", "faded"]}
            exit="hidden"
            className="fixed top-0 left-0 z-10"
            transition={{ duration: 0.75, ease: "easeInOut", delay: div.id / 10 }}
            style={{
              backgroundColor: div.color,
            }}
          ></motion.div>
        );
      })}

      {children}
    </main>
  );
}
