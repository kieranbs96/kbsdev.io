var person = {
	firstName: "Kieran",
	sayHi: function() {
		return "Hi " + this.firstName;
	},
	determineContext: function() {
		return this === person;
	},
	dog: {
		sayHello: function() {
			return "Hello " + this.firstName;
		},
		determineContext: function() {
			return this === person;
		}
	}
}

person.sayHi(); // Hello Kieran
person.determineContext(); // True

person.dog.sayHello(); // Hello undefined
person.dog.determineContext(); // false

person.dog.sayHello.call(person); // Hello Kieran
person.dog.determineContext(person); // true


var kieran = {
	firstName: "Kieran",
	sayHi: function() {
		return "Hi " + this.firstName;
	},
	addNumbers: function(a, b, c, d) {
		return this.firstName + " just calculated " + (a+b+c+d);
	}
}

var georgina = {
	firstName: "Georgie",
}

kieran.sayHi(); // Hi Kieran
// georgina.sayHi(); // undefined
kieran.sayHi.call(georgina); // Hi Georgie
kieran.sayHi.apply(georgina); // Hi Georgie
kieran.addNumbers(1, 2, 3, 4); // Kieran just calculated 10
kieran.addNumbers.call(georgina, 1, 2, 3, 4); // Georgina just calculated 10
kieran.addNumbers.apply(georgina,[1, 2, 3, 4]); // Georgina just calculated 10

var georginaCalc = kieran.addNumbers.bind(georgina,1,2,3,4);
georginaCalc(); // Georgie just calculated 10

var georginaCalc2 = kieran.addNumbers.bind(georgina,1,2); // Georgie just calculated 3
georginaCalc2(3,4); // Georgie just calculated 10

setTimeout(function() {
	console.log(georginaCalc2(10,20));
}, 10000);

var colt = {
	firstName: "colt",
	sayHi: function() {
		setTimeout(function() {
			console.log("Hi " + this.firstName)
		}.bind(this), 1000)
	}
}

// this inside setTimeout function causes it to become global
colt.sayHi(); // Hi Colt

function House(bedrooms, bathrooms, numSqft) {
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
	this.numSqft = numSqft;
}

var firstHouse = new House(2, 2, 1000);

function Dog(name, age) {
	this.name = name;
	this.age = age;
	this.bark = function() {
		console.log(this.name + " just barked");
	}
}

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 1);


function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}

function Motorcycle(make, model, year) {
	// Car.call(this, make, model, year);
	// Car.apply(this, [make, model, year]);
	Car.apply(this, arguments);
	this.numWheels = 2;
}

var newMotorcycle = new Motorcycle(2, 3, 4);


function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
	// this.turnOn = function() {
	// 	if(this.isRunning === false) {
	// 			this.isRunning = true;
	// 			return "Car has been turned on";
	// 	} else {
	// 		return "Car is already on";
	// 	}
	// }
	// this.turnOff = function() {
	// 	if(this.isRunning === true) {
	// 		this.isRunning = false;
	// 		return "Car has been turned off";
	// 	} else {
	// 		return "Car is already off";
	// 	}

	// }
	// this.honk = function() {
	// 	if(this.isRunning === true) {
	// 		return "beep!";
	// 	} else {
	// 		return "Car needs to be turned on to honk";
	// 	}
	// }
}

Vehicle.prototype.turnOn = function() {
	this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
	this.isRunning = false;
}

Vehicle.prototype.honk = function() {
	if(this.isRunning) {
		return "Beep!";
	}
}

var newVehicle = new Vehicle(1, 2, 3);

function outer(){
	var data = "closures are ";
	return function inner(){
		var innerData = "awesome";
		return data + innerData;
	}
}

outer()() // Closure are awesome

function outer2(a) {
	return function(b) {
		return a + b;
	}
}

var storeOuter = outer2(5);
storeOuter(10) // 15


function counter() {
	var count = 0;
	return function() {
		return ++count;
	}
}

var c = counter();
c // 	return function() { return ++count; }
c() // 1
c() // 2
c() // 3


function classRoom() {
		var instructors = ["Colt", "Elie"];
		return {
			getInstructors: function() {
				return instructors;
			},
			addInstructor: function(instructor) {
				instructors.push(instructor);
				return instructors;
			}
		}
}

course1 = classRoom();
course1.getInstructors() // ["Elie", "Colt"]
course1.addInstructor("Ian") // ["Elie", "Colt", "Ian"]
course1.getInstructors() // ["Elie", "Colt", "Ian"]

course2 = classRoom();
course2.getInstructors() // ["Elie", "Colt"]

