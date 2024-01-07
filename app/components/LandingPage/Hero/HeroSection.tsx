import LandingScene from "../../R3F/LandingPage/LandingScene";
import RandomStaggeredText from "../../Text/RandomStaggeredText";
import RevealText from "../../Text/RevealText";

const HeroSection = () => {
  return (
    <section className="h-screen sm:h-[82vh] w-screen flex flex-col px-[5vw] mt-[4vh] sm:mt-[18vh] font ">
      <div className="w-full h-[200vh] absolute top-0 left-0 backdrop-blur-[1px] z-[-1]">

        <LandingScene />
      </div>
      <div className="h-1/3 w-full flex-col justify-end md:gap-[2vw] flex items-end  text-black">
        <h1 className="text-lg md:text-[3vw] xl:text-[2.5vw] xl:font-light"><RevealText text="Hi Friend. Nice to meet you!" delay={0} once={true} y={300} /></h1>
        <h1 className="text-lg md:text-[3vw] xl:text-[2.5vw] xl:font-light"><RevealText text="My name is Daniel." delay={0} once={true} y={300} /></h1>
      </div>
      <div className="h-2/3 flex flex-col justify-end items-start mb-[10vh] md:mb-[6vh] ">
        <div className="flex flex-row">
          <h2 className="md:text-[2vw] md:mt-[4vw] text mt-[2vw] xs:mt-[4vw] sm:mt-[4vw]">{"I'm a\u2009\u2009"}</h2>
          <RandomStaggeredText
            once={true}
            revealDelay={0.}
            text={"Creative\u2009\u2009Developer"}
            hoverDelay={0.}
            hoverDuration={0.5}
            hoverStagger={0.005}
            tailwindClasses="font-bold text-[6vw] "
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
