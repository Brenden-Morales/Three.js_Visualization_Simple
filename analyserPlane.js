function analyserPlane(scene){

	var planeMaterial = new THREE.MeshBasicMaterial( { color: 0x000000} );
	var planeObject = new THREE.Mesh( new THREE.PlaneGeometry( 100, 5, 1024, 1 ), planeMaterial );
	scene.add(planeObject);

	for(var i = 0; i < planeObject.geometry.vertices.length; i ++){
		planeObject.geometry.vertices[i].y = 0;
	}
	
	this.editVertices = function(byteArray){
		for(var i = 0; i < 1024; i ++){
				var yValue = (byteArray[i] / 256) * 10;
				planeObject.geometry.vertices[i].y = yValue;
				planeObject.geometry.verticesNeedUpdate = true;
		}
	}
}