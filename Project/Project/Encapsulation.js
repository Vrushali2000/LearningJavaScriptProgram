class BankAcoount{
    constructor(){
        let name,accountid;
    }
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setAccountid(accountid){
        this.accountid=accountid;
    }
    getAccountid(){
        return this.accountid
    }

}
let b1=new BankAcoount();
b1.name="sachin";
b1.accountid=12345;

console.log(b1.getName(),b1.getAccountid());