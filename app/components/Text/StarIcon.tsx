"use client";

import { motion } from "framer-motion";

interface StarIconProps {
    text: string;
    tailwindClasses: string;
}


const StarIcon: React.FC<StarIconProps> = ({
    text,
    tailwindClasses,
}) => {

    return (
        <div className={`${tailwindClasses}`}>
            <motion.p
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "backInOut" }}
            >
                {text}
            </motion.p>
        </div>
    );
};

export default StarIcon;
