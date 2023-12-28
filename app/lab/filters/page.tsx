import { makeFiltersQueryWithRelay } from "@/app/actions/queries/filterQueries";
import FilterList from "./components/FilterList";
import BlurredText from "@/app/components/Text/BlurredText";
import { fetchFilters } from "@/app/actions/fetch/server/fetchFilters";
import { Query } from "@/typings";

async function FiltersPage() {
  const QUERY: string = makeFiltersQueryWithRelay(false);

  const query: Query = {query: QUERY, first: 100, after: ""};

  const result = await fetchFilters(query);

  const filters = result?.filters;
  const pageInfo = result?.pageInfo;

  return (
    <section className="my-44 flex justify-center flex-grow">
      <div className="flex flex-col w-full max-w-7xl justify-center">
        <BlurredText
          text={"AR Filters"}
          tailwindClasses="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mx-6 font-semibold"
          delay={0.0}
          once={true}
        />

        <div className="mt-4 mb-12 flex">
          <FilterList filters={filters}/>
        </div>
      </div>
    </section>
  );
}

export default FiltersPage;
