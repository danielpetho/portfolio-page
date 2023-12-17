import { fetchFilterBySlug } from "@/app/actions/fetch/server/fetchFilters";
import { filterBySlugQuery } from "@/app/actions/queries/filterQueries";
import FilterLinks from "@/app/lab/filters/components/FilterLinks";

interface PageProps {
  params: {
    slug: string;
  };
}

async function FilterModal({ params: { slug } }: PageProps) {
  const filter = await fetchFilterBySlug(filterBySlugQuery, slug);

  return (
    <div className="flex justify-center items-center w-full sm:w-[80vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[35vw] 3xl:w-[30vw]">
      {filter ? (
        <div className="flex sm:flex-row flex-col justify-center w-full items-center  sm:bg-pale-white sm:shadow-xl sm:rounded-[50px] p-6 sm:p-14">
          <div className="rounded-[25px] sm:rounded-[30px] relative overflow-hidden w-full sm:w-2/5 ">
            <video
              src={filter.preview.url}
              className="rounded-[30px] "
              autoPlay
              muted
              loop
              controls={false}
            ></video>
          </div>

          <div className="flex flex-col sm:w-3/5 w-full mt-6 sm:mt-0 sm:pl-12 h-full">
            <h1 className="text-3xl md:text-4xl font-semibold">
              {filter.name}
            </h1>
            <ul className="flex-row pt-4 gap-3 hidden sm:flex">
              {filter.snapchatLink && (
                <p className="border border-black rounded-full px-4 py-1.5">
                  Snapchat
                </p>
              )}
              {filter.instagramLink && (
                <p className="border border-black rounded-full px-4 py-1.5">
                  Instagram
                </p>
              )}
              {filter.tiktokLink && (
                <p className="border border-black rounded-full px-4 py-1.5">
                  TikTok
                </p>
              )}
            </ul>
            <p className="text-lg sm:text-xl md:text-xl font pt-12 pl-0.5">
              Try it out:
            </p>
            <FilterLinks filter={filter} />
          </div>
        </div>
      ) : (
        <div>
          <h1>404</h1>
        </div>
      )}
    </div>
  );
}

export default FilterModal;
