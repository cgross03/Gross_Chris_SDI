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
