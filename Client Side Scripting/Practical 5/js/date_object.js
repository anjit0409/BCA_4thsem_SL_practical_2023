/*
    Practical Implementation of Built in Object in JavaScript.
*/

// 2. Date Object

// Getting todays date in js 
var today = new Date();
document.write("Todays Date: ", today);

// Working on a specified date
var given_date = new Date("2021-05-03 10:30:00"); // YYYY-MM-DD HH:MM:SS
document.write("<br>Given Date: ", given_date);


document.write("<br>Full Year of Given Date: ", given_date.getFullYear());

document.write("<br>Month of Given Date: ", given_date.getMonth());

document.write("<br>Date of Given Date: ", given_date.getDate());

document.write("<br>The number of milliseconds since January 1, 1970 00:00:00. : ", given_date.getTime()); // returns the number of milliseconds since January 1, 1970 00:00:00.

document.write("<br>Hour of Given Date: ", given_date.getHours());

document.write("<br>Minute of Given Date: ", given_date.getMinutes());

document.write("<br>Second of Given Date: ", given_date.getSeconds());


