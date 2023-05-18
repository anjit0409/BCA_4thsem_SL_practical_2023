/*
    Practical Implementation of Control Structures in JavaScript.
*/

/* Break & Continue in JS */


// Implementing Break

var count;

document.write("Starting Loop" + "<br/>");

for(count = 0; count < 10; count++){

    if(count === 5){
        break;
    }
    
    document.write("Current Count : " + count );
    document.write("<br/>");
}

document.write("Loop stopped!");



// Implementing Continue

var count;

document.write( "<br/><br/>" + "Starting Loop" + "<br/>");

for(count = 0; count < 10; count++){

    if(count == 5){
        continue;
    }

    document.write("Current Count : " + count );
    document.write("<br/>");
}

document.write("Loop stopped!");