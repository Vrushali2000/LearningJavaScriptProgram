class Friends{
    display(){
        console.log("I have many friends");
    
    }

}
class SchoolFriends extends Friends{
    display(){
        console.log("I have many school friends");
    }
}
class CollegeFriends extends Friends{
    display(){
        console.log("I have many college friends");
    }
}
let myFriends = new Friends();
myFriends.display();

myFriends= new SchoolFriends();
myFriends.display();

myFriends= new CollegeFriends();
myFriends.display();