"use client"

import CalendlyDynamic from "../Calendly/CalendlyDynamic"
import StarIcon from "../Text/StarIcon"
import { motion } from "framer-motion";

interface LetsTalkButtonProps {
    text: string;
    tailwindClasses: string;
    delay: number;
    once: boolean;
}

const LetsTalkButton: React.FC<LetsTalkButtonProps> = ({
    text,
    tailwindClasses,
    delay,
    once = true,
}) => {

    const viewVariants = {
        hidden: {
            opacity: 0,
            filter: "blur(5px)",
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut", delay: delay },
            filter: "blur(0px)",
        },
    };

    return (
        <motion.span whileInView="visible"
        variants={viewVariants}
        initial="hidden"
        viewport={{ once: once }}
        className={`${tailwindClasses}`}
        >
            <StarIcon delay={0.6} text="✦" once={false} tailwindClasses=" z-0 pr-5" />
            <CalendlyDynamic />
            <StarIcon delay={0.6} text="✦" once={false} tailwindClasses=" z-0 pl-5" />
        </motion.span>
    )
}

export default LetsTalkButton