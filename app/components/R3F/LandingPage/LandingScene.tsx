'use client'

import { AccumulativeShadows, ArcballControls, Backdrop, Environment, Float, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, RandomizedLight, Stage } from '@react-three/drei';
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'

const FloatingPlane = dynamic(() => import('@/app/components/R3F/LandingPage/FloatingPlane'), { ssr: false });

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

const LandingScene = () => {
    const grainEffectRef = useRef();

    return (
        <View className="w-full h-full ">
            <PerspectiveCamera makeDefault fov={45} position={[-10, 10, 18]} />

            <color attach="background" args={['#f8f8f8']} />
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <group position={[-5, -5, 0]} >
                <mesh castShadow receiveShadow position={[0, 10., 0]} scale={0.5}>
                    <sphereGeometry args={[1, 64, 64]} />

                    {/* @ts-ignore */}
                    <MeshTransmissionMaterial resolution={1024} distortion={0.25} color="#F8F8F8" thickness={0.6} anisotropy={1} />
                </mesh>
                <FloatingPlane />
            </group>

            <Environment preset="studio" />

            <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} enableZoom={false} />


        </View>
    )
}

export default LandingScene;