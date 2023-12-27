"use client";

import { useRouter } from "next/navigation";
import { Filter } from "@/typings";
import FilterLinks from "@/app/lab/filters/components/FilterLinks";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useMyStore } from "@/app/store/store";
import { useInView } from "framer-motion";
import Image from "next/image";
import BlurImage from "@/app/components/Placeholder/BlurImage";

const FilterDetails = ({
  filter,
  modal,
}: {
  filter: Filter;
  modal: boolean;
}) => {
  const router = useRouter();

  const [videoLoaded, setVideoLoaded] = useState(false);
  const cardRef = useRef(null);
  const { isClientMobile } = useMyStore();

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoInView = useInView(videoRef, { margin: "50% 0px 50% 0px" });

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setVideoLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    if (videoInView) {
      if (videoRef.current?.paused) videoRef.current?.play();
    } else {
      if (!videoRef.current?.paused) videoRef.current?.pause();
    }
  }, [videoInView]);

  const handleModalClose = () => {
    router.back();
  };

  return (
    <>
      {filter ? (
        <div className="flex  sm:flex-row flex-col justify-center w-full  sm:bg-pale-white sm:shadow-xl sm:rounded-[50px] p-6 sm:p-8 md:p-12">
          <div className="rounded-[25px] sm:rounded-[30px] relative overflow-hidden w-full max-h-[600px] sm:h-full sm:w-2/5 ">
            <video
              ref={videoRef}
              src={filter.preview.url}
              className="rounded-[30px] object-cover w-full h-full"
              autoPlay
              muted
              loop
            ></video>

            {!videoLoaded && (
              <BlurImage
               src={filter.previewImage.url}
                alt={filter.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                imageStyles={"object-cover -z-10"}
                priority={true}
                />
            )}
          </div>

          <div className="flex flex-col sm:w-3/5 justify-center w-full mt-6 sm:mt-0 sm:pl-6 ">
            <h1 className="text-3xl md:text-4xl font-semibold">
              {filter.name}
            </h1>
            <ul className="flex-row pt-2 gap-2 flex">
              {filter.snapchatLink && (
                <p className="border sm:text-sm text-xs border-black rounded-full px-3 py-1">
                  Snapchat
                </p>
              )}
              {filter.instagramLink && (
                <p className="border sm:text-sm text-xs border-black rounded-full px-3 py-1">
                  Instagram
                </p>
              )}
              {filter.tiktokLink && (
                <p className="border sm:text-sm text-xs border-black rounded-full px-3 py-1">
                  TikTok
                </p>
              )}
            </ul>
            <p className="text-lg sm:text-xl md:text-xl font pt-6 sm:pt-12 pl-0.5">
              Try it out:
            </p>
            <p className="text-xs text-pale-black font pl-0.5">
              Scan the code, or click the link below
            </p>
            <FilterLinks filter={filter} />
          </div>

          {modal && (
            <div className="hidden sm:block" onClick={handleModalClose}>
              <IoMdClose className="text-3xl cursor-pointer" />
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1>404</h1>
        </div>
      )}
    </>
  );
};

export default FilterDetails;
