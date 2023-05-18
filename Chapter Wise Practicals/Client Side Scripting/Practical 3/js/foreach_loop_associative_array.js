/*
    Practical Implementation of Array in JavaScript.
*/

// Impementing For Each Loop in Associative Array Methods.


// Creating an associative array
var person = [
    {
      "id": "101",
      "name": "Hari Bahadur",
      "phone": "9841123123",
      "address": "Kathmandu, Nepal"
    },
    {
      "id": "102",
      "name": "Madan Bahadur",
      "phone": "9865543321",
      "address": "Bhaktapur, Nepal"
    }
  ]

// executing foreach loop on person array
person.forEach(displayPersonArray);


  // this function is called for each element of array.
function displayPersonArray(currentValue){
  
    console.log("ID: " + currentValue['id']);
    console.log("Name: " + currentValue['name']);
    console.log("Phone Number: " + currentValue['phone']);
    console.log("Address: " + currentValue['address']);



}
