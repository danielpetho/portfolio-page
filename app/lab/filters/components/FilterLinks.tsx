import MaskedExternalLink from "@/app/components/Text/MaskedExternalLink";
import { Filter } from "@/typings";
import Image from "next/image";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";

const FilterLinks = ({ filter }: { filter: Filter }) => {
  return(
    <div className="flex flex-row pt-4 text-sm pl-0.5">
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

          <div className="hidden sm:flex flex-col justify-content mr-8 items-center hover:scale-110 transform transition duration-300 ease-in-out">
            <a
              href={filter.snapchatLink}
              rel="noreferrer"
              target="_blank"
              className="flex justify-center items-center flex-col"
            >
              <div className="rounded-xl overflow-hidden">
              <Image
                src={filter.snapcode.url}
                width={120}
                height={120}
                alt="Snapcode"
              />
              </div>
              <p className="pt-2 font-medium">Snapchat</p>
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
              className="flex justify-center items-center flex-col"
            >
              <div className="rounded-xl overflow-hidden ">

              <Image
                src={filter.instacode.url}
                width={120}
                height={120}
                alt="Instagram QR Code"
                className=""
              />
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
              className="flex justify-center items-center flex-col"
            >
              <div className="rounded-xl overflow-hidden">
              <Image
                src={filter.tikcode.url}
                width={120}
                height={120}
                alt="Tiktok QR Code"
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
