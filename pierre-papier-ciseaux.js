// CHOIX DE L'ORDINATEUR
let choise = ["pierre", "papier", "ciseaux"];
// CHOIX DE L'UTILSITATEUR
let playerChoise = prompt("Choississez votre mot parmis pierre papier ciseaux");

function getComputerChoise() {
  let computerSelection = Math.floor(Math.random() * 3);
  return choise[computerSelection];
}

const computerSelection = getComputerChoise();
const playerSelection = playerChoise.toLowerCase();
let result = "";

// COMPARAISON DES RESULTATS
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    result = "EGALITE";
  } else if (
    (playerSelection === "pierre" && computerSelection === "ciseaux") ||
    (playerSelection === "ciseaux" && computerSelection === "papier") ||
    (playerSelection === "papier" && computerSelection === "pierre")
  ) {
    result = "VOUS AVEZ GAGNE";
  } else {
    result = "VOUS AVEZ PERDU";
  }
  return result;
}

console.log(playRound(playerSelection, computerSelection));
