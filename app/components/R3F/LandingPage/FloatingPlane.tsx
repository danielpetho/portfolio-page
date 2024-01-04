"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Detailed, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";

const FloatingPlane = () => {
    const mesh = useRef<THREE.Mesh>(null!);

    return (
        <>
            <mesh ref={mesh} position={[0, 0, 0]}>

                <planeGeometry args={[100, 100, 50, 50]}  />
                <meshBasicMaterial color="hotpink" side={THREE.DoubleSide} wireframe />
            </mesh>
        </>
    )
}

export default FloatingPlane;