/* A. Q + A
========================================================================================================================
(Q) How do we assign a value to a variable?
(A) Using the = operator you can assign value to a variable
(let 9 = hat)
========================================================================================================================
(Q) How do we change the value of a variable?
(A) let x = 10
    let x = 30
========================================================================================================================
(Q) How do we assign an existing variable to a new variable?
(A) let x = 20
    let x = 40
========================================================================================================================
(Q) Remind me, what are declare, assign, and define?
(A declare) Declaring specifies the variable and data type
(A assign) Assign copies all enumerable own properties from one or more source objects to a target object.
(A define) Define is used to load the modules (module can be an object, function, class or a code which is executed after loading a module).
========================================================================================================================
(Q) hat is pseudocoding and why should you do it?
(A) Pseudocode is a logical walkthrough of what a computer program will do in prforming its function.  However instead of being written in code it is writen in litaral lanuage.  This allows you and others to see what a program should be doing and how best to approch it before writing the acual code. 
========================================================================================================================
(Q) What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
(A) 20% to 25%
*/

/* B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

(Q) Create a variable called firstVariable
(A) let firstVariable 
========================================================================================================================
(Q) Assign it the value of the string "Hello World"
(A) let firstVariable = "Hello World"
========================================================================================================================
(Q)Change the value of this variable to some number
(A)firstVariable = 18
========================================================================================================================
(Q) Store the value of firstVariable in a new variable called secondVariable
(A) let secondVariable = firstVariable
========================================================================================================================
(Q) Change the value of secondVariableto any string.
(A)secondVariable = "New Value"
========================================================================================================================
(Q)What is the value of firstVariable?
(A)18
========================================================================================================================
(Q) Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
(A) let yourName = "Jamel"
    console.log(`Hello, my name is ${yourName}.`);*/

/*======================================================================================================================
C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.logconsole.log(false || false || false || false || false || true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48')(true);


=======================================================================================================================
*/




/* D. The farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

let animal = "cow";
    if (animal == "cow"){
        console.log("mooooo")
    }
    else  {
        console.log("hey you are not a cow!")
    }
Commit
=============================================================================================================================*/

/* Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = 16;
    if (age >= 16){
        console.log("Here are the keys!");
    }
    else if(age < 16){
        console.log("Sorry, you're too young.");
    }
   

    =============================================================================================================================
    */

   /* II. Loops

   
(Q) Write a loop that will print out all the numbers from 0 to 10, inclusive
(A) for(i = 1; i <= 100; i++) {
	if((i % 2) == 0) {
		console.log(i)
	}
}
==========================================================================================================================================
(Q) Write a loop that will print out all the numbers from 10 up to and including 400
(A)for(i = 1; i <= 100; i++) {
	if((i % 2) == 0) {
		console.log(i + " is an even number")
	}
}
==========================================================================================================================================
(Q) Write a loop that will print out every third number starting with 12 and going no higher than 4000
(A)for(i = 10; i <= 4000; i++) {
	if((i % 2) == 0) {
		console.log(i)
	}
}
==========================================================================================================================================
*/

/*B. Get even
(Q) Print out the numbers that are within the range of 1 - 100
(A)for(i = 1; i <= 100; i++) {
	if((i % 2) == 0) {
		console.log(i)
	}
}
==========================================================================================================================================
(Q)Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
(A)for(i = 1; i <= 100; i++) {
	if((i % 2) == 0) {
		console.log(i + ` Its even baby!`)
	}
}
==========================================================================================================================================
*/

/*C. Give me Five
(Q)For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
(A)for(i = 0; i <= 100; i++) {
	if((i % 5) == 0) {
		console.log("I found a " + i + ". Gimme a High FIve!")
	}
}


(Q) Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
(A)for(i = 0; i <= 100; i++) {
	if((i % 5) == 0) {
		console.log("I found a " + i + ". Up top!");
	} else if((i % 3) == 0) {
		console.log("I found a " + i + ". Third Wheel.")
	}
}
======================================================================================================================================
*/

/* D. Savings account
(Q) Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account
(A)for(bank_account = 0; bank_account <= 55; bank_account++) {
	console.log(bank_account += 1)
}

(Q)You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers 
//between 1 - 100 multiplied by 2.
(A) let bank_account = 0;

for(bank_account = 0; bank_account <= 10100; bank_account++) {
	console.log(bank_account += 1)
}

========================================================================================================================================
*/

/*MULTIPLES OF 3 AND 5
(Q) If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

find all the multiples of 3 and 5
let multipleOfThree = [].reduce(add, 0);
let multipleOfFive = []. reduce(add, 0);
let sum = 0;

(A) for(i = 0; i <= 1000; i++) {
	if((i % 5) == 0) {
		sum += i;
	} else if((i % 3) == 0) {
		sum += i;
	}
}
==========================================================================================================================================
*/

/*EASY DOES IT
(Q)  Create an array that contains three quotes and store it in a variable called quotes.
(A) let quotes = ["Spin to win"], ["Winner Winner, Chicken Dinner!"], ["Bing Bang Bong"]


RANDOM
const randomThings = [1, 10, "Hello", true]
(Q) How do you access the 1st element in the array?
(A) randomThings[0];

(Q) Change the value of "Hello" to "World".
(A) randomThings[2] = "World";

(Q) Check the value of the array to make sure it updated the array.
(A) console.log(randomThings) //<-- result: [1, 10, "World", true]


WE'VE GOT CLASS
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
(Q) What would you write to access the 3rd element of the array?
(A) ourClass[2]

(Q) Change the value of "Github" to "Octocat"
(A) ourClass[2] = "Octocat";

(Q) Add a new element, "Cloud City" to the array.
(A) ourClass.push("Cloud City");


MIX IT UP
const myArray = [5 ,10 ,500, 20]

(Q) using the push method, add the string "Egon" to the end of the array.
(A) myArray.push("Egon");

(Q) using a method, remove the string from the end of the array
(A) myArray.pop();

(Q) using the unshift method, add the string "Bob Marley" to the beginning of the array
(A) myArray.unshift("Bob Marley");

(Q) using a different method, remove the string from the beginning of the array
(A) myArray.splice(0,1);

(Q) use the reverse method on this array
(A) myArray.reverse();


BIGGIE SMALLS - write an if..else statement:
(Q) console.log little number if the number is entered is less than 100
(A) If the number entered is 100 or more, alert big number.
num = 5;

if(num < 100) {
	console.log("little number")
} else {
	console.log("big number")
}


MONKEY IN THE MIDDLE - write an if...else if...else statement:
(Q) console.log little number if the number entered is less than 5.
 If the number entered is more than 10, log big number.
 Otherwise, console.log "monkey". 
num = 8;

(A) if(num < 5) {
	console.log("little number")
} else if(num > 10) {
	console.log("big number")
} else {
	console.log("monkey")
}


(Q) WHAT'S IN YOUR CLOSET?
(A) const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

(Q) Thom's closet is more complicated. Check out this nested data structure!!
(A) const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
(Q) log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
(A) console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

(Q) Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
(A) kristynsCloset.splice(0,1);
let kristynShoe = "left shoe";

(Q) Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
(A) kristynsCloset.splice(5, 0, "raybans");

(Q) Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
(A) kristynsCloset[4] = "stained knit hat";

(Q) Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
(A) thomsCloset[0][0]; //<-- result: "grey button-up"

//6. In the same way, access one item from Thom's pants array.
thomsCloset[1][1]; //<-- result: "jeans"

(Q) Access one item from Thom's accessories array.
(A) thomsCloset[2][1];

(Q) Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
(A) console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!")

(Q) Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
(A) thomsCloset[1][2] = "Footie Pajamas"


FUNCTIONS
(Q) printGreeting
(A) const printGreeting = (name) => {
	return ("Hello there, " + name + "!")
}

(Q) reverseWordOrder
(A) const reverseWordOrder = (input) => {
	let newString = input.split(" ");
	let reversedString = "";
	for(i = 0; i < newString.length; i++) {
		reversedString = newString[i] + " " + reversedString
	}
	finalString = reversedString.slice(0, reversedString.length - 1)
	return finalString
}

(Q) calculate
const calculate = (num1, num2, operation) => {
	if(operation === "add") {
		return num1 + num2;
	} else if(operation === "sub") {
		return num1 - num2;
	} else if(operation === "mult") {
		return num1 * num2;
	} else if(operation === "div") {
		return num1 / num2;
	} else if(operation === "exp") {
		return Math.pow(num1, num2);
	} else {
		return "Sorry, that's not an operation."
	}
}


(A) const printCool = (name) => {
	return name + " is cool."
}


const calculateCube = (num) => {
	return (num * num * num)
}

(Q)
(A) const isAVowel = (letter) => {
	const lowerLetter = letter.toLowerCase();
	if(lowerLetter === "a" || lowerLetter === "i" || lowerLetter === "o" || lowerLetter	=== "u") {
		return true
	} else {
		return false
	}
}

(Q)
(A) let lengths = [];
const getTwoLengths = (s1, s2) => {
	lengths[0] = s1.length;
	lengths[1] = s2.length;

	return lengths;
}

(Q)
(A) const getMultipleLengths = (arrayOfStrings) => {
	//need function to create a new array
	const arrOfLengths = [];
	//loop through the arrayOfStrings and push each 
	for(let i = 0; i < arrayOfStrings.length; i++) {
		arrOfLengths.push(arrayOfStrings[i].length)
	}
	return arrOfLengths;
}

(Q)
(A) const maxOfThree = (num1, num2, num3) => {
	const largestNum = Math.max(num1, num2, num3)
	return largestNum

}

(Q) 
(A) const printLongestWord = (arrOfStrings) => {
	let lgth = 0;
	let longestString = "";

	for (let i = 0; i < arrOfStrings.length; i++) {
		if(arrOfStrings[i].length > lgth) {
			lgth = arrOfStrings[i].length;
			longestString = arrOfStrings[i]
		}

	} return longestString
}

(Q)
(A) const transmogrify = (n1, n2, n3) => {
	newNum = n1 * n2;
	return Math.pow(newNum, n3)
}


OBJECTS
List and describe each individual piece of syntax that we use to construct an object. 
Don't leave anything out! The list is finite.
To construct an object, first declare with either let or const followed by the name of the objects. 
next list the assignment operator followed by curly braces. The curly braces are used to list the properties of the
objects, or defines the objects. List the key-value pairs to describe the object. A comma follows each key-value pair,
 except for the last property listed.
let myObject = {
	color: "blue",
	size: "big",
	height: "tall",
	age: 45
}

Me
(Q) Create an empy object called me and Assign it properties for name, age, and email with corresponding values.
(A) const me = {
	name: "Kristyn",
	age: 98,
	email: "kristyn@foo.bar"
}

 Using dot notation, access the name property in your object.
me.name; //<--- returns "Kristyn"

 Without writing directly into the object, update the value of age to be 1000 years old.
me.age = 1000;

 Using dot notation, verify that age has been updated.
me.age; //<--- returns 1000


me["place of residence"] = "Bloomington";


me["place of residence"]; //<--- returns "Bloomington"


Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
(Q) Given the slimer object:
 		What would you write to access the name and console.log it?
(A) console.log(monster.name)

(Q) 		What would you write to change the type to 'creature' (without changing it inside the object)
(A) monster.type = "creature";

(Q) 		What would you write to add a key to the object called age, and set the age to 6?
(A) monster.age = 6;

 		console.log the object to make sure type is creature, and age is 6
console.log(monster.type) //<--- returns "creature"
console.log(monster.age) //<--- returns 6


Ogres
(Q) How would you model your adventurer? Your adventurer will want a name and hitpoints. 
What else would your adventurer need?
(A) const adventurer = {
	name: "Russell",
	hitpoints: 160,
	age: 25,
	belongings: "shield", "sword", "canteen"
}

(Q) How would you model an ogre? Your ogre will want hitpoints.
(A) const ogre = {
	hitpoints: 200,
	color: "greenish",
	belongings: "club",
	type: "mean"
}

(Q) Write a very small program that will simulate a battle between your adventurer and an ogre. 
 You can use the same techniques you used in your landscaping game from the weekend.
 When your adventurer's hitpoints reach 0 the game is over.
(A) const gameOver = (adventurer.hitpoints, ogre.hitpoints) => {
	if(adventurer.hitpoints === 0) {
		return "Game over: You lose!"
	} else if(ogre.hitpoints === 0) {
		return "Game over: You win!"
	}
}

EXTRA STUFF
(Q) Mama cat
(A) const cat1 = {
	name: "Brady",
	breed: "bengal",
	age: 5
}

// console.log the cat's age
console.log(cat1.age)

// // console.log the cat's breed
console.log(cat1.breed)

 Papa cat
(Q) Define an object called cat2 that also contains the properties: name, breed, age (a number)
(A) const cat2 = {
	name: "Tom",
	breed: "tabby",
	age: 6, 
}

Combine Cats!
(Q) Write a function combineCats that has two parameters mama, and papa. 
The function will take two arguments -- each a cat object.

(A) const combineCats = (cat1, cat2) => {
	const cat3 = {};
	cat3.name = cat2["name"] + " " + cat1["name"]
	cat3.age = 1
	cat3.breed = cat1.breed + "-" + cat2.breed
	return cat3
}

Cat brain bender
const moreCats = combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))

console.log(combineCats(moreCats, moreCats))*/
