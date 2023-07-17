class book{
    constructor(name, price, author, publisher, type) {
        this.name = name;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
        this.type = type;
    }

    calcDisc(){
        if(this.type.toLowerCase() === "educational"){
            return this.price*(20.0/100);
        }else if(this.type.toLowerCase() === "short stories" || this.type.toLowerCase() === "novels"){
            return this.price*(15.0/100);
        }else if(this.type.toLowerCase() === "biographies" ){
            return this.price*(10.0)/100;
        }else{
            return 0;
        }
    }

    getBook(){
        return ("Name: "+this.name+", Price: "+this.price+", Discounted Price: "+(this.price-this.calcDisc())+", Author: "+this.author+", Publisher: "+this.publisher+", Discount: "+this.calcDisc());
    }

}


const b1 = new book("Sherlock Holmes", 450.00, "Arthur Conan Doyle", "Bakers Publications", "Novels");
console.log(b1.getBook());