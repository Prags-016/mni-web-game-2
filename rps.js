let userch = 0;
let compch = 0;

let userwin = 0;
let compwin = 0;

const choices = document.querySelectorAll('.choice');
//Function to generate computer choice
const compchoice= ()=>{
    const options =["rock","paper","scissors"];
    const choiceidx = Math.floor(Math.random()*3);
    return options[choiceidx];
};

// Function to reset the game
const resetGame = () => {
    userwin = 0;
    compwin = 0;
    document.querySelector('#u').innerHTML = userwin;
    document.querySelector('#c').innerHTML = compwin;
    document.querySelector('#msg').innerHTML = "Play";
    console.log("Game reset! Scores set to 0");
    
};

// Function to play game
const playgame = (choiceId) =>{
    console.log("User's choice = ",choiceId);
    //Generate computer choice
    const compch = compchoice();
    console.log("Computer's choice:",compch);

    const msgEl = document.querySelector('#msg');
    let usc = document.querySelector('#u');
    let csc = document.querySelector('#c');

    if(choiceId ==='paper'&& compch ==='rock' || choiceId ==='rock' && compch === 'scissors'||
        choiceId === 'scissors' && compch === 'paper')
    {
        userwin++;
        usc.innerHTML = userwin;
        console.log("User wins");
        console.log("User score:",userwin);
        msgEl.innerText = `You: ${choiceId} | Computer: ${compch} — You win!`;
    }
    else if(choiceId ==='rock' && compch === 'paper' || choiceId ==='scissors' && compch === 'rock'||
        choiceId === 'paper' && compch === 'scissors'
     )
     {
        compwin++;
        csc.innerHTML = compwin;
        console.log("Computer wins");
        console.log("Computer score:",compwin);
        msgEl.innerText = `You: ${choiceId} | Computer: ${compch} — You lose!`;
     }
     else if(choiceId === compch)
     {
        console.log("It's a tie");
        msgEl.innerText = `You: ${choiceId} | Computer: ${compch} — It's a tie.`;
     }
};

// Wire reset to dedicated button
const resetBtn = document.querySelector('#resetBtn');
if (resetBtn) {
    resetBtn.addEventListener("click", resetGame);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.querySelector('img').getAttribute("id");
        console.log("Choice selected:", choiceId);
        playgame(choiceId);
    });
});

