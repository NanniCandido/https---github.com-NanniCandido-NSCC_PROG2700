/*
Author: Elaine Candido da Silva
Date: 1/18/2024
Description: Write a program that get a string and do the follow:
    1. If the first and the last letter are the same, 
       write the string in the reverse order;
    2. If the first and the last letter NOT are the same, 
        remove the first and the last letters
*/

let myString = 'Elaine';
let stringSize = myString.length;
let myCounter = stringSize - 1;
let tempLetter;
let newString = [];

console.log(myString);

let firstLetter = myString[0];  // get the first letter of the string
let lastLetter = myString[stringSize-1]; // get the last letter of the string

if (firstLetter.toLowerCase() == lastLetter.toLowerCase()) 
{
    // Inicialize counter at the last caracter
    for (let i=stringSize-1;i<0;i--) {
        newString[myCounter] = myString[i];
        myCounter--;
    } 

    console.log(firstLetter);
    console.log(lastLetter);
    console.log(myString);
    console.log(newString);

} else {
    console.log(myString.slice(1, -1));
}