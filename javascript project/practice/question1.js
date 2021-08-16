// console.log(multiply(1(2(3))

// var total = function multiply (a,b,c){
//     return a*b*c
// }
// console.log(multiply(5,2,3))

/*
// q2 : 
var a=10; 
var b=a; 
a=20;
//ans :
console.log(a) // 20
console.log(b) //10
*/

/*
question 3
var array1 =[1,2]
var array2= array1
array1=[1,2,3]
console.log(array1)
console.log(array2)


array1=[1,2,3,7,0]
console.log(array1.sort())

question :
var output = 1+2+"uma"+ 3+5+"mahesh"
console.log(output) //3 uma35mahesh

question :
var output1 = (function(x){
    delete x;
    return x;
})(0)
console.log(output1) // 0 as delete can be used to 
                    //delete property of obj, but x iss not obj



question :
var output1 = (function(data){
    delete data.x;
    return data;
})({x : 0}) // now x is property of x 
console.log(output1)


question :
var m=1;
var output3 =(function(){
    delete m
    return m

}) ()
console.log(output3) // 1 bcz m is global variable not an obj

question 
var array=['a','b','c','d']
// make array empty
array=[] //method 1
array.length =0; // Method 2 :forcefully set length to 0 
array.splice(0, array.length) //method 3 : remove all elements

// while(array.length){
//     array.pop()
// }   // method 4
console.log(array)

question:
console.log(evenOrOdd(a))
evenOrodd =function(x){

    return x/2 ==0

}


console.log(getExtension('resume.doc'))
console.log(getExtension('sample.txt'))
console.log(getExtension('notepad'))

function getExtension(fileName){
    var array = fileName.split('.') //method 1
    return array[array.length-1]

//     return  fileName.split('.').length > 1 ? 
//    fileName.split('.')[fileName.split('.').length-1]:
//    false
    
}

//using ternanry operator

*/




function addArray(array){
    var total =0;
    array.forEach(function(item) {
        if (typeof addArray[item] == "number"){
            total = total + addArray[item] 
        } else if (Array.isArray(item)){
            total = total + addArray(item)
        }
    }) 
    return total;
}
console.log(addArray([1,2,3,4,5]))// return 15
console.log(addArray([1,2,3,4,5,6,7,8,9,10]))
console.log(addArray([1,2,[[3],4],5,6,7,8,9,10]))
console.log(addArray([1,2,3,4,5,6,'uma']))

var data=[
    {name:'x',city:'y'},
    {name:'x',city:'y'}, {name:'x',city:'y'}]

console.table(data)
console.log("hello %s id is %i" ,'shriya',12)
console.log("student is %o",{name:'x',city :'y'})
// placeholders
// %s : string
//%i : number
//% o : object 


var fname="shriya"
var lname="gupta"
var message ="first name is $(fname) and last name is $(lname)"
console.log(message)
