/**
 * Created by Chris on 1/23/15.
 * Conditionals Assignment
 * SDI Section 3
 */
alert("This assignment will help you calculate the amount of paper you will need to purchase to last a year");


var howMuch = prompt ("How many pages do you print on an average daily basis?");
console.log ("You use " + howMuch + " sheets of paper per day.");

if (isNaN(howMuch)) {
    howMuch = prompt("Please only use numbers. How many pages do you print on an average daily basis");
    console.log(howMuch);
}

comment = (howMuch>20) ? "Wow... That's a lot! I hope you recycle!" : "You don't use much.";
console.log(comment);

var daysForReam = 500 / howMuch;

console.log(" A ream of paper will last you approximately " + daysForReam + " days.");

var color = prompt ("Do you use colored paper? yes or no.");
color = color.toLowerCase();{

    if (color === "yes"){
        pages = prompt("How many pages of colored paper do you use per day?");
        console.log("You use " + pages + " sheets of colored paper per day.");
        comment2 = (pages>20) ? "That's going to be pricey!" : "That's not much at all.";
        console.log(comment2);
        console.log("A ream of colored paper would last you " + 250 / pages + " days.");
    } else {
        console.log("That's good. Colored paper is a waste of money.")
    }
}

