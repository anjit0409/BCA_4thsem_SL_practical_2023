
/*
    Practical Implementation of Control Structures in JavaScript.
*/

/* If Statement */

var age = 2;

if( age > 18 && age < 75){
    document.write("<b>Qualifies for driving license.</b>");
}

else if(age > 75){
    document.write("<b>Not Eligible for License Renew.</b>");
}

else{
    document.write("<b>Not Qualified for driving license.</b>");
}