let userscore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const Genrate_computer_choice = () => {
  const options = ["rock", "paper", "scissor"];
  let RandIX = Math.floor(Math.random() * 3);
  return options[RandIX];
};

const playGame = (userChoice) => {
  console.log("use choice=", userChoice);
  const computerChoice = Genrate_computer_choice();
  console.log("computer choice=", computerChoice);

  let UserScoreCount = document.getElementById("userScore");
  let computerScoreCount = document.getElementById("computerScore");
  if (userChoice === computerChoice) {
    console.log("GAME DRAW !");
    msg.innerHTML = "Game Draw! Play Again";
    msg.style.backgroundColor = "grey";
    msg.style.color = "black";
  } else {
    // let userWin =true;
    if (userChoice === "rock" && computerChoice === "paper") {
        comScore++;
      computerScoreCount.innerText = comScore;
      console.log("computer Win the Game");
      msg.innerHTML = `You Lose! your ${userChoice} Lost By ${computerChoice}`;
      msg.style.backgroundColor = "red";

    } 
    else if (userChoice === "paper" && computerChoice === "rock") {
        userscore++;
        UserScoreCount.innerText = userscore;
      console.log("User Win the Game");

      msg.innerHTML = `You Win! Your ${userChoice} Beats ${computerChoice} `;
      msg.style.backgroundColor = "green";
    }
    
    else if (userChoice === "rock" && computerChoice === "scissor") {
        userscore++;
        UserScoreCount.innerText = userscore;
      console.log("User Win the Game");

      msg.innerHTML = `You Win! Your ${userChoice} Beats ${computerChoice} `;
      msg.style.backgroundColor = "green";
    } 
    
    else if (userChoice === "scissor" && computerChoice === "rock") {
        comScore++;
        computerScoreCount.innerText = comScore;
      console.log("Computer Win the Game");
      msg.innerHTML = `You Lose! your ${userChoice} Lost By ${computerChoice}`;

      msg.style.backgroundColor = "red";
    } 
    else if (userChoice === "paper" && computerChoice === "scissor") {
        comScore++;
        computerScoreCount.innerText = comScore;
      console.log("Computer Win the Game");
      msg.innerHTML = `You Lose! your ${userChoice} Lost By ${computerChoice}`;

      msg.style.backgroundColor = "red";
    } else if (userChoice === "scissor" && computerChoice === "paper") {
        userscore++;
        UserScoreCount.innerText = userscore;
      console.log("User Win the Game");
      msg.innerHTML = `You Win! Your ${userChoice} Beats ${computerChoice} `;
      msg.style.backgroundColor = "green";
      ;
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked",Choice);
    playGame(userChoice);
  });
});
