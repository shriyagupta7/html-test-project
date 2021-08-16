/* 
two ways of polymorphism
1) method overloading  a(),a(int x,int y),a(int x , string y)
2) method overriding  return "data" you can return different data in child

** method overloading is not possible in JS .
it will consider only lastest method and work same even if you pass 
parameters or not

**

*/

function Shape(){

}
Shape.prototype.draw =function(){
    return "i am genric shape"
}
 //child of Shape 
function Circle (){

}
Circle.prototype=Object.create(Shape.prototype) // overriding
Circle.prototype.draw= function(){
    return "i am circle"
}

//child of Shape 
function Square (){

}
Square.prototype=Object.create(Shape.prototype) // overriding
Square.prototype.draw= function(){
    return "i am square"
}

//child of Shape 
function Triangle (){

}
Triangle.prototype=Object.create(Shape.prototype) // overriding
// triangle.prototype.draw= function(){
//     return "i am circle"
// }

var shape1= new Shape()
var shape2= new Circle()
var shape3= new Square()
var shape4= new triangle()



console.log(shape1.draw())
console.log(shape2.draw())
console.log(shape3.draw())
console.log(shape4.draw()) // show ; genric function, as t
                            // as there is no over riding

/*
other method
var shapes=[new Shape(),new Circle(),new Square(),new Triangle()]
shapes.forEach(function(shape){
    console.log (shape.draw())
})

*/

