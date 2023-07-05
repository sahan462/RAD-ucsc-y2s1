//1
function calArea(r) {
    let area = Math.PI * r * r;
    return area;
}

function calPerimeter(radius) {
    let perimeter = 2 * Math.PI * radius;
    return perimeter;
}

let area = calArea(5);
let perimeter = calPerimeter(5);

console.log("Area of the circle:", area);
console.log("Perimeter of the circle:", perimeter);


//2

function calCubeVolume(l) {
    let volume = l * l * l;
    return volume;
}

let sideLength = 10;
let volume = calCubeVolume(sideLength);

console.log("Volume of the cube:", volume);


//3

function displayAlertMessage(message) {
    alert(message);
}

let message = "Hello, welcome to our paradise";
displayAlertMessage(message);

