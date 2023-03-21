/*
    Practical Implementation of Operators in JavaScript.
*/

/*
10. instanceof Operator */

console.log("instanceof Operator Results: ")

    var cars = ["tesla", "bmw", "kia", "honda", "suzuki"];
    console.log(cars instanceof Array); // returns true
    console.log(cars instanceof Object); // returns true
    console.log(cars instanceof String); // returns fasle
    console.log(cars instanceof Number); // returns true

    var str = new String("hello");
    console.log(myString instanceof Object); //returns true
    console.log(myString instanceof Date); //returns false
    console.log(myString instanceof String); //returns true

    var myDate = new Date();
    console.log(myDate instanceof Date); //returns true
    console.log(myDate instanceof Object); //returns true
    console.log(myDate instanceof String); //returns false
    
