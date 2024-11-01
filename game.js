let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const myScore= document.querySelector("#myScore");
const computerScore= document.querySelector("#computerScore");
const msg=document.querySelector("#msg");
const gencompChoice =()=>{
    const options=["rock","paper","scissor"];
   const random=Math.floor(Math.random()*3);
   return options[random];
}
const draw=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw. Play Again";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("user won")
        userScore+=1;
        myScore.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    }else{
        console.log("computer won");
        compScore+=1;
        computerScore.innerText=compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
}}
const playGame=(userChoice)=>{
    const compChoice=gencompChoice();
    console.log("user choice is",userChoice);
    console.log("computer choice is",compChoice);
        if(userChoice===compChoice){
          draw();
        }else {
        let userWin =true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice=="paper"){
            userWin= compChoice==="scissors"?false:true;
        }else{
        userWin=compChoice==="rock"?false:true;
}
showWinner(userWin,userChoice,compChoice);
}}

choices.forEach((choice)=>{
choice.addEventListener(("click"),()=>{
    const userChoice= choice.getAttribute("id");
    console.log("box was clicked",userChoice);
    playGame(userChoice);
})
})