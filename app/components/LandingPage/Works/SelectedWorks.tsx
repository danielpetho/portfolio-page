"use client"

import selectedWorks from '@/src/data/selectedWorks.json'
import { SelectedWorkType } from '@/typings'
import SelectedWork from './SelectedWork'
import { useEffect, useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

const SelectedWorks = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0.0, 1], [0, 1000]);


    useEffect(() => {
        scrollYProgress.onChange((v) => {
            console.log("v: ", v);
        })
    }, [scrollY]);


    return (
        <section className="overflow-x-hidden h-full min-h-screen mb-[10vmax]" ref={ref}>
            <h1 className="text-[8vw] font-bold mx-[5vw] overflow-x-hidden">Selected Works (6)</h1>

            <div className="flex flex-col pt-[0vh] sm:pt-[0vh]">
                {selectedWorks.works.map((work: SelectedWorkType, idx: number) => (
                    <div key={idx} className="flex">
                        <SelectedWork id={idx} work={work} scrollY={y} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SelectedWorks