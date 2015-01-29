/**
 * Created by Chris Gross on 1/28/15.
 *  Functions Assignment
 */

alert ("Hello there. We are going to calculate your average gas mileage between your last 3 fuel fill-ups!\nYou will need your last 3 gallon totals for fuel and your last 3 odometer readings between fill-ups");

var name = prompt ("What is the model name of your car?")
while (name === ""){
    name = prompt ("You forgot to enter your cars model name!");
}
console.log (name);

var fillOne = prompt("What was the total gallons for your 1st fill-up?");
while (fillOne === "" || isNaN(fillOne)) {
    fillOne = prompt("You forgot to enter numbers. What was the total gallons for your 1st fill-up?");
}

var fillTwo = prompt("What was the total gallons for your 2nd fill-up?");
while (fillTwo === "" || isNaN(fillTwo)) {
    fillTwo = prompt("You forgot to enter numbers. What was the total gallons for your 2nd fill-up?");
}

var fillThree = prompt("What was the total gallons for your 3rd fill-up?");
while (fillThree === "" || isNaN(fillThree)){
        fillThree = prompt("You forgot to enter numbers. What was the total gallons for your 3rd fill-up?");
}



function totalGallons(fillOne, fillTwo, fillThree){
    var totalGallons = ((Number(fillOne) + Number(fillTwo) + Number(fillThree)) / 3);
    return totalGallons;
}
var avgGallon = totalGallons(fillOne,fillTwo,fillThree);
console.log ("Your average gallons per fuel fill-up is " + avgGallon);




var odometerOne = prompt("What was the total miles driven between your 1st and 2nd fill-up?");
while (odometerOne === "" || isNaN(odometerOne)) {
    odometerOne = prompt("You forgot to enter numbers. What was the total miles driven between your 1st and 2nd fill-up?");
}

var odometerTwo = prompt("What was the total miles driven between your 2nd and 3rd fill-up?");
while (odometerTwo === "" || isNaN(odometerTwo)) {
    odometerTwo = prompt("You forgot to enter numbers. What was the total miles driven between your 2nd and 3rd fill-up?");
}

var odometerThree = prompt("What was the total miles driven between your 3rd and 4th fill-up?");
while (odometerThree === "" || isNaN(odometerThree)){
    odometerThree = prompt("You forgot to enter numbers. What was the total miles driven between your 3rd and 4th fill-up?");
}



function totalOdometer(odometerOne, odometerTwo, odometerThree){
    var totalOdometer = ((Number(odometerOne) + Number(odometerTwo) + Number(odometerThree)) / 3);
    return totalOdometer;
}
var avgMiles = totalOdometer(odometerOne,odometerTwo,odometerThree);
console.log ("Your average miles between fuel fill-ups is " + avgMiles);




var calcMPG = function(miles, fuel){

    var final = Math.round (miles / fuel);
    return final;
}
var mpg  = calcMPG(avgMiles, avgGallon);
console.log("Your " + name + " gets " + mpg + " miles per gallon on average!");

if (mpg <= 20){
    alert ("Your " + name + " gets " + mpg + " mpg. That's not very good. Sorry!")
}else if(mpg <= 30){
    alert ("Your " + name + " gets " + mpg + " mpg. That's pretty good!")
}else if (mpg > 30){
    alert ("Your " + name + " gets " + mpg + " mpg. That's fantastic!!!")
}



