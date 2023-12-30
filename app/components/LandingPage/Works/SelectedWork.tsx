
"use client"

import { SelectedWorkType } from "@/typings";
import ParallaxText from "./ParallaxText";
import { useEffect, useState } from "react";

type SelectedWorkProps = {
    id: number,
    work: SelectedWorkType;
}

const SelectedWork = ({ id, work }: SelectedWorkProps) => {
    const [baseVelocity, setBaseVelocity] = useState(0);

    useEffect(() => {
        // Generate a random number between -1 and -3
        const randomVelocity = -10. * (1 + Math.random() * 1.); 
        setBaseVelocity(randomVelocity);
    }, [id]);


    return (
        <div className="py-[4vh] cursor-pointer text-pale-black hover:text-black duration-500 transform ease-in-out ">
            <div className="flex flex-row min-w-max relative overflow-hidden gap-x-[5vw] px-[5vw] " >
                <ParallaxText idx={id} baseVelocity={-baseVelocity} tailwindClasses={"gap-x-[12vw] flex font text-[6vw] sm:text-[4vw] pb-[6vh]"}>{work.title}</ParallaxText>
            </div>
            <hr className="mx-[5vw] h-[0.1vh] sm:h-0.5 bg-black" />
        </div>
    )
}

export default SelectedWork