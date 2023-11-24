import { makeFiltersQueryWithRelay } from "@/app/actions/queries/filterQueries";
import FilterList from "./components/FilterList";

async function Filters() {
    const QUERY = makeFiltersQueryWithRelay(false);

  return (
    <section className="mt-44 flex justify-center">
      <div className="flex flex-col w-full max-w-7xl justify-center">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl mx-44 font-bold">
          AR Filters
        </h1>
        
        <div className="mt-4 mb-12">
            {/* @ts-expect-error Server Component */}
            <FilterList query={QUERY} first={100} />
        </div>

      </div>


    </section>
  );
}

export default Filters;
