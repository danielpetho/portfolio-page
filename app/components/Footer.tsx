// Footer.tsx

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="text-black text-xl flex items-center bg-white justify-center w-full">
      <div className="flex flex-col md:flex-row max-w-[1920px] px-12 sm:px-16 md:px-20 lg:px-32 bg-white pb-32 sm:pb-24 md:pb-20 lg:pb-18 pt-32 w-full justify-between">
        
      

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
