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
console.log (avgGallon);


//var odometerOne = prompt("What was the total miles driven between your 1st and 2nd fill-up?");
//var odometerTwo = prompt("What was the total miles driven between your 2nd and 3rd fill-up?");
//var odometerThree = prompt("What was the total miles driven between your 2nd and 4th fill-up?");

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
console.log (avgMiles);


























// Anonymous function - Also known as closure
// Anonymous functions must be defined before it can be used.

var odometer = function(one, two, three){ //defining
//code the function runs

    var area = width * height;
    return area;
}
var a  = odometer(20,30);
console.log(a);




// Anonymous function - Also known as closure
// Anonymous functions must be defined before it can be used.

var calcArea = function(width, height){ //defining
//code the function runs

    var area = width * height;
    return area;
}
var a  = calcArea(20,30);
console.log(a);