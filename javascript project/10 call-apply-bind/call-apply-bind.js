// bind set 'this' keyword and create a copy of function
// call : set 'this' keyword and execute the function immediately 



// all function has access to bind, call and apply 

var person1= {fname: 'shriya',lanme :'gupta'}
var person12= {fname: 'kanika',lanme :'mahajan'}


function getName(message,city){
   
 return message+ 'to' + city + ' ' +this.fname+ ' '+ this.lname
}
// bind define value for 'this' it will give context to this 
// bind will return a function


//usig call

var callgetNname = getname.bind(person1)
console.log(fullName)
var fullName = callgetNname('hell0','ATQ')
console.log(fullName)

var callgetNname = getname.bind(person2)
console.log(fullName)
var fullName = callgetNname('hi','LDG')
console.log(fullName)

var fullNameCall = getName.call(person2)
console.log(fullNameCall)



var fullNameUsingApply=getName.call(person2,['volia','mysore'])
console.log(fullNameUsingApply)


var getnameeUsingBind = getName.bind(person1).bind('hello','Hyderabad')
console.log(getnameeUsingBind)

var getNameUsingCall =getName.call(person12,'hey','Amritsar')
console.log(getNameUsingCall)

var getNameUsingApply =getName.apply(person12,['hey','Amritsar'])
console.log(getNameUsingApply)



// if we want to use later on , using BIND 
// whenever there is login, or API request, or log
// use bind 

// if we want to use function at instant ,
// use call method

// if we want to use function at instant and using defined
// defined values in arrays, use Apply

// call invoke function immediately but take parameters directly
// apply will invoke function immediately and take parameter in array format

