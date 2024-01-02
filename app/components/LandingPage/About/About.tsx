const About = () => {
    return (
        <section className="h-screen flex flex-row mx-[5vw]">
            <div className="w-1/2 justify-center items-start flex flex-col text-[2vw] leading-[2.5vw]">
                <p>Blending the art of visual storytelling with cutting-edge technology, I specialize in creating immersive digital experiences.</p>
                <div className="text-2xl flex flex-row flex-wrap gap-6 text-[1vw] my-[4vh]">
                    <p className="hover:bg-green border border-black text-black rounded-full hover:text-white p-3 px-6">Web development</p>
                    <p className="bg-yellow rounded-full text-white p-3 px-6 ">Fullstack development</p>
                    <p className="bg-orange rounded-full text-white p-3 px-6 ">Interaction design</p>
                    <p className="bg-blue rounded-full text-white p-3 px-6 ">Creative coding with WebGL</p>
                    <p className="bg-pink rounded-full text-white p-3 px-6 ">Augmented Reality</p>
                </div>
              
            </div>
            <div className="w-1/2">
                <p></p>
                <div className="flex flex-row flex-wrap mt-[10vh] text-[2vw]">
                    <p>{"Sounds like I could help?"}</p>
                    <p className="underline text-[1vw]">{"Let's talk."}</p>
                </div>
            </div>
        </section>

    )

}

export default About