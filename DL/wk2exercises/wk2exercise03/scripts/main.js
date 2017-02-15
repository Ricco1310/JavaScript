

function circleSurfaceArea(radius){
	if(!isNaN(radius)){
		var surfaceArea = Math.PI * radius * radius;
		alert(surfaceArea.toFixed(2));
	} else {
		alert('Oops. you didn\'t type a number');
	}
}

circleSurfaceArea(1);