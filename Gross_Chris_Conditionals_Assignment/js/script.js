/**
 * Created by Chris on 1/23/15.
 * Conditionals Assignment
 * SDI Section 3
 */
alert("This assignment will help you calculate the amount of paper you will need to purchase to last for one year");


var howMuch = prompt ("How many pages of standard white paper do you use daily?");
console.log ("You use " + howMuch + " sheets of paper per day.");

if (isNaN(howMuch)) {
    howMuch = prompt("Please only use numbers. How many pages do you print on an average daily basis");
    console.log(howMuch);
}

var paper1 = 500 / howMuch;
console.log("A ream of plain white paper would last you " + paper1 + " days.");
var finalWhite = 365 / paper1;

var color = prompt ("Do you use colored paper? yes or no.");
color = color.toLowerCase();{

    if (color === "yes"){
        pages = prompt("How many pages of colored paper do you use per day?");
        if (isNaN(pages)) {
            pages = prompt("Please only use numbers. How many pages of colored paper do you use per day?");
            console.log(pages);
        }
        console.log("You use " + pages + " sheets of colored paper per day.");
        comment2 = (pages>10) ? "That's going to be pricey!" : "That's not much at all.";
        console.log(comment2);
        var paper2 = 500 / pages;

        console.log("A ream of colored paper would last you " + paper2 + " days.");
        var finalColor = 365 / paper2;

    } else {
        finalColor = 0
        console.log("That's good. Colored paper is a waste of money.");
    }
}
var cardStock = prompt("Do you use cardstock paper? yes or no or rarely.");
cardStock = cardStock.toLowerCase();
{

    if (cardStock === "yes") {
        pagesCS = prompt("How many pages of cardstock do you ues per day?");
        if (isNaN(pagesCS)) {
            pagesCS = prompt("Please only use numbers. How many pages of cardstock do you use per day?");
            console.log(pagesCS);
        }
        console.log("You use " + pagesCS + " sheets of cardstock paper per day.");
        comment3 = (pagesCS > 5) ? "You must be rolling in the dough!" : "That's not bad but its still going to be expensive!";
        console.log(comment3);
        var paper3 = 125 / pagesCS;
        console.log("A ream of cardstock paper would last you " + paper3 + " days.");
        var finalCard = 365 / paper3;

    } else if (cardStock === "no"){
        finalCard = 0
        console.log("That's good. Cardstock is even more expensive!.");
    } else {
        finalCard = 0
        console.log("We wont even bother adding it to our estimate");
    }
}
alert ("At your present rate of use, you will require " + finalWhite + " reams of white paper. \nYou will require " + finalColor + " reams of colored paper  \nand " + finalCard + " reams of cardstock in order to make it through the next year");



