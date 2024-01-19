/*
Author: Elaine Candido da Silva
Date: 1/18/2024
Description: Write a program that get a string and do the follow:
    1. If the first and the last letter are the same, 
       write the string in the reverse order;
    2. If the first and the last letter NOT are the same, 
        remove the first and the last letters
*/

// Variables declaration
let myString = 'Elaina';  //My string
let stringSize = myString.length;  // getting the string size
let tempString = ""; // variable to store the string after processing

// Processing and Calculation
let firstLetter = myString[0];  // get the first letter of the string
let lastLetter = myString[stringSize-1]; // get the last letter of the string

if (firstLetter.toLowerCase() == lastLetter.toLowerCase()) 
{
    // Loop to replace the position of the letter in the string
    for (let i=stringSize-1;i>=0;i--) {
        tempString += myString[i];
    } 

} else {
    // removing the first and last letters when they are equals
    tempString = myString.slice(1, -1);
}
// Output
console.log("My string before running the program: "+myString);
console.log("My string after running the program: "+tempString);
