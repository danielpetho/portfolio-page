"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import vertexShader from "./shaders/vertexShader";
import CustomShaderMaterial from 'three-custom-shader-material'
import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'

const FloatingPlane = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  const material = useRef<CustomShaderMaterialType<any> | null>(null)

  useFrame((state, delta) => {

    if (material?.current) {
      material.current.uniforms.uTime.value = -state.clock.elapsedTime / 5
    }
  });

  useEffect(() => {
    mesh.current.rotateX(Math.PI / 2)
  }, []);

  return (<>

    <mesh ref={mesh} position={[0, 0, 0]} castShadow receiveShadow >

      <planeGeometry args={[12, 12, 96, 96]} />
      <CustomShaderMaterial
        ref={material}
        baseMaterial={THREE.MeshStandardMaterial}
        vertexShader={vertexShader}
        color="#FFFFFF"

        side={THREE.DoubleSide}
        roughness={0.1}
        silent
        metalness={1.}
        uniforms={{
          uTime: { value: 0 },
        }}
      />
    </mesh>
  </>
  )
}

export default FloatingPlane;