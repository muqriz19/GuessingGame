var gameRunning = false;
var randomNumber;
var playerLives = 5;

function startGame() {

    /*
        Set the game variables

    */
    document.getElementById('messages').innerHTML = "What is the random number?";
    document.getElementById('playerLives').innerHTML = playerLives;
    document.getElementById('playerLivesMessage').style.display = "block";
    gameRunning = true;
    randomNumber = Math.trunc(Math.random() * 10 + 1);


    //console.log(randomNumber);

}

function guessNumber() {

    if (randomNumber === undefined) {
        document.getElementById('messages').innerHTML = "Random number has not been generated... Click the \"Generate Random Number\" button to do so.";

    } else {

        var guessElement = document.getElementById('guesses');

        var guess = Number(guessElement.value);
        console.log(guess);

        if (guess === randomNumber) {
            document.getElementById('messages').innerHTML = "Correct! You guessed the number correct!";

        } else {
            document.getElementById('messages').innerHTML = "Keep guessing...";
        }
    }
}