if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;

var camera, cameraTarget, scene, renderer;

init();
// animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
	camera.position.set( 3, 0.15, 3 );

	cameraTarget = new THREE.Vector3( 0, -0.25, 0 );

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x72645b, 2, 15 );


	// Ground

	var plane = new THREE.Mesh(
		new THREE.PlaneBufferGeometry( 40, 40 ),
		new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
	);
	plane.rotation.x = -Math.PI/2;
	plane.position.y = -0.5;
	scene.add( plane );

	plane.receiveShadow = true;


	// ASCII file

	var loader = new THREE.STLLoader();
	loader.load( './stlparts/f.stl', function ( geometry ) {

		var material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
		var mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( 0, - 0.25, 0.6 );
		mesh.rotation.set( 0, - Math.PI / 2, 0 );
		mesh.scale.set( 0.5, 0.5, 0.5 );

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add( mesh );

	} );


	// Binary files

	// var material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );

	// loader.load( './models/stl/binary/pr2_head_pan.stl', function ( geometry ) {

	// 	var mesh = new THREE.Mesh( geometry, material );

	// 	mesh.position.set( 0, - 0.37, - 0.6 );
	// 	mesh.rotation.set( - Math.PI / 2, 0, 0 );
	// 	mesh.scale.set( 2, 2, 2 );

	// 	mesh.castShadow = true;
	// 	mesh.receiveShadow = true;

	// 	scene.add( mesh );

	// } );

	// loader.load( './models/stl/binary/pr2_head_tilt.stl', function ( geometry ) {

	// 	var mesh = new THREE.Mesh( geometry, material );

	// 	mesh.position.set( 0.136, - 0.37, - 0.6 );
	// 	mesh.rotation.set( - Math.PI / 2, 0.3, 0 );
	// 	mesh.scale.set( 2, 2, 2 );

	// 	mesh.castShadow = true;
	// 	mesh.receiveShadow = true;

	// 	scene.add( mesh );

	// } );

	// // Colored binary STL
	// loader.load( './models/stl/binary/colored.stl', function ( geometry ) {

	// 	var meshMaterial = material;
	// 	if (geometry.hasColors) {
	// 		meshMaterial = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors });
	// 	}

	// 	var mesh = new THREE.Mesh( geometry, meshMaterial );

	// 	mesh.position.set( 0.5, 0.2, 0 );
	// 	mesh.rotation.set( - Math.PI / 2, Math.PI / 2, 0 );
	// 	mesh.scale.set( 0.3, 0.3, 0.3 );

	// 	mesh.castShadow = true;
	// 	mesh.receiveShadow = true;

	// 	scene.add( mesh );

	// } );


	// Lights

	scene.add( new THREE.AmbientLight( 0x777777 ) );

	addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
	addShadowedLight( 0.5, 1, -1, 0xffaa00, 1 );

	// renderer

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setClearColor( scene.fog.color );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	renderer.shadowMapEnabled = true;
	renderer.shadowMapCullFace = THREE.CullFaceBack;

	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

}

function addShadowedLight( x, y, z, color, intensity ) {

	var directionalLight = new THREE.DirectionalLight( color, intensity );
	directionalLight.position.set( x, y, z )
	scene.add( directionalLight );

	directionalLight.castShadow = true;
	// directionalLight.shadowCameraVisible = true;

	var d = 1;
	directionalLight.shadowCameraLeft = -d;
	directionalLight.shadowCameraRight = d;
	directionalLight.shadowCameraTop = d;
	directionalLight.shadowCameraBottom = -d;

	directionalLight.shadowCameraNear = 1;
	directionalLight.shadowCameraFar = 4;

	directionalLight.shadowMapWidth = 1024;
	directionalLight.shadowMapHeight = 1024;

	directionalLight.shadowBias = -0.005;
	directionalLight.shadowDarkness = 0.15;

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	var timer = Date.now() * 0.0005;

	camera.position.x = Math.cos( timer ) * 3;
	camera.position.z = Math.sin( timer ) * 3;

	camera.lookAt( cameraTarget );

	renderer.render( scene, camera );

}