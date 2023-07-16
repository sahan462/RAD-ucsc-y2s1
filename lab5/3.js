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
    let ch = parseInt(h.value) ;

    const w = document.getElementById("width");
    let cw = parseInt(w.value) ;

    const rescuboid = document.getElementById("cuboid");
    rescuboid.innerHTML = ("Area of the Cuboid: "+(2*cl*cw + 2*cl*ch + 2*cw*ch));
};

Cuboid.prototype.volume = function() {

    const l = document.getElementById("length");
    let cl = parseInt(l.value) ;

    const h = document.getElementById("height");
    let ch = parseInt(h.value) ;

    const w = document.getElementById("width");
    let cw = parseInt(w.value) ;

    const rescuboid = document.getElementById("cuboid");
    rescuboid.innerHTML = ("Volume of the Cuboid: "+(cl*cw*ch));

};


function Cylinder() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Cylinder.prototype = Object.create(AbstractShapeClass.prototype);
Cylinder.prototype.constructor = Cylinder;

Cylinder.prototype.area = function() {

    const r = document.getElementById("radius");
    let cr = parseInt(r.value) ;

    const h = document.getElementById("cylinderheight");
    let ch = parseInt(h.value) ;

    const rescylinder = document.getElementById("cylinder");
    rescylinder.innerHTML = ("Area of the Cylinder: "+(2*Math.PI*cr*cr + 2*Math.PI*cr*ch));
};

Cylinder.prototype.volume = function() {

    const r = document.getElementById("radius");
    let cr = parseInt(r.value) ;

    const h = document.getElementById("cylinderheight");
    let ch = parseInt(h.value) ;

    const rescylinder = document.getElementById("cylinder");
    rescylinder.innerHTML = ("Volume of the Cylinder: "+(Math.PI*cr*cr*ch));

};

function Sphere() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Sphere.prototype = Object.create(AbstractShapeClass.prototype);
Sphere.prototype.constructor = Sphere;

Sphere.prototype.area = function() {
    const r = document.getElementById("sphereradius");
    let sr = parseInt(r.value) ;

    const ressphere = document.getElementById("sphere");
    ressphere.innerHTML = ("Area of the Sphere: "+(4*Math.PI*sr*sr));

};

Sphere.prototype.volume = function() {
    const r = document.getElementById("sphereradius");
    let sr = parseInt(r.value) ;

    const ressphere = document.getElementById("sphere");
    ressphere.innerHTML = ("Area of the Sphere: "+((4/3.0)*Math.PI*Math.pow(sr,3)));
};


function Cone() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Cone.prototype = Object.create(AbstractShapeClass.prototype);
Cone.prototype.constructor = Cone;

Cone.prototype.area = function() {

    const r = document.getElementById("coneradius");
    let cr = parseInt(r.value) ;

    const h = document.getElementById("coneheight");
    let ch = parseInt(h.value) ;

    let slantHeight = Math.sqrt(cr * cr + ch * ch);

    const rescone = document.getElementById("cone");
    rescone.innerHTML = ("Area of the Cone: "+(Math.PI * cr * (cr + slantHeight)));

};

Cone.prototype.volume = function() {
    const r = document.getElementById("coneradius");
    let cr = parseInt(r.value) ;

    const h = document.getElementById("coneheight");
    let ch = parseInt(h.value) ;

    let slantHeight = Math.sqrt(cr * cr + ch * ch);

    const rescone = document.getElementById("cone");
    rescone.innerHTML = ("Volume of the Cone: "+((1 / 3) * Math.PI * Math.pow(cr, 2) * ch));
}




// Usage
let cube = new Cube();
let cuboid = new Cuboid();
let cylinder = new Cylinder();
let sphere = new Sphere();
let cone = new Cone();
