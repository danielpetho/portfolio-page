
"use client"

import { SelectedWorkType } from "@/typings";
import ParallaxText from "./ParallaxText";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMyStore } from "@/src/store/store";

type SelectedWorkProps = {
    id: number,
    work: SelectedWorkType;
}


const SelectedWorkComponent = ({ id, work }: SelectedWorkProps) => {
    const [baseVelocity, setBaseVelocity] = useState(0);
    const { setSelectedWorkImageIndex, setShowSelectedWorkImage } = useMyStore();

    const handleMouseEnter = (): void => {
        setSelectedWorkImageIndex(id);
        setShowSelectedWorkImage(true);
    };

    const handleMouseLeave = (): void => {
        setShowSelectedWorkImage(false);
    }

    useEffect(() => {
        // Generate a random number between -1 and -3
        const randomVelocity = -1. * (1 + Math.random() * 1.);
        setBaseVelocity(randomVelocity);
    }, [id]);


    return (
        <motion.div className="lg:py-[16vh] py-[8vh] " whileHover="hover"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex flex-row min-w-max relative overflow-hidden font gap-x-[5vw] px-[5vw] " >
                <ParallaxText
                    idx={id}
                    baseVelocity={-baseVelocity}
                    text={work.title}
                    complementaryText={work.contractor}
                    tailwindClasses={"gap-x-[8vw] flex flex-row font text-[6vw] sm:text-[4vw]"}
                />
            </div>
        </motion.div>
    )
}

const SelectedWorkMobileComponent = ({ id, work }: SelectedWorkProps) => {
    return (
        <div className="flex flex-col w-full h-full">
            <hr className="mx-[5vw] bg-pale-black text-pale-black" />

            <div className="flex flex-row flex-grow w-full h-[16vh] min-h-[150px]">
                <div className="flex flex-col w-1/2 justify-start items-start text-left mx-[5vw] py-4">
                    <h2 className="text-md font-medium">{work.title}</h2>
                    {work.contractor && <h3 className="text-xs text-pale-black">({work.contractor})</h3>}
                </div>
                <div className="w-1/2 p-4 flex h-full">
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <Image src={work.imgUrl} alt={work.title} fill className="overflow-hidden object-cover absolute top-0 left-0" />
                    </div>
                </div>
            </div>

        </div>
    )
}

const SelectedWork = ({ id, work }: SelectedWorkProps) => {
    return (
        <div className="w-full h-full">
            {work.internalLink ? (
                <Link href={work.link}>
                    <div className="hidden md:block cursor-pointer text-pale-black hover:text-black duration-500 transform ease-in-out ">
                        <SelectedWorkComponent id={id} work={work} />
                        {id !== 5 &&<hr className="mx-[5vw] h-[1px] bg-black" />}

                    </div>
                    <div className="md:hidden flex w-full">
                        <SelectedWorkMobileComponent id={id} work={work} />
                    </div>
                </Link>
            ) : (
                <a href={work.link} target="_blank">
                    <div className="hidden md:block cursor-pointer text-pale-black hover:text-black duration-500 transform ease-in-out ">
                        <SelectedWorkComponent id={id} work={work} />
                        {id !== 5 && <hr className="mx-[5vw] h-[1px] bg-black" /> }
                    </div>
                    <div className="md:hidden flex w-full">
                        <SelectedWorkMobileComponent id={id} work={work} />
                    </div>
                </a>
            )}
        </div>
    )
}

export default SelectedWork