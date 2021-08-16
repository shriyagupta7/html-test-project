var items =["laptop","pc","car","pen"]

// method 1 : using for loop
console.log ('using for loop for traversing')
for (var i=0; i< items.length;i++){
    console.log (items[i] + " ")
}

// method 2 : using for each loop
console.log('using for each to traverse ')
items.forEach(function (item){

    console.log(item)
})


// using map
console.log('using for each to traverse ')
items.map(function (item){

    console.log(item)
})

// differnce between map and for ecah is 
console.log ("difference in foreach and map")
var dataUsingforEach = items.forEach(function(item){
    return item
})

var datausingMap = items.map(function(item,index){
    return item + '-'+index
})

console.log(dataUsingforEach)
console.log(datausingMap)

// map return next array and we can manipulate data also.
// manipulation is not possible in forEach


// Method 4 : using in/of
console.log("method : using in/of ")
foreaach (item in items){
    console.log(item)
} // get index of item

for (item of items){
    console.log(item)
}// get value of item