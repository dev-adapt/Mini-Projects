console.log(`hello console is connected!`);
let heading=document.querySelector("h2");
console.dir(heading.innerText);
heading.innerText=heading.innerText+" from apna college students";

let divs=document.querySelectorAll(".box");
let idx=1;
for(let val of divs){
    val.innerText=`this is the unique text ${idx}`;
    idx++;
}
let butn=document.querySelector(".btn");
butn.addEventListener("click",()=>{
    location.href="file:///D:/javascript/rockPaperScissor/main.html";
});
