import * as THREE from "three";
import { createBackground } from "./background.js";
import { createTCanvas } from "./TCanvas.js";


function addAnimation() {
  const container = document.querySelector(".canvas_wrap");
  const scene = new THREE.Scene();
  
  // Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  
  // Camera
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
  camera.position.z = 1;
  
  // Add background
  const updateBackground = createBackground(scene);
  
  // Resize function
  function onResize() {
    // Update the size of the renderer
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  
    // Update the camera aspect ratio and projection matrix
    camera.left = -container.offsetWidth / container.offsetHeight;
    camera.right = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
  }
  
  // Add event listener for window resize
  window.addEventListener('resize', onResize);
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
  
    // Update background
    updateBackground();
  
    // Render the scene
    renderer.render(scene, camera);
  }
  
  animate();
  
}
export default addAnimation