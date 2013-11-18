function analyserLine(position, scene){

	//check for parameters
	if(position == undefined)throw("line position not defined");
	if(scene == undefined)throw("line not given scene");

	//black line
    var lineMaterial = new THREE.LineBasicMaterial( { color: 0x000000} );
    //holds line vertices
    var lineGeometry = new THREE.Geometry();

    //create spaceship vertices
    lineGeometry.vertices.push(position);
    lineGeometry.vertices.push(new THREE.Vector3(position.x, position.y + 5, position.z));

    //create the spaceship and exhaust
    var mainLine = new THREE.Line(lineGeometry, lineMaterial, THREE.LineStrip);
    
    //add spaceship and exhaust to the scene
    scene.add(mainLine);

    this.update = function(yValue){
    	lineGeometry.vertices.pop();
    	lineGeometry.vertices.push(new THREE.Vector3(position.x, yValue, 0));
    	lineGeometry.verticesNeedUpdate = true;
    }

}