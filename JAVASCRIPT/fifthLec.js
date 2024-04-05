function vowelCount(msg){
    let vowels=0;
    for(let i=0;i<msg.length;i++){
        if(msg[i]=="a"||msg[i]=="e"||msg[i]=="i"||msg[i]=="o"||msg[i]=="u"||msg[i]=="A"||msg[i]=="E"||msg[i]=="I"||msg[i]=="O"||msg[i]=="U"){
            vowels+=1;
        }
    }
    return vowels;
}
console.log(`${vowelCount("this a message where we will count the number of vowels")} vowels in the string`);
console.log(`we are creating function in another way \n`);
let value=(msg)=>{
    let vowels=0;
    for(let i=0;i<msg.length;i++){
        if(msg[i]=="a"||msg[i]=="e"||msg[i]=="i"||msg[i]=="o"||msg[i]=="u"||msg[i]=="A"||msg[i]=="E"||msg[i]=="I"||msg[i]=="O"||msg[i]=="U"){
            vowels+=1;
        }
    }
    return vowels;
}
console.log(`there are ${value("aeiou")} vowels in the string `);
let arr=[1,4,6,7,8,9,10,12,14];
console.log(arr);
arr.forEach((val)=>{
    console.log(`${val*val} is the square of${val}`);
});

//finding the largest element in the array
console.log(arr);
let maxVal=arr.reduce((prev,curr)=>{
    if(prev>curr)return prev;
    else return curr;
});
console.log(`${maxVal} is the max value from the array`);