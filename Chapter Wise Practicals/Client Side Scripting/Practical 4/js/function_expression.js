/*
    Practical Implementation of Function in JavaScript.
*/

// Defining and Invoking Function - Function Expression Approach

// Defining a function
var exp_sum = function(value1, value2){

    alert("Addition Operation Starting."); // works directly on web page.

    return (value1 + value2); // return statement is optional, will use only when needed.

};

// invoking a function and storing its return value in result variable.
var result = exp_sum(1,2); 
console.log("SUm is: " + result); // Showing output in console of browser.




// Implementation of Declatation and Expression appraoch at once.

function sum_and_multiply(sum_function, multiple_value){

    var sum_result = sum_function(10, 15);
    var sum_and_multiply_result = sum_result * multiple_value;
    return sum_and_multiply_result;
}

var result_of_declaration_and_expression = sum_and_multiply(exp_sum, 5);
console.log("Result of Declaration and expression: " + result_of_declaration_and_expression);