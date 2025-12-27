let boxs=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector(".newgame");
let winner=document.querySelector(".winnermsg");
let turn0=true;


const enableboxes=()=>{
    for (let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}

let resetGame=()=>{
    turn0=true;
    enableboxes();
    winner.classList.add("hide");
}
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [ 6,7,8],
    
];

const disableboxes=()=>{
    for (let box of boxs){
        box.disabled=true;
    }
}

let showwinner=(winnerPlayer)=>{
   winner.innerText=`COngratulations the winner is ${winnerPlayer}`;
   winner.classList.remove("hide");
   disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winPattern){

        let pos1val=boxs[pattern[0]].innerText;
        let pos2val=boxs[pattern[1]].innerText;
        let pos3val=boxs[pattern[2]].innerText;

        if(pos1val !="" && pos2val != "" && pos3val !=""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("winner",pos1val);
                 showwinner(pos1val);
            }
        }

    }
   

}


boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn0==true){
            box.innerText="O";
            turn0=false;
        } else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
        
    })

})

newgame.addEventListener("click",()=>{
    resetGame();
})

reset.addEventListener("click",()=>{
    resetGame();
})
