class student{
    constructor(index_num, mcq_marks,essay_marks) {
        this.index_num = index_num;
        this.mcq_marks = mcq_marks;
        this.essay_marks = essay_marks;
    }

    cal_total(){
        this.total = this.mcq_marks + this.essay_marks;
    }

    get_total_marks(){
        return this.total;
    }

    getStatus(){
        if(this.total >= 50){
            return "pass";
        }else{
            return "fail";
        }
    }

    getGrade(){
        if(this.total >= 75){
            return "A";
        }else if(this.total >= 65){
            return "B";
        }else if(this.total >= 55){
            return "C";
        }else if(this.total >= 35){
            return "S";
        }else{
            return "W";
        }
    }
}

const stu1 = new student(1,20,40);
stu1.cal_total();
console.log(stu1.get_total_marks());
console.log(stu1.getStatus());
console.log(stu1.getGrade());
