import React from "react";
import { fetchFilters } from "@/app/actions/fetch/server/fetchFilters";
import Link from "next/link";
import { FilterPage, Query } from "@/typings";
import FilterCard from "./FilterCard";

async function FilterList(query: Query) {
  const result = await fetchFilters(query);

  const filters = result?.filters;

  const pageInfo = result?.pageInfo;

  if (filters && filters.length === 0) {
    return (
      <div>
        <h2>Ooops, something went wrong</h2>
      </div>
    );
  }

  return (
    <div className="mb-12 md:mt-0">
      <div className="grid grid-cols-3 gap-4">
        {filters &&
          filters.map((filter: FilterPage) => {
            return (
              <div key={filter.filter.id}>
                  <FilterCard filter={filter.filter} />
              </div>
            );
          })}

        {/*pageInfo && pageInfo.hasNextPage && (
          <MoreFiltersButton currentCursor={pageInfo.endCursor} size={first} />
        )*/}
      </div>
    </div>
  );
}

export default FilterList;
