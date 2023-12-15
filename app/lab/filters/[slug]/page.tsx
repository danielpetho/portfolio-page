import { fetchFilterBySlug } from "@/app/actions/fetch/server/fetchFilters";
import { filterBySlugQuery } from "@/app/actions/queries/filterQueries";
import Image from "next/image";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";

interface PageProps {
  params: {
    slug: string;
  };
}

async function Filter({ params: { slug } }: PageProps) {
  const filter = await fetchFilterBySlug(filterBySlugQuery, slug);

  console.log(slug);
  return (
    <div className="h-screen w-screen flex sm:my-12 sm:mx-12 justify-center items-center ">
      {filter ? (
        <div className="flex sm:flex-row flex-col justify-center items-center max-w-7xl ">
          <div className="rounded-[25px] sm:rounded-[50px] h-1/3 sm:h-1/2 relative overflow-hidden w-2/4 sm:w-1/4 ">
            <video
              src={filter.preview.url}
              className="rounded-[30px] h-1/3 sm:h-1/2"
              autoPlay
              muted
              loop
              controls={false}
            ></video>
          </div>
          <div className="flex flex-col w-2/3 px-12 py-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-medium">{filter.name}</h1>
            <p className="text-lg sm:text-xl md:text-2xl font pt-2 pl-0.5">Try it out:</p>
            <div className="flex flex-row pt-4 pl-0.5">
              {filter.snapchatLink && (
                <>
                <div className="sm:hidden">
                  <a
                    className="text-white rounded-full p-2 bg-black sm:"
                    href={filter.snapchatLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaSnapchatGhost className="text-lg" />
                  </a>
                </div>
                
                <div className="hidden sm:flex flex-col justify-content items-center">
                    <Image
                        src={filter.snapcode.url}
                        fill={true}
                        alt="Snapcode"
                    />
                    <p>Snapchat</p>
                </div>
                
              </>
              )}

              {filter.instagramLink && (
                <a href={filter.instagramLink} rel="noreferrer" target="_blank">
                  <FaInstagram />
                </a>
              )}

              {filter.tiktokLink && (
                <a href={filter.tiktokLink} rel="noreferrer" target="_blank">
                  <FaTiktok />
                </a>
              )}

              {filter.webLink && (
                <a
                  href={filter.tiktokLink}
                  rel="noreferrer"
                  target="_blank"
                ></a>
              )}
            </div>
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

export default Filter;
