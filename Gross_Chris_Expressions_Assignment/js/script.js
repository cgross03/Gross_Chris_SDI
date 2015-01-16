/**
 * Expressions Assignment Created by Chris Gross on 1/15/15.
 */

alert ("Lets calculate the total inches of water that will \n result from the snowfall over the last 4 weeks!");//Alert to prompt user of purpose

var week1 = prompt ("How many inches of snow did you get in week 1"); //Requesting variable from user
console.log("Week 1 snowfall = " + week1); //Declaring user variable

var week2 = prompt ("How many inches of snow did you get in week 2"); //Requesting variable from user
console.log("Week 2 snowfall = " + week2); //Declaring user variable

var week3 = prompt ("How many inches of snow did you get in week 3"); //Requesting variable from user
console.log("Week 3 snowfall = " + week3); //Declaring user variable

var week4 = prompt ("How many inches of snow did you get in week 4"); //Requesting variable from user
console.log("Week 4 snowfall = " + week4); //Declaring user variable

var total = parseInt(week1) + parseInt(week2) + parseInt(week3) + parseInt(week4); //Variable - Sum of previous 4 variables
console.log(total + " Total inches of snow"); //Declaring sum of user variables

var water = total / 12 //Given - Dividing sum of variables by the given to calculate amount of water
console.log(water + " Inches of water") //Declaring total amount of water

alert ("You have received a total of " + total + " inches of snow in the last 4 weeks. \nWhich is equal to " + water + " inches of water!") //Alerting user of the result




