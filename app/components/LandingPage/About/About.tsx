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
        <section className="min-h-[600px] h-full flex flex-col my-[5vh]  mx-[5vw]">

            <div className="w-full flex pb-[5vh] py-[5vw]">
                <video className="w-full h-full object-cover rounded-3xl lg:rounded-[3vmax]" autoPlay loop muted playsInline>
                    <source src="/videos/showreel.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="w-full h-full justify-between items-start font-bold flex flex-col sm:text-xl md:text-2xl lg:text-3xl xl:text-[4vw] xl:leading-[5vw] text-lg">
                <p>Blending the art of visual storytelling with cutting-edge technology, I specialize in creating immersive digital&nbsp;experiences.</p>

                <div className="text-xs flex flex-col items-start font-normal text-left justify-start pl-8 pt-8 md:ml-[5vw] gap-y-1 text-black font md:gap-y-[1.5vw] flex-wrap w-full md:text-[1.5vw] md:my-[4vmax] xl:my-[4vmax]">
                    {services.map((service, index) => {
                        return (
                            <span key={index} className="flex flex-row items-center justify-center gap-2 md:gap-[1vw] "><p className="">{service}</p></span>
                        )
                    })}

                </div>

            </div>

            <div className="flex flex-row w-full justify-between items-end py-[10vmin]">
                <p className="text-[10px] md:text-[1vw] text-pale-black">{"Sounds like I could help?"}</p>
                <p className=" sm:text-xl md:text-2xl lg:text-3xl xl:text-[3vw] xl:leading-[4vw] text-lg font-extrabold rounded-full text-white bg-black border-black px-[3vw] py-[1vw]">Let's talk.</p>
            </div>
        </section>

    )

}

export default About