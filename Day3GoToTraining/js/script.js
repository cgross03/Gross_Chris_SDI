/**
 * Created by Chris on 1/14/15.
 */

//Use an alert to test if the js file is connected to the html

//alert("Testing to see if connected")

// Check how many pairs are in a fruit bowl
// Create our "fruit bowl"
// Use an array, variable that holds variables

var bowlOfFruit = ["apple", "pear", "peach", "pear", "Banana", "tomato", "kiwi" ];
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








