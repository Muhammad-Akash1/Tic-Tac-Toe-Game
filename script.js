let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newGame");
let winMsg = document.querySelector(".Winner");
let count = 0;

let turn = 'X';
const winPatterns = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,5,7],
    [6,7,8]
 ];
   
 function resetGame()
 { 
   turn = 'X';
   count = 0;
    for(let box of boxes)
    {
        enableBoxes();
        box.innerText = "";
    }
    winMsg.style.visibility = "hidden";
 }

reset.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

 boxes.forEach( (box) => {
    box.addEventListener("click" , () => {
        if(turn === 'X')
        {
          box.innerText = 'X';
          turn = 'O';
        }
        else
        {
            box.innerText = 'O';
            box.style.color = "red";
            turn = 'X';
        }
        box.disabled = true;
        
        count++;
        console.log("count = " , count);
        checkWinner();
    });
 });

 const disableBoxes = () =>
 {
    for(let box of boxes)
    {
        box.disabled = true;
    }
 }
 
 const enableBoxes = () =>
 {
    for(let box of boxes)
    {
        box.disabled = false;
    }
 }

 const showWinner = (winner) => 
 {
    winMsg.innerText = `Congratulations, Winner is ${winner}`;
    winMsg.style.visibility = "visible";
    disableBoxes();
 }
 const checkWinner = () =>
 {
   for(let pattern of winPatterns) 
   {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "")
    {
        if(pos1Val === pos2Val && pos2Val === pos3Val)
        {
            showWinner(pos1Val);
        }
        else if(count == 9)
        {
            winMsg.innerText = "Game is drawn...";
            winMsg.style.visibility = "visible";
        }
    }
   }
 };

