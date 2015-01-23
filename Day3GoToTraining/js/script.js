/**
 * Created by Chris on 1/14/15.
 */

//Use an alert to test if the js file is connected to the html

//alert("Testing to see if connected")

// Check how many pairs are in a fruit bowl
// Create our "fruit bowl"
// Use an array, variable that holds variables

var bowlOfFruit = ["apple", "pear", "peach", "pear", "Banana", "tomato", "kiwi", "pear", "pear", "grape" ];
console.log(bowlOfFruit);

// Find out how many items are in an array
// Length property - how many items are in an array
// Dot Syntax = "use a period
console.log(bowlOfFruit.length);

// Call upon a specific item in the array - use index number
console.log(bowlOfFruit[0]);

var totalNumPears = 0;

//if(conditional to test) {code that will run if conditional is true}
// "6" == 6 TRUE - only looks at value
// "6" === 6 FALSE - data type is different
// = is assignment operator

/*
if else statement
if(condition)  {
    code to run if condition is true
    }else{
        Code to run if condition is false
        }
*/
// Test first item in the array
if(bowlOfFruit[0] === "pear"){
    console.log("this is a pear");
    totalNumPears++;
}  else {

    console.log("this is not a pear")
}
// Test second item in array
if(bowlOfFruit[1] === "pear"){
    console.log("this is a pear");
    totalNumPears++;
} else {   //Else statement if "if" statement is false.

    console.log("this is not a pear")
}
//Test third item in array
if(bowlOfFruit[2] === "pear"){
    console.log("this is a pear");
    totalNumPears++;
} else {   //Else statement if "if" statement is false.

    console.log("this is not a pear")
}
console.log("There are " + totalNumPears + " pears in the fruit bowl");

//Loop - repetitive code

// For loop
// for(initialize variables; condition to test; increment of change) {code to run each time the condition is true}

//create a new var to hold total of pears
var pearNum=0


for(var i=0; i<5; i++) {
    console.log("inside the loop");
    console.log(i);
}

// Using a for loop with an array
// Use j as the index number
for(var j=0; j<bowlOfFruit.length; j++ ) {
    console.log(bowlOfFruit [j]);

    // Test each fruit to see if its a pair
    if (bowlOfFruit[j] === "pear") {
        console.log("You found a pear");
        pearNum++;
    } else {
        // If the fruit is not a pear
        console.log("This is not a pear");
    }
}
console.log ("Total number of pears in the array " + pearNum);








