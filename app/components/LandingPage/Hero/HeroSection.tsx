const HeroSection = () => {
    return (
        <section className="h-[76vh] sm:h-[82vh] w-screen flex text-[5vw] flex-col px-[5vw] mt-[4vh] sm:mt-[18vh] font">
               <div className="h-1/3 w-full flex-col justify-end flex items-end  leading-[6vw]  ">
                <h1>Hi Friend. Nice to meet you!</h1>
                <h1>My name is Daniel.</h1>
            </div>
            <div className="h-2/3 flex w-full justify-end items-end  leading-[6vw] pb-[8vh]">
                <h2>I'm a Creative Developer & Technologist</h2>
            </div>
         
        </section>
    )
}

export default HeroSection;