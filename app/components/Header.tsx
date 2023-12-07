"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const currentRoute = usePathname();
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="fixed top-0 w-full bg-transparent z-10">
      <div className="flex justify-center items-center ">
        <div className="max-w-[1920px] py-4 px-6 sm:px-10 md:px-24 flex w-full justify-between items-center h-16 md:h-20 bg-transparent">
          <div className="py-2">
            <Link
              href="/"
              className="text-xl md:text-2xl text-white font-medium bg-transparent"
            >
              Daniel Petho
            </Link>
          </div>

          <button
            className="bg-transparent"
            onClick={() => setShowMenu(!showMenu)}
          >
            <p className="text-white text-xl font-medium font-regular flex">Menu</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
