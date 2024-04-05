//in js code runs asynchronouslly if some line is taking more time
console.log("one");
console.log(`two`);
console.log(`three`);
setTimeout(()=>{
    console.log(`hello timeout was 4 sec`);
},4000);//timeout is given in milliseconds
console.log(`four`);
console.log(`five`);
setTimeout(()=>{
    console.log(`hello timeout was 6 seconds`);
},6000);

//callback hell
function getData(dataID,getNextData){
   setTimeout(()=>{
    console.log(`data: ${dataID}`);
    if(getNextData){
        getNextData();
    }
   },2000);
};
getData(1,()=>{
    console.log(`getting next data 2.....`);
    getData(2,()=>{
        console.log(`getting next data 3......`);
        getData(3,()=>{
            console.log(`getting next data 4....`);
            getData(4)
        })
    })
})

//promises
function getData(dataID,getNextData){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`data: ${dataID}`);
        resolve("success");
        if(getNextData){
            getNextData();
        }
       },8000);
   })
 };
 

//promise resolutions then and catch
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log(`this is a promise`);
       // resolve("success");
       reject(`unfulfilled`);
    });
};

let promise=getPromise();
promise.then(()=>{
    console.log(`resolved`);
});
promise.catch(()=>{
    console.log(`rejected`);
});

//promise chaining
