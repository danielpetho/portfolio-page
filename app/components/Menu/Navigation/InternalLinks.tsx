"use client"

import { motion } from "framer-motion";
import InternalLinkText from "./InternalLinkText";

const navLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Works",
    link: "/works",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Contact",
    link: "#contact",
  },
  {
    text: "Tutorials / Blog",
    link: "/blog",
    tailwindClasses: "pt-14 sm:pt-14",
  },
  {
    text: "Experiments",
    link: "/lab",
  },
  {
    text: "Filters",
    link: "/lab/filters",
  },
];

interface InternalLinksProps {
  isMenuOpen: boolean;
  linkHovered: string;
  handleLinkClick: (link: string) => void;
  hoverLink: (link: string) => void;
  leaveLink: () => void;
}

const InternalLinks = ({
  isMenuOpen,
  linkHovered,
  handleLinkClick,
  hoverLink,
  leaveLink,
}: InternalLinksProps) => {
  return (
    <motion.ul className="flex flex-col justify-start items-start pt-24 sm:pl-14 pl-8 h-full ">
      {navLinks.map((navLink, idx) => (
        <InternalLinkText
          key={idx}
          idx={idx}
          text={navLink.text}
          link={navLink.link}
          isMenuOpen={isMenuOpen}
          linkHovered={linkHovered}
          handleLinkClick={handleLinkClick}
          hoverLink={hoverLink}
          leaveLink={leaveLink}
          delay={idx * 0.1 + 0.1}
          tailwindClasses={navLink.tailwindClasses}
        />
      ))}
    </motion.ul>
  );
};

export default InternalLinks;
