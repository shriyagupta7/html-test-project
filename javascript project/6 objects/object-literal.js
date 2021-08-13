var person = {} // object litera; syntax

// old way
person["name"]= "kanika gupta"
console.log(person)

// new way 
person.name ="kanika "

// other way
// easiest way
var person = {
    name : 'kanika',
    age : 20 ,
    address : {
        state :'punjab',
        country : 'India',
    
    }

}
console.log(person.name)

var person = {
    name : 'kanika',
    age : 20 ,
    address : {
        state :'punjab',
        country : 'India',
    
    },
    // this function is called method as it is inside object
    getaddress: function(){
        return this.state + ' '+ this.country
    }

}
console.log(person.getaddress())