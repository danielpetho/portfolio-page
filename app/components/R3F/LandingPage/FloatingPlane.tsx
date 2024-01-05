"use client";

import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Detailed, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import fragmentShader from "../Footer/shaders/fragmentShader";
import vertexShader from "./shaders/vertexShader";

function* enumerate(count: number) {
  let i = 0
  while (i < count) yield i++
}

const amplitude = 10.

const FloatingPlane = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  const { size } = useThree();


  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      resolution: { value: [size.width, size.height, 1] },
      mouse: { value: [0, 0] },
      strength: { value: 0. },
    }),
    []
  );

  /*const updateBufferGeometry = () => {
      const { geometry } = mesh.current
      const { position } = geometry.attributes
      for (const index of enumerate(position.count)) {
          position.array[index * 3 + 2] = amplitude * (Math.random() - 0.5)
      }
      position.needsUpdate = true
      geometry.computeVertexNormals()
  }*/

  useFrame((state, delta) => {

    // console.log(mouse);

    if (mesh.current && "uniforms" in mesh.current.material) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.time.value +=
        delta * 1.;
    }
  });

  useEffect(() => {
    mesh.current.rotateX(Math.PI / 2)
  }, [])

  return (
    <>
      <mesh ref={mesh} position={[0, 0, 10]} >

        <planeGeometry args={[12, 12, 64, 64]} />
        {/* <meshBasicMaterial color="red" wireframe side={THREE.DoubleSide} />*/}
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          side={THREE.DoubleSide}
          wireframe={true}
        />
      </mesh>
    </>
  )
}

export default FloatingPlane;