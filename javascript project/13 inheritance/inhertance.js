function Student(){
 this.firstname ='shriya'
 this.gender='F'

}

var student1 = new Student()
console.log(Student.prototype) // return constructor
console.log(student1.prototype) // return undefined
// ech object has access to __proto__

console.log(student1)

console.log(typeof Student.prototype)
console.log(typeof student1.__proto__)

console.log(Student.prototype === Student.__proto__) // return true

/*

== only equals (1=='1') is true
=== strictly equal, check datatype also
(1=== '1') is false

*/

// inheritance : parent and child relations
// protypal inheritance : inheritance in js supported by prototyping


function Person(fName, lname)
{
    this.firstname= fName
    this.lastname= lname
} // parent class

Person.prototype.getFullName= function(){
    return this.firstname+" "+ this.lastname
}

function Student (age){
    this.age =age
} //child class


// inheritance  : inheirt properties of person
// i.e person 

Student.prototype = new Person('shriya','gupta')
// student has access to fname,lname and fullname

Student.prototype.getAge = function(){
    return this.age;
}

var student1= new Student(12);
console.log(student1)
console.log(student1.firstname) // parent property
console.log(student1.getFullName())
console.log(student1.getAge()) //own property


