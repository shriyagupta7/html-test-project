/*
(=>) this is fat arrow function
it is alternate way for regular function.
it is just shorter way of writing regular JS function
scope changes in these function

*/

let add = function(x,y){
    return x+y;
}
console.log(add(10,20)) // print 30 


// rewriting function using fat arrow

// fat arrow has no need to write function keyword
// add ==> between () and {}
// as (..) => { }


let add1 = (x,y) =>{
    return x+y;
}
console.log(add1(10,20)) // print 30 

// other way :
// if we are using { } we need specify 'return' keyword 
// if not using { }, no need to return keyword

let add2 = (x,y) =>  x+y;
console.log(add2(10,20)) // return 30


let add3 = (x,y) =>  {x+y};
console.log(add3(10,20)) 
// Error : not defined , need return keyword



//.............................

//example 1
let numbers =[4,2,6]
numbers.sort(function (a,b){
    return b-a;
})
console.log(numbers) // sort 

// using fat arrow function
let new_number=[4,2,6]
new_number.sort((a,b) => b-a)
console.log(new_number) // sort


// example2
/* take single parameter
2 methods 
(param) => statement 
param => statement
 */

let names =["john","ana","pca"]
let lengths = names.map(function(names){
    return names.length
})
console.log(lengths) // print : 4,3,3

// using fat arraw

let lengths = names.map(names => names.length)
console.log(lengths)



// example 3
/* without parameter
*/
let logdoc= function(){
    console.log(window.document)

} 
logdoc()

// using fat arraw
let logdoc= () =>    console.log(window.document)
logdoc()


// example 4
// line break

let multiply =(x,y) =>x,y

console.log(multiply(5*6)) // work print 30

let multiply1 =(x,y) 
 =>x,y // error

 let multiply =(x,y) =>
 x,y // valid : can break line after fat arrow function



 // object literal

 let setColor =function(color){
     return {value: color}
 }
 let backgroundColor = setColor('Green')
 console.log(backgroundColor)

// using fat arraow

let setcolor= color =>({value: color})
let backgroundColor= setcolor('Green')
console.log(backgroundColor)

// example
var emp ={
    id :1,
    greet: function(){
        var self= this;
        setTimeout(function(){
            console.log(self.id)
        },1000)
    }
}
emp.greet()

// using fat arraow

/*

** whenever we use fat arrow function it is not going 
to create its own 'this' , so this is going to be 
refering parent 'this'
*/
var emp1 ={
    id :1,
    greet: function(){
        setTimeout(()=>{
            console.log(self.id)
        },1000)
    }
}
emp1.greet()



