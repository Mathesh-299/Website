function f1(data){
    console.log(`hello : f1: ${data}`);
    f2();
}
function f2(){
    console.log("hello : f2");
}
setTimeout(f1,3000,"hello");

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



async function api(){
    const response=await fetch('https://66e526e55cc7f9b6273c6bb6.mockapi.io/Register')
    const data1=await response.json()
    //console.log(data1)
    // return data1;
    
    try {
        const response1=await fetch('https://66e526e55cc7f9b6273c6bb6.mockapi.io/Register')
        const data12=await response1.json()
        //console.log(data12)
        return data12

        
    } catch (error) {
        console.log(error)
        
    }
}
// api()
async function apidata1() {
    const apidata=await api()
    //console.log(apidata)
    const modedata=[{
        "name":"hello"
    }]
    const stru=modedata.map((data)=>{console.log(data)})
    const structure=apidata.map((data)=>{console.log(data)})
    
}

apidata1()
