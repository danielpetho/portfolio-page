import SocialLinkText from "./SocialLinkText";

interface SocialLinksProps {
  isMenuOpen: boolean;
}

const SocialLinks = ({ isMenuOpen }: SocialLinksProps) => {
  return (
    <div className="flex flex-row text sm:pl-14 pl-8 w-5/6 pr-6 pt-16 h-full font-medium justify-between">
      <div className="flex flex-col w-full justify-start text-left">
        <SocialLinkText
          text="Instagram"
          link="https://www.instagram.com/nonzeroexitcode"
          delay={0.8}
          isMenuOpen={isMenuOpen}
        />
        <SocialLinkText
          text="Twitter / X"
          link="https://www.twitter.com/nonzeroexitcode"
          delay={0.9}
          isMenuOpen={isMenuOpen}
        />
      </div>
      <div className="flex flex-col justify-start w-full text-left font-medium">
        <SocialLinkText
          text="Linkedin"
          link="https://www.linkedin.com/in/danielpetho"
          delay={0.8}
          isMenuOpen={isMenuOpen}
        />
        <SocialLinkText
          text="Github"
          link="https://www.github.com/danielpetho"
          delay={0.9}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </div>
  );
};

export default SocialLinks;
