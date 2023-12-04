// Footer.tsx

import React from "react";
import Link from "next/link";
import Scene from "./R3F/Scene";

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-xl flex items-center flex-col bg-black h-screen justify-center w-full">
      <div className="  max-w-[1920px] px-12 sm:px-16 md:px-20 lg:px-32 w-full h-full pt-16 ">
        <div className="rounded-3xl overflow-hidden h-full">
          <Scene />
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-[1920px] px-12 sm:px-16 md:px-20 lg:px-32 bg-black pb-24 sm:pb-20 md:pb-16 lg:pb-12 pt-12 w-full justify-between">
        <div className="flex flex-col xl:flex-row  lg:gap-x-24 md:gap-x-18  ">
          <a
            href="https://instagram.com/nonzeroexitcode"
            className="cursor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/nonzeroexitcode"
            className="cursor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter / X
          </a>
          <a
            href="https://linkedin.com/in/kpethodaniel"
            className="cursor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/danielpetho"
            className="cursor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
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
