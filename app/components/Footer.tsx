"use client"

import React, { useEffect, useState } from "react";
import Scene from "./R3F/Scene";
import MaskedExternalLink from "./Text/MaskedExternalLink";
import BlurredText from "./Text/BlurredText";
import useElementSize from '../hooks/useElementSize';
import StarIcon from "./Text/StarIcon";
import RandomStaggeredText from "./Text/RandomStaggeredText";

const Footer: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = React.useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize(footerRef);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    const x = clientX / width;
    const y = clientY / height;
    setMousePosition({ x, y });

  };

  return (
    <footer id="contact" className="text-white text-xl flex items-center flex-col bg-black h-screen justify-center w-full"
      onMouseMove={handleMouseMove}
      ref={footerRef}

    >
      <div
        className="relative w-full h-full py-8 md:pt-24 lg:pt-12 md:pb-12"
      >
        <div className="absolute top-0 left-0 rounded-b-[50px] overflow-hidden h-full w-full z-0" >
          <Scene mousePosition={mousePosition} />
        </div>

        <div className="flex justify-center items-center text-center md:text-left w-full h-full " >

          <div className="flex flex-col p-10 sm:p-12 md:p-14 lg:p-16 xl:p-20 2xl:p-32 pt-16 sm:pt-20 md:pt-24 lg:pt-40 xl:pt-40 2xl:pt-48 h-full w-full flex-grow md:justify-between justify-center text-white">
            <div>
              <div className="text-3xl text-center sm:text-left flex flex-col justify-center items-center md:items-start sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font text-white">
                <span className="flex flex-row">
                  {/* <StarIcon delay={0.4} text="✷" once={false} tailwindClasses="text-white pr-5" />*/}
                  <BlurredText delay={0.4} tailwindClasses="text-white " text="Wanna create" once={false} />
                </span>
                <span className="flex flex-row">
                  <BlurredText delay={0.5} tailwindClasses="text-white " text={"something\u2009"} once={false} />
                  <RandomStaggeredText revealDelay={0.5} hoverDelay={0} hoverDuration={0.7} hoverStagger={0.05} tailwindClasses="text-white  rounded-full font-bold" text={"awesome"} once={false}  />
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

              <h3 className="text-lg sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl font-semibold flex-wrap md:w-max">
                <a href="mailto:hello@danielpetho.com" className="cursor">
                  <RandomStaggeredText
                  
                    revealDelay={0.7}
                    hoverDelay={0.}
                    hoverDuration={0.33}
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

      <div className="flex  sm:flex-row  px-10 sm:px-12 md:px-14 lg:px-16 xl:px-20 2xl:px-24 bg-black pb-6 md:pb-12 lg:pb-8 pt-8 w-full justify-start sm:justify-between">
        <div className="flex text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-6xl flex-col lg:flex-row w-3/6 lg:w-5/6 xl:w-4/6 2xl:w-3/6">
          <MaskedExternalLink
            text={"Instagram"}
            link="https://instagram.com/nonzeroexitcode"
            tailwindClasses=""
            delay={0.5}
          />
          <MaskedExternalLink
            text={"Twitter / X"}
            link="https://twitter.com/nonzeroexitcode"
            tailwindClasses=""
            delay={0.6}
          />
          <MaskedExternalLink
            text={"Linkedin"}
            link="https://linkedin.com/in/kpethodaniel"
            tailwindClasses=""
            delay={0.7}
          />
          <MaskedExternalLink
            text={"Github"}
            link="https://github.com/danielpetho"
            tailwindClasses=""
            delay={0.8}
          />
        </div>

        <div className="flex mt-12 md:pb-0 md:mt-0 text-xs sm:text-sm md:text-md items-end justify-end lg:w-1/6 xl:w-2/6 w-3/6">
          <BlurredText
            text={"©2023 Daniel Petho"}
            tailwindClasses="text-white font-base items-end justify-end"
            delay={0.9}
            once={false}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
