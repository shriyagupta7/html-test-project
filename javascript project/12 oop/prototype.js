// it is object that is associated with every function and objects by default in js 

// can be used to extend properties of objects
// used to impliment inheritance


function Student(fname,lname){
    this.firstname = fname
    this.lastname=lname
    this.getFullName = function(){
        return this.firstname+ ' '+ this.lastname
    }

}

var student1 = new Student('shriya','Gupta')
console.log(student1)
var student2 = new Student('riya','Gupta')
console.log(student2)
var student3 = new Student('kanika','Gupta')
console.log(student3)
var student4 = new Student('nimik','Gupta')
console.log(student4)

// so every time we are creating object , getfullname () will create
// for every object, so many object that many copy will be created
// will use memory , inefficient method 



// using protyping

function Student(fname,lname){
    this.firstname = fname
    this.lastname=lname
}

// use call, bind and aplly to prototype
Student.prototype.getFullName=   function(){
    return this.firstname+ ' '+ this.lastname
}
Student.prototype.city='kxh'
// so no new copy will be created , only instance is created
 //but each object has access to getFullName()
 var student1 = new Student('shriya','Gupta')
 console.log(student1)
 console.log(student1.city) // show kxh
var student2 = new Student('riya','Gupta')
console.log(student2)

student2.city='JUC'
console.log(student2.city)// show juc
var student3 = new Student('kanika','Gupta')
console.log(student3)
console.log(student3.city) // show kxh

var student4 = new Student('nimik','Gupta')
console.log(student4)
student2.city='ASR'
console.log(student4.city) // show asr






