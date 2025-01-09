import * as THREE from "three";
import { createBackground } from "./background.js";
import gsap from "gsap";

function addAnimation() {
  const containers = document.querySelectorAll(".canvas_wrap");

  containers.forEach((container) => {
    const scene = new THREE.Scene();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha for transparency
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
      // Update renderer size
      renderer.setSize(container.offsetWidth, container.offsetHeight);

      // Update projection matrix
      camera.updateProjectionMatrix();
    }

    // Handle window resizing
    window.addEventListener("resize", onResize);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Update background
      updateBackground();

      // Render the scene
      renderer.render(scene, camera);
    }

    animate();
      // Animate opacity of .canvas_wrap on page load
    window.addEventListener("load", () => {
      gsap.to(".canvas_wrap", {
        opacity: 1,
        duration: 1,
        delay: 0.15,
        ease: "power1.out", 
      });
    });
  });
}

export default addAnimation;
