"use client";


import { useMemo, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { PlaneGeometry } from "three";

const fragmentShader = `uniform vec3 resolution;
uniform float time;

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
	vec3 c;
	float l, z = time;

	for(int i=0;i<10;i++) {
		vec2 uv, p = fragCoord.xy/resolution.xy;
		uv = p;
		p -= .5;
		p.x *= resolution.x / resolution.y;
		z += 2.0;
		l = length(p);
		uv += p / l * (sin(z / 2.) + 1.) * abs(sin(l * 3. - z * .5));
		c[i] = .01 / length(abs(mod(uv, 1.) -.5));
	}

	fragColor = vec4(c / l, time / 2.);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}`;
const vertexShader = `varying vec2 vUv;

void main()	{
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;

const GradientShaderObject = () => {
  const mesh = useRef<THREE.Mesh>(null);

  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      resolution: { value: [size.width, size.height, 1] },
    }),
    []
  );

  useFrame((state, delta) => {
    if (mesh.current && "uniforms" in mesh.current.material) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.time.value +=
        delta;
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[size.width, size.height]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default GradientShaderObject;
