console.log(this)// points to global objects

function sample(){
    console.log(this) // call global object 
    // as sample is global functiom
}
sample() 

var b= function(){
    console.log(this )
}
b() // this: inside the window 
    // but points to global object


    function test (){
        console.log(this)
        this.newVariable = "hello"
    }
    console.log(newVariable) // not defined
    test() // return "hello"


// when this used  inside an function which is insideobject

var obj ={
    name:"shriya",
    log : function(){
        console.log(this)
    }
}

obj.log()

//then this will point to object to which 
// it is defined


var studentObj ={
    name="Shriya",
    log: function (){
        this.name=" kanika"
        console.log(this)
    }
}
studentObj.log() // name shriya changed to kanika

var studentObj ={
    name="Shriya",
    log: function (){
        this.name=" kanika"
        console.log(this)
        var setName= function(){
            this.name = 'Nimik'
            console.log(this) // here name is Nimik
        }
        setName()
        console.log(this) // name is still kanika
    }
}

// to fix it

var studentObj ={
    name="Shriya",
    log: function (){
        var self= this; // using this syntax to avoid 
                        // avoid ambiquity of this
        self.name=" kanika"
        console.log(self)
        var setName= function(){
            self.name = 'Nimik'
            console.log(self) // here name is Nimik
        }
        setName()
        console.log() // name is nimik
    }
}

// self will help to retain the latest refernce of this
