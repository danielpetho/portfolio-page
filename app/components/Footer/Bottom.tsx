"use client"

import BlurredText from "../Text/BlurredText"
import MaskedExternalLink from "../Text/MaskedExternalLink"
import { motion } from "framer-motion"

const Bottom: React.FC = () => {
    return (

        <motion.div
            className="flex sm:flex-row w-full h-full  px-10 sm:px-12 md:px-14 lg:px-16 xl:px-20 2xl:px-24 bg-black pb-6 md:pb-12 lg:pb-8 pt-8 w-full justify-start sm:justify-between ">
            <div className="flex text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-6xl flex-col lg:flex-row w-3/6 lg:w-5/6 xl:w-4/6 2xl:w-3/6">
                <MaskedExternalLink
                    text={"Instagram"}
                    link="https://instagram.com/nonzeroexitcode"
                    tailwindClasses=""
                    delay={0.}
                />
                <MaskedExternalLink
                    text={"Twitter / X"}
                    link="https://twitter.com/nonzeroexitcode"
                    tailwindClasses=""
                    delay={0.}
                />
                <MaskedExternalLink
                    text={"Linkedin"}
                    link="https://linkedin.com/in/kpethodaniel"
                    tailwindClasses=""
                    delay={0.}
                />
                <MaskedExternalLink
                    text={"Github"}
                    link="https://github.com/danielpetho"
                    tailwindClasses=""
                    delay={0.}
                />
            </div>

            <div className="flex mt-12 md:pb-0 md:mt-0 text-xs sm:text-sm md:text-md items-end justify-end lg:w-1/6 xl:w-2/6 w-3/6">
                <BlurredText
                    text={"©2023 Daniel Petho"}
                    tailwindClasses="text-white font-base items-end justify-end"
                    delay={0.}
                    once={true}
                />
            </div>
        </motion.div>
    )
}

export default Bottom