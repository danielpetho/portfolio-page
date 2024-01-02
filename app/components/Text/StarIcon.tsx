"use client";

import { motion } from "framer-motion";

interface StarIconProps {
    text: string;
    tailwindClasses: string;
    delay: number;
    once: boolean;
}


const StarIcon: React.FC<StarIconProps> = ({
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
        <motion.div className={`${tailwindClasses}`}
            whileInView="visible"
            variants={viewVariants}
            initial="hidden"
            viewport={{ once: once }}
        >

            <motion.p
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "backInOut" }}
            >

                {text}
            </motion.p>
        </motion.div>
    );
};

export default StarIcon;
