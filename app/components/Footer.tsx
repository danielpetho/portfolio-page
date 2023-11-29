// Footer.tsx

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="text-black text-xl flex items-center bg-white justify-center w-full">
      <div className="flex flex-col max-w-[1920px] px-12 sm:px-16 md:px-20 lg:px-32 bg-white pb-24 sm:pb-28 md:pb-32 lg:pb-48 pt-32 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid grid-flow-row gap-x-24 gap-y-12">
        
      <div className="flex flex-col">
          <h3 className="text-3xl font-semibold ">Get in touch</h3>
          <a href="mailto:hello@danielpetho.com" className="cursor mr-12">
            hello@danielpetho.com
          </a>
        </div>

        <div className="flex flex-col">

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

        

        <div className="flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </div>

        <div className="flex flex-col">
          <Link href="/tutorials">Tutorials / Blog</Link>
          <Link href="/lab">Experiments</Link>
          <Link href="/lab/filters">AR Filters</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
