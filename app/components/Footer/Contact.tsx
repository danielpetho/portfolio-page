import React from "react";
import RandomStaggeredText from "../Text/RandomStaggeredText";
import BlurredText from "../Text/BlurredText";
import LetsTalkButton from "./LetsTalkButton";
import FooterScene from "../R3F/Footer/FooterScene";
import SVGArc from "./SVGArc";

interface ContactProps {
    mousePosition: {
        x: number;
        y: number;
    }
}

const Contact: React.FC<ContactProps> = ({ mousePosition }) => {

    return (
        <div className="h-full w-full relative text-black flex justify-center  items-center  overflow-hidden">

            <div className="absolute flex w-full h-full top-0 left-0 ">
                <div className="flex flex-row justify-between w-full h-full">
                    <div className="flex flex-col  justify-between ">
                        <SVGArc className="" />
                        <SVGArc className="-rotate-90" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <SVGArc className="rotate-90" />
                        <SVGArc className="rotate-180 " />
                    </div>
                </div>
            </div>
            <FooterScene mousePosition={mousePosition} />

            <div className="flex w-full h-full justify-center items-center text-center md:text-left z-[2]" >

                <div className="flex flex-col sm:p-[10vmin] h-full w-full flex-grow lg:justify-between justify-center text-white">
                    <div>
                        <div className="text-2xl text-center sm:text-left flex flex-col justify-center items-center lg:items-start sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl 3xl:text-[10vmin] font ">
                            <span className="flex flex-row">
                                <BlurredText delay={0.4} tailwindClasses="" text="Wanna create" once={false} />
                            </span>
                            <span className="flex flex-row">
                                <BlurredText delay={0.5} tailwindClasses="" text={"something\u2009\u2009"} once={false} />
                                <RandomStaggeredText revealDelay={0.5} hoverDelay={0} hoverDuration={0.7} hoverStagger={0.05} tailwindClasses=" rounded-full font-bold" text={"awesome"} once={false} />
                            </span>
                            <span className="flex flex-row">
                                <BlurredText delay={0.6} tailwindClasses="" text="together?" once={false} />
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:gap-8 w-full text-center justify-center mt-16 mt:mt-0 items-center lg:text-right lg:justify-end lg:items-end">
                        <LetsTalkButton tailwindClasses="flex flex-row hover:bg-pale-white hover:text-black transform duration-200 ease-in cursor-pointer text-lg sm:text-2xl max-w-[300px] md:max-w-max md:text-[2.5vw] font-medium rounded-full border-2 border-white  px-5 py-2.5 sm:px-6 sm:py-3 md:px-[2vw] md:py-[1.5vmax]" text="Let's talk" delay={0.7} once={false} />

                        <span className="flex flex-row text-[3vw] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-[1vw]  font-medium">
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