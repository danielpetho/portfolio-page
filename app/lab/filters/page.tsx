import { makeFiltersQueryWithRelay } from "@/app/actions/queries/filterQueries";
import FilterList from "./components/FilterList";

async function Filters() {
    const QUERY = makeFiltersQueryWithRelay(false);

  return (
    <section className="my-44 flex justify-center flex-grow">
      <div className="flex flex-col w-full max-w-7xl justify-center">

        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl mx-12 font-bold">
          AR Filters
        </h1>
        
        <div className="mt-4 mb-12 flex">
            {/* @ts-expect-error Server Component */}
            <FilterList query={QUERY} first={100} />
        </div>

      </div>


    </section>
  );
}

export default Filters;
