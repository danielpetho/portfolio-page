"use client"

import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useEffect, useRef, useState } from "react";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
    tailwindClasses: string;
    idx: number;
}
function ParallaxText({ idx, children, baseVelocity = 100, tailwindClasses }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const [textWidth, setTextWidth] = useState(4); // Default to 4 repeats
 
    console.log(children.length)

    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-0, -100, v)}%`);

    useEffect(() => {
        
    }, [x]);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {

        if (idx === 0) {
            //console.log("x.get(): ", x.get());
            //console.log("baseX.get(): ", baseX.get());
        }
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);


        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <motion.div className={`${tailwindClasses}`} style={{ x }}>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
        </motion.div>
    );
}

export default ParallaxText;