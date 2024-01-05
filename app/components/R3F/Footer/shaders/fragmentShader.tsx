const fragmentShader = /* glsl */ `varying vec2 vUv;
varying vec3 vPosition;

uniform vec3 resolution;
uniform float time;
uniform vec2 mouse;
uniform float strength;

float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

float lines(vec2 uv, float offset) {
    return smoothstep(
      0., 0.9 + offset * 0.9,
      abs(0.5 * sin( uv.x * 4. ) + offset * 2. ) );
}

mat2 rotate2D(float _angle) {
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

float rand(vec2 p) {
  vec2 k1 = vec2(
      23.14069263277926, // e^pi (Gelfond's constant)
      2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
  );
  return fract(
    cos(dot(p, k1)) * 12345.6789
  );
}

float remap( float minval, float maxval, float curval )
{
    return ( curval - minval ) / ( maxval - minval );
} 

float mouseSphere(vec2 uv, vec2 mouse, float radius, float strength) {
  float dis = distance(uv, mouse);
  float power = smoothstep(radius, 0., dis) * strength;
  return power;
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
  vec2 uv = fragCoord.xy / resolution.xy;
  vec2 aspectCorrect = vec2(1., resolution.y / resolution.x);
  uv *= aspectCorrect;

  vec3 blue = vec3(0. / 255., 0. / 255., 255. / 255.);
  vec3 darkBlue = vec3(0. / 255., 0. / 255., 132. / 255.);

  vec3 orange = vec3(248. / 255., 84. / 255., 8. / 255.);
  vec3 black = vec3(0. / 255., 0. / 255., 0. / 255.);

  vec3 pink = vec3(1., 158. / 255., 197. / 255.);
  vec3 yellow = vec3(243. / 255., 202. / 255., 78. / 255.);
  vec3 green = vec3(73. / 255., 190. / 255., 170. / 255.);

  vec3 mainColor = mix(blue, darkBlue, sin(time * 0.1 + 0.5) * 0.5 + 0.5);
  vec3 accentColor = mix(orange, pink, sin(time * 0.1 - 0.5) * 0.5 + 0.5);
  vec3 accentColor2 = mix(pink, green, sin(time * 0.1 + 32.5) * 0.1 + 0.2);

  float n = noise(vPosition * 0.9 + time * 0.1 + 30.);
  vec2 baseUv = rotate2D(n)  * rotate2D(mouseSphere(uv, mouse, 0.4, strength) * n) * (vPosition.xy + vec2(0., sin(time * 0.1) * 1.));
  float basePattern = lines( baseUv, 0.4 );
  float secondPattern = lines(rotate2D(n + 100.) * baseUv, 0.3  + sin(time * 0.1) * 0.2);
  float thirdPattern = lines(rotate2D(n) * baseUv, 0.1);

  vec3 baseColor = mix(mainColor, pink, basePattern);
  vec3 secondColor = mix(baseColor, accentColor, secondPattern);
  vec3 thirdColor = mix(secondColor, accentColor2, thirdPattern);


	gl_FragColor = vec4(thirdColor - vec3(0.05), 1.);
}`;

export default fragmentShader;