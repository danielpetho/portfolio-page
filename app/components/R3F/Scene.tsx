"use client";

import { Suspense, useRef } from "react";

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import GradientShaderObject from "./GradientShaderObject";
import { EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Grain from "./Grain";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => {
    camera.position.lerp(
      vec.set(mouse.x * 0.5, mouse.y * 0.25, camera.position.z),
      0.02
    );
  });
}

const Scene: React.FC = () => {
  const grainEffectRef = useRef();

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <GradientShaderObject />
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
