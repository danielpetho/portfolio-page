"use client";

import { FaSnapchatGhost, FaInstagram, FaTiktok } from "react-icons/fa";

import { Filter } from "@/typings";

type FilterCardProps = {
  filter: Filter;
};

const FilterCard: React.FC<FilterCardProps> = ({ filter }) => {
  return (
    <div className="flex flex-col cursor">
      <div className="rounded-3xl">
        <video
          src={filter.preview.url}
          autoPlay
          muted
          loop
          className="rounded-3xl"
        />
      </div>

      <div className="flex flex-row mt-3 justify-between">
        <h2 className="font-medium text-xl">{filter.name}</h2>

        <div className="flex flex-row">
          {filter.snapchatLink && (
            <>
              {/* <a className="text-white rounded-full p-2 bg-black" href={filter.snapchatLink}>
                <FaSnapchatGhost className="text-lg" />
              </a>*/}
            </>
          )}

          {filter.instagramLink && (
            <a href={filter.instagramLink}>
              <FaInstagram />
            </a>
          )}

          {filter.tiktokLink && (
            <a href={filter.tiktokLink}>
              <FaTiktok />
            </a>
          )}

          {filter.webLink && <a href={filter.tiktokLink}></a>}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
