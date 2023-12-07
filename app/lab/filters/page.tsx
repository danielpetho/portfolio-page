import { makeFiltersQueryWithRelay } from "@/app/actions/queries/filterQueries";
import FilterList from "./components/FilterList";
import MaskedHeader from "@/app/components/Text/MaskedText";

async function Filters() {
  const QUERY = makeFiltersQueryWithRelay(false);

  return (
    <section className="my-44 flex justify-center flex-grow">
      <div className="flex flex-col w-full max-w-7xl justify-center">

        <MaskedHeader
          phrases={["AR Filters"]}
          tailwindClasses="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mx-6 font-semibold"
          delay={0}
        />


        <div className="mt-4 mb-12 flex">
          {/* @ts-expect-error Server Component */}
          <FilterList query={QUERY} first={100} />
        </div>
      </div>
    </section>
  );
}

export default Filters;
