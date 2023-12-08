import * as THREE from "three";
import { BlendFunction, Effect } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = /* glsl */ `
    uniform float strength;

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
      vec2 newUv = uv * 100.;
      float x = (newUv.x + 3.) * (newUv.y + 3.);
      vec4 grain = vec4(mod((mod(x, 13.0) + 1.0) * (mod(x, 123.0) + 1.0), 0.01)-0.005) * strength;
        vec4 color = inputColor + grain;
        outputColor = vec4(color.rgb - vec3(0.5, 0.5, 0.5), 1.0);
    }

`;

export default class GrainEffect extends Effect {
  constructor({ strength = 12., blendFunction = BlendFunction.SOFT_LIGHT }) {
    super("GrainEffect", fragmentShader, {
      blendFunction,
      uniforms: new Map([
        ["strength", new Uniform(strength)]
      ]),
    });
  }
}
