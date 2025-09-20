const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Recreation of My Own Boarding House Room

//Floor
const floorGeometry = new THREE.BoxGeometry( 30, 1, 30 );
const floorMaterial = new THREE.MeshBasicMaterial( { color: 0x4a3905 } );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
scene.add( floor );
floor.position.x = 0;
floor.position.y = -5;
floor.position.z = 0;

// 2 Walls
const leftWallGeometry = new THREE.BoxGeometry( 30, 1, 20 );
const leftWallMaterial = new THREE.MeshBasicMaterial( { color: 0xe3be07 } );
const lWall = new THREE.Mesh( leftWallGeometry, leftWallMaterial );
scene.add( lWall );
lWall.position.x = 0;
lWall.position.y = 5;
lWall.position.z = 15;
lWall.rotation.x = Math.PI / 2;


const backWallGeometry = new THREE.BoxGeometry( 20, 1, 30 );
const backWallMaterial = new THREE.MeshBasicMaterial( { color: 0xe3be07 } );
const bWall = new THREE.Mesh( backWallGeometry, backWallMaterial );
scene.add( bWall );
bWall.position.x = -15;
bWall.position.y = 5;
bWall.position.z = 0;
bWall.rotation.z = -Math.PI / 2;

//Bed
const bedGeometry = new THREE.BoxGeometry( 10, 3, 20 );
const bedMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const bed = new THREE.Mesh( bedGeometry, bedMaterial );
scene.add( bed );
bed.position.x = -5;
bed.position.y = -3;
bed.position.z = 5;

//Pillow
const pillowGeometry = new THREE.BoxGeometry( 8, 1, 5 );
const pillowMaterial = new THREE.MeshBasicMaterial( { color: 0x404040 } );
const pillow = new THREE.Mesh( pillowGeometry, pillowMaterial );
scene.add( pillow );
pillow.position.x = -5;
pillow.position.y = -1;
pillow.position.z = 12;
pillow.rotation.x = -Math.PI / 8;

//Blanket
const blanketGeometry = new THREE.BoxGeometry( 11, 4, 19 );
const blanketMaterial = new THREE.MeshBasicMaterial( { color: 0x720a94 } );
const blanket = new THREE.Mesh( blanketGeometry, blanketMaterial );
scene.add( blanket );
blanket.position.x = -5;
blanket.position.y = -3;
blanket.position.z = 2;


/*const capsuleGeometry = new THREE.CapsuleGeometry( 0.5, 1, 1, 8 );
const capsuleMaterial = new THREE.MeshBasicMaterial( {color: 0xe8fdff} ); 
const capsule = new THREE.Mesh( capsuleGeometry, capsuleMaterial ); scene.add( capsule );
capsule.position.x = 10;
capsule.position.y = 1;
capsule.position.z = 5;

//black hole :3
const sphereGeometry = new THREE.SphereGeometry( 6, 32, 16 ); 
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x050505 } ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );
sphere.position.z = -10;

const sphereOutlineMaterial = new THREE.MeshBasicMaterial({ color: 0xffd69c, side: THREE.BackSide });
const sphereOutline = new THREE.Mesh(sphereGeometry, sphereOutlineMaterial);
sphereOutline.scale.multiplyScalar(1.05);
sphere.add(sphereOutline);

//ring around the black hole
const torusGeometry = new THREE.TorusGeometry( 7, 5, 2, 100 ); 
const torusMaterial = new THREE.MeshBasicMaterial( { color: 0xf28416 } ); 
const torus = new THREE.Mesh( torusGeometry, torusMaterial );
scene.add( torus );
torus.position.z = -10;

//Random nga star kay wa koy mahuna2 nga object
const geometry = new THREE.RingGeometry( 1, 25, 1 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material ); scene.add( mesh );
mesh.position.x = -350;
mesh.position.z = -400;
mesh.position.y = 150;

*/


scene.background = new THREE.Color(0x007cad);
camera.position.set(25, 5, 0);
camera.lookAt(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 20, 10);
scene.add(directionalLight);

//Renderer
function animate(time) {
  renderer.render( scene, camera );

  sphere.rotation.x += 0.01;  
  sphere.rotation.y += 0.01;
  torus.rotation.x += 0.01;  
  torus.rotation.y += 0.01;
  mesh.rotation.z += 0.01;
}
renderer.setAnimationLoop( animate );
