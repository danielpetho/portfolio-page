'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/src/utils/r3f/tunnel-rat'
import { Perf } from 'r3f-perf'

export default function Scene({ ...props }) {

  return (
    <Canvas {...props} shadows>
      {/* @ts-ignore */}
      <r3f.Out />
    </Canvas>
  )
}