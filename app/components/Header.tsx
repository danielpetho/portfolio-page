"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const currentRoute = usePathname();
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="fixed top-0 w-full bg-pale-white z-10">
      <div className="flex justify-center items-center ">
        <div className="max-w-[1920px] mx-8 my-4 py-4 px-12 sm:px-16 md:px-20 lg:px-32 flex w-full justify-between items-center h-8 bg-transparent">
          <div className="py-2">
            <Link
              href="/"
              className="text-xl text-black font-medium bg-transparent"
            >
              Daniel Petho
            </Link>
          </div>

          <button
            className="bg-transparent"
            onClick={() => setShowMenu(!showMenu)}
          >
            <p className="text-black font-semibold font-regular flex">Menu</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
