import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

// Resize the renderer to match the window size
const resizeCanvas = () => {
  // Update the size of the renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Update the camera's aspect ratio and call the updateProjectionMatrix to adjust the view
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

// Listen for the window resize event
window.addEventListener('resize', resizeCanvas);

// Initial resize call to ensure it's correct when the page first loads
resizeCanvas();

// Example: Add a basic object (e.g., a cube) to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set the camera position
camera.position.z = 5;

// Animation loop to render the scene
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the cube for some simple animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

// Start the animation loop
animate();
