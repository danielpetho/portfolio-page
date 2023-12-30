
"use client"

import { SelectedWorkType } from "@/typings";
import ParallaxText from "./ParallaxText";
import { motion } from "framer-motion";
import React, { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";

type SelectedWorkProps = {
    id: number,
    work: SelectedWorkType;
}

interface Position {
    x: number;
    y: number;
}


const SelectedWorkComponent = ({ id, work }: SelectedWorkProps) => {
    const [baseVelocity, setBaseVelocity] = useState(0);
    const [showImage, setShowImage] = useState<boolean>(false);
    const [imagePosition, setImagePosition] = useState<Position>({ x: 0, y: 0 });

    const handleMouseEnter = (): void => {
        setShowImage(true);
    };

    const handleMouseLeave = (): void => setShowImage(false);

    const handleMouseMove = (e: MouseEvent): void => {
        setImagePosition({ x: e.clientX, y: e.clientY});
    };

    const imgVariants = {
        hover: {
            opacity: 1,
            display: "block",
            y: 0,
            transition: {
                duration: 0.0,
                ease: "easeInOut"
            }
        }
    }

    useEffect(() => {
        // Generate a random number between -1 and -3
        const randomVelocity = -1. * (1 + Math.random() * 1.);
        setBaseVelocity(randomVelocity);
    }, [id]);


    return (
        <motion.div className="py-[8vh] cursor-pointer text-pale-black hover:text-black duration-500 transform ease-in-out " whileHover="hover"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <div className="flex flex-row min-w-max relative overflow-hidden font gap-x-[5vw] px-[5vw] " >
                <ParallaxText idx={id} baseVelocity={-baseVelocity} tailwindClasses={"gap-x-[8vw] flex font text-[6vw] sm:text-[4vw] pb-[14vh]"}>{work.title}</ParallaxText>
            </div>
            <hr className="mx-[5vw] h-[1px] bg-black" />

            {showImage &&
                <motion.div
                    className="fixed opacity-1 w-[300px] h-[150px] z-50"
                    animate={{ y: 0, opacity: 1 }}
                    initial={{ y: 0, opacity: 0 }}
                    transition={{ duration: .33, ease: "easeOut" }}
                    style={{ x: imagePosition.x, y: imagePosition.y, left: "0", top: imagePosition.y }}
               >
                    <div className="relative h-full overflow-hidden rounded-[5%] "  >
                        <Image src={work.imgUrl} alt={work.title} fill className="overflow-hidden object-cover absolute top-0 left-0" />
                    </div>
                </motion.div>
            }
        </motion.div>
    )
}

const SelectedWork = ({ id, work }: SelectedWorkProps) => {
    return (
        <div className="">
            {work.internalLink ? (
                <Link href={work.link}>
                    <SelectedWorkComponent id={id} work={work} />
                </Link>
            ) : (
                <a href={work.link} target="_blank">
                    <SelectedWorkComponent id={id} work={work} />
                </a>
            )}
        </div>
    )
}

export default SelectedWork