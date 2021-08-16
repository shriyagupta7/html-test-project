var Module =(function(){
    var privateMethod = function(){
        return "private"
    }
    var somemethod =function(){
        return "some method"
    }
    var somemethod1 = function(){
        return "some 1"
    }
    var publicmethod = function(){
        return "public"
    }
    return {
        method1 :somemethod,
        method2:somemethod1,
        method3 : publicmethod

    }
})()
console.log (Module)

// access private method

var Module =(function(){
    var privateMethod = function(message){
        return message + "from private"
    }
    
    
    var publicmethod = function(text){
        return privateMethod(text)
    }
    return {
        method1 :publicmethod
    

    }
})()
console.log (Module.publicmethod("hello"))