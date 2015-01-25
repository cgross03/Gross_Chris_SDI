/**
 * Created by Chris on 1/23/15.
 * Conditionals Assignment
 * SDI Section 3
 */
alert("This assignment will help you calculate the amount of paper you will need to purchase to last for one year"); // Alerted user to purpose


var howMuch = prompt ("How many pages of standard white paper do you use daily?"); // Prompt user for input
console.log ("You use " + howMuch + " sheets of paper per day."); // Informed user of input

if (isNaN(howMuch)) { // Ask the user to re-input information if numbers were not entered
    howMuch = prompt("Please only use numbers. How many pages do you print on an average daily basis");
    console.log(howMuch);
}

var paper1 = 500 / howMuch; //Calculated how long a ream of white paper would last
console.log("A ream of plain white paper would last you " + paper1 + " days.");  //Informed user of calculation
var finalWhite = 365 / paper1; //Set variable after yearly calculation to use for final alert

var color = prompt ("Do you use colored paper? yes or no."); //Asked for second input
color = color.toLowerCase();{ // Set input to process as all lower case

    if (color === "yes"){ // Condition if yes
        pages = prompt("How many pages of colored paper do you use per day?"); //Asked for input
        if (isNaN(pages)) { // Ask the user to re-input information if numbers were not entered
            pages = prompt("Please only use numbers. How many pages of colored paper do you use per day?");
            console.log(pages);
        }
        console.log("You use " + pages + " sheets of colored paper per day."); // Informed user of input
        comment2 = (pages>10) ? "That's going to be pricey!" : "That's not much at all."; //Conditional statement
        console.log(comment2);
        var paper2 = 250 / pages; //Calculated how long a ream of colored paper will last

        console.log("A ream of colored paper would last you " + paper2 + " days."); // Informed user of days a ream of colored paper will last
        var finalColor = 365 / paper2; // Set variable after yearly calculation for final alert

    } else {
        finalColor = 0 // Set variable if "no" is selected.
        console.log("That's good. Colored paper is a waste of money."); // Statement if "no" is selected
    }
}
var cardStock = prompt("Do you use cardstock paper? yes or no or rarely."); // Prompted user to enter info
cardStock = cardStock.toLowerCase(); // Set input to process as all lowercase
{

    if (cardStock === "yes") { // Condition if yes
        pagesCS = prompt("How many pages of cardstock do you ues per day?"); // Asking for input
        if (isNaN(pagesCS)) { // Ask the user to re-input information if numbers were not entered
            pagesCS = prompt("Please only use numbers. How many pages of cardstock do you use per day?");
            console.log(pagesCS);
        }
        console.log("You use " + pagesCS + " sheets of cardstock paper per day."); // Informed user of input
        comment3 = (pagesCS > 5) ? "You must be rolling in the dough!" : "That's not bad but its still going to be expensive!"; // Conditional statement
        console.log(comment3);
        var paper3 = 125 / pagesCS; // Calculated how long a ream of cardstock will last
        console.log("A ream of cardstock paper would last you " + paper3 + " days."); // Informed user how long a ream of cardstock will last
        var finalCard = 365 / paper3;// Set variable after yearly calculation for final alert

    } else if (cardStock === "no"){ // Condition if "no"

        finalCard = 0 // Set variable if "no"
        console.log("That's good. Cardstock is even more expensive!."); // Conditional statement
    } else { // Condition if "rarely" or other
        finalCard = 0 // Set variable if "rarely"
        console.log("We wont even bother adding it to our estimate");
    }
}
var totalPaper = (finalWhite+finalColor+finalCard); // Set variable to total all reams to allow for possible discount
console.log(totalPaper);

var discount; //Set variable for ternary operation
discount = (totalPaper > 35) ? "You qualify for a discount if you place your order now!" : ""; //Ternary operation offering discount if 35 or more reams of paper are used annually

alert ("At your present rate of use, you will require " + finalWhite + " reams of white paper,\n" + finalColor + " reams of colored paper,  \nand " + finalCard + " reams of cardstock in order to make it through the next year\n" + discount); // Alerted user of final calculation



