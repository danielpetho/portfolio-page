'use client'

import dynamic from 'next/dynamic'
import GradientShaderObject from './GradientShaderObject'
import { EffectComposer } from '@react-three/postprocessing'
import Grain from './Grain'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'

const Common = dynamic(() => import('@/src/utils/r3f/View').then((mod) => mod.Common), { ssr: false })

const View = dynamic(() => import('@/src/utils/r3f/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </svg>
        </div>
    ),
})

const FooterScene = () => {
    const grainEffectRef = useRef();

    return (
        <View className="w-[99.5%] h-[99.5%] absolute top-[0.25%] left-[0.25%] contact-r3f" orbit={true}>
            <GradientShaderObject mousePosition={{ x: 0, y: 0 }} />
            {/*<EffectComposer disableNormalPass>
                <Grain ref={grainEffectRef} />
    </EffectComposer>*/}
            <Common />
        </View>
    )
}

export default FooterScene;