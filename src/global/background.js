import * as THREE from "three";
import { cnoise21 } from "./modules/noise";

export function createBackground(scene) {
  
  // Uniforms
  const uniforms = {
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector2() },
  };

  // Vertex Shader
  const vertexShader = `
    varying vec2 v_uv;

    void main() {
      v_uv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `;

  // Fragment Shader
  const fragmentShader = `
    uniform float u_time;
    uniform vec2 u_mouse;
    varying vec2 v_uv;

    ${cnoise21}

    float random(vec2 p) {
      vec2 k1 = vec2(
        33.14069263277926,
        5.665144142690225
      );
      return fract(
        cos(dot(p, k1)) * 12345.6789
      );
    }

    const vec3 black = vec3(0.0);
    const vec3 color1 = vec3(0.047, 0.259, 0.181);  // #0c422e
    const vec3 color2 = vec3(0.108, 0.969, 0.541);  // #1bf78a
    const vec3 color3 = vec3(0.147, 0.24, 0.281);   

    void main() {
      vec2 seed = v_uv * 1.3 * (u_mouse + 0.3 * (length(u_mouse) + 0.5));
      float n = cnoise21(seed) + length(u_mouse) * 0.9;

      float ml = pow(length(u_mouse), 3.5) * 1.15;
      float n1 = smoothstep(1.0, 0.5 + 0.3, n);
      vec3 color = mix(black, color1, n1);
      
      float n2 = smoothstep(0.0 + ml, 0.1 + ml + 0.2, n);
      color = mix(color, color2, n2);

      float n3 = smoothstep(0.2 + ml, 0.2 + ml + 0.2, n);
      color = mix(color, color3, n3);

      float n4 = smoothstep(0.3 + ml, 0.2 + ml + 0.2, n);
      color = mix(color, black, n4);

      vec2 uvrandom = v_uv;
      uvrandom.y *= random(vec2(uvrandom.y, 0.4));
      color.rgb += random(uvrandom) * 0.05;

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  // Plane geometry
  const geometry = new THREE.PlaneGeometry(2, 2);

  // Shader material
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });

  // Plane mesh
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  // Mouse tracking
  const mouseSpeed = 0.15; // Adjust this value to slow down the movement
  const mouse = new THREE.Vector2();
  window.addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    uniforms.u_mouse.value.lerp(mouse, mouseSpeed);
  });

  // Update function
  function update() {
    uniforms.u_time.value += 0.005;
  }

  return update;
}
