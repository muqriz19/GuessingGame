var gameRunning = false;
var randomNumber;
var playerLives = 5;
var playerGuess;

function startGame() {

    /*

     Sets up the game variables.

    */
    gameRunning = true;
    randomNumber = Math.trunc(Math.random() * 10 + 1);
    playerLives = 5;

    document.getElementById('guessButton').disabled = false;
    // Show or hide relevent section and/or messages.
    document.getElementById('gameSection').style.display = "block"
    document.getElementById('messages').innerHTML = "What is the random number?";
    document.getElementById('playerLives').innerHTML = playerLives;
    document.getElementById('playerLivesMessage').style.display = "block";


    //console.log(randomNumber);

}

function guessNumber() {
    var guessElement = document.getElementById('guesses');
    playerGuess = Number(guessElement.value);

    // Checks if random number has been generated or not.
    // Although not needed, just in case check.
    if (randomNumber === undefined) {
        document.getElementById('messages').innerHTML = "Random number has not been generated... Click the \"Generate Random Number\" button to do so.";

    } else {

        if (playerLives === 0) {
            document.getElementById('messages').innerHTML = "Game Over";
            document.getElementById('guessButton').disabled = true;
            document.getElementById('startButton').innerHTML = "Reset";


        } else {
            if (playerGuess !== randomNumber) {
                document.getElementById('messages').innerHTML = "Keep guessing...";
                playerLives -= 1;
                document.getElementById('playerLives').innerHTML = playerLives;
            } else {
                document.getElementById('messages').innerHTML = "Correct! You guessed the number correct!";
                document.getElementById('guessButton').disabled = true;
            }
        }


    }

    console.log(playerLives);
}