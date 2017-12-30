// JavaScript Practice //

// console.log("123 Test");

// var firstName = "Kieran";
// var lastName ="Smith";

// console.log(firstName + " " + lastName)

// var numberOne = 3;
// var numberTwo = 21;
// var numberThree = 40;

// console.log(numberThree % numberOne);

// var userName = prompt("What is your username?");

// alert("hello " + userName); 

// JS Learning //



// var firstName = prompt("What is your first name?");
// var lastName = prompt("what is your last name?");
// var fullName = firstName + " " + lastName;
// var age = prompt("What is your age?");
// var year = "2017";
// var days = age * 365

// console.log("Your full name is " + fullName);
// console.log("You are " + age + " years old");
// console.log("You have been alive for " + days + " (roughly) days.");
// console.log("You were born in " + (year - age));



// var x = 6;
// var y = 9;

// console.log(x < 10 && y > 4);
// console.log(x > 5 && y !== 9);
// console.log(x !== undefined && y == 9);
// console.log(x == 6 || y == 8);
// console.log(!(x === y)); 




// var age = Number(prompt("What is your age?"));

// if(age < 18) {
// 	console.log("You are too young to enter");
// }

// else if(age < 21) {
// 	console.log("You are old enough to enter, but cannot drink.");
// }

// else {
// 	console.log("You can enter and drink.");
// }

// if(age < 0) {
//  console.log("Come back once you're out of the womb");
// }

// if(age === 21) {
// 	console.log("Happy Birthday!");
// }

// if(age % 2 !== 0) {
//  	console.log("Your age is odd!");
// }

// if(age % Math.sqrt(age) === 0) {
//   	console.log("Your age is a perfect square!");
// } 



// var stringGuessNumber = prompt("Guess the number!");
// var guessNumber = Number(stringGuessNumber);

// targetNumber= 89


// 	if (guessNumber === targetNumber) {
// 		alert("You got it!");
// 	} 

// 	else if (guessNumber < targetNumber) {
// 		alert("Too low, try again!")
// 	}

// 	else {
// 		alert("Too high, try again!");
// 	}	


// var count = 1;
// while (count < 7) {
// 	console.log("count is: " + count);
// 	count+=2;
// }

// var str = "hi there";
// var count = 0;

// while (count < str.length) {
// 	console.log(str[count]);
// 	count++;
// } 



// console.log("Print all numbers between -10 and 19");
// var num = -10;

// while (num <= 19) {
// 	console.log(num);
// 	num++;
// }


// console.log("Print all even numbers between 10 and 40");
// var num2 = 10;

// while (num2 <= 40) {
// 	if (num2 % 2 === 0) {
// 		console.log(num2);
// 	}
// 	num2++;
// }

// console.log("Print all odd numbers between 300 and 333");
// var num3 = 300;

// while (num3 <= 333) {
// 	if (num3 % 2 !== 0) {
// 		console.log(num3);
// 	}
// 	num3++;
// }

// console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
// var num4 = 5;

// while (num4 <= 50) {
// 	if (num4 % 5 === 0 && num4 % 3 === 0) {
// 		console.log(num4);
// 	}
// 	num4++;
// }


// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert("YAY We made it.");

// var answer = prompt("Are we there yet?");

// while (answer.indexOf("yes") == -1 && answer.indexOf("yeah") == -1) {
// 	var answer = prompt("Are we there yet?");
// }

// alert("YAY We made it.");

// for (var count = 0; count < 6; count++) {
// 	console.log(count);
// }

// var name = "kieran";

// for(i = 0; i < name.length; i++) {
// 	console.log(name[i]);
// }

// console.log("Print all numbers between -10 and 19");
// for(i = -10; i <= 19; i++) {
// 	console.log(i);
// }

// console.log("Print all even numbers between 10 and 40");
// for(i = 10; i <= 40; i++ ) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// console.log("Print all odd numbers");
// for (i = 300; i <= 333; i++) {
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// }

// console.log("5 and 3");
// for (i = 5; i <= 50; i++) {
// 	if (i % 5 == 0 && i % 3 == 0) {
// 		console.log(i);
// 	}
// }

// function consoleLog() {
// 	console.log("Console Logged");
// }

// consoleLog();
// consoleLog();
// consoleLog();
// consoleLog();

// function squareIt(num) {
// 	console.log(num * num);
// }

// squareIt(10);



// function sayHello(name) {
// 	console.log("Hello " + name);
// }

// sayHello("jeff");


// function helloThere(person1, person2, person3) {
// 	console.log("Hello there " + person1);
// 	console.log("Hello there " + person2);
// 	console.log("Hello there " + person3);
// }

// helloThere("Bart", "Maggie", "Lisa");


// function square(x) {
// 	return x * x;
// }

// console.log(4 + " squared equals: " + square(4));

// var result = square(101);
// console.log(result);

// function capitalize(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var city = "london";
// var capital = capitalize(city);
// console.log(capital);



// FUNCTION DECLARATION
// function capitalize(str) {
// 	if(typeof str === "number") {
// 		return "That's not a string";
// 	}
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var city = "london";
// var capital = capitalize(city);
// console.log(capital);

// var num = 20;
// var capital = capitalize(num);
// console.log(capital)

// FUNCTION EXPRESSION 
// var capitalize = function(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }


// function isEven(num) {
// 	if (num % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// function isEven(num) {
// 	return num % 2 === 0;
// }

// function factorial(num) {
//  	var result = 1;
//  	for (var i = 2; i <= num; i++) {
//  		result *= i;
//  	}
//  	return result;
// }

// function factorial(num) {
// 	if (num === 0) {
// 		return 1;
// 	}
// 	var result = num;
// 	for(var i = num-1; i >= 1; i--) {
// 		result *= i;
// 	}
// 	return result;
// }

// function kebabToSnake(str) {
// 	var newStr = str.replace(/-/g , "_");
// 	return newStr;
// }

// function testingInterval() {
// 	console.log("Testing setInterval");
// }
// setInterval(testingInterval, 2000); 

// setInterval(function anon(){
// 	console.log("Test");
// 	console.log("123");
// }, 2000);

// var names = ["Kieran", "Georgina", "Jeff", "Vicky"];
// console.log(names);
// console.log(names[1] + " and " + names[3] + " are twins.");
// names[2] = "El Jefe";
// console.log(names[0] + " says: 'My name is " + names[2] + "'");
// names[4] = "Pablo";
// console.log(names);

// var nameGroup = [
// 	["Kieran", "Georgina", "Vicky"],
// 	["Sabrina", "Kevin", "Tyler", "Leo"],
// 	["Mike", "Will", "Eleven", "Dustin"]
// ];
// console.log(nameGroup[1][2] + " " + nameGroup[1][3]);


// // // Push/Pop - End of Array (Push = Add, Pop = Remove)
// // // Shift/Unshift - Front of Array (Unshift = Add, Shift = Remove)
// // // indexOf
// // // slice

// var colours = ["Red", "Blue", "Green", "Purple", "Beige"];
// colours.push("Pink");
// console.log(colours);
// // remove Pink
// var removedColour = colours.pop();
// console.log(removedColour);

// colours.unshift("Orange");
// var removedColour2 = colours.shift();
// console.log(removedColour2);
// console.log(colours);

// console.log(colours.indexOf("Blue"));
// console.log(colours.indexOf("Green"));

// var favColours = colours.slice(1, 3);
// console.log(favColours);

// var copyColours = colours.slice();
// console.log(copyColours);


// To Do List
// "new" - New Task
// "list" - List Tasks
// "quit" - Quit App



 // var colours = ["R", "G", "B", "Y", "C", "K"];

// // for(i = 0; i < colours.length; i++) {
// // 	console.log(colours[i]);
// // }


// // // // // forEach

// colours.forEach(function(colourList) {
// 	console.log("forEach working." + colourList);
// });

// function printColour(colour) {
// 	console.log("**********");
// 	console.log(colour);
// 	console.log("**********");
// }

// colours.forEach(printColour);


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// numbers.forEach(function(number) {
// 	if(number % 2 !== 0) {
// 		console.log("Odd Number! = " + number);
// 	}
// 	else if(number % 2 === 0) {
// 		console.log("Even Number! = " + number);
// 	}
// });


// var tasks = [];

// var input = prompt("What would you like to do?");

// while (input !== "quit") {
// 	if(input === "list") {
// 		listTasks();
// 	}	

// 	else if(input === "new") {
// 		addNewTask();		
// 	} 
// 	else if(input === "delete") {
// 		deleteTask();
// 	}
// 	input = prompt("What would you like to do?");
// }
// console.log("Ok, you quit.");

// function listTasks() {
// 	console.log("**********");
// 		tasks.forEach(function(todo, i) {
// 			console.log(i + ": " + todo);
// 		});
// 	console.log("**********");
// }
 
// function addNewTask() {
// 	var newTask = prompt("What is the task?");
// 	tasks.push(newTask);
// 	console.log("Task of: '" + newTask + "' added.");
// }

// function deleteTask() {
// 	var index = prompt("Which index number would you like to delete?")
// 	tasks.splice(index,1);
// 	console.log("Todo Index: " + index + " deleted.");	
// }

// function printReverse(arr) {
// 	for(var i = arr.length - 1; i >= 0; i--) {
// 		console.log(arr[i]);
// 	}
// }

// printReverse([1, 2, 3, 4]);


// function isUniform(arr) {
// 	var first = arr[0];
// 	for(var i = 0; i < arr.length; i++) {
// 		if(arr[i] !== first) {
// 			return false;
// 		} 
// 	}
// 	return true;
// }


// function sumArray(arr) {
// 	var total = 0;
// 	arr.forEach(function (element) {
// 		total+=element;
// 	});
// 	return total;
// }

// function max(arr) {
// 	var max = arr[0]
// 	for(var i = 1; i < arr.length; i++) {
// 		if(arr[i] > max) {
// 			max = arr[i];
// 		}
// 	}
// 	return max;
// }


// var colours = ["red", "green", "blue", "yellow"];

// colours.forEach(function(list) {
// 	console.log(list);
// });

// function myForEach(arr, func) {
// 	for(var i = 0; i < arr.length; i++) {
// 		func(arr[i]);
// 	}
// }

// var num = [1, 2, 3, 4, 7, 8, 10];

// myForEach(num, function(number){
// 	console.log(number);
// });

// Array.prototype.myForEach = function(func) {
// 	for(var i = 0; i < this.length; i++) {
// 		func(this[i]);
// 	}
// }

// num.myForEach(console.log);

// num.myForEach(function(number){ 
// 	console.log("number " + number)
// });

// var person = {
// 	firstName: "Travis",
// 	surName: "Scott",
// 	age: 25, 
// 	group: "GOOD"
// };

// console.log(person["firstName"] + " " + person["surName"]);
// console.log(person.firstName);

// person["age"] += 1;
// console.log(person.age);

// person.surName = "$cott";
// console.log(person.surName);

// console.log(person["firstName"] + " " + person["surName"]);

// var person2 = {};
// person2.firstName = "Kendrick";
// person2.surName = "Duckworth";
// console.log(person2);

// var person3 = new Object();
// person3.firstName = "Kanye";
// person3.surName = "West";
// console.log(person3.firstName + " " + person3.surName);

// var posts = [
// 	{
// 		title: "Test",
// 		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae sint quod, quibusdam quas exercitationem quia laborum eum ullam illo?",
// 		likes: ["Jeff", "Georgie", "Kieran"]
// 	},
// 	{
// 		title: "Test2",
// 		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ut?"
// 	}
// ]

// console.log("Post 1: " + posts[0].title + " - " + posts[0].body + " - " + posts[0].likes.length + " likes");


// var movies = [
// 	{
// 		movieTitle: "Kingsman",
// 		movieRating: 5,
// 		movieWatched: true
// 	},
// 	{
// 		movieTitle: "Pulp Fiction",
// 		movieRating: 5,
// 		movieWatched: false
// 	},
// 	{
// 		movieTitle: "In Time",
// 		movieRating: 2,
// 		movieWatched: false
// 	},
// 	{
// 		movieTitle: "The Circle",
// 		movieRating: 1,
// 		movieWatched: true
// 	}
// ]

// function buildString(movie) {
// 	var result = "You have ";
// 	if(movie.movieWatched){
// 		result+= "watched ";
// 	}
// 	else {
// 		result+= "not watched ";
// 	}
// 	result += "\"" + movie.movieTitle + "\"" + " - ";
// 	result += movie.movieRating + " stars."
// 	return result;
// }

// movies.forEach(function(movie){
// 	console.log(buildString(movie));
// }); 

// var obj = {
// 	name: "Jeff",
// 	age: 21,
// 	isNameJeff: true,
// 	add: function(x, y) {
// 		return x + y;
// 	}
// }

// var comments = ["Comment", "Message", "Post"];

// comments.print = function () {
// 	this.forEach(function(el) {
// 		console.log(el);
// 	});
// }




// var h1 = document.querySelector("h1");
// h1.style.color = "red";

// var body = document.querySelector("body");
// var isBlue = false;


// setInterval(function(){
//  if (isBlue) {
//  	body.style.background = "white";
//  } else {
//  	body.style.background = "pink";
//  }
//  isBlue = !isBlue;
// }, 5000 );


// var highlight = document.getElementById("highlight");
// var bold = document.getElementsByClassName("bold");
// var li = document.getElementsByTagName("li")
// var queryBold = document.querySelector(".bold");
// var queryHighlight = document.querySelector("#highlight");
// var queryLi = document.querySelectorAll("li");

// var queryP = document.querySelector("p");
// var idP = document.querySelector("p#id");
// var classP = document.querySelector("p.special");
// var classNameP = document.getElementById("id");

// // highlight.style.color = "red";
// idP.classList.add("highlightText");
// idP.classList.remove("highlightText");
// idP.classList.toggle("highlightText");
// idP.textContent;
// idP.textContent = "P1 Javascript Replaced";

// var ul = document.querySelector("ul");
// ul.textContent;
// ul.innerHTML;

// document.querySelector("h1").innerHTML = "<b>J</b>avascript <b>T</b>esting";

// var aImg = document.querySelector("a");
// aImg.getAttribute("href");
// aImg.setAttribute("href", "//www.kieran-smith.co.uk");

// var links = document.querySelectorAll("a")

// for(var i = 0; i < links.length; i++) {
//  links[i].setAttribute("href", "//www.bing.com");   
// }

var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function() {
	if(isPurple === false) {
		document.body.style.background = "purple";
	} else {
		document.body.style.background = "white";
	}
	isPurple = !isPurple;
}); 

// button.addEventListener("click", function() {
// 	document.body.classList.toggle("background-red");
// });

// button.addEventListener("click", changeBackground);

// function changeBackground() {
// 	button.classList.toggle("background-red");
// }

// var lis = document.querySelectorAll("li");

// for(var i = 0; i < lis.length; i++) {
// 	lis[i].addEventListener("click", function() {
// 		this.style.color = "pink";
// 	});
// }

