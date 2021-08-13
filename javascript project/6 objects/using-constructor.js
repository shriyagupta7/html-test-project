function Person(); 
// convential way to identify the constructor is to write first letter in 
//caoital


function Student(fname,lname){
    this.firstname = fname;
    this.lastname = lname;
}

var student = new Student("Shriya","Gupta")
// new to create object 
console.log(student)

student.city ="delhi"
console.log(student)

