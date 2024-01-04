"use client"

import { useRef } from "react";
import Scene from "./Scene";

const R3F = () => {
    const ref = useRef<HTMLDivElement>(null!);

    return (
        <div className="w-screen h-screen fixed top-0 left-0 -z-10" ref={ref}>
            <Scene 
                eventSource={ref}
                eventPrefix='client' />
        </div>
    )
}

export default R3F;