//1

const mammal = {
    color : "orange",
    type : "cat",
    legs : 4,
    name : "kitty",
    speed : 24,
}

console.log(mammal["type"])
console.log(mammal["name"])


//2

const person = {
    firstName : "John",
    lastName : "Doe",
    id : 5566,
    fullname : function (){
        return this.firstName + " " + this.lastName;
    }
}


console.log(person.fullname())

//2

const triangle  = {
    height : 25,
    base : 24,
    color : "red",
    area : function (){
        return 1/2*this.height * this.base
    }
}

