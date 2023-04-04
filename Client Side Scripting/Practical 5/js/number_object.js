/*
    Practical Implementation of Built in Object in JavaScript.
*/



// 4. Number Object

// Properties / Constants of Math Object
document.write(
    "Number Object: Properties (Constants): <br><br>" + 
    "MAX_VALUE: " + Number.MAX_VALUE + "<br>" +
    "MIN_VALUE: " + Number.MIN_VALUE + "<br>" +
    "NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY + "<br>" +
    "POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY + "<br>" +
    "EPSILON: " + Number.EPSILON + "<br>" +
    "NaN - Not a Number: " + Number.NaN + "<br><br>" 

);


// Commonly Used Methods

document.write("Commonly Used <br><br>");


let a = 123.56;
document.write("x.toString(): " + a.toString() + "<br><br>");



let b = 123;
document.write("a.valueOf(): " + b.valueOf() + "<br><br>");


let x = 9.656;
document.write("x.toExponential(2): " + x.toExponential(2) + "<br>");
document.write("x.toExponential(4): " + x.toExponential(4) + "<br>");
document.write("x.toExponential(6): " + x.toExponential(6) + "<br><br>");


let y = 9.656;
document.write("y.toFiyed(0): " + y.toFixed(0) + "<br>");
document.write("y.toFiyed(2): " + y.toFixed(2) + "<br>");
document.write("y.toFixed(4): " + y.toFixed(4)+ "<br><br>");


let z = 9.656;
document.write("z.toPrecision(): " + z.toPrecision() + "<br>");
document.write("z.toPrecision(2): " + z.toPrecision(2) + "<br>");
document.write("z.toPrecision(4): " + z.toPrecision(4) + "<br>");


// Implementing the concept of Prototype in Number Object.

/*
    Prototype refers to creating a custom methods in an object which is not available at in built JS.
    In such we created a prototype function ourself and implement where ever we want.
*/

Number.prototype.divideByTwo = function(a,b) {
    return this.valueOf() / 2;
   };
   
let n = 55;
let p = n.divideByTwo();