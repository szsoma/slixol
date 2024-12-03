import * as THREE from "three";
import { createBackground } from "../../global/background";

function addUnifiedAnimation() {
    // Ensure parentContainer is a valid DOM element
    const parentContainer = document.querySelector("body"); // Use a specific container if needed, e.g., `.layout-container`
    if (!parentContainer) {
      console.error("Error: Parent container not found.");
      return;
    }
  
    const containers = document.querySelectorAll(".canvas_wrap");
    const scene = new THREE.Scene();
  
    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  
    // Append the renderer canvas to the parent container
    parentContainer.appendChild(renderer.domElement);
  
    // Camera
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
    camera.position.z = 1;
  
    // Add background shader
    const updateBackground = createBackground(scene);
  
    // Resize the renderer and camera when the window resizes
    function onResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onResize);
  
    // Sync the canvas position with `.canvas_wrap` elements
    function updateMasks() {
      containers.forEach((container) => {
        const rect = container.getBoundingClientRect();
  
        // Calculate clip-path in viewport coordinates
        const x = rect.left / window.innerWidth;
        const y = rect.top / window.innerHeight;
        const width = rect.width / window.innerWidth;
        const height = rect.height / window.innerHeight;
  
        // Apply masking using CSS clip-path
        container.style.clipPath = `polygon(
          ${x * 100}% ${y * 100}%, 
          ${(x + width) * 100}% ${y * 100}%, 
          ${(x + width) * 100}% ${(y + height) * 100}%, 
          ${x * 100}% ${(y + height) * 100}%
        )`;
      });
    }
  
    // Initial mask setup
    updateMasks();
    window.addEventListener("resize", updateMasks);
  
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
  
      // Update the background shader
      updateBackground();
  
      // Render the unified canvas
      renderer.render(scene, camera);
    }
  
    animate();
  }
  
  export default addUnifiedAnimation;