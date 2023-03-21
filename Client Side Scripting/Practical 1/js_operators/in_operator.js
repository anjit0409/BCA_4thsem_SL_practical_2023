

/*
    Practical Implementation of Operators in JavaScript.
*/

/*
8. in Operator */


// Arrays
    var cars = ["tesla", "bmw", "kia", "honda", "suzuki"];
    console.log(0 in cars); // returns true
    console.log(3 in cars); // returns true
    console.log(6 in cars); // returns false
    console.log("bmw" in cars); //returns false (Should specify index number no value)
    console.log("length" in cars); //returns true (length is an Array property)


// Predefined objects
    "PI" in Math; // returns true, here Math is a built-in object that allows you to perform mathematical operations on the Number type.
    "length" in String;


// Custom objects
    const mycar = { make: "Honda", model: "Accord", year: 1998 };
    "make" in mycar; // returns true
    "model" in mycar; // returns true