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
    let l = document.write("Enter side length: ");
    l = parseInt(l);

    return l*l;
};

Cube.prototype.volume = function() {
    let l = prompt("Enter side length: ");
    l = parseInt(l);

    return l*l*l;
};


function Cuboid() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Cuboid.prototype = Object.create(AbstractShapeClass.prototype);
Cuboid.prototype.constructor = Cuboid;


Cuboid.prototype.area = function() {
    let l = prompt("Enter length: ");
    l = parseInt(l);

    let w = prompt("Enter width: ");
    w = parseInt(w);

    let h = prompt("Enter height: ");
    h = parseInt(h);

    return 2*l*w + 2*l*h + 2*w*h;
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

function Cylinder() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Cylinder.prototype = Object.create(AbstractShapeClass.prototype);
Cylinder.prototype.constructor = Cylinder;

Cylinder.prototype.area = function() {
    let r = prompt("Enter radius: ");
    r = parseInt(r);

    let h = prompt("Enter height: ");
    h = parseInt(h);

    return 2*Math.PI*r*r + 2*Math.PI*r*h;
};

Cylinder.prototype.volume = function() {
    let r = prompt("Enter radius: ");
    r = parseInt(r);

    let h = prompt("Enter height: ");
    h = parseInt(h);

    return Math.PI*r*r*h;
};


function Sphere() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Sphere.prototype = Object.create(AbstractShapeClass.prototype);
Sphere.prototype.constructor = Sphere;

Sphere.prototype.area = function() {
    let r = prompt("Enter radius: ");
    r = parseInt(r);

    let h = prompt("Enter height: ");
    h = parseInt(h);

    return 4*Math.PI*r*r;
};

Sphere.prototype.volume = function() {
    let r = prompt("Enter radius: ");
    r = parseInt(r);

    let h = prompt("Enter height: ");
    h = parseInt(h);

    return (4/3.0)*Math.PI*Math.pow(r,3);
};


function Cone() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Cone.prototype = Object.create(AbstractShapeClass.prototype);
Cone.prototype.constructor = Cone;

Cone.prototype.area = function() {
    let r = prompt("Enter radius: ");
    r = parseInt(r);

    let h = prompt("Enter height: ");
    h = parseInt(h);

    let slantHeight = Math.sqrt(r * r + h * h);
    return Math.PI * r * (r + slantHeight);

};

Cone.prototype.volume = function() {
    let r = prompt("Enter radius: ");
    r = parseInt(r);

    let h = prompt("Enter height: ");
    h = parseInt(h);

    let slantHeight = Math.sqrt(r * r + h * h);
    return (1 / 3) * Math.PI * Math.pow(r, 2) * h;
}

// Usage
let cube = new Cube();
console.log(cube.area());// Outputs: "Concrete implementation of abstractMethod"
console.log(cube.volume());