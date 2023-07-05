class Dog{
    constructor(breed,age,color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    Eat(){
        console.log(this.breed,"is Eating");
    }

    Sleep(){
        console.log(this.breed,"is Sleeping");
    }

    Sit(){
        console.log(this.breed,"is Sitting");
    }

    Run(){
        console.log(this.breed,"is Running");
    }

    getBreed(){
        return this.breed;
    }
    getAge(){
        return this.age;
    }
    getcolor(){
        return this.color;
    }
}

const dog1 = new Dog("Pug",3,"Black");
const dog2 = new Dog("Boxer",2,"White");
const dog3 = new Dog("Poodle",1,"Brown");

dog1.Eat();
dog2.Sleep();
dog3.Run();

console.log(dog1.getAge());
console.log(dog2.getcolor());
console.log(dog3.getBreed());
