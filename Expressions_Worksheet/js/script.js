/**
 * Created by Chris on 1/14/15.
 */

    alert ("These are my answers to the Expressions_Worksheet assignment!")

    // Dog Years
var sparky = 1; // Given  - Sparky is one year old
console.log("Sparky is " + sparky + " year(s) old."); // Result - Sparky is 1 year old

var dogYears = 7 * sparky; - // Variable - Dogs age 7 times faster than humans
console.log ("Sparky is " + dogYears + " years old in dog years."); // Result - Sparky is 7 years old in dog years


    // Slice of Pie PT 1
var numSlices = 10, numPeople = 25 , numOrdered = 6; // Given
var perPerson = numOrdered * numSlices / numPeople; // Variables
console.log("Each partygoer gets " + perPerson + " slices of pizza each."); // Result - Each person gets 2.4 slices


    //Slice of Pie PT 2
var leftOver = (perPerson - 2) * numPeople; //Variable - each person gets 2 whole slices with .4 slices leftover per person times the number of people.
console.log("Sparky gets the " + leftOver + " slices of leftover pizza."); //Result - Sparky is a very unhealthy puppy and gets 10 slices.


    //Average Shopping Bill
var groceryBills = [137, 210, 98, 137, 78];
var total = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4];
console.log("$" + total + " is the total of grocery bills for 5 weeks.");

var average = total / 5;
console.log("$" + average + " is the average of all 5 bills");


    //Discounts
var item = 499;
console.log("Item price is $" + item);

var discount = .35;
var discountTotal = item - item * discount;
console.log("Item total after 35% discount is $" + discountTotal)

var tax = item * .06;
var totalOfItem = discountTotal + tax;
console.log("Item price with 6% sales tax is $" + totalOfItem);
































