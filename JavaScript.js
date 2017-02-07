function calculateSurfaceArea(lenght, width) {
    surfaceArea = lenght * width;
    return surfaceArea;
}
var largeRoom = calculateSurfaceArea(10, 20);
console.log("a large room has a surface area of: " + surfaceArea);

var smallRoom = calculateSurfaceArea(3, 3);
console.log("A small room has a surface area of: " + surfaceArea);