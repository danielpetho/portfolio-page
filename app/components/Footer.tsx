// Footer.tsx

import React from "react";
import Link from "next/link";
import Scene from "./R3F/Scene";
import MaskedExternalLink from "./Text/MaskedExternalLink";
import MaskedHeader from "./Text/MaskedText";

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-xl flex items-center flex-col bg-black h-screen justify-center w-full">
      <div className="max-w-7xl md:max-w-full px-6 md:px-20 w-full h-full pt-16 md:pt-20">

        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 z-10 flex justify-center items-center text-center md:text-left w-full h-full">

            <div className="flex flex-col p-10 sm:p-12 md:p-14 lg:p-16 xl:p-20 2xl:p-24 h-full w-full max-w-[1920px] flex-grow md:justify-between justify-center text-white">

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold ">
                  <MaskedHeader
                    delay={0.4}
                    tailwindClasses="text-white"
                    phrases={["Wanna create something cool together?"]}
                  />
                </h2>
              </div>

              <div className="flex flex-col mt-16 xl:gap-2  text-center md:text-right">
                <h3 className="text-lg sm:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-thin">
                  Let's connect!
                </h3>
                <h3 className="text-lg sm:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
                  {" "}
                  <a href="mailto:hello@danielpetho.com" className="cursor">
                    hello@danielpetho.com{" "}
                  </a>
                </h3>
              </div>

            </div>
          </div>
          <div className="absolute top-0 left-0 rounded-[50px] lg:rounded-[75px] xl:rounded-[100px] 2xl:rounded-[120px] overflow-hidden h-full w-full z-0">
            <Scene />
          </div>
        </div>
      </div>

      <div className="flex  sm:flex-row max-w-[1920px] px-6 sm:px-10 md:px-20 lg:px-24 bg-black pb-6 md:pb-16 lg:pb-8 pt-8 w-full justify-start sm:justify-between">
        <div className="flex flex-col lg:flex-row lg:w-5/6 xl:w-4/6">
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

        <div className="flex mt-12 md:pb-0 md:mt-0 text-sm md:text-md items-end justify-end lg:w-1/6 xl:w-2/6 w-full">
          <MaskedHeader phrases={["2023 Daniel Petho"]} tailwindClasses="text-white font-base" delay={0.9} />
        </div>

        {/*<div className="flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </div>

        <div className="flex flex-col">
          <Link href="/tutorials">Tutorials / Blog</Link>
          <Link href="/lab">Experiments</Link>
          <Link href="/lab/filters">AR Filters</Link>
        </div>*/}
      </div>
    </footer>
  );
};

export default Footer;
