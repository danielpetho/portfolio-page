import { Filter } from "@/typings";
import Image from "next/image";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";

const FilterLinks = ({ filter }: { filter: Filter }) => {
  return(
    <div className="flex flex-row pt-4 text-sm pl-0.5 h-full w-full">
      {filter.snapchatLink && (
        <>
          <div className="sm:hidden">
            <a
              className="text-white rounded-full p-2 bg-black"
              href={filter.snapchatLink}
              rel="noreferrer"
              target="_blank"
            >
              <FaSnapchatGhost className="text-lg" />
            </a>
          </div>

          <div className="hidden sm:flex flex-col w-full justify-center mr-8 items-start  hover:scale-110 transform transition duration-300 ease-in-out">
            <a
              href={filter.snapchatLink}
              rel="noreferrer"
              target="_blank"
              className="flex justify-start items-start h-full w-[80px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] 3xl:w-[3vw] flex-col "
            >
              <div className="rounded-xl relative w-full pt-[100%]">
              <Image
                src={filter.snapcode.url}
                fill
                alt="Snapcode"
                className="w-full h-full object-cover top-0 left-0 right-0"
              />
              </div>
              <p className="pt-2 items-center justify-center flex font-medium">Snapchat</p>
            </a>
          </div>
        </>
      )}

      {filter.instagramLink && (
        <>
          <div className="sm:hidden">
            <a
              className="text-white rounded-full p-2 bg-black sm:"
              href={filter.snapchatLink}
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>

          <div className="hidden sm:flex flex-col justify-content items-center hover:scale-110 mr-8 transform transition duration-300 ease-in-out">
            <a
              href={filter.instagramLink}
              rel="noreferrer"
              target="_blank"
              className="flex justify-start items-start h-full w-[80px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] 3xl:w-[3vw] flex-col "
            >
              <div className="rounded-xl relative w-full pt-[100%]">

              <Image
                src={filter.instacode.url}
                fill
                alt="Instagram QR Code"
                className="w-full h-full object-cover top-0 left-0 right-0"              />
              </div>
              <p className="pt-2 font-medium">Instagram</p>
            </a>
          </div>
        </>
      )}

      {filter.tiktokLink && (
        <a href={filter.tiktokLink} rel="noreferrer" target="_blank">
           <div className="sm:hidden">
            <a
              className="text-white rounded-full p-2 bg-black sm:"
              href={filter.tiktokLink}
              rel="noreferrer"
              target="_blank"
            >
              <FaTiktok className="text-lg" />
            </a>
          </div>

          <div className="hidden sm:flex flex-col justify-content items-center">
            <a
              href={filter.tiktokLink}
              rel="noreferrer"
              target="_blank"
              className="flex justify-start items-start h-full w-[80px] sm:w-[80px] md:w-[120px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] 3xl:w-[3vw] flex-col "
            >
              <div className="rounded-xl relative w-full pt-[100%]">
              <Image
                src={filter.tikcode.url}
                fill
                alt="Tiktok QR Code"
                className="w-full h-full object-cover top-0 left-0 right-0"
              />
              </div>
              <p className="pt-2 font-medium">Instagram</p>
            </a>
          </div>
        </a>
      )}

      {filter.webLink && (
        <a href={filter.tiktokLink} rel="noreferrer" target="_blank"></a>
      )}
    </div>
  );
};

export default FilterLinks;
