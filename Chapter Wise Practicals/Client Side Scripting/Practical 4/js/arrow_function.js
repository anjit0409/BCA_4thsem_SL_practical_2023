/*
    Practical Implementation of Function in JavaScript.
*/

// Defining and Invoking Function - Arrow Function Implementation


// function expression example
let x = function(x, y) {
    return x * y;
 }

// using arrow functions
let y = (x, y) => x * y;


// Example 1: Arrow Function with No Argument
let greet1 = () => console.log('Hello');
greet1(); // Output: Hello

// Example 2: Arrow Function with One Argument
let greet2 = x => console.log(x);
greet2('Hello'); // Hello 

// Example 3: Arrow Function as an Expression
let age = 5;
let welcome = (age < 18) ? () => console.log('Child') : () => console.log('Adult');
welcome(); // Child

// Example 4: Multiline Arrow Functions
let sum = (a, b) => {
    let result = a + b;
    return result;
}
let result1 = sum(5,7);
console.log(result1); // 12


// Example 4: Arguments Binding : Use this if you arent sure about numbers of arugument to pass in function.
let z = (...n) => {
    console.log(n);
}

x(4,6,7); // [4, 6, 7]

