//regular function
function getName (){
    console.log ('Hello')
    return "hello"
}
getName()
console.log ('hey')
//console.warn ('Please check this')
//console.info(' provide info')
//console.error ('there is error')


var userName = getName()
console.log(userName)
// username will be undefined if there is 
// no return 
//
// by default function return Undefined
//


// parameterized function 
function getfullName (firstname, lastname){
return firstname +' '+ lastname
}

var fullname = getfullName( 'shriya', 'gupta')
console.log(fullname)

var a= 1+2 +"uma"+3 + 4
console.log (a, typeof a)

var val = undefinded +"hello"
console.log (val, typeof val)

var o= null+"hey"
console.log(0)


// anonymous function

function a1 (){
    return "hello"
}




// immediately invoke functions
var wishme = function (){

}
wishme ()

(function ( ){
 console.log ('Hello')
})();  //on spot implementation

(function ( message){
    console.log(message)
   })('welcome to JS');

// work same as . next statement
   (function ( message){
    console.log(message)
   }('welcome to JS'));


   // in js parenthesis can only contain statements
   