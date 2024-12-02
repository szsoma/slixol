import * as THREE from "three";
import { cnoise21 } from "./modules/noise";
import { enVertexShader } from "./modules/shader";

export function createBackground(scene) {
  // Uniforms
  const uniforms = {
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector2(0, 0) }, // Initialize at (0, 0)
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  };

  // Fragment Shader
const fragmentShader = `
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
varying vec2 v_uv;

${cnoise21}

float random(vec2 p) {
  vec2 k1 = vec2(33.14069263277926, 5.665144142690225);
  return fract(cos(dot(p, k1)) * 12345.6789);
}

const vec3 black = vec3(0.0);
const vec3 color1 = vec3(0.00, 0.48, 0.21);  // darker-green
const vec3 color2 = vec3(0.100, 0.969, 0.5);  // light-green
const vec3 color3 = vec3(0.15, 0.24, 0.29);  // dark
const vec3 color4 = vec3(0.14,0.41,0.20);  // green pastel
const vec3 color5 = vec3(0.00,0.05,0.00);  // dark green

void main() {
  vec2 seed = v_uv * 1.5 * (u_mouse + 0.4 * (length(u_mouse) + 0.54));
  float n = cnoise21(seed) + length(u_mouse) * 1.1;

  float ml = pow(length(u_mouse), 3.5) * 1.15;
  float n1 = smoothstep(1.0, 0.5 + 0.3, n);
  vec3 color = mix(black, color1, n1);
  
  float n2 = smoothstep(0.0 + ml, 0.1 + ml + 0.2, n);
  color = mix(color, color2, n2);

  float n3 = smoothstep(0.25 + ml, 0.2 + ml + 0.2, n);
  color = mix(color, color3, n3);

  float n4 = smoothstep(0.3 + ml, 0.2 + ml + 0.2, n);
  color = mix(color, color4, n4);

  float n5 = smoothstep(0.2 + ml, 0.3 + ml + 0.2, n);
  color = mix(color, color5, n5);

  vec2 uvrandom = v_uv;
  uvrandom.y *= random(vec2(uvrandom.y, 0.5));
  color.rgb += random(uvrandom) * 0.05;

  gl_FragColor = vec4(color, 1.0);
}
`;
  // Plane geometry
  const geometry = new THREE.PlaneGeometry(2, 2);

  // Shader material
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: enVertexShader,
    fragmentShader: fragmentShader,
  });

  // Plane mesh
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  // Mouse tracking with lerp effect
  const lerpFactor = 0.03; // Adjust this value to change the smoothness
  const targetMouse = new THREE.Vector2(0, 0); // Target position
  const currentMouse = uniforms.u_mouse.value; // Current smoothed position

  window.addEventListener("mousemove", (event) => {
    // Normalize mouse position to [-1, 1]
    targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  // Update function
  function update() {
    uniforms.u_time.value += 0.005;

    // Smoothly interpolate current mouse position toward target
    currentMouse.x += (targetMouse.x - currentMouse.x) * lerpFactor;
    currentMouse.y += (targetMouse.y - currentMouse.y) * lerpFactor;

    // Update resolution (handles window resizing)
    uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
  }

  return update;
}
