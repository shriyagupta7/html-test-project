/*
module pattern
    ** this pattern deals with code encapsulation
    ** it is used to create private and public properties

    var x = (
        function(){

    }
    ) ()// wrapping brackets

*/

var Person = (function(){

}) ()
 //...................................
// creating private method
// which are not accessable globally

var Module = (function(){

    var privateMethod = function(){
        console.log('This is private ')
    }
    return "private variable"
}) ()

console.log(Module.privateMethod) // inaccesseble

//.................................
//
//public method - available to all

var Module= (function(){
    var publicMethod = function (){
        return "public function"

    }
    return {
    
    publicMethod : publicMethod // explictly make it public
}
}
) ()
console.log(Module.publicMethod())

//..........................


var Module =(function(){
 return {
     publicMethod :function(){
         return "this is public method"
     }
 }

})()
console.log(Module.publicMethod())



//..................................



// Anonymous object literal return 


var Module = (function(){
    var privateMethod =function(){
        console.log("private funcn")
    }
    return {
        publicMethod_one : function(){
            return "public method 1"
        },
        publicMethod_two : function(){
            return "public method 1"
        }, publicMethod_three : function(){
            return "public method 1"
        }

    }
}) ()
console.log(Module)


//............................................

//locally scoped object literal 

var Modules = (function(){
    var myObj ={} // obj with empty literal, availble locally

    var privateMethod = function(){
        return "private method"
    }

    myObj.publicMethod = function(){
        return "public method"
    }
    return myObj;
}) ()

console.log(Modules)


//.................................
// locally scopes obj literals

var Module =(function(){
    var privateMethod= function(){
        return "private method"
    }
    var myObject ={
        somemethod = function(){
            
        },
        somemethod2 = function(){

        }
        
    }
    return myObject;
}) ()

console.log(Module)