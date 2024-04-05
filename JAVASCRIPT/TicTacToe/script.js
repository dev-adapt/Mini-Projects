let boxes=document.querySelectorAll(".box");
let button=document.querySelector("#btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".message");
let msg=document.querySelector("#msg");
let turnO= true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turnO){
        box.innerText="O";
        turnO=false;
       }else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;

       checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

let checking=document.querySelector("#win");
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
        if(pos1val!=""&& pos2val!=""&& pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
const showWinner=(winner)=>{
    msg.innerText=`CONGRATULATIONS, Winner is player${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
newGameBtn.addEventListener("click",resetGame);
button.addEventListener("click",resetGame);