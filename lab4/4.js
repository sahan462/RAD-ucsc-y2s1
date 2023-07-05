class Employee{

    constructor(Emp_Number,name,address,contact_number,NIC,joined_date,designation,salary) {
        this.date = new Date();
        this.Emp_Number = Emp_Number;
        this.name = name;
        this.address = address;
        this.contact_number = contact_number;
        this.NIC = NIC;
        this.joined_date = new Date().setDate(joined_date);
        this.designation = designation;
        this.salary = salary;
    }

    report(){
        this.arr_time = this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();
        console.log("Arrives at", this.arr_time);
    }

    leave(){
        setTimeout(()=>{
            this.date = new Date();
            this.leave_time = this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();
            console.log("Leaves at", this.leave_time);
        },8000);

    }

    req_duty_extension(time){
        this.extensionRequest = time;
        console.log(this.Emp_Number, "requested a duty extension");
    }

    informLunch(type){
        this.type = type;
        console.log(this.Emp_Number, "requested",this.type,"meal.");
    }

    takeLeave(leave_date,no_of_days,reason){
        this.leave_date = leave_date.split("/");
        this.leaveDate = new Date();
        this.leaveDate.setFullYear(parseInt(this.leave_date[2]),parseInt(this.leave_date[1]),parseInt(this.leave_date[0]))
        this.no_of_days = no_of_days;
        this.reason = reason;
        console.log(this.Emp_Number,"is taking a leave on",this.leaveDate.toDateString(),",",this.no_of_days,", on the reason of", this.reason);
    }


}

class contractEmployee extends Employee{
    constructor(Emp_Number,name,address,contact_number,NIC,joined_date,designation,salary) {
        super(Emp_Number,name,address,contact_number,NIC,joined_date,designation,salary);
        this.duration = 6;
    }
}

class temporaryEmployee extends Employee{
    constructor(Emp_Number,name,address,contact_number,NIC,joined_date,designation,salary) {
        super(Emp_Number,name,address,contact_number,NIC,joined_date,designation,salary);
        this.duration = 12;
    }
}

const sahan = new contractEmployee("123","sahan","Nugegoda","0723321268","200130003276","7/5/2023","ML Engineer",250000000.00);
sahan.report();
sahan.leave();
sahan.informLunch("Chicken");
sahan.takeLeave("7/5/2023",15,"personal");
sahan.req_duty_extension("30 days");