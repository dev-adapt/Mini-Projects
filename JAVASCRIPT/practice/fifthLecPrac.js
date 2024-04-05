let marks=[81,91,90,76,87,98,99,65,77,65,55,100,123];
let filteredMarks=marks.filter((val)=>{
    if(val>90)return val;
});
console.log(marks);
console.log(`${filteredMarks.length} students scored above 90 marks i.e, ${filteredMarks}`);

let num=prompt("enter the number");
let number=num;
let array=[];
while(num!=0){
    array.unshift(num);
    num--;
}
console.log(`the array is created \n${array}`);
let sum=array.reduce((prev,curr)=>{
    return prev+=curr;
});
let product=array.reduce((prev,curr)=>{
    return prev*=curr;
});
console.log(`${sum} is the sum of all the elements and\n${product} is the product of all elements from 1 to ${number}`);