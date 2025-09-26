class A{
    methd(){
        return 0;
    }
}
class B extends A{
    methd(){
        return 1;
    }
}

class C extends B{
    methd(){
        return 2;
    }
}
let a=new A();
console.log(a.methd());
let b=new B();
console.log(b.methd());