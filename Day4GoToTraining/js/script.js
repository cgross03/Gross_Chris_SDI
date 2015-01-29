/**
 * GoTo Training Day 4
 * Created by Chris on 1/28/15.
 */


// alert ("Testing to see if connected");

// Create a file that gives us a random number between 2 numbers
// Ask the user for a minimum number
var min = prompt ("Lets find a random number between 2 numbers.\nPlease enter a minimum number.");

//Validate user prompt
/*
The old way = if statement
if (min===" || inNaN)){
    //reprompt the user
    min = prompt (Please do not leave blank and only use numbers.");
 */

// New way of validating = while loops

while(min==="" || isNaN(min)){
    min = prompt ("Please do not leave blank and only use numbers.\nPlease type in minimum value");
}


// Prompt the user for a maximum number
//Do While loop
/*
do{
code to run
}while(condition to test)
 */

do{
    //Runs at least once
    //Prompt user
    var max = prompt ("Please enter max value:");
} while(max==="" || isNaN(max));

/*
function functionName(parameters) {
    code goes here
}
 */

//Create a function that will give us a random number
function randomizr(minNum, maxNum){

    //Math.random() * (max number - max number) + min number
    var randomNumber = Math.round( Math.random() * (maxNum - minNum) + Number(minNum));
    //console.log(randomNumber);
    //return value to main code - does not return variable
    return randomNumber;
}

//Function call - starts the function
//catch the returned value from the function

var results = randomizr(min,max);
console.log (results);


//I want 15 random numbers?

// use a loop - for loop -
//for Declare a variable; condition to test: increment to change{code}

for(var i = 0; i < 15; i++){
    console.log(randomizr (min, max));
}

//Validate specific words?
//Ask user yes or no question
var happy = prompt("Are you happy today? Please answer yes or no or maybe.");

happy = happy.toLowerCase();

// uppercase matters!
while( happy != "yes" && happy != "no" && happy != "maybe"){
    //reprompt
    happy = prompt("Only type in yes or no. Are you happy?");
}


var textOnly = prompt ("Please type in your name");

while(!isNaN(textOnly)){
    textOnly = prompt ("Please only use text, no numbers!")
}