// var is function scoped.

function Sample(){
    var line="hello"
}
console.log(line) // line : not defined here 

//.........................

// let and const are block scoped .
// cant access outside  block

// let : allow reassign value
// const : cant reassign value

function Sample(){
    var line="hello"
    console.log (line) // can print line :hello
}
Sample()
console.log(line) // cant print line

if (true){
    var foo ="hello"
    let bar ="how are you?"
    const baz =" I am fine"
    console.log(foo) // print
    console.log(bar) //print
    console.log(baz) //print

}
console.log(foo) // print
console.log(bar) // error : refernce not define
console.log(baz) // error : refernce not definedd



//..............................


function test(){
    let data ="some data"
    if (true){
        var foo ="hello"
        let bar ="how are you?"
        const baz =" I am fine"
        console.log(foo) // print
        console.log(bar) //print
        console.log(baz) //print
    
    }
    console.log(foo) // print
    console.log(bar) // error : refernce not define
    console.log(baz) // error : refernce not definedd
    console.log(data) // print data, bcz scope of data is whole block
}
 test()

 //.......................................

// can access var variable outside for loop. 
 for( var i=0; i<3;i++){
     console.log(i) // print 0,1,2
 }
    console.log(i) // print 3 as value using i++ ; i=3
    
// cant access let outside for loop    
    for( let j=0; j<3;i++){
        console.log(j) // print 0,1,2
    }
       console.log(j)  // error : not defined 

// redefining Let

function sample1(){
    let foo =1;
    foo=10;
    //
    //let foo =101; // error : already defined foo 
                // Let can be redeclared , but var can be redeclare

    console.log(foo) // print 10
            }
sample1()


//.......................................

// const
const myBoolean =true;
if (myBoolean){
    const users= ["Scott","Tuan"]
    users= users.concat("shriya")
    console.log(users) // error : Assignment to const is not posible
    // cant reassign const 
}

