import { OrbitControls } from 'threes/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'threes/addons/loaders/GLTFLoader.js';

// scene renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 

// our scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// camera that looks at our object
const camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(5, 5, 2.5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => { renderer.render(scene, camera) });
controls.target.set(0, 0, 0);
controls.update();

// model
const laoder = new GLTFLoader();
laoder.load('models/tiny_isometric_room.glb', function(gltf) {
    const model = gltf.scene;
    model.position.set(0, 0, 0);

    scene.add(model);

    // render the scene
    renderer.render(scene, camera);
}, undefined, function(error) {

});

