/* 
breaking complex structure into simpler parts

*/

// array destructuring 

let arr =['Scott','ANA',"yan"]
let [fname,lname] =arr;
console.log(fname) // print : scott
console.log(lname) // print : ana

let [fname,,lname] =arr;
console.log(fname) // print : scott
console.log(lname) // print : yan

let [val1,val2,val3] =arr;
console.log(val1) // print : scott
console.log(val2) // print : ANA
console.log(val3) // print : Yan
console.log(val4) // arr[3] print : undefined 


//...........................
// split()

let[fname,lname] ="shriya gupta".split(' ')
console.log(fname) // print : Shriya
console.log(lname) // print gupta

let [fname, ,title] =["shriya","gupta","meka"]
console.log(title) // print : meka


//.............................
// object restructing

let user ={fname:'shriya ',age :10}
for (let [key , value] of Object.entries(user)){
console.log(`$(key): $(value)`)
}

let option={
    title="menu",
    height :100,
    weight :50
}
let {title,width,height} =option
console.log(title)
console.log(width)
console.log(height)
