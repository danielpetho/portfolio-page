"use client";

import { useRouter } from "next/navigation";
import FilterDetails from "../../../components/FilterDetails";
import { Filter } from "@/typings";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FilterModal = ({ filter }: { filter: Filter }) => {
  const router = useRouter();

  useEffect(() => {
    //document.body.classList.add("overflow-y-hidden");
    return () => {};
  }, []);

  const handleModalClose = () => {
    router.back();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="filter-modal"
        className="fixed top-0 left-0 right-0 w-screen h-screen z-10 bg-black/50 backdrop-blur-lg flex justify-center items-center"
        animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.33, ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="absolute cursor-pointer w-screen h-screen z-20"
          onClick={handleModalClose}
        ></div>
        <motion.div
          className="flex justify-center items-center z-30 w-full sm:w-[80vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[40vw] 3xl:w-[30vw]"
          animate={{ opacity: 1, y: 0, scaleX: 1, scaleY: 1 }}
          initial={{ opacity: 0, y: 100, scaleX: 0.5, scaleY: 0.5 }}
          transition={{ duration: 0.33, ease: [0.76, 0, 0.24, 1] }}
        >
          <FilterDetails filter={filter} modal={true} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FilterModal;
