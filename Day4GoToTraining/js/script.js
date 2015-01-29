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

//Create a function that will give us a random number