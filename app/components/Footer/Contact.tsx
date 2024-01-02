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
                className="h-full w-full relative text-black rounded-[100px] flex justify-center items-center  overflow-hidden "
            >
                <motion.div className="absolute top-0 left-0  h-full w-full overflow-hidden"
                >
                    <Scene mousePosition={mousePosition} />
                </motion.div>

                <div className="flex justify-center items-center text-center md:text-left w-full h-full " >

                    <div className="flex flex-col p-[5vw] h-full w-full flex-grow md:justify-between justify-center text-white">
                        <div>
                            <div className="text-3xl text-center sm:text-left flex flex-col justify-center items-center md:items-start sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font ">
                                <span className="flex flex-row">
                                    {/* <StarIcon delay={0.4} text="✷" once={false} tailwindClasses="text-white pr-5" />*/}
                                    <BlurredText delay={0.4} tailwindClasses="" text="Wanna create" once={false} />
                                </span>
                                <span className="flex flex-row">
                                    <BlurredText delay={0.5} tailwindClasses="" text={"something\u2009"} once={false} />
                                    <RandomStaggeredText revealDelay={0.5} hoverDelay={0} hoverDuration={0.7} hoverStagger={0.05} tailwindClasses=" rounded-full font-bold" text={"awesome"} once={false} />
                                    {/*<StarIcon delay={0.6} text="✹" once={false} tailwindClasses="hidden pl-5" />*/}
                                </span>
                                <span className="flex flex-row">
                                    <BlurredText delay={0.6} tailwindClasses="" text="together?" once={false} />
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col xl:gap-2 text-center justify-center mt-16 mt:mt-0 items-center md:text-right md:justify-end md:items-end">
                            <span className="flex flex-row text-lg sm:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-thin ">
                                <StarIcon delay={0.6} text="✦" once={false} tailwindClasses=" z-0 pr-3" />
                                <BlurredText delay={0.6} tailwindClasses="" text="Let's connect" once={false} />
                                <StarIcon delay={0.6} text="✦" once={false} tailwindClasses=" z-0 pl-3" />
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