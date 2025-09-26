class colors {
    constructor(type, brand){
        this.type = type;
        this.brand = brand;
    }
}
colors.prototype.price = 50;

colors.prototype.show = function(){
        console.log(this.type, this.brand, this.price);
}
let myColor = new colors("Water color", "Camlin");
myColor.show();
//myColor.price = 100;
//console.log(myColor.type, myColor.brand, myColor.price);


let myColor1 = new colors("Acrylic color", "Faber-Castell");
//console.log(myColor1.type, myColor1.brand, myColor1.price);
myColor1.show();
