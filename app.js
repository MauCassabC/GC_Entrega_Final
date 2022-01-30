// Ojo segruyo se tiene que importar css



//Importar Three.js 
//import * as THREE from "three";
import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import { PMREMGenerator } from 'https://cdn.skypack.dev/three@0.136.0/src/extras/PMREMGenerator.js';
import { RGBELoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4a);

var camara = new THREE.PerspectiveCamera(75, window.innerWidth/innerHeight);

var render = new THREE.WebGLRenderer;
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});

var cube = new THREE.Mesh(geometry, material)

scene.add(cube);

camara.position.z = 5;

var animate = function(){
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    render.render(scene, camara);
}

animate();


