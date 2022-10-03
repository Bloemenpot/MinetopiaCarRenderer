import * as THREE from './node_modules/three/build/three.module.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

// const scene = new THREE.Scene();
// const loader = new GLTFLoader();
// loader.load( 'testModels/f1_2022_body.gltf', function ( gltf ) {
//     scene.add( gltf.scene );
// }, undefined, function ( error ) {
//     console.error( error );
// } );