/**
 * Created by Chris on 1/21/15.
 * SDI Section 3
 * Conditionals Worksheet (Week 3)
 */

//  Example - Stuff Your Face I
var weight = 251;
var qualify;

qualify = (weight>250) ? "The competitor qualifies for the heavyweight division." : "The competitor needs to gain some weight.";
console.log(qualify);


// Group 1 - Celsius to Fahrenheit Converter
var user = prompt ("This is a conversion calculator for celsius and fahrenheit temperatures. \n \nPlease remember to enter a C for celsius and a F for fahrenheit.")
var conversion;

console.log(user)
//console.log(conversion = (user - 32) * 5 / 9); //Convert F to C
console.log(conversion = (user * 9) / 5 + 32); //Convert C to F




// Grade

var grade = 48;

//Test what grade
//A = 100-90
//B = 89-80
//C = 79-70
//D = 69-60
//F = 59 and under

//If, else if statements

if(grade >= 90){
    console.log("You have a " + grade + "%, which means you have earned a(n) A in the class!")
} else if(grade >= 80){
    console.log("You have a " + grade + "%, which means you have earned a(n) B in the class!")
} else if(grade >= 70){
    console.log("You have a " + grade + "%, which means you have earned a(n) C in the class!")
} else if(grade >= 60){
    console.log("You have a " + grade + "%, which means you have earned a(n) D in the class!")
} else {
    console.log("You have a " + grade + "%, which means you have earned a(n) F in the class!")
}
