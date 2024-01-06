"use client";

import { useMemo, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMyStore } from "@/src/store/store";
import fragmentShader from "./shaders/fragmentShader";
import vertexShader from "./shaders/vertexShader";

interface GradientShaderObjectProps {
  mousePosition: { x: number; y: number };
}

const GradientShaderObject: React.FC<GradientShaderObjectProps> = ({mousePosition}) => {
  const [targetMouse, setTargetMouse] = useState([0, 0]);
  const [lastMouse, setLastMouse] = useState([0, 0]);

  const {
    isClientMobile,
  } = useMyStore();

  const mesh = useRef<THREE.Mesh>(null);

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

  useFrame((state, delta) => {
    //console.log(state.pointer.x, state.pointer.y)
    const newMouse = [mousePosition.x * 1.3, 1. - mousePosition.y * 1.3]; 
    //const mouse = [state.pointer.x, state.pointer.y];
    //const newMouse = [(mouse[0] + 1) / 2, (mouse[1] + 1) / 2];

    setLastMouse(newMouse);

    const easing = 0.025;

    setTargetMouse([
      targetMouse[0] + (newMouse[0] - targetMouse[0]) * easing,
      targetMouse[1] + (newMouse[1] - targetMouse[1]) * easing,
    ]);

   // console.log(mouse);

    if (mesh.current && "uniforms" in mesh.current.material) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.time.value +=
        delta;
      (mesh.current.material as THREE.ShaderMaterial).uniforms.mouse.value =
        targetMouse;
      (mesh.current.material as THREE.ShaderMaterial).uniforms.strength.value = isClientMobile ? 0. : 1.
    }
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 5]}
    >
      <sphereGeometry args={[2, 32, 32]} />
      {/*<meshNormalMaterial wireframe={true}/>*/}
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

export default GradientShaderObject;
