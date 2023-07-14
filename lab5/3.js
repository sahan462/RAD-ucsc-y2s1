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


Cube.prototype.area = function() {
    var l = prompt("Enter length: ");
};

Cube.prototype.volume = function() {
    console.log("Concrete implementation of abstractMethod");
};


function Cuboid() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}


Cuboid.prototype.area = function() {
    console.log("Concrete implementation of abstractMethod");
};

Cuboid.prototype.volume = function() {
    console.log("Concrete implementation of abstractMethod");
};

function Cylinder() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Cylinder.prototype.area = function() {
    console.log("Concrete implementation of abstractMethod");
};

Cylinder.prototype.volume = function() {
    console.log("Concrete implementation of abstractMethod");
};


function Sphere() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Sphere.prototype.area = function() {
    console.log("Concrete implementation of abstractMethod");
};

Sphere.prototype.volume = function() {
    console.log("Concrete implementation of abstractMethod");
};


function Cone() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Cone.prototype.area = function() {
    console.log("Concrete implementation of abstractMethod");
};

Cone.prototype.volume = function() {
    console.log("Concrete implementation of abstractMethod");
};


ConcreteClass.prototype = Object.create(AbstractShapeClass.prototype);
ConcreteClass.prototype.constructor = ConcreteClass;

// Implement the abstract method in the subclass


// Usage
var instance = new ConcreteClass();
instance.abstractMethod(); // Outputs: "Concrete implementation of abstractMethod"
