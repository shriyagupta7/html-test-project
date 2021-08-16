/*
Singleton 
** this pattern ensure class has only one instance 
and provide a global point of access to it

*/

/*
function Student(){
    console.log ('instance created')
}
var student1 = new Student()
var student2 = new Student()
var student3 = new Student()
var student4 = new Student()
var student5 = new Student()
// created 5 different instance , so space is used 
// to save the space , only one instance required
// so use singleton

*/


// solution
var Singleton = (function(){
var instance=null;
var createInstance =function(){
    var obj = Object.create(null) // create empty object
    console.log('obje has been created')
    return obj;
}
var getInstance = function(){
// gives you new instance 
if (!instance){
    instance = createInstance(); // if no instance create it
}
return instance; // else return instance
}
return  {
    getMyInstance: getInstance // make getInstance available publically
                                // can access private variable as public

// or method 2 
// return {
//     getMyInstance = function(){
//         if (!instance){
//             instance = createInstance(); // if no instance create it
//         }
//         return instance; // else return instance
//         }
//     }
// }
                            }

 })()
var singleton1 = new Singleton.getMyInstance() // to create instance
                                                // it save memory and centralize the database
console.log(singleton1)