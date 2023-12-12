import Link from "next/link";
import InternalLinkText from "./InternalLinkText";

const navLinks = [
  {
    text: "Home",
    link: "/home",
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
    link: "/contact",
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
}

const InternalLinks = ({ isMenuOpen }: InternalLinksProps) => {
  return (
    <ul className="flex flex-col justify-start items-start pt-24 sm:pl-14 pl-8 h-full ">
      {navLinks.map((navLink, idx) => (
        <InternalLinkText
          key={idx}
          text={navLink.text}
          link={navLink.link}
          isMenuOpen={isMenuOpen}
          delay={idx * 0.1 + 0.1}
          tailwindClasses={navLink.tailwindClasses}
        />
      ))}
    </ul>
  );
};

export default InternalLinks;
