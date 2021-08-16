// there is no class keyword in JS

// jS uses functions as class 
// differeniate class to function : name of function is capital
// in case of class
// else should be lower case

function Student(){

} // class
 function stu(){ }// function


 var Student1 = new Student()
 var Student2 = new Student()

 // create constructor 
function Order(){

}
var order1 = new Order() // order() is constructor

// create properties of class

function Customer(){
     this.fname ="shriya" // properties
     this.lname="gupta"
}// new class



// initialization of constructor
function Customer(fname,lname){
    this.fname =fname// properties
    this.lname=lname
}
var customer1 = new Customer('shriya','gupta')


