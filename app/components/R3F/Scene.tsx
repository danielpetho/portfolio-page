'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/src/utils/r3f/tunnel-rat'
import { EffectComposer } from '@react-three/postprocessing'
import Grain from './PostPro/Grain'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'

export default function Scene({ ...props }) {
  const grainEffectRef = useRef();

  return (
    <Canvas {...props} shadows>
      {/* @ts-ignore */}
      <r3f.Out />

      <Preload all />
      <Perf openByDefault trackGPU={true} position={'bottom-right'} />
    </Canvas>
  )
}