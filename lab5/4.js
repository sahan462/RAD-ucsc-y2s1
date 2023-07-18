function Game() {
    if (new.target === AbstractShapeClass) {
        throw new Error("Cannot instantiate abstract class.");
    }
}

// Define an abstract method
AbstractShapeClass.prototype.func1 = function() {
    throw new Error("Abstract method has not been implemented.");
};

AbstractShapeClass.prototype.func2 = function() {
    throw new Error("Abstract method has not been implemented.");
};

// Create a subclass that extends the abstract class
function Car_Game() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}


Car_Game.prototype = Object.create(AbstractShapeClass.prototype);
Car_Game.prototype.constructor = Car_Game;

function Puzzle_Game() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}

Puzzle_Game.prototype = Object.create(AbstractShapeClass.prototype);
Puzzle_Game.prototype.constructor = Puzzle_Game;


function Shooting_Game() {
    AbstractShapeClass.call(this); // Call the constructor of the abstract class
}


Shooting_Game.prototype = Object.create(AbstractShapeClass.prototype);
Shooting_Game.prototype.constructor = Shooting_Game;
