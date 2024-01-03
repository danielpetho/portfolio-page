"use client"

import BlurredText from "../Text/BlurredText"
import MaskedExternalLink from "../Text/MaskedExternalLink"
import { motion } from "framer-motion"

const Bottom: React.FC = () => {
    return (

        <motion.div
            className="flex sm:flex-row h-full w-full px-[5vw] bg-pale-white text-black pb-6 md:pb-12 lg:pb-8 pt-8  justify-start sm:justify-between ">
            <div className="flex text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-6xl flex-col lg:flex-row w-3/6 lg:w-5/6 xl:w-4/6 2xl:w-3/6">
                <MaskedExternalLink
                    text={"Instagram"}
                    link="https://instagram.com/nonzeroexitcode"
                    tailwindClasses=""
                    delay={0.5}
                />
                <MaskedExternalLink
                    text={"Twitter / X"}
                    link="https://twitter.com/nonzeroexitcode"
                    tailwindClasses=""
                    delay={0.6}
                />
                <MaskedExternalLink
                    text={"Linkedin"}
                    link="https://linkedin.com/in/kpethodaniel"
                    tailwindClasses=""
                    delay={0.7}
                />
                <MaskedExternalLink
                    text={"Github"}
                    link="https://github.com/danielpetho"
                    tailwindClasses=""
                    delay={0.8}
                />
            </div>

            <div className="flex mt-12 md:pb-0 md:mt-0 text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg 3xl:text-[1vw] items-end justify-end lg:w-1/6 xl:w-2/6 w-3/6">
                <BlurredText
                    text={"©2023 Daniel Petho"}
                    tailwindClasses="font-base items-end justify-end"
                    delay={0.9}
                    once={false}
                />
            </div>
        </motion.div>
    )
}

export default Bottom