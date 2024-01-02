import LetsTalkButton from "../../Footer/LetsTalkButton"

const About = () => {
    return (
        <section className="h-screen flex flex-row mx-[5vw] ">
            <div className="w-1/2 justify-start items-start flex flex-col text-[2vw] leading-[2.5vw] mt-[10vw]">
                <p>Blending the art of visual storytelling with cutting-edge technology, I specialize in creating immersive digital experiences.</p>
                <div className="text-2xl flex flex-col items-start ml-24 flex-wrap w-full  gap-3 text-[1vw] my-[8vh] leading-[0.5vw]">
                    <span className="flex flex-row items-center gap-6"><p className="text-lg">✦</p><p className="">Web development</p></span>
                    <span className="flex flex-row items-center gap-6"><p className="text-lg">✦</p><p className="">Interaction design</p></span>

                    <span className="flex flex-row items-center gap-6"><p className="text-lg">✦</p><p className="">Creative coding with WebGL</p></span>
                    <span className="flex flex-row items-center gap-6"><p className="text-lg">✦</p><p className="">Augmented Reality</p></span>
                    <span className="flex flex-row items-center gap-6"><p className="text-lg">✦</p><p className="">Real-time experiences</p></span>
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap mt-[10vh] ">
                    <p className="text-xl">{/*"Sounds like I could help?"*/}</p>
                    <LetsTalkButton tailwindClasses="flex border-black flex-row hover:bg-pale-white hover:text-black transform duration-200 ease-in cursor-pointer text-lg sm:text-2xl md:text-xl xl:text-xl 2xl:text-xl font rounded-full bg-black text-white border-2 border-black  px-5 py-2.5 sm:px-8 sm:py-4" text="Let's talk" delay={0.7} once={true} />

                </div>
            </div>
            <div className="w-1/2 justify-end flex mb-[5vw]">

                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src="/videos/about.mp4" type="video/mp4" />
                </video>
                
      
            </div>
        </section>

    )

}

export default About