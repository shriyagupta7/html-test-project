/*try{
    ** code to evaluate
}
catch(exception){
    ** handle exception, if error occur
}
finally{
    ** execute irrespective to try and catch
    ** to close databse connections, network connections, files 
    ** to cleanup memory and codes
    ** to close file catch
}

*/

try{
    var output= getMessage("hello","shriya")
}catch(ex){
    console.log(ex.name)
}finally{
    console.log("this is final block, executed always")
}




//no error
try{
    var output= "hello shriya"
    console.log(output)
}catch(ex){
    console.log(ex.name)
}finally{
    console.log("this is final block, executed always")
}



