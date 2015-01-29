/**
 * Created by Chris Gross on 1/28/15.
 *  Functions Assignment
 */

alert ("Hello there. We are going to calculate your average gas mileage between your last 3 fuel fill-ups!\nYou will need your last 3 gallon totals for fuel and your last 3 odometer readings between fill-ups"); // Alerting user of purpose

var name = prompt ("What is the model name of your car?")// Prompting for input
while (name === ""){
    name = prompt ("You forgot to enter your cars model name!");// Validating input
}
console.log (name);// Printing input to console

var fillOne = prompt("What was the total gallons for your 1st fill-up?");// Prompting for input
while (fillOne === "" || isNaN(fillOne)) { //validating input
    fillOne = prompt("You forgot to enter numbers. What was the total gallons for your 1st fill-up?");
}

var fillTwo = prompt("What was the total gallons for your 2nd fill-up?");// Prompting for input
while (fillTwo === "" || isNaN(fillTwo)) { //Validating input
    fillTwo = prompt("You forgot to enter numbers. What was the total gallons for your 2nd fill-up?");
}

var fillThree = prompt("What was the total gallons for your 3rd fill-up?"); //Prompting for input
while (fillThree === "" || isNaN(fillThree)){ // Validating input
        fillThree = prompt("You forgot to enter numbers. What was the total gallons for your 3rd fill-up?");
}



function totalGallons(fillOne, fillTwo, fillThree){ // Function to calculate input
    var totalGallons = ((Number(fillOne) + Number(fillTwo) + Number(fillThree)) / 3);
    return totalGallons;//Returning value
}
var avgGallon = totalGallons(fillOne,fillTwo,fillThree); //Transferring user input to the function
console.log ("Your average gallons per fuel fill-up is " + avgGallon); //Printing calculation to the console




var odometerOne = prompt("What was the total miles driven between your 1st and 2nd fill-up?");//Prompting for input
while (odometerOne === "" || isNaN(odometerOne)) {// Validating input
    odometerOne = prompt("You forgot to enter numbers. What was the total miles driven between your 1st and 2nd fill-up?");
}

var odometerTwo = prompt("What was the total miles driven between your 2nd and 3rd fill-up?");//Prompting for input
while (odometerTwo === "" || isNaN(odometerTwo)) {// Validating input
    odometerTwo = prompt("You forgot to enter numbers. What was the total miles driven between your 2nd and 3rd fill-up?");
}

var odometerThree = prompt("What was the total miles driven between your 3rd and 4th fill-up?");//Prompting for input
while (odometerThree === "" || isNaN(odometerThree)){// Validating input
    odometerThree = prompt("You forgot to enter numbers. What was the total miles driven between your 3rd and 4th fill-up?");
}



function totalOdometer(odometerOne, odometerTwo, odometerThree){// Function to calculate input
    var totalOdometer = ((Number(odometerOne) + Number(odometerTwo) + Number(odometerThree)) / 3);
    return totalOdometer;//Returning value
}
var avgMiles = totalOdometer(odometerOne,odometerTwo,odometerThree);//Transferring user input to the function
console.log ("Your average miles between fuel fill-ups is " + avgMiles);//Printing calculation to the console




var calcMPG = function(miles, fuel){ //Anonymous function to calculate values from other functions

    var final = Math.round (miles / fuel);
    return final;//Returning value
}
var mpg  = calcMPG(avgMiles, avgGallon);
console.log("Your " + name + " gets " + mpg + " miles per gallon on average!");//Printing calculation of functions/input to the console

if (mpg <= 20){//Added "if, else if" statements to alert user of calculations based on results
    alert ("Your " + name + " gets " + mpg + " mpg. That's not very good. Sorry!")
}else if(mpg <= 30){
    alert ("Your " + name + " gets " + mpg + " mpg. That's pretty good!")
}else if (mpg > 30){
    alert ("Your " + name + " gets " + mpg + " mpg. That's fantastic!!!")
}



