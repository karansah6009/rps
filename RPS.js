let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".img1");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {                           //chnge genCompChoice 21/9
    const options = ["rock", "paper", "scisor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game draw"
    msg.style.backgroundColor="grey"
}
const showWinner = (userWin,userChoice,compChoice)=>{
   if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you win !")
    msg.innerText =`You Win ~ your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor="green";
   }
   else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("you lose");
    msg.innerText = `You lose ~ ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
   }
}
const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
        //draw
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            //scisor paper
            userWin = compChoice === "paper" ? false : true;
            }
        else if(userChoice === "paper"){
            //rock scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scisor"){
            //paper rock
            userWin = compChoice ==="rock" ? false : true;
        }
     showWinner(userWin,userChoice,compChoice);
    }
       

}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});








