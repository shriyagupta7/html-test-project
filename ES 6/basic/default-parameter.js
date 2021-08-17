function say(message){
    console.log(message)
}
console.log(say()) // error: undefine

// to fix using ES5
 function say1(message){
     message = typeof message !== 'undefined' ?message :"Hi(defult)"
     console.log(message)
 }
 say1() // print : Hi(default)


 // fix with ES6
 function say2(message ="hi(default"){
     console.log(message)
 }
 say2() // Print default : Hi(default)
 say2('Welcome') // print : Welcome


 