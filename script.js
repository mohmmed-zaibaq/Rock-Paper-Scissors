const handOptions = {
    "rock": "images/rock.png",
    "paper": "images/paper.png",
    "scissors": "images/scissors.png"
  }
  
  let Result = 0;
  
  const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
  
   
    document.getElementById("userPickImage").src = handOptions[hand];
  
    pickComputerHand(hand);
  };
  
  const pickComputerHand = (hand) => {
      let hands = ["rock", "paper", "scissors"];
      let cpHand = hands[Math.floor(Math.random() * hands.length)];
      
    
      document.getElementById("computerPickImage").src = handOptions[cpHand]
      
      referee(hand, cpHand);
  };
  
  const referee = (userHand, cpHand) => {
    if (userHand == cpHand ) {
      setDecision("Its a draw!")
    }
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("You lose, sucker!");
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setResult(Result + 1);
    }
    if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setResult(Result + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("You lose, sucker!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
      setDecision("You lose, sucker!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setResult(Result + 1);
    }
  };
  
  const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  }
  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  }
  
  const setResult = (newResult) => {
    Result = newResult;
    document.querySelector(".Result h1").innerText = newResult;
  }
  