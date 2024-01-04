"use client"

import { useMyStore } from "@/src/store/store";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import selectedWorks from '@/src/data/selectedWorks.json'
import { motion } from "framer-motion";

interface Position {
    x: number;
    y: number;
}


const SelectedWorkImage = () => {
    const [imagePosition, setImagePosition] = useState<Position>({ x: 0, y: 0 });
    const [imgURL, setImgURL] = useState<string>("");
    const [imgAlt, setImgAlt] = useState<string>("");

    const { showSelectedWorkImage, selectedWorkImageIndex } = useMyStore();

    const handleMouseMove = (e: any): void => {
        setImagePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        setImgURL(selectedWorks.works[selectedWorkImageIndex].imgUrl);
        setImgAlt(selectedWorks.works[selectedWorkImageIndex].title);
    }, [selectedWorkImageIndex]);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="hidden sm:block z-100 absolute top-0 left-0 ">
            {showSelectedWorkImage &&
                <motion.div
                    className="fixed opacity-1 w-[20vw] min-w-[360px] min-h-[200px] h-[11vw] z-[25]"
                    animate={{ y: 0, opacity: 1 }}
                    initial={{ y: 0, opacity: 0 }}
                    transition={{ duration: .33, ease: "easeOut" }}
                    style={{ x: imagePosition.x + 50, y: imagePosition.y + 50, top: imagePosition.y, left: "0" }}
                >
                    <div className="relative h-full overflow-hidden rounded-3xl"  >
                        <Image src={imgURL} alt={imgAlt} fill className="overflow-hidden object-cover absolute top-0 left-0" />
                    </div>
                </motion.div>
            }
        </div>
    )
}

export default SelectedWorkImage