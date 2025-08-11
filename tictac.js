let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let message = document.querySelector("#msg");
let msgcont = document.querySelector(".container");
let newbtn = document.querySelector("#to");

let turnO = true;
const winpatterns = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

// Ensure winner message is hidden when page loads
msgcont.classList.add("hide");
box.forEach( (box) => {
box.addEventListener("click", () =>{
    console.log("box was clicked"); 
    if(turnO){
        box.innerText = "O";//player O
    }
    else{
        box.innerText = "X";//player X
    }
    box.disabled = true;
    turnO = !turnO;

    checkWin();
});
});

const showDraw = ()=>{
    message.innerText="Its a draw";
    msgcont.classList.remove("hide");
    //disable click
    box.forEach((box) =>{
        box.disabled = true;
    });
};

const checkDraw = ()=>{
    let boxfilled=0;
    box.forEach((box) =>{
        if(box.innerText !== ""){
            boxfilled++;
    }
});
if(boxfilled===9){
    showDraw();
}
};
const showwinner =(winner) =>{
    console.log("Winner is "+ winner);
    message.innerText = `Winner is ${winner}`;
    msgcont.classList.remove("hide");
    
    // Disable all boxes after someone wins
    box.forEach((box) => {
        box.disabled = true;
    });
};
const checkWin = () =>{
    for(let pattern of winpatterns){
        //console.log(pattern[0],pattern[1],pattern[2]);
       // console.log(box[pattern[0]].innerText ,
           // box[pattern[1]].innerText ,
           // box[pattern[2]].innerText);
//checking positions of boxes
let pos1val = box[pattern[0]].innerText;
let pos2val = box[pattern[1]].innerText;
let pos3val = box[pattern[2]].innerText;

if(pos1val!=="" && pos2val!=="" && pos3val!==""){
if(pos1val===pos2val && pos2val===pos3val){
    console.log("winner",pos1val);
    showwinner(pos1val);
    return;
}
            
        }
    }
    // Check for draw only if no winner found
    checkDraw();
};

// Add event listener for New Game button
newbtn.addEventListener("click", () => {
    // Reset all boxes
    box.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    
    // Hide winner message
    msgcont.classList.add("hide");
    
    // Reset turn
    turnO = true;
});
reset.addEventListener("click", () => {
    console.log("reset was clicked");
    box.forEach((box) =>{
        box.innerText="";
        box.disabled = false;
    });
    msgcont.classList.add("hide");
    turnO = true;
});
