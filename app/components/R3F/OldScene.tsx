"use client";

import { Suspense, useEffect, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { View, OrbitControls, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import GradientShaderObject from "./GradientShaderObject";
import { EffectComposer } from "@react-three/postprocessing";
import Grain from "./Grain";
import { useMyStore } from "@/src/store/store";
import FloatingPlane from "./Float";

interface SceneProps {
  mousePosition: { x: number; y: number };
}

const OldScene: React.FC<SceneProps> = ({mousePosition}) => {
  const grainEffectRef = useRef();
  const ref = useRef<HTMLDivElement>(null!);
  const { footerRef, landingPageRef } = useMyStore();

  useEffect(() => {
    console.log("Scene rerender")
  }, [])

  useEffect(() => {
    console.log("footer ref changed");
    console.log(footerRef);
  }, [footerRef]);

  return (
    <Canvas>
      <Suspense fallback={null}>
          <FloatingPlane />
          <OrbitControls makeDefault />
          <Environment preset="night" />
        {/*<GradientShaderObject mousePosition={mousePosition} />
        <EffectComposer disableNormalPass>
          <Grain ref={grainEffectRef} />
        </EffectComposer>*/}
      </Suspense>

      {/*<Perf position={"bottom-left"} />*/}
    </Canvas>
  );
};

export default OldScene;
