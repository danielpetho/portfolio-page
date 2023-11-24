"use client";

import { Filter } from "@/typings";

type FilterCardProps = {
    filter: Filter;
  };

const FilterCard: React.FC<FilterCardProps> = ({ filter }) => {
    return (
        <div className="flex flex-col">
            

            <div className="flex flex-row">
                <h2>{filter.name}</h2>

                <div className="flex flex-row">
                    {filter.snapchatLink && (
                        <a href={filter.snapchatLink}>
                        
                        </a>
                    )}

                    {filter.instagramLink && (
                        <a href={filter.instagramLink}>
                        
                        </a>
                    )}

                    {filter.tiktokLink && (
                        <a href={filter.tiktokLink}>
                        
                        </a>
                    )}

                    {filter.webLink && (
                        <a href={filter.tiktokLink}>
                        
                        </a>
                    )}
                </div>
            </div>

        </div>
    )
}

export default FilterCard;


