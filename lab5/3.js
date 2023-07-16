// Define the abstract class
function AbstractShapeClass() {
    if (new.target === AbstractShapeClass) {
        throw new Error("Cannot instantiate abstract class.");
    }
}

// Define an abstract method
AbstractShapeClass.prototype.area = function() {
    throw new Error("Abstract method has not been implemented.");
};

AbstractShapeClass.prototype.volume = function() {
    throw new Error("Abstract method has not been implemented.");
};

// Create a subclass that extends the abstract class
function Cube() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}


Cube.prototype = Object.create(AbstractShapeClass.prototype);
Cube.prototype.constructor = Cube;


Cube.prototype.area = function() {
    const l = document.getElementById("cubesidelength");
    let sl = parseInt(l.value) ;

    const rescube = document.getElementById("cube");
    rescube.innerHTML = ("Area of the Cube: "+(sl*sl*6));
};

Cube.prototype.volume = function() {
    const l = document.getElementById("cubesidelength");
    let sl = parseInt(l.value) ;

    const rescube = document.getElementById("cube");
    rescube.innerHTML = ("Volume of the Cube: "+(sl*sl*sl));
};


function Cuboid() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Cuboid.prototype = Object.create(AbstractShapeClass.prototype);
Cuboid.prototype.constructor = Cuboid;


Cuboid.prototype.area = function() {
    const l = document.getElementById("length");
    let cl = parseInt(l.value) ;

    const h = document.getElementById("height");
    let ch = parseInt(l.value) ;

    const w = document.getElementById("width");
    let cw = parseInt(l.value) ;

    const rescuboid = document.getElementById("cuboid");
    rescuboid.innerHTML = ("Volume of the Cuboid: "+(2*cl*cw + 2*cl*ch + 2*cw*ch));
};

Cuboid.prototype.volume = function() {

    let l = prompt("Enter length: ");
    l = parseInt(l);

    let w = prompt("Enter width: ");
    w = parseInt(w);

    let h = prompt("Enter height: ");
    h = parseInt(h);

    return l*w*h;
};





// Usage
let cube = new Cube();
let cuboid = new Cuboid();
