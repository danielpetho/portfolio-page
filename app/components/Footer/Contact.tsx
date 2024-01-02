"use client"

import React from "react";
import RandomStaggeredText from "../Text/RandomStaggeredText";
import StarIcon from "../Text/StarIcon";
import BlurredText from "../Text/BlurredText";
import Scene from "../R3F/Scene";
import { MotionValue, motion } from "framer-motion";
import { PopupButton, PopupWidget } from "react-calendly";
import CalendlyDynamic from "../Calendly/CalendlyDynamic";
import LetsTalkButton from "./LetsTalkButton";

type ContactProps = {
    mousePosition: { x: number; y: number };
    scrollProgress: MotionValue<number>;
};

const Contact: React.FC<ContactProps> = ({ mousePosition, scrollProgress }) => {

    return (
        <div
            className="h-full w-full relative text-black rounded-[100px] flex justify-center items-center  overflow-hidden "
        >
            <motion.div className="absolute top-0 left-0  h-full w-full overflow-hidden"
            >
                <Scene mousePosition={mousePosition} />
            </motion.div>

            <div className="flex justify-center items-center text-center md:text-left w-full h-full " >

                <div className="flex flex-col sm:p-[10vh] h-full w-full flex-grow md:justify-between justify-center text-white">
                    <div>
                        <div className="text-2xl text-center sm:text-left flex flex-col justify-center items-center md:items-start sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl font ">
                            <span className="flex flex-row">
                                {/* <StarIcon delay={0.4} text="✷" once={false} tailwindClasses="text-white pr-5" />*/}
                                <BlurredText delay={0.4} tailwindClasses="" text="Wanna create" once={false} />
                            </span>
                            <span className="flex flex-row">
                                <BlurredText delay={0.5} tailwindClasses="" text={"something\u2009\u2009"} once={false} />
                                <RandomStaggeredText revealDelay={0.5} hoverDelay={0} hoverDuration={0.7} hoverStagger={0.05} tailwindClasses=" rounded-full font-bold" text={"awesome"} once={false} />
                                {/*<StarIcon delay={0.6} text="✹" once={false} tailwindClasses="hidden pl-5" />*/}
                            </span>
                            <span className="flex flex-row">
                                <BlurredText delay={0.6} tailwindClasses="" text="together?" once={false} />
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full text-center justify-center mt-16 mt:mt-0 items-center md:text-right md:justify-end md:items-end">
                        {/*} <a href="https://calendly.com/danielpetho/30min" target="_blank" rel="noopener noreferrer">*/}
                        <LetsTalkButton tailwindClasses="flex flex-row hover:bg-pale-white hover:text-black transform duration-200 ease-in cursor-pointer text-lg sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-medium rounded-full border-2 border-white  px-5 py-2.5 sm:px-10 sm:py-5" text="Let's talk" delay={0.7} once={false} />
                        {/*</a>*/}


                        <span className="flex flex-row text-[3vw] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  font-medium">
                            <BlurredText delay={0.7} tailwindClasses="font-thin " text={"or drop a line at\u2009\u2009"} once={false} />
                            <a href="mailto:hello@danielpetho.com" className="cursor">
                                <RandomStaggeredText
                                    revealDelay={0.8}
                                    hoverDelay={0.}
                                    hoverDuration={0.5}
                                    hoverStagger={0.01}
                                    text={"hello@danielpetho.com"}
                                    tailwindClasses=""
                                    once={false}
                                />
                            </a>
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;