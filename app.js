// Ojo segruyo se tiene que importar css



//Importar Three.js 
//import * as THREE from "three";
import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import { PMREMGenerator } from 'https://cdn.skypack.dev/three@0.136.0/src/extras/PMREMGenerator.js';
import { RGBELoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

var scene = new THREE.Scene();
var camara = new THREE.PerspectiveCamera(55, window.innerWidth/innerHeight);

var render = new THREE.WebGLRenderer;
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);



// Crear el cielo en la imagen 
var skyGeo = new THREE.SphereGeometry(100000, 25, 25);
var loader = new THREE.TextureLoader();
    texture =  loader.load("./Images/Sky_Clouds.jpg");
var material = new THREE.MeshPhongMaterial({map: texture});


var sky = new THREE.Mesh(skyGeo, material);
sky.material.side = THREE.BackSide;
scene.add(sky);

var animate = function(){
    requestAnimationFrame(animate);

    render.render(scene,camara);

}

animate();
//






