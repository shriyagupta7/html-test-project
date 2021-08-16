/*
Throwing errors:
try{
    throw "error occur intry block"
}catch(ex){
    console.log(ex)
} finally{

}

need of throw :
: when we want user defined catch or exception statement.
*/

try{//code
    throw { id :101,
       message : "error occur in try block"

}

} catch(ex){
    console.log(ex)
} 