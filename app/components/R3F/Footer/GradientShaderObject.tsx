"use client";

import { useMemo, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMyStore } from "@/src/store/store";
import fragmentShader from "./shaders/fragmentShader";
import vertexShader from "./shaders/vertexShader";

interface GradientShaderObjectProps {
  scale?: number;
  position?: [number, number, number];
  useMouse?: boolean;
  noiseScale?: number;
  darken?: number;
  mousePosition?: { x: number; y: number };
}

const GradientShaderObject: React.FC<GradientShaderObjectProps> = ({
  scale = 1,
  position = [0, 0, 5],
  useMouse = false,
  noiseScale = 0.9,
  darken = 0,
  mousePosition = { x: 0, y: 0 },
}) => {
  const [targetMouse, setTargetMouse] = useState([0, 0]);
  const [lastMouse, setLastMouse] = useState([0, 0]);

  const {
    isClientMobile,
  } = useMyStore();

  const mesh = useRef<THREE.Mesh>(null);

  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: [size.width, size.height, 1] },
      uMouse: { value: [0, 0] },
      uMouseStrength: { value: isClientMobile ? 0. : 1. },
      uDarkenStrength: { value: darken },
      uNoiseScale: { value: noiseScale },
    }),
    []
  );

  useFrame((state, delta) => {
    //console.log(state.pointer.x, state.pointer.y)

    if (useMouse) {
      const newMouse = [mousePosition.x * 1.3, 1. - mousePosition.y * 1.3];
      //const mouse = [state.pointer.x, state.pointer.y];
      //const newMouse = [(mouse[0] + 1) / 2, (mouse[1] + 1) / 2];

      setLastMouse(newMouse);

      const easing = 0.025;

      setTargetMouse([
        targetMouse[0] + (newMouse[0] - targetMouse[0]) * easing,
        targetMouse[1] + (newMouse[1] - targetMouse[1]) * easing,
      ]);
    }


    if (mesh.current && "uniforms" in mesh.current.material) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value +=
        delta;

      if (useMouse) {
        (mesh.current.material as THREE.ShaderMaterial).uniforms.uMouse.value =
          targetMouse;
      }
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={scale}
    >
      <sphereGeometry args={[2, 32, 32]} />
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
