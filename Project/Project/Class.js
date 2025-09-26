
    class Student{
        studentdetails(id,name,grade){
            this.sid=id;
            this.sname=name;
            this.sgrade=grade;
    }
        display(){
            console.log(this.sid, this.sname, this.sgrade);
    }
   
}

    let std= new Student();
    std.studentdetails(11,"Vrushali","A++");
    std.display();

    