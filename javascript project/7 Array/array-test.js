var data=[ 
1,
"Shriya",
true,
undefined,
null,
function (name){
    return name
},
{name: 'Shriya'},
["abc","cde","efg"]

]
//can add anything in array


//query to print name using function in array
console.log(data[5](data[6].name))

//query to print name of person using function who have value "bcd" 
console.log (data[5].data[6].name + ' has ' + data[7][1])

