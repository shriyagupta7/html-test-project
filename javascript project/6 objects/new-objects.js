// object is collectionof key value pair


var person = new Object(); // to create an object
console.log(person)

// to create properties of an object
person["name"]="shriya"
person["name"]="kanika" // duplication value allow
                        // treated as an update of value
                        // final value = kanika
person ["age"]= 50
 var emailProperty ="email" // if we get value on run time or
                            // or from different function
 person[emailProperty]="abc@a.com"
console.log (person)