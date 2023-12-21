// Footer.tsx
"use client";

import React from "react";
import Scene from "./R3F/Scene";
import MaskedExternalLink from "./Text/MaskedExternalLink";
import MaskedText from "./Text/MaskedText";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="text-white text-xl flex items-center flex-col bg-black h-screen justify-center w-full">
        <div
          className="relative w-full h-full py-8 md:pt-24 lg:pt-12 md:pb-12"
        >
          <div className="absolute top-0 left-0 rounded-b-[50px] overflow-hidden h-full w-full z-0">
            <Scene />
          </div>

          <div className="flex justify-center items-center text-center md:text-left w-full h-full">

            <div className="flex flex-col p-10 sm:p-12 md:p-14 lg:p-16 xl:p-20 2xl:p-32 pt-16 sm:pt-20 md:pt-24 lg:pt-40 xl:pt-40 2xl:pt-48 h-full w-full flex-grow md:justify-between justify-center text-white">
              <div>
                <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-semibold">
                  <MaskedText
                    delay={0.4}
                    tailwindClasses="text-white"
                    phrases={["Wanna create", "something cool", "together?"]}
                  />
                </h2>
              </div>

              <div className="flex flex-col mt-16 xl:gap-2 text-center justify-center items-center md:text-right md:justify-end md:items-end">
                <MaskedText
                  delay={0.5}
                  phrases={["Let's connect!"]}
                  tailwindClasses="text-lg sm:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-thin md:w-max"
                />
                <h3 className="text-lg sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl font-semibold flex-wrap md:w-max">
                  {" "}
                  <a href="mailto:hello@danielpetho.com" className="cursor">
                    <MaskedText
                      delay={0.6}
                      phrases={["hello@danielpetho.com"]}
                      tailwindClasses=""
                    />
                  </a>
                </h3>
              </div>
            </div>
          </div>

        </div>

      <div className="flex  sm:flex-row  px-10 sm:px-12 md:px-14 lg:px-16 xl:px-20 2xl:px-24 bg-black pb-6 md:pb-12 lg:pb-8 pt-8 w-full justify-start sm:justify-between">
        <div className="flex text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[5vw] flex-col lg:flex-row w-3/6 lg:w-5/6 xl:w-4/6 2xl:w-3/6">
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

        <div className="flex mt-12 md:pb-0 md:mt-0 text-sm md:text-md items-end justify-end lg:w-1/6 xl:w-2/6 w-3/6">
          <MaskedText
            phrases={["2023 Daniel Petho"]}
            tailwindClasses="text-white font-base"
            delay={0.9}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
