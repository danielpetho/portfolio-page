import LandingScene from "../../R3F/LandingPage/LandingScene";
import RandomStaggeredText from "../../Text/RandomStaggeredText";
import RevealText from "../../Text/RevealText";

const HeroSection = () => {
  return (
    <section className="h-screen w-screen min-w-[250px] justify-between flex flex-col px-[5vw] ">
      <div className="w-full h-full min-h-[250px]">

        <div className="w-full h-[200vh] absolute top-0 left-0 backdrop-blur-[1px] z-[-1]">
          <LandingScene />
        </div>

        <div className="h-[8vh] sm:h-[10vh] md:h-[14vh] min-h-[50px]" />

        <div className="h-1/3 w-full flex-col justify-end gap-y-[0.5vw] md:gap-y-[2vw] flex items-end  text-black pt-[4vh] sm:pt-[18vh]">
          <h1 className="text-base md:text-[3vw] xl:text-[2.5vw] xl:font-light text-right"><RevealText text="Hi Friend. Nice to meet&nbsp;you!" delay={0} once={true} y={50} /></h1>
          <h1 className="text-base md:text-[3vw] xl:text-[2.5vw] xl:font-light text-right"><RevealText text="My name is&nbsp;Daniel." delay={0.2} once={true} y={50} /></h1>
        </div>

        <div className="h-2/3 flex flex-col justify-end items-start  pb-[32vh] sm:pb-[28vh] md:pb-[24vh] lg:pb-[20vh]">

          <div className="flex flex-row flex-nowrap ">

            <div className="flex flex-col sm:flex-row">
            <h2 className="sm:text-[2vw] sm:mt-[4vw]"><RevealText text={"I'm a\u2009\u2009"} delay={0.4} once={true} y={50} /></h2>

            <RandomStaggeredText
              once={true}
              revealDelay={0.6}
              text={"Creative\u2009\u2009Developer"}
              hoverDelay={0.}
              hoverDuration={0.5}
              hoverStagger={0.005}
              y={50}
              tailwindClasses="font-bold max-sm:text-2xl sm:text-[6vw]"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
