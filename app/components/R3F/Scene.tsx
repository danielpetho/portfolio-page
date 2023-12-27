"use client";

import { Suspense, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import GradientShaderObject from "./GradientShaderObject";
import { EffectComposer } from "@react-three/postprocessing";
import Grain from "./Grain";

interface SceneProps {
  mousePosition: { x: number; y: number };
}

const Scene: React.FC<SceneProps> = ({ mousePosition }) => {
  const grainEffectRef = useRef();

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <GradientShaderObject mousePosition={mousePosition} />
          <EffectComposer disableNormalPass>
            <Grain ref={grainEffectRef} />
          </EffectComposer>
        </Suspense>

        {/*<Perf position={"bottom-left"} />*/}
      </Canvas>
    </>
  );
};

export default Scene;
