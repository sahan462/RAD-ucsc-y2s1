class student{

    constructor(index,name,dob,address,contact_num,email) {
        this.index = index;
        this.name = name;
        this.dob = new Date(dob);
        this.address = address;
        this.contact_num = contact_num;
        this.email = email
        this.setGroup(index);
    }

    setGroup(index){
        if(index%4 === 0){
            this.group = "Group 1";
        }else if(index%4 === 1){
            this.group = "Group 2";
        }else if(index%4 === 2){
            this.group = "Group 3";
        }else {
            this.group = "Group 4";
        }
    }

    setIndex(index){
        this.setGroup(index);
        this.index = index;
    }

    setName(name){
        this.name = name;
    }

    setDOB(dob){
        this.dob = new Date(dob);
    }

    setAddress(address){
        this.address = address;
    }

    setContactNum(contact_num){
        this.contact_num = contact_num;
    }

    setEmail(email){
        this.email = email;
    }

   getIndex(){
        return this.index;
    }

    getName(){
        return this.name;
    }

    getDOB(){
        return this.dob;
    }

    getAddress(){
        return this.address;
    }

    getContactNum(){
        return this.contact_num;
    }

    getEmail(){
        return this.email;
    }

    getGroup(){
        return ("Group : "+this.group);
    }
}

const stu1 = new student(10,"damitha sahan","2001-10-26","Nugegoda","0723321268","sahanchandrasena462@gmail.com");

console.log(stu1.getIndex())
console.log(stu1.getName())
console.log(stu1.getDOB())
console.log(stu1.getAddress())
console.log(stu1.getContactNum());
console.log(stu1.getEmail());

console.log(stu1.getGroup());

stu1.setIndex(12);
stu1.setName("Kalani Jayawickrama");
stu1.setDOB("2001-06-21");
stu1.setAddress("Rajagiriya");
stu1.setContactNum("123456789");
stu1.setEmail("kalani123@gmail.com");


console.log(stu1.getIndex())
console.log(stu1.getName())
console.log(stu1.getDOB())
console.log(stu1.getAddress())
console.log(stu1.getContactNum());
console.log(stu1.getEmail());

console.log(stu1.getGroup());