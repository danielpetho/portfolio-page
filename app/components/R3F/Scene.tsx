"use client";

import { Suspense, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import GradientShaderObject from "./GradientShaderObject";
import { EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Grain from "./Grain";

const Scene: React.FC = () => {

  const grainEffectRef = useRef();

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <GradientShaderObject />
        </Suspense>
        <EffectComposer disableNormalPass>
        {/*<Vignette  
        offset={0.3}
        darkness={0.8}
            blendFunction={BlendFunction.NORMAL}
        />
        <DepthOfField focusLength={0.025} focusDistance={0.025 } bokehScale={ 6 } />
        <Bloom luminanceThreshold={ 1.1 } mipmapBlur/>
        <Noise blendFunction={BlendFunction.SOFT_LIGHT } opacity={0.3}/>*/}

        { /* ts-ignore */}
        <Grain ref={ grainEffectRef } />
      </EffectComposer>
        <OrbitControls />

        {/*<Perf position={"bottom-left"} />*/}
      </Canvas>
    </>
  );
};

export default Scene;
