var person1= new Object()
var person2 ={}
var person3 =Object.create(null)
//to see prototype
var person4 = Object.create(person1)
var person4 = Object.create({})

console.log(person1)
console.log(person2)
console.log(person3)

var person3 = {
    name : 'kanika',
    age : 20 ,
    address : {
        state :'punjab',
        country : 'India',
    
    }

}
