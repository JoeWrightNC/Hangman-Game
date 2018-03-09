// Javascript

//DOM Elements to be interactive with game code
var $newGameButton = document.getElementById("newGameButton");
var $artImg = document.getElementById("artImg");
var $placeholders = document.getElementById("placeholders");
var $guessed = document.getElementById("guessed");
var $guessesLeft = document.getElementById("guessesLeft")
var $vanGoghImg = document.getElementById("vanGoghImg");
var $vanGoghSays = document.getElementById("vanGoghSays");
var $hangManSays = document.getElementById("hangManSays");
var $hintBox = document.getElementById("hintBox");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");

//set initial variables to be used
var wordBank = ["Basquiat", "Monet", "Munch", "Max Beckmann", "Andy Warhol", "Jackson Pollock", "Kehinde Wiley", "Picasso", "Dali"]
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var gameRunning = false;
var pickedWord = "";
var selectedWordArr = [];
var guessedBank = [];
var wrongBank = [];
var vanGoghSays = "I'm going to do it, I'm going to cut off my ear for love"

//when start game is clicked each time
$newGameButton.addEventListener('click', newGame)

function newGame() {
  gameRunning = true;
  guessesLeft = 7;
  guessedBank = [];
  wrongBank = [];
  selectedWordArr = [];
  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i] === " ") {
        selectedWordArr.push(" ");
        }
      else {
        selectedWordArr.push("_");
      }
    }
  if (pickedWord.toLowerCase() === "basquiat") {
    artImg.src = "./assets/images/basquiat.jpg";
    hintBox.textContent = "Hint: This artist rose to fame through his friendship with Andy Wawrhol!";
  }
  else if (pickedWord.toLowerCase() === "monet") {
    $artImg.src = "./assets/images/monet.jpg";
    hintBox.textContent = "Hint: After an art exhibition in 1874, a critic insultingly dubbed his painting style 'Impressionism' since it was more concerned with form and light than realism.";
  }
  else if (pickedWord.toLowerCase() === "munch") {
    $artImg.src = "./assets/images/munch.jpg";
    hintBox.textContent = "Hint: I'm best known for 'the scream', though noone reads my poem I wrote to go with it!";
  }
  else if (pickedWord.toLowerCase() === "max beckmann") {
    $artImg.src = "./assets/images/beckmann.png";
    hintBox.textContent = "Hint: I was called a 'cultural Bolshevik' and dismissed from teaching at the Frankfurt Art School by the Nazis.";
  }
  else if (pickedWord.toLowerCase() === "andy warhol") {
    $artImg.src = "./assets/images/warhol.jpg";
    hintBox.textContent = "Hint: I invented pop art. Like it or hate it, I changed everything forever.";
  }
  else if (pickedWord.toLowerCase() === "jackson pollock") {
    $artImg.src = "./assets/images/pollock.jpg";
    hintBox.textContent = "Hint: splatter splatter splatter splatter ugh you just don't get me";
  }
  else if (pickedWord.toLowerCase() === "kehinde wiley") {
    $artImg.src = "./assets/images/wiley.jpg";
    hintBox.textContent = "Hint: I painted President Obama's official portrait!";
  }
  else if (pickedWord.toLowerCase() === "picasso") {
    $artImg.src = "./assets/images/picasso.jpg";
    hintBox.textContent = "Hint: Many folks credit me with cubism but miss out on the fact I had many groundbreaking periods of art before that era!";
  }
  else if (pickedWord.toLowerCase() === "dali") {
    $artImg.src = "./assets/images/dali.jpg";
    hintBox.textContent = "Hint: Your ex probably has a tattoo of my signature sky elephants somewhere";
  }

  $vanGoghImg.src = "./assets/images/VanGogh7.jpg"
  $guessesLeft.textContent = guessesLeft;
  $placeholders.textContent = selectedWordArr.join("");
  $guessed.textContent = wrongBank;
  $vanGoghSays.textContent = "I'm going to do it, I'm going to cut off my ear for love";
}

//playing the game
document.onkeyup = function(e) {
  if(e.keyCode >=65 && e.keyCode <= 90) {
    letterGuess(e.key);
  }
  else {
    $hangManSays.textContent = "That isn't a letter!";
  }
}

function letterGuess(letter) {
  if (gameRunning === true && guessedBank.indexOf(letter) === -1) {
    guessedBank.push(letter);
    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
        selectedWordArr[i] = pickedWord[i];
         $hangManSays.textContent = "The Game Says: Good Job!";
      }
    }
    $placeholders.textContent = selectedWordArr.join('')
    letterWrong(letter)
  }
  else {
    if (gameRunning === false) {
      $hangManSays.textContent = "The Game Says: Start a new game to play again!";
    }
    else {
      $hangManSays.textContent = "The Game Says: You've already guessed that letter!";
    } 
  }
}

function letterWrong(letter) {
  if (selectedWordArr.indexOf(letter.toLowerCase()) === -1 && selectedWordArr.indexOf(letter.toUpperCase()) === -1) {
    guessesLeft--;
    wrongBank.push(letter);
    $guessed.textContent = wrongBank.join(" ");
    $guessesLeft.textContent = guessesLeft;
    $hangManSays.textContent = "The Game Says: Too Bad; You're Wrong!"
    if (guessesLeft === 6) {
      $vanGoghImg.src = "./assets/images/VanGogh6.jpg";
      $vanGoghSays.textContent = "Van Gogh Says: Ouch well that smarts a bit";
    }
    else if (guessesLeft === 5) {
      $vanGoghImg.src = "./assets/images/VanGogh5.jpg";
      $vanGoghSays.textContent = "Van Gogh Says: Oh boy, really feeling it now";
    }
    else if (guessesLeft === 4) {
      $vanGoghImg.src = "./assets/images/VanGogh4.jpg";
      $vanGoghSays.textContent = "Van Gogh Says: Could you please mind your guesses this hurts!";
    }
    else if (guessesLeft === 3) {
      $vanGoghImg.src = "./assets/images/VanGogh3.jpg";
      $vanGoghSays.textContent = "Van Gogh Says: Oh Nooo, I think I've made a mistake";
    }
    else if (guessesLeft === 2) {
      $vanGoghImg.src = "./assets/images/VanGogh2.jpg";
      $vanGoghSays.textContent = "Van Gogh Says: REALLY REALLY FEELING IT NOW OUCH OUCH";
    }
    else if (guessesLeft === 1) {
      $vanGoghImg.src = "./assets/images/VanGogh1.jpg";
      $vanGoghSays.textContent = "Van Gogh Says: OH FOR GODS SAKE JUST GET IT OFF ALREADY";
    }
  }
  checkLose() ;
}

//winning and losing
function checkLose() {
  if (guessesLeft === 0) {
    losses++;
    gameRunning= false;
    $losses.textContent = losses;
    $vanGoghImg.src = "./assets/images/VanGogh.jpg";
    $vanGoghSays.textContent = "THIS WAS STUPID WHY WOULD I DO THIS UGH MUH EARRR";
    $hangManSays.textContent  = "You Lose, But Try Again! Press the Start A New Game button below";
  }
  else {
  checkWin() ;
  }
}
function checkWin() {
  if (pickedWord.toLowerCase() === selectedWordArr.join("").toLowerCase()) {
    wins++;
    gameRunning: false;
    $wins.textContent = wins;
    $vanGoghSays.textContent = "Ugh, I can't believe I started to cut my ear off and can't even go through with it, so lame";
    $hangManSays.textContent  = "You Win; Press Start A New Game to Play Again!";
  }
}

