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

// Processing and Calculation
let newString = checkString(myString);

// Output
console.log("My string before running the program: "+myString);
console.log("My string after running the program: "+newString);

// function to check if the string begin and finish with the same letter
function checkString(nameString) 
{
    let tempString = "";                // variable to store the string after processing    
    let firstLetter = nameString[0];      // get the first letter of the string
    let lastLetter = nameString[nameString.length-1]; // get the last letter of the string

    if (firstLetter.toLowerCase() == lastLetter.toLowerCase()) 
    {
    // loop to replace the position of the letter in the string
    // consider the string as an array of letters
    // start the loop from the end to begin to reverve the letter in the array
    for (let i=nameString.length-1; i>=0; i--) {
        tempString += nameString[i];
    } 

    } else {
    // removing the first and last letters when they are equals
       tempString = nameString.slice(1, -1);
}
    return tempString;
}