let DATA="this the data of the website";
class college{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("view",DATA);
    }
}

class student extends college{
    constructor(name,email){
        super(name,email);
    }
   
}
class teacher extends college{
    constructor(name,email){
        super(name,email);
    };
}
class admin extends college{
    constructor(name,email){
        super(name,email);
    };
    editData(){
        DATA="this is the changed data";
    };
}
let stu=new student("shruti","shr@email.com");
let teach=new teacher("manish","manish@email.com");
let admin1=new admin("administer1","admin1@email.com");