/*
    Practical Implementation of Array in JavaScript.
*/

//Initializing Array in JS - Method 1

var house = ["1BHK", "2BHK", "3BHK", "4BHK"]; 

// Accessing array with its index

console.log(house[0]);
console.log(house[1]);
console.log(house[2]);
console.log(house[3]);

//Initializing Array in JS - Method 2

// array with integer elements
var numbers = new Array(10,20,30,40,50);
console.log(numbers)

// array with fixed array size without any elements, here single interger value acts as array size.
var houses = new Array(4);
console.log(houses)

// updating array after initialization
houses[0] = "1BHK";
houses[1] = "2BHK";
houses[2] = "3BHK";
houses[3] = "4BHK";

// Creating Array with an element.
var houses1 = new Array("1BHK"); // here single string acts as element.
console.log(houses1)


// Creating array with mixed data type.
var house_mixed = ["1BHK", 2500, true, "Rent"];
console.log(house_mixed)


