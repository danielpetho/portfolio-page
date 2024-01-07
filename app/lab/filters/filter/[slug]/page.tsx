import { fetchFilterBySlug } from "@/src/actions/fetch/server/fetchFilters";
import { filterBySlugQuery } from "@/src/actions/queries/filterQueries";
import Link from "next/link";
import {  IoMdArrowForward } from "react-icons/io";
import FilterDetails from "../../components/FilterDetails";

interface PageProps {
  params: {
    slug: string;
  };
}

async function Filter({ params: { slug } }: PageProps) {
  const filter = await fetchFilterBySlug(filterBySlugQuery, slug);

  return (
    <div className="min-h-screen w-screen flex flex-col sm:my-12 my-24 justify-center items-center">
      <div className="sm:max-w-7xl flex flex-col text-left items-start justify-center">
        <div className="text-slate-500 mx-6 sm:mx-0 md:mx-0">
          <IoMdArrowForward className="inline-block mr-2 rotate-180 mb-0.5" />
          <Link href="/lab/filters">All filters</Link>
        </div>
        <div className="flex justify-center items-center w-full sm:w-[80vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[35vw] 3xl:w-[30vw]">
          <FilterDetails filter={filter} modal={false} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
