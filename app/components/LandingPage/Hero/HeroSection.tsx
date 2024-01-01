import RandomStaggeredText from "../../Text/RandomStaggeredText";

const HeroSection = () => {
  return (
    <section className="h-[76vh] sm:h-[82vh] w-screen flex text-[4vw] flex-col px-[5vw] mt-[4vh] sm:mt-[18vh] font">
      <div className="h-1/3 w-full flex-col justify-end flex items-end  leading-[6vw]  ">
        <h1>Hi Friend. Nice to meet you!</h1>
        <h1>My name is Daniel.</h1>
      </div>
      <div className="h-2/3 flex w-full justify-start items-end  leading-[6vw] pb-[8vh]">
        <span className="flex flex-row cursor-pointer">
          <h2>{"I'm a "}</h2>{" "}
          <RandomStaggeredText
            once={true}
            revealDelay={0}
            text={"Creative Developer & Technologist"}
            hoverDelay={0}
            hoverDuration={0.33}
            hoverStagger={0.03}
            tailwindClasses="text-bold"
          />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
