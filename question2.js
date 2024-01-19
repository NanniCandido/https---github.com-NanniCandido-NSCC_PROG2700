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
let myArray = [1,2,3,4,5,45,46,47,7,8,9,10];
let tempArray = [];
let initialNumber;
let sumNumber = 0;

// Processing and Calculation
initialNumber = myArray[0]; // store the first num of the array
sumNumber = myArray[0]; // store the first num of the array to start the sum

// starting the loop by the second number of the array
for (let i=1;i<myArray.length;i++) {
    if (myArray[i] == initialNumber + 1) {
        sumNumber += myArray[i]; //summing each sequencial number
        //always replace the initial number by the next one into the array 
        initialNumber = myArray[i]; 
    } else {
        tempArray.push(sumNumber); // adding the sum calculation into the tempArray
        sumNumber = myArray[i]; //summing each sequencial number
        //always replace the initial number by the next one into the array
        initialNumber = myArray[i]; 
    }
}
    // adding the last sum calculation into the tempArray
    tempArray.push(sumNumber);

    // loop to get the biggest number in the array
    initialNumber = tempArray[0]; // initialize the variable with the first number of the array
    for (i=0; i<tempArray.length;i++) {
        if (tempArray[i] > initialNumber) {
            initialNumber = tempArray[i];
        }
    }

// Output
console.log(tempArray);
console.log(initialNumber);
