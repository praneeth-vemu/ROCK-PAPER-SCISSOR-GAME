let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was draw, Please Play again.";
    msg.style.backgroundColor="rgb(6, 6, 37)";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){ 
        userScore++;
        userScorePara.innerText =userScore;
        msg.innerText=`You Win. ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame =(userChoice)=>{
    console.log("user choice :",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice :",compChoice);

    if (userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin=compChoice==="paper"?false :true;
        }else if(userChoice==="paper"){ //rock,scissor
            userWin=compChoice==="scissor"?false :true;
        }else {
            userWin=compChoice==="rock"?false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
