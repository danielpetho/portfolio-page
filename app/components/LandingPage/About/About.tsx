import LetsTalkButton from "../../Footer/LetsTalkButton"

const About = () => {
    return (
        <section className="h-screen flex flex-row mx-[5vw] ">
            <div className="w-1/2 justify-start items-start flex flex-col text-[2vw] leading-[2.5vw] mt-[10vw]">
                <p>Blending the art of visual storytelling with cutting-edge technology, I specialize in creating immersive digital experiences.</p>
                <div className="text-2xl flex flex-col items-start ml-12 flex-wrap w-full  gap-6 text-[1vw] my-[8vh] leading-[0.5vw]">
                    <p className="">Web development</p>
                    <p className="">Interaction design</p>
                    <p className="">Creative coding with WebGL</p>
                    <p className=" ">Augmented Reality</p>
                    <p className=" ">Real-time experiences</p>
                </div>
            
            </div>
            <div className="w-1/2 justify-end flex mb-[5vw]">
                
            <div className="flex flex-col gap-x-12 justify-end items-end flex-wrap mt-[10vh] text-[1vw]">
                    <p>{"Sounds like I could help?"}</p>
                    <LetsTalkButton tailwindClasses="flex border-black flex-row hover:bg-pale-white hover:text-black transform duration-200 ease-in cursor-pointer text-lg sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-3xl font rounded-full bg-black text-white border-2 border-black  px-5 py-2.5 sm:px-10 sm:py-5" text="Let's talk" delay={0.7} once={true} />

                </div>
            </div>
        </section>

    )

}

export default About