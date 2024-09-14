// function f1(data){
//     console.log(`hello : f1: ${data}`);
//     f2();
// }
// function f2(){
//     console.log("hello : f2");
// }
// setTimeout(f1,3000,"hello");

function f1(data){
    console.log(`hello : f1 : ${data}`);
    f2();
}
function f2(){
    console.log("welcome")
}
setTimeout(f1,3000,"everybody");
function success(){
    console.log("Balance is available");
}
function failed(){
    console.log("Balance is  not available")
}
function Error(){
    console.log("Balance is error")
}
function exec(value,callback){
    if(value){
        console.log(`balance : ${value}`)
    }
    setTimeout(callback,3000)
}
function balancechecker(){
    const value=500;
    if(value>=499)
    {
        exec(value,success);
    }
    else if(value <=0){

        exec(value,failed);
    }
    else{
        exec("error",Error);
    }
}

balancechecker()
