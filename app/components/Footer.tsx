// Footer.tsx

import React from "react";
import Link from "next/link";
import Scene from "./R3F/Scene";
import MaskedExternalLink from "./Text/MaskedExternalLink";


const Footer: React.FC = () => {
  return (
    <footer className="text-white text-xl flex items-center flex-col bg-black h-screen justify-center w-full">
      <div className="max-w-[1920px] px-12 sm:px-16 md:px-20 lg:px-32 w-full h-full pt-16 ">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 z-10 h-full">
            <div className="flex flex-col p-24 h-full w-full flex-grow justify-between">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold ">
                  Wanna create something cool together?
                </h2>
              </div>
              <div className="flex flex-col my-4 gap-2 text-right">
                <h3 className="text-4xl font-thin">Let's connect!</h3>
                <h3 className="text-4xl font-semibold">hello@danielpetho.com</h3>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 rounded-[120px] overflow-hidden h-full w-full z-0">
            <Scene />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-[1920px] px-12 sm:px-16 md:px-20 lg:px-32 bg-black pb-24 sm:pb-20 md:pb-16 lg:pb-12 pt-12 w-full justify-start md:justify-between">
        <div className="flex flex-col xl:flex-row w-full">
          <MaskedExternalLink text={"Instagram"} link="https://instagram.com/nonzeroexitcode" tailwindClasses="" delay={0.5} />
          <MaskedExternalLink text={"Twitter / X"} link="https://twitter.com/nonzeroexitcode" tailwindClasses="" delay={0.6} />
          <MaskedExternalLink text={"Linkedin"} link="https://linkedin.com/in/kpethodaniel" tailwindClasses="" delay={0.7} />
          <MaskedExternalLink text={"Github"} link="https://github.com/danielpetho" tailwindClasses="" delay={0.8} />
        </div>

        <div className="flex flex-row mt-12 md:mt-0">
          <a href="mailto:hello@danielpetho.com" className="cursor mr-12">
            hello@danielpetho.com
          </a>
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
