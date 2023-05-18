/*
    Practical Implementation of For Each Loop in JavaScript.
*/

// Impementing For Each Loop in JS Array.

var schools = ["Reliance College", "Apex College", "Ace School of Management", "KU School Of Management", "Deerwalk College" ];

schools.forEach(schoolDisplayFunction); // implementing foreach loop syntax and calling a function.


// this function is called for each element of array school.
function schoolDisplayFunction(currentValue, index, arr){
    console.log("The Current Value is : " + currentValue );
    console.log("The Current Value Index is : " + index );
    console.log("Array we are working on is: "+ arr);

    // here currentValue is required parameter, whereas index and arr is optional parameter.
}



