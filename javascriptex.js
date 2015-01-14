Javascript Functions

Exercise #3.2

var name = prompt("What is your first name?");
var lastname = prompt("What is your last name?");
alert("Welcome back my dearest" + " " + name + " " + lastname);


#################################################################

Exercise #3.3

var name = prompt("What is your first name?");
var lastname = prompt("What is your last name?").toUpperCase();
alert("Welcome back my dearest" + " " + name + " " + lastname);


##################################################################

Exercise #4

var entry = prompt("ID and Age")
if (entry >=21 && entry <= 100) {
	alert("You may pass, drinks are half off till 9pm")
} else {
	alert("Get the hell out of here before I call the 5 - 0 on you punk")
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Extension 

var marco = "Marco"
var gene = "Gene"
var gilbert = "Gilbert"

var reservations_new = [marco, gene, gilbert]
var index = 0
var answer = prompt("Name on the reservation please")

while(index < 3) {
	if(reservations_new[index] == answer) {
		console.log("Welcome")
	} else if(reservations_new[index] !== answer) {
		console.log("you do not have a reservation")
	} else {
		console.log("that reservation has already been used");
	}
	index += 1
}

// while(index < 3 && reservations_new == answer) {
// 	console.log(reservations_new[index])
// 	index += 1
// }
// if (reservation == marco || reservation == gene || reservation == gilbert) {
// 	alert("Right this way sir");
// } else {
// 	alert("we do not have that reservation on file");
// }

// if (var marco= Marco || Gene || Gilbert) {
// 	alert("Right this way sir")
// } else {
// 	alert("we do not have that reservation on file")
// }

// var x = ["marco", "gene", "mateo", "gilbert"]
// if(x == x) {
// 	return x
// } else {
// 	return nil
// }

var x = ["marco", "gene", "mateo", "gilbert"]
var index = 0
while (["marco", "gene", "mateo", "gilbert"] += 4)
while(x.length <= 4){
	alert(x)
}

need help structuring this one.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Review Exercise #2

var value = prompt("PLease give input a number")
	if (value%7 == 0) {
		alert("You chose a lucky number, good for you! Now scram!!!") 
	} else if (value%2 == 0) {
		alert("You are even steven my friend, NOW SCRAM!!!")
	} else {
		alert("Not your lucky day huh.....")
	};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Review Exercise #2.1 

var slap = function {
  alert('SLAP');
};
slap();

//correct the syntax

var slap = function () {
  alert('SLAP');
};
slap();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Review Exercise #2.2

var kick = function (name) {
  alert(name ' reproaches your behavior.');
};
kick('Billy');

//correct the syntax

var kick = function (name) {
  alert(name + ' reproaches your behavior.');
};
kick('Billy');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Exercise #2.3

var doubleIt = function (x) {
  alert(X + ' times two is ' + x);
};
doubleIt(8);

//find the two logical errors

var doubleIt = function (x) {
  alert(x + ' times two is ' + x*x);
};
doubleIt(8);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Exercise #2.4

var greet = function () {
  alert("Welcome, " + name);
};
greet('Bob');

//fix the one logical errors

var greet = function (x) {
  alert("Welcome, " + x);
};
greet('Bob');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Exercise #3.1

var yell = function (x) {
	alert(x.toUpperCase());
}

yell("MaRcOs")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Exercise #3.2

var divideBy = function(x, y) {
	alert(x / y);
}

var result = divideBy(50, 2);
console.log('Result should be 25:', result);

result = divideBy(40, 10);
console.log('Result should be 4:', result);

result = divideBy(99, 3);
console.log('Result should be 33:', result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Exercise #3.3

var welcome = function(name1, name2) {
	if (name1 && name2) {
		console.log("Welcome " + name1 + " and " + name2 + "!")
	} else if (name1) {
		console.log("Welcome " + name1 + "!")
	} else {
		nil
	};
};

var result = welcome('Alice', 'Bob');
console.log('Result should be "Welcome, Alice and Bob!"', result);

var result = welcome('Alice');
console.log('Result should be "Welcome, Alice!"', result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Exercise #4.1

var secretNumber = parseInt(Math.random() * 100, 10) + 1;
console.log(secretNumber)

var userGuess = prompt("Give me a number")

function myFunction(x) {
	if (Math.floor(x) === secretNumber) {
		alert("You guessed the number!!!!! CONGRATULATIONS!!!! YOU WIN A MILLION DOLLARS! not!");
	} else if (x > secretNumber ) {
		alert("It is a lower number!!");
		var userGuess = prompt("Give me a number")
		myFunction(userGuess);
	} else if (x < secretNumber) {
		alert("It is a higher number");
		var userGuess = prompt("Give me a number")
		myFunction(userGuess);
	} 
}

myFunction(userGuess)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

