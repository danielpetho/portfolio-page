import { fetchFilterBySlug } from "@/app/actions/fetch/server/fetchFilters";
import { filterBySlugQuery } from "@/app/actions/queries/filterQueries";
import FilterModal from "./FilterModal";

interface PageProps {
  params: {
    slug: string;
  };
}

async function Filter({ params: { slug } }: PageProps) {
  const filter = await fetchFilterBySlug(filterBySlugQuery, slug);

  return (
    <>
      <FilterModal filter={filter} />
    </>
  );
}

export default Filter;