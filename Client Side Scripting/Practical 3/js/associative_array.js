
/*
    Practical Implementation of Array in JavaScript.
*/

// Impementing Array Methods.


 // Initializing Associative array
 var arr = {
    "Newton": "Gravity",
    "Albert": "Energy",
    "Edison": "Bulb",
    "Tesla": "AC"
  };
  
  console.log(arr['Newton']); // Output: Gravity
  console.log(arr['Albert']); // Output: Energy
  
  console.log(typeof arr); // Output: Object
  

  var arrays = [
    {
      "Newton": "Gravity",
      "Albert": "Energy",
      "Edison": "Bulb",
      "Tesla": "AC"
    },
    {
      "Newton": "Law",
      "Albert": "e=mc2",
      "Edison": "Thomas Alva",
      "Tesla": "Nicola"
    }
  ]

console.log(arrays); 
console.log(arrays[0]); 
console.log(arrays[0]['Newton']);
console.log(arrays[0]['Albert']);

console.log(arrays[1]);
console.log(arrays[1]['Newton']);
console.log(arrays[1]['Albert']);