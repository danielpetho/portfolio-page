import BlurImage from "@/app/components/Placeholder/BlurImage";
import { Filter } from "@/typings";
import Image from "next/image";

const FilterLinks = ({ filter }: { filter: Filter }) => {
  return (
    <div className="flex flex-row pt-4 gap-4">
      {filter.snapchatLink && (
        <div className="flex flex-col justify-center items-start">
          <a
            href={filter.snapchatLink}
            rel="noreferrer"
            target="_blank"
            className="flex justify-start items-center h-full hover:sm:scale-110 transform transition duration-300 ease-in-out w-[150px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] 3xl:w-[3vw] flex-col "
          >
            <div className="rounded-xl relative w-full pt-[100%]">
              <BlurImage
               src={filter.snapcode.url}
                alt="Snapcode"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                imageStyles={"object-cover"}
                />
              {/*<Image
                src={filter.snapcode.url}
                fill
                alt="Snapcode"
                className="w-full h-full object-cover top-0 left-0 right-0  hover:filter-none"
                placeholder="empty"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

              />*/}
            </div>
            <p className="pt-2 items-center justify-center flex text-xs text-pale-black">
              Snapchat
            </p>
          </a>
        </div>
      )}

      {filter.instagramLink && (
        <div className="flex flex-col justify-center items-center">
          <a
            href={filter.instagramLink}
            rel="noreferrer"
            target="_blank"
            className="flex justify-start items-center h-full hover:sm:scale-110  transform transition duration-300 ease-in-out w-[150px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] 3xl:w-[3vw] flex-col "
          >
            <div className="rounded-xl relative w-full pt-[100%]">
              <BlurImage
                src={filter.instacode.url}
                alt="Instagram QR Code"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                imageStyles={"object-cover rounded-xl"}
                />
          
            </div>
            <p className="pt-2 items-center justify-center flex text-xs text-pale-black">
              Instagram
            </p>
          </a>
        </div>
      )}

      {filter.tiktokLink && (
        <div className="flex flex-col justify-center items-center">
          <a
            href={filter.tiktokLink}
            rel="noreferrer"
            target="_blank"
            className="flex justify-start items-start h-full hover:sm:scale-110  transform transition duration-300 ease-in-out w-[150px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] 3xl:w-[3vw] flex-col "
          >
            <div className="rounded-xl relative w-full pt-[100%]">
              <BlurImage
                src={filter.tikcode.url}
                alt="TikTok QR Code"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                imageStyles={"object-cover "}
                />
            </div>
            <p className="pt-2 items-center justify-center flex text-xs text-pale-black">
              TikTok
            </p>
          </a>
        </div>
      )}

      {filter.webLink && (
        <a href={filter.tiktokLink} rel="noreferrer" target="_blank"></a>
      )}
    </div>
  );
};

export default FilterLinks;
