class Brands{
    constructor(brandname){
        this.brandName = brandname;
    }
    display(){
        console.log(this.brandName);
    }
}

class LoReal extends Brands{
    constructor(brandname,product){
        super(brandname);
        this.product = product; 
    }
    price(){
        console.log("This is",this.product);
    }
    show(){
        this.display();
        this.price();
    }
}
let loreal = new LoReal("LoReal","Face Cream");
loreal.show();
