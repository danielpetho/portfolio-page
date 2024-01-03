"use client";

import React from "react";
import Link from "next/link";
import { FilterPage } from "@/typings";
import FilterCard from "./FilterCard";
import { useMyStore } from "@/src/store/store";
import { useScroll, motion, useTransform } from "framer-motion";

type FilterListProps = {
  filters: FilterPage[];
  //pageInfo: PageInfo;
  //first: number;
};

const FilterList: React.FC<FilterListProps> = (props) => {
  const filters = props.filters;

  const { isMobileView } = useMyStore();

  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0.3, 1], [0, 200]);


  if (filters && filters.length === 0) {
    return (
      <div>
        <h2>Ooops, something went wrong</h2>
      </div>
    );
  }

  return (
    <motion.div className="my-12 mx-[5vw] flex" ref={containerRef} style={{ y }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-14">
        {filters &&
          filters.length > 0 &&
          filters.map((filter: FilterPage, idx: number) => {
            return (
              <div key={filter.filter.id} className="cursor-pointer">
                {!isMobileView ? (
                  <Link
                    href={`/lab/filters/filter/${filter.filter.slug}`}
                    scroll={false}
                  >
                    <FilterCard filter={filter.filter} idx={idx} />
                  </Link>
                ) : (
                  <a href={`/lab/filters/filter/${filter.filter.slug}`}>
                    <FilterCard filter={filter.filter} idx={idx} />
                  </a>
                )}
              </div>
            );
          })}

        {/*pageInfo && pageInfo.hasNextPage && (
          <MoreFiltersButton currentCursor={pageInfo.endCursor} size={first} />
        )*/}
      </div>
    </motion.div>
  );
};

export default FilterList;
