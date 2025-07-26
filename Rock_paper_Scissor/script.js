const choices = ["rock", "paper", "scissor"];
const player = document.getElementById("player");
const comp = document.getElementById("comp");
const res = document.getElementById("res");
const ps = document.getElementById("playerScore");
const cs = document.getElementById("compScore");
let compScore = 0;
let playerScore = 0;

function playgame(playerChoice) {
    const compChoice = choices[Math.floor(Math.random() * 3)];

    player.textContent = "Player : " + playerChoice;
    comp.textContent = "Computer : " + compChoice;

    // Reset color before setting new result
    res.classList.remove("win", "lose", "tie");

    if (playerChoice === compChoice) {
        res.textContent = "It's a Tie!!";
        res.classList.add("tie");
    } else if (
    (playerChoice === "rock" && compChoice === "scissor") ||
    (playerChoice === "scissor" && compChoice === "paper") ||
    (playerChoice === "paper" && compChoice === "rock")
)
   {
        res.textContent = "You Won!!";
        playerScore++;
        res.classList.add("win");
        ps.textContent = "Player Score : "+playerScore;

    } else {
        res.textContent = "You Lose!";
        res.classList.add("lose");
        compScore++;
        cs.textContent = "Computer Score : "+compScore;

    }
}
function reset(){
    compScore = 0;
    playerScore = 0;
    cs.textContent = "Computer Score : "+compScore;
    ps.textContent = "Player Score : "+playerScore;


}
