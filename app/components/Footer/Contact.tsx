"use client"

import RandomStaggeredText from "../Text/RandomStaggeredText";
import StarIcon from "../Text/StarIcon";
import BlurredText from "../Text/BlurredText";
import Scene from "../R3F/Scene";
import { MotionValue, motion } from "framer-motion";

type ContactProps = {
    mousePosition: { x: number; y: number };
    scrollProgress: MotionValue<number>;
};

const Contact: React.FC<ContactProps> = ({ mousePosition, scrollProgress }) => {

    return (
        <div
            className="w-full h-full md:pt-24 lg:pt-12 md:pb-12 flex justify-center items-center bg-gradient-to-b from-transparent to-black flex relative"
        >
            <motion.div className="absolute top-0 left-0 right-0 rounded-b-[50px] flex overflow-hidden h-full w-full" style={{ borderTopRightRadius: scrollProgress, borderTopLeftRadius: scrollProgress }}
            >
                <Scene mousePosition={mousePosition} />
            </motion.div>

            <div className="flex justify-center items-center text-center md:text-left w-full h-full " >

                <div className="flex flex-col p-10 sm:p-12 md:p-14 lg:p-16 xl:p-20 2xl:p-32 pt-16 sm:pt-20 md:pt-24 lg:pt-40 xl:pt-40 2xl:pt-48 h-full w-full flex-grow md:justify-between justify-center text-white">
                    <div>
                        <div className="text-3xl text-center sm:text-left flex flex-col justify-center lg:pt-12 items-center md:items-start sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font text-white">
                            <span className="flex flex-row">
                                {/* <StarIcon delay={0.4} text="✷" once={false} tailwindClasses="text-white pr-5" />*/}
                                <BlurredText delay={0.4} tailwindClasses="text-white " text="Wanna create" once={false} />
                            </span>
                            <span className="flex flex-row">
                                <BlurredText delay={0.5} tailwindClasses="text-white " text={"something\u2009"} once={false} />
                                <RandomStaggeredText revealDelay={0.5} hoverDelay={0} hoverDuration={0.7} hoverStagger={0.05} tailwindClasses="text-white  rounded-full font-bold" text={"awesome"} once={false} />
                                {<StarIcon delay={0.6} text="✹" once={false} tailwindClasses="text-white hidden pl-5" />}
                            </span>
                            <span className="flex flex-row">
                                <BlurredText delay={0.6} tailwindClasses="text-white " text="together?" once={false} />
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col mt-16 xl:gap-2 text-center justify-center items-center md:text-right md:justify-end md:items-end">
                        <span className="flex flex-row text-lg sm:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-thin md:w-max">
                            <StarIcon delay={0.6} text="✦" once={false} tailwindClasses="text-white z-0 pr-3" />
                            <BlurredText delay={0.6} tailwindClasses="" text="Let's connect" once={false} />
                            <StarIcon delay={0.6} text="✦" once={false} tailwindClasses="text-white z-0 pl-3" />
                        </span>

                        <h3 className="text-lg sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl font-medium flex-wrap md:w-max">
                            <a href="mailto:hello@danielpetho.com" className="cursor">
                                <RandomStaggeredText
                                    revealDelay={0.7}
                                    hoverDelay={0.}
                                    hoverDuration={0.5}
                                    hoverStagger={0.01}
                                    text={"hello@danielpetho.com"}
                                    tailwindClasses=""
                                    once={false}
                                />
                            </a>
                        </h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;