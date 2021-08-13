// JSON : java script object notation 
// ispired by objec literal notation


//object literal notation

var person = {
    name : 'kanika',
    age : 20 ,
        state :'punjab',
        country : 'India'
    
    }


    // to convert to JSON 

    var JSONObject = { "name": "kanika",
    "age" : 20 ,
        "state" :"punjab",
        "country" : "India"
    
}


// key neede to be inside " "
// number should not be inside " "
// we can validate JSON code using online
// JSON code validator

console.log(JSONObject)
// a valid JSON can be valid object
// a valid object cant be valid JSON, so there is need
// to stringify it

// need of JSON is to exhange data .
var jsonStringify = JSON.stringify(person);
//type is ostring

var jasonParser = JSON.parse)(jsonStringify)
// type is object