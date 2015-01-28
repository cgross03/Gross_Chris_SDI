/**
 * Created by Chris on 1/27/15.
 * 
 */
// While Loop

var b = 5; // Sets up the index

while (b > 0){ // Checks the index
    console.log(b + " Kegs on the wall");
    b -- ; //Increments or decrements the index
}

// Do While Loop

var c = 10;

do {
    console.log (c + " Kegs on the wall")
    c --;
}

while (c > 0);


// For Loop - shorthand version of the loops

for(var i = 10; i > 0; i--){
    console.log(i + " Kegs on the wall")
}