

var person = {
    fname:'shriya',
    lname:'gupta',
    city:'kxh'
}

person.age= 12 // add properties from object
person.lname='mahajan' // can change properties

//delet can work with object
// will not work with primitive variable
delete person.age; // delete a property 

console.log(person) // read the object

// if all has every access to object parameters , it will be mod
// modify by any one

/*
scope of object:
1. Object.preventExtensions  : cant add new property but can delete, modify and read
2. seal
3. freeze
4. freeze inner properties
*/

var person_prevent = {
    fname:'shriya',
    lname:'gupta',
    city:'kxh'
}
Object.preventExtensions(person_prevent)

person_prevent.age= 12 // add
person_prevent.lname='mahajan' // modify

delete person_prevent.age; // delete a property 

console.log(person_prevent) 


// method 2: seal
// cant able to add or delete , but update and read

var person_seal = {
    fname:'shriya',
    lname:'gupta',
    city:'kxh'
}
Object.seal(person_seal)
person_seal.age= 12 // add 
person_seal.lname='mahajan' // update


delete person_seal.age; // delete a property 

console.log(person_seal) 



// method 3 : freeze 
// cant add , update and delete properties , only read 

var person_frreze = {
    fname:'shriya',
    lname:'gupta',
    city:'kxh'
}
Object.freeze(person_freeze)
person_freeze.age= 12 // add properties from object
person_freeze.lname='mahajan' // can change properties


delete person_freeze.age; // delete a property 

console.log(person_frreze) 



// if we freeze object with an object
var person_freeze_inobj = {
    fname:'shriya',
    lname:'gupta',
    city:'kxh',
    addres:{
        state: 'punjab'
    }
}
Object.freeze(person_freeze_inobj)
person_freeze_inobj.age= 12 // add properties from object
person_freeze_inobj.lname='mahajan' // can change properties

delete person_freeze_inobj.state; // delete a property 
person_freeze_inobj.address.state ='haryana' // we can edit /
// freeze is worked on outer object

// to apply on inner object
Object.freeze(person_freeze_inobj.address) // freeze inner obj
console.log(person_freeze_inobj) 