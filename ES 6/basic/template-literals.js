/* we are using backticks (`)
 we acn write multi line strings and string format
*/

let simple ="thisis template literal"
let str ='template literal in ES6'
console.log(str) // print 'template literal in ES6
console.log(str.length) //23
console.log(typeof str) // string

// if i want to use (') '  inside the string 

let str2 =`Here's a template`
console.log(str) // use ` `

let str3 ='template with backtick \` '
console.log(str3) // print backtick \` with quote '' or ""

// to wite multiline strings

var msg =" multiple line\n  break. this is \ttab "
console.log (msg) 
/* print :
multiple line
break . this is     tab
*/

// using backtick syntax

let msg2 =
`
this is text
with multiple line 
    with \t span

`
console.log(msg2) 
/* print :
this is text 
with multiple line
    with    span
    */


    // variable and expression substitution

    let fname= "shriya",
    lname="gupta"

    let greeting =`Hi ${fname}  ${lname}`
    console.log(greeting)// print : Hi shriya gupta

    

