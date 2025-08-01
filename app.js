let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    //rock, paper, scissors
    const options=["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was draw! Play again.";
    msg.style.backgroundColor="#282828";
}

const showWinner=(userWin, userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win!");
        msg.innerText=`You win! Your Choice: ${compChoice}, Computer Choice: ${userChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You lose!");
        msg.innerText=`You lost! Your Choice: ${compChoice}, Computer Choice: ${userChoice}`;
        msg.style.backgroundColor="#d62828";
    }
};
const playGame=(userChoice)=>{
    // console.log("user-choice = ",userChoice);
    //Generate computer choice -> modular
    const compChoice = genCompChoice();
    // console.log("Computer-choice = ",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissor"? false : true;
        }
        else{
            userWin= compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

