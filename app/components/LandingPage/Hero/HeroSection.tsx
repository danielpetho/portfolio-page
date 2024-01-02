import RandomStaggeredText from "../../Text/RandomStaggeredText";
import RevealText from "../../Text/RevealText";

const HeroSection = () => {
  return (
    <section className="h-[76vh] sm:h-[82vh] w-screen flex text-[4vw] 2xl:text[4vw] flex-col px-[5vw] mt-[4vh] sm:mt-[18vh] font ">
      <div className="h-1/3 w-full flex-col justify-end flex items-end  leading-[6vw] xl:leading-[4vw]">
        <h1 className="xl:text-[3vw] xl:font-light"><RevealText text="Hi Friend. Nice to meet you!" delay={0} once={true} y={300} /></h1>
        <h1 className="xl:text-[3vw] xl:font-light">My name is Daniel.</h1>
      </div>
      <div className="h-2/3 flex flex-col justify-end items-start leading-[6vw] ">
        <span className="cursor-pointer flex flex-row ">

          <h2 className="md:text-[2vw] md:mt-[0.5vw]">{"I'm a\u2009\u2009"}</h2>
          <RandomStaggeredText
            once={true}
            revealDelay={0.}
            text={"Creative\u2009\u2009Developer\u2009\u2009&\u2009\u2009Technologist"}
            hoverDelay={0.}
            hoverDuration={0.5}
            hoverStagger={0.005}
            tailwindClasses="font-bold mb-[8vh] text-[4vw]"
          />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
