"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import GradientShaderObject from "./GradientShaderObject";

const Scene: React.FC = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <GradientShaderObject />
        </Suspense>
        <OrbitControls />

        <Perf position={"bottom-left"} />
      </Canvas>
    </>
  );
};

export default Scene;
