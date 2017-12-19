var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1Text = document.querySelector("h1 span");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector(".reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButtons();
	setUpGame();
	resetColors();
}

function setUpModeButtons() {
	//Mode Button Listeners
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			resetColors();
		});
	}
}

function setUpGame() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct!"
				h1.style.backgroundColor = clickedColor;
				reset.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function resetColors() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	h1Text.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "#7a7ae0";
	messageDisplay.textContent = "";
	reset.textContent = "New Colours";
}

// easy.addEventListener("click", function() {
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	h1Text.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hard.addEventListener("click", function() {
// 	easy.classList.remove("selected");
// 	hard.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	h1Text.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	}
// });

h1Text.textContent = pickedColor;


reset.addEventListener("click", function() {
	resetColors();
});

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}