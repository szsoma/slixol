import * as THREE from "three";
import { cnoise21 } from "./modules/noise";
import { enVertexShader } from "./modules/shader";

export function createBackground(scene) {
  // Uniforms
  const uniforms = {
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector2(0.1, 0.6) }, // Initial mouse position
    u_resolution: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
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

const vec3 black = vec3(0,0,0);
const vec3 color1 = vec3(0.04,0.67,0.33);  // 
const vec3 color2 = vec3(0.07,0.58,0.21);  // 
const vec3 color3 = vec3(0.04,0.67,0.33);  // 
const vec3 color4 = vec3(0.87,0.96,0.00);  // 
const vec3 color5 = vec3(0.00,0.04,0.03);  // 

void main() {
  vec2 seed = v_uv * 1.6 * (u_mouse + 0.4 * (length(u_mouse) + 0.54));
  float n = cnoise21(seed) + length(u_mouse) * 1.2;

  float ml = pow(length(u_mouse), 3.5) * 1.32;

  float n1 = smoothstep(0.3, 0.7, n);
  vec3 color = mix(black, color1, n1);

  float n2 = smoothstep(0.5 + ml, 0.7 + ml, n); 
  color = mix(color, color2, n2);

  float n3 = smoothstep(0.25 + ml, 0.6 + ml, n); 
  color = mix(color, color3, n3);

  float n4 = smoothstep(0.35 + ml, 0.6 + ml, n);
  color = mix(color, color4, n4);

  float n5 = smoothstep(0.5 + ml, 0.7 + ml, n);
  color = mix(color, color5, n5);

  vec2 uvrandom = v_uv;
  uvrandom.y *= random(vec2(uvrandom.y, 0.8));
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
  const lerpFactor = 0.008; // Adjust this value to change the smoothness
  const returnSpeed = 0.005; // Speed for returning to initial position
  const initialMouse = new THREE.Vector2(0.1, 0.6); // Initial position
  const targetMouse = new THREE.Vector2(0.1, 0.6); // Target position
  const currentMouse = uniforms.u_mouse.value; // Current smoothed position

  let lastMouseMoveTime = Date.now();

  window.addEventListener("mousemove", (event) => {
    // Normalize mouse position to [-1, 1]
    targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the time of the last mouse movement
    lastMouseMoveTime = Date.now();
  });

  // Update function
  function update() {
    uniforms.u_time.value += 0.006;

    // Smoothly interpolate current mouse position toward target
    currentMouse.x += (targetMouse.x - currentMouse.x) * lerpFactor;
    currentMouse.y += (targetMouse.y - currentMouse.y) * lerpFactor;

    // If mouse hasn't moved for 2 seconds, slowly return to the initial position
    if (Date.now() - lastMouseMoveTime > 2000) {
      targetMouse.x += (initialMouse.x - targetMouse.x) * returnSpeed;
      targetMouse.y += (initialMouse.y - targetMouse.y) * returnSpeed;
    }

    // Update resolution (handles window resizing)
    uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
  }

  return update;
}
