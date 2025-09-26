class Test{
    static v=10; //static variable
    w=20; //non-static variable

    static method1(){
        console.log("Static Method"); //static method
    }

    method2(){
        console.log("Non Static Method"); //non-static method

}
}
console.log(Test.v); //accessing static variable // 10
//console.log(Test.w); //accessing non-static variable // undefined
Test.method1(); //accessing static method //Static Method
//Test.method2(); //accessing non-static method  //Error

let obj=new Test(); //creating object of class
obj.method2(); //accessing non-static method //Non Static Method
console.log(obj.w=30); //accessing non-static variable