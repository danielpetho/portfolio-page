"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import fragmentShader from "./shaders/fragmentShader";
import vertexShader from "./shaders/vertexShader";
import CustomShaderMaterial, { MaterialConstructor } from 'three-custom-shader-material'
import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'
import { RenderCubeTexture, RenderCubeTextureApi } from "@react-three/drei";
import GradientShaderObject from "../Footer/GradientShaderObject";

const Environment = () => {
  return (
    <>
      <ambientLight intensity={1.} color={"#fffff"} />
      <GradientShaderObject mousePosition={{ x: 0, y: 0 }} />

    </>
  );
};


const FloatingPlane = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  const material = useRef<CustomShaderMaterialType<any> | null>(null)

  const envMapApi = useRef<RenderCubeTextureApi>(null!);


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
    {/* <torusKnotGeometry args={[1, 0.25, 256, 24, 1, 3]} />
    <meshStandardMaterial color="white" roughness={0.1} metalness={0.925} />*/}


       <planeGeometry args={[12, 12, 96, 96]} />

      <CustomShaderMaterial
        ref={material}
        baseMaterial={THREE.MeshStandardMaterial}
        vertexShader={vertexShader}
        color="#5500FF"
        side={THREE.DoubleSide}
        roughness={0.2}
        silent
        metalness={0.8}
        uniforms={{
          uTime: { value: 0 },
        }}
      />



    </mesh>
  </>
  )
}

export default FloatingPlane;