var playerOne = document.querySelector("#p1");
var playerTwo = document.getElementById("p2");
var resetButton = document.querySelector("#reset")
var playerOneText = document.querySelector(".p1");
var playerTwoText = document.querySelector(".p2");
var numInput = document.querySelector("input[type='number']");
var playingTo = document.querySelector(".playingTo");
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var winningScore = 5;



playerOne.addEventListener("click", function() {
	if(!gameOver) {
		playerOneScore++;
		if(playerOneScore === winningScore) {
			gameOver = true;
			playerOneText.classList.add("winner");
		}
		playerOneText.textContent = playerOneScore;
	}
});

playerTwo.addEventListener("click", function() {
	if(!gameOver) {
		playerTwoScore++;
		if(playerTwoScore === winningScore) {
			gameOver = true;
			playerTwoText.classList.add("winner");
		}
		playerTwoText.textContent = playerTwoScore;
	}
});

resetButton.addEventListener("click", resetGame);

function resetGame() {
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneText.textContent = playerOneScore;
	playerTwoText.textContent = playerTwoScore;
	playerTwoText.classList.remove("winner");
	playerOneText.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function() {
	playingTo.textContent = this.value;
	winningScore = Number(this.value);
	resetGame();
});