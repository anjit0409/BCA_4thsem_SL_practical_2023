/*
    Practical Implementation of Built in Object in JavaScript.
*/

// 1. Array Object

let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
    {
        "color": "green blue",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    }
  ]



// To find length of an array, use Array.length.
document.write("Lenght of an array: " + cars.length);


// To sort an array, use Array.sort().
var car_list = ['purple', 'yellow', 'green', 'blue']
document.write("<br>Sorting an Array: " + car_list.sort());


// To sort an array, use Array.toString().
var car_list = ['purple', 'yellow', 'green', 'blue']
document.write("<br>Array to String: " + car_list.toString());

// To reverse an array, use Array.reverse().
var car_list = ['purple', 'yellow', 'green', 'blue']
document.write("<br>Reverse an Array: " + car_list.reverse());


// To add an object at the first position, use Array.unshift.
let car1 = {
    "color": "green",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 4
  }

document.write("<br> Index of unshift array " + cars.unshift(car1));


// Add a new object at the end - Array.push
let car2 = {
    "color": "maroon",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 8
   }
 
document.write("<br> Push Array: " + cars.push(car2));


// To remove an object at the first position, use Array.shift().
console.log("Using shift method in array: " + cars.shift());
console.log(cars)

// To remove an object at the last position, use Array.pop().
console.log("Using unshift method in array: " + cars.pop());
document.log(cars)


