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
bed.position.x = -8;
bed.position.y = -3;
bed.position.z = 5;

//Pillow
const pillowGeometry = new THREE.BoxGeometry( 8, 1, 5 );
const pillowMaterial = new THREE.MeshBasicMaterial( { color: 0x404040 } );
const pillow = new THREE.Mesh( pillowGeometry, pillowMaterial );
scene.add( pillow );
pillow.position.x = -8;
pillow.position.y = -1;
pillow.position.z = 12;
pillow.rotation.x = -Math.PI / 8;

//Blanket
const blanketGeometry = new THREE.BoxGeometry( 11, 4, 15 );
const blanketMaterial = new THREE.MeshBasicMaterial( { color: 0x720a94 } );
const blanket = new THREE.Mesh( blanketGeometry, blanketMaterial );
scene.add( blanket );
blanket.position.x = -8;
blanket.position.y = -3;
blanket.position.z = 1;

//Desk
const deskGeometry = new THREE.BoxGeometry( 12, 1, 6 );
const deskMaterial = new THREE.MeshBasicMaterial( { color: 0xdbdbdb } );
const desk = new THREE.Mesh( deskGeometry, deskMaterial ); 
scene.add( desk );
desk.position.x = 9;
desk.position.y = 0;
desk.position.z = 12;

//Desk Legs
const legGeometry = new THREE.BoxGeometry( 1, 5, 1 );
const legMaterial = new THREE.MeshBasicMaterial( { color: 0xe09a1f } );
const leg1 = new THREE.Mesh( legGeometry, legMaterial );
scene.add( leg1 );
leg1.position.x = 4;
leg1.position.y = -2.5;
leg1.position.z = 10;
const leg2 = new THREE.Mesh( legGeometry, legMaterial );
scene.add( leg2 );
leg2.position.x = 14;
leg2.position.y = -2.5;
leg2.position.z = 10;
const leg3 = new THREE.Mesh( legGeometry, legMaterial );
scene.add( leg3 );
leg3.position.x = 4;
leg3.position.y = -2.5;
leg3.position.z = 14;
const leg4 = new THREE.Mesh( legGeometry, legMaterial );
scene.add( leg4 );
leg4.position.x = 14;
leg4.position.y = -2.5;
leg4.position.z = 14;


//Chair
const chairGeometry = new THREE.CylinderGeometry( 2, 2, 1, 32 );
const chairMaterial = new THREE.MeshBasicMaterial( { color: 0x171717 } );
const chair = new THREE.Mesh( chairGeometry, chairMaterial );
scene.add( chair );
chair.position.x = 9;
chair.position.y = -2;
chair.position.z = 4;

//Drawer
const drawerGeometry = new THREE.BoxGeometry( 6, 10, 5 );
const drawerMaterial = new THREE.MeshBasicMaterial( { color: 0x93a396 } );
const drawer = new THREE.Mesh( drawerGeometry, drawerMaterial );
scene.add( drawer );
drawer.position.x = 0;
drawer.position.y = 0;
drawer.position.z = 12;

//Drawer Shelves
const shelfGeometry = new THREE.BoxGeometry( 5, 2, 5 );
const shelfMaterial = new THREE.MeshBasicMaterial( { color: 0xffd58c } );
const shelf1 = new THREE.Mesh( shelfGeometry, shelfMaterial );
scene.add( shelf1 );
shelf1.position.x = 0;
shelf1.position.y = 3;
shelf1.position.z = 11;
const shelf2 = new THREE.Mesh( shelfGeometry, shelfMaterial );
scene.add( shelf2 );
shelf2.position.x = 0;
shelf2.position.y = 0;
shelf2.position.z = 11;
const shelf3 = new THREE.Mesh( shelfGeometry, shelfMaterial );
scene.add( shelf3 );
shelf3.position.x = 0;
shelf3.position.y = -3;
shelf3.position.z = 11;

//Laptop
const laptopGeometry = new THREE.BoxGeometry( 4, 0.5, 3 );
const laptopMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const laptop = new THREE.Mesh( laptopGeometry, laptopMaterial );
scene.add( laptop );
laptop.position.x = 9;
laptop.position.y = 1;
laptop.position.z = 11;
const screenGeometry = new THREE.BoxGeometry( 4, 3, 0.2 );
const screenMaterial = new THREE.MeshBasicMaterial( { color: 0x00000 } );
const screen = new THREE.Mesh( screenGeometry, screenMaterial );
scene.add( screen );
screen.position.x = 9;
screen.position.y = 2.5;
screen.position.z = 13;



//Pang template nalang
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
camera.position.set(20, 15, -20);
camera.lookAt(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 20, 10);
scene.add(directionalLight);

//Renderer
function animate(time) {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
