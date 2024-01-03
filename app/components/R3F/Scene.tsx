'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/src/utils/r3f/tunnel-rat'

export default function Scene({ ...props }) {
  return (
    <Canvas>
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
    </Canvas>
  )
}