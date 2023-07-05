class Rectangle{
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width*this.height;
    }

}

const rec1 = new Rectangle(10,15);
const rec2 = new Rectangle(20,30);

console.log("Area of the rectangle 1 is", rec1.getArea());
console.log("Area of the rectangle 2 is", rec2.getArea())
