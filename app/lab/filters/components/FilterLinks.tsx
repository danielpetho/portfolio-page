import { Filter } from "@/typings";
import Image from "next/image";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";

const FilterLinks = ({ filter }: { filter: Filter }) => {
  return (
    <div className="flex flex-row pt-4 gap-4">
      {filter.snapchatLink && (
        <div className="flex flex-col justify-center items-start">
          <a
            href={filter.snapchatLink}
            rel="noreferrer"
            target="_blank"
            className="flex justify-start items-center h-full hover:sm:scale-110 transform transition duration-300 ease-in-out w-[80px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] 3xl:w-[3vw] flex-col "
          >
            <div className="rounded-xl relative w-full pt-[100%]">
              <Image
                src={filter.snapcode.url}
                fill
                alt="Snapcode"
                className="w-full h-full object-cover top-0 left-0 right-0  hover:filter-none"
              />
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
            className="flex justify-start items-center h-full hover:sm:scale-110  transform transition duration-300 ease-in-out w-[80px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] 3xl:w-[3vw] flex-col "
          >
            <div className="rounded-xl relative w-full pt-[100%]">
              <Image
                src={filter.instacode.url}
                fill
                alt="Instagram QR Code"
                className="w-full h-full object-cover top-0 left-0 right-0 rounded-xl"
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
            className="flex justify-start items-start h-full hover:sm:scale-110  transform transition duration-300 ease-in-out w-[80px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] 3xl:w-[3vw] flex-col "
          >
            <div className="rounded-xl relative w-full pt-[100%]">
              <Image
                src={filter.tikcode.url}
                fill
                alt="Tiktok QR Code"
                className="w-full h-full object-cover top-0 left-0 right-0"
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
