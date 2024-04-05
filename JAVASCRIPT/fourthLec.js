let marks=[85,97,44,37,76,60];
let sum=0;
for(let idx=0;idx<marks.length;idx++){
    sum+=marks[idx];
}
let avg=sum/marks.length;
console.log(`the average of ${marks} array is ${avg}`);

let item=[250,645,300,900,50];
console.log(`the array with original price of items ${item}`);

for(let idx=0;idx<item.length;idx++){
    let offerPrice=item[idx]-((10*item[idx])/100);
    item[idx]=offerPrice;
}
console.log(`this the new updated item array with offer prices in it ${item}`);

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(`the original array is ${companies}`);
companies.shift();
console.log(`array after removing first company ${companies}`);
companies.splice(1,1,"Ola");
console.log(`array after removing uber and adding ola in its place ${companies}`);
companies.push("Amazon");
console.log(`array after adding amazon at the end ${companies}`);