/*
    Practical Implementation of Array in JavaScript.
*/

// Impementing Array Methods.

var schools = ["Reliance College", "Apex College", "Ace School of Management", "KU School Of Management", "Deerwalk College" ];

// 1. JavaScript Array length
var school_count = schools.length;
console.log(school_count);

// 1. JavaScript Array length
var schools_to_string = schools.toString();
console.log(schools_to_string);

// 3. JavaScript Array pop()
var school_pop = schools.pop();
console.log(school_pop);

// 4. JavaScript Array push()
var school_push = schools.push("Global College");
console.log(school_push);
console.log(schools);

// 5. JavaScript Array sort()
var school_sort = schools.sort();
console.log(school_sort);
// console.log(schools);


// 6. JavaScript Array shift()
var school_shift = schools.shift();
console.log(school_shift);


// 7. JavaScript Array unshift()
var school_unshift = schools.unshift("Padmakanya");
console.log(school_unshift);
