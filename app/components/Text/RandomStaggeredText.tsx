"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type RandomStaggeredTextProps = {
    text: string;
    tailwindClasses: string;
    hoverDuration: number;
    hoverStagger: number;
    revealDelay: number;
    hoverDelay: number;
    once: boolean;
    y?: number;
    menuButton?: boolean;
}

// Function to shuffle an array
function shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const RandomStaggeredText: React.FC<RandomStaggeredTextProps> = ({
    text,
    tailwindClasses,
    hoverDuration,
    hoverStagger,
    revealDelay,
    hoverDelay,
    once = true,
    y,
    menuButton = false,
}) => {
    const body = useRef(null);
    const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);

    useEffect(() => {
        const indices = Array.from({ length: text.length }, (_, i) => i);
        shuffleArray(indices);
        setShuffledIndices(indices);
    }, [text]);

    const hoverVariant = {
        hover: (index: number) => ({
            top: "-100%",
            transition: {
                duration: hoverDuration,
                delay: hoverDelay + index * hoverStagger,
                ease: [0.76, 0, 0.24, 1],
            },
            transitionEnd: {
                top: "0%",
            },
        
        }),
    };



    return (
        <span ref={body} className={`${tailwindClasses}`}>
            <span className="sr-only">{text}</span>

            <motion.span
                initial={{ opacity: 0, filter: "blur(5px)", y: y }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: revealDelay }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: once }}
                className="flex w-full h-full relative overflow-hidden justify-center items-center"
                whileHover={"hover"}
                aria-hidden
            >
                {text.split("").map((char, i) => {
                    const index = shuffledIndices[i];
                    return (
                        <motion.div key={i} className="relative" variants={hoverVariant} custom={index} >
                            <span className="flex top-0 w-full  justify-center items-center" >
                                {char}
                            </span>
                            <span className={`${menuButton ? "xl:-mt-1 2xl:-mt-2" : ""} absolute top-100 flex justify-center items-center`}>
                                {char}
                            </span>
                        </motion.div>
                    )
                })}

            </motion.span>

        </span>
    );
};

export default RandomStaggeredText;
