let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetBtn");  //reset btn access
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newGameBtn");
let turnO = true;  //playerX, playerO
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO){ // player0
            box.innerText = "O";
            turnO = false;
        }else{ //playerX
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        count++;
        
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            console.log("ok");
            gameDraw();
        }
    });
    
});

const gameDraw = () => {
    msg.innerText = "oops game was a draw ,Try Again!!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

let checkWinner = () => {
    for(let pattern of winPatterns){

    
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" &&  pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner", pos1Val);
            showWinner(pos1Val);
            return true;
        }
       }
    }
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
