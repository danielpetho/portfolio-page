"use client";

import { Canvas } from "@react-three/fiber";
import GradientShaderObject from "./GradientShaderObject";

const Scene: React.FC = () => {
  return (
    <>
      <Canvas>
        <GradientShaderObject />
      </Canvas>
    </>
  );
};

export default Scene;
