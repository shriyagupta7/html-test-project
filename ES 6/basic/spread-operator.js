/*
ES6 has operator called spread operator 
that consist of three dots (...)
or can be called rest operator 

** spread operator allow to spread our elements on 
    an iterable object such as array or map
*/

const odd=[1,3,5]
const combined =[2,4,6]
//const combined =[2,4,6, odd] // print 2,4,6 ,Array(3)

const combined1 =[2,4,6, ...odd] 
console.log(combined1) //print : 2,4,6,1,3,5


/*
ES^ also has (...) as rest operator
** spead : unpack elements
** rest  : pack elements into array
*/

function display(a,b, ...arguments){
    console.log(arguments)
}
display (1,2,3,4,5) // print 1,2 as simple as [3,4,5] as array 
                    // pack rest operator as arguments


//.............................

let initalchar =['A','B']
let chars =[...initialChars,'C','D']
console.log(chars) // print "A","B","C","D" 


let numbers=[1,2]
let numbers1 =[3,4]
let allnums =[...numbers, ...numbers1]
console.log(allnums) // print : [1,2,3,4]
// convert into single array

let score =[8,2,3]
let copiedscores =[...scores]
console.log(copiedscores) // print [8,2,3]
// copy one array to other


let chars3 =['A', ...'BC','D']
console.log(chars) // print [A,B,C, D]
// spread each indivial char in string 
