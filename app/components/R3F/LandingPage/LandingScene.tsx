'use client'

import { AccumulativeShadows, ArcballControls, Backdrop, Environment, Float, MeshTransmissionMaterial, OrbitControls, PerspectiveCamera, RandomizedLight, RenderCubeTexture, RenderCubeTextureApi, Stage } from '@react-three/drei';
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import GradientShaderObject from '../Footer/GradientShaderObject';
import { LayerMaterial, Base, Depth, Noise } from 'lamina'
import * as THREE from "three";


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
    return (
        <View className="w-full h-full ">
            
            <PerspectiveCamera makeDefault fov={45} position={[-10, 10, 20]} />

            <ambientLight intensity={1.4} />

            {/*<ambientLight intensity={10.} color={"#f85408"} />}*/}
            <group position={[-8, -2, 0]} >
                <FloatingPlane />
            </group>

            <Environment background resolution={64}>
            <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
        <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Base color="blue" alpha={1} mode="normal" />
            <Depth colorA="#00ffff" colorB="#ff8f00" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
            <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
          </LayerMaterial>
        </mesh>
      </Environment>
            {/*<Environment preset="sunset" />*/}

            <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} enableZoom={false} />


        </View>
    )
}

function Striplight(props) {
    return (
      <mesh {...props}>
        <boxGeometry />
        <meshBasicMaterial color="white" />
      </mesh>
    )
  }

export default LandingScene;