import { fetchFilterBySlug } from "@/src/actions/fetch/server/fetchFilters";
import { filterBySlugQuery } from "@/src/actions/queries/filterQueries";
import FilterModal from "./FilterModal";

interface PageProps {
  params: {
    slug: string;
  };
}

async function Filter({ params: { slug } }: PageProps) {
  const filter = await fetchFilterBySlug(filterBySlugQuery, slug);

  return (
    <div className="min-h-screen h-full">
      <FilterModal filter={filter} />
    </div>
  );
}

export default Filter;