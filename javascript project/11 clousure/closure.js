// inner function having access to oter functions

function greet(message){

    return function wish(name){
        console(message+ ' '+name)
    }
}

var output = greet();
console.log(output) // returning a function wish body

var getMessage =greet('welcome');
console.log(getMessage); // return : wish function(name) bosy

var getMessage =greet('welcome');
var sayHello= getMessage('shriya');// still point to message parameter of parent func
 // set name= shriya for wish function

// even if greet is executed , wish is still pointing to message.

// wish has access to message




