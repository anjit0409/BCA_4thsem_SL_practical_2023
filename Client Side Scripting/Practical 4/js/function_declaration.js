/*
    Practical Implementation of Function in JavaScript.
*/

// Defining and Invoking Function - Function Declaration Approach

// Defining a function
function sum(value1, value2){

    alert("Addition Operation Starting."); // works directly on web page.

    return (value1 + value2); // return statement is optional, will use only when needed.

}

// invoking a function and storing its return value in result variable.
var result = sum(1,2); 
console.log("SUm is: " + result); // Showing output in console of browser.
