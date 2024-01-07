import LetsTalkButton from "../../Footer/LetsTalkButton"

const services = [
    "Web development",
    "Interaction design",
    "Creative coding with WebGL",
    "Augmented Reality",
    "Real-time experiences"
]

const About = () => {
    return (
        <section className="min-h-screen h-full flex justify-around md:flex-row flex-col my-[5vh] mb-[15vh] mx-[5vw] ">
        
            <div className="w-full h-2/4 md:w-1/2 md:justify-start justify-start flex mb-[5vw]">
                <p>Lacka</p>
                {/*<video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src="/videos/about.mp4" type="video/mp4" />
                </video>*/}
                
      
            </div>
            <div className="w-full h-2/4 md:w-1/2 justify-between items-start flex flex-col sm:text-xl md:text-2xl lg:text-3xl xl:text-[2vw] xl:leading-[3vw]  md:mt-[10vh] mt-[5vh] text-lg">
                <p>Blending the art of visual storytelling with cutting-edge technology, I specialize in creating immersive digital experiences.</p>

                <div className="text-xs flex flex-col items-start ml-4 mt-8 md:ml-[5vw] gap-y-1 md:gap-y-[1.5vw] flex-wrap w-full md:text-[1.5vw] md:my-[4vmax] xl:my-[4vmax]">
                    {services.map((service, index) => {
                        return (
                            <span key={index} className="flex flex-row items-center gap-2 md:gap-[1vw] "><p className="text-xs md:text-[1vw] ">✦</p><p className="">{service}</p></span>
                        )
                    })}
                    
                </div>
                <div className="flex flex-col w-full justify-center items-center mt-14">
                    <p className="text-[10px] md:text-[1vw] mb-1">{"Sounds like I could help?"}</p>
                    <LetsTalkButton tailwindClasses="flex border-black flex-row hover:bg-pale-white hover:text-black transform duration-200 ease-in cursor-pointer text-sm sm:text-lg max-w-[300px] md:max-w-max md:text-[2.5vw] font rounded-full border text-black border-black w-full justify-center items-center  px-5 py-2.5 sm:px-6 sm:py-3 md:px-[2vw] md:py-[1.5vmax]" text="Let's talk" delay={0.7} once={true} />

                </div>
            </div>
        </section>

    )

}

export default About