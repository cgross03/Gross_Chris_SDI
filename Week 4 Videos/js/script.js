/**
 * Created by Chris on 1/25/15.
 */

//Functions - Basic Structure
/*
function outputMsg(){
    console.log("Hello World!");
}

var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    //console.log(area);
}

//Functions - Functions executed - Function "Call" - invocation of the function
calcArea();


*/



/*
calcArea(30, 20);

function calcArea(w, h) { //w = 30, h = 20
    var area = w * h;
    console.log(area);
}
*/
/*
//Functions - Returning Values
// This is a function

var total = calcArea(30, 20);

function calcArea(w, h) { //w = 30, h = 20
    var area = w * h;
    return area; //Function spitting out info
}
console.log(total);


// Functions - Parameters and Arguments

//This is a procedure

function dogYears(age){ //(parameter) "storage bin" - always in the function definition -
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}

dogYears(4); // (Argument)
dogYears(7);
dogYears(6);


//Functions - Function vs. Procedure
//Functions - return values
//Procedures - do not return values



*/

// Anonymous function - Also known as closure
// Anonymous functions must be defined before it can ve used.

var calcArea = function(width, height){ //defining
//code the function runs

    var area = width * height;
    return area;
}
var a  = calcArea(20,30);
console.log(a);







