'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/src/utils/r3f/tunnel-rat'
import { EffectComposer } from '@react-three/postprocessing'
import Grain from './PostPro/Grain'
import { useRef } from 'react'

export default function Scene({ ...props }) {
  const grainEffectRef = useRef();

  return (
    <Canvas {...props}>
      {/* @ts-ignore */}
      <r3f.Out />
      <EffectComposer disableNormalPass>
        <Grain ref={grainEffectRef} />
      </EffectComposer>
      <Preload all />
    </Canvas>
  )
}