/*
Author: Elaine Candido da Silva
Date: 1/18/2024
Description: Generate randomly 10 positive numbers and check if they are prime or not.
By definition, a prime number is a positive integer divisible only for itself and 1
*/

// function to get if the number is prime or not
function isPrime(number) {
    if (number <= 1)  // 1 or below are not prime number
    {
        return false;
    } else if (number === 2) //the only even number which is prime
    {
        return true;
    }

    for (let i= 2; i < number; i++) 
    { // Check if "number" is divisible by i without a remainder, it is not a prime number
     if (number % i === 0) 
     {
        return false;
      }    
    } 
    
    // If number is only divided by itself and 1, it is a prime number
    return true;   

    }

// Variables declaration
let numArray = [];
let resultIsPrime;

// Processing and Calculation
// Generate the 10 positive random numbers up to 100
for (let i=0; i<10; i++) 
{
    let randomInteger = Math.floor(Math.random() * 100);
    numArray[i] = randomInteger;
}

// Output
console.log(numArray);
console.log("");

for (let i=0; i<numArray.length; i++) 
{
    resultIsPrime = isPrime(numArray[i]);
    if (resultIsPrime)
    {
        console.log(`Number ${numArray[i]} is Prime!`); 
    } else 
    {
        console.log(`Number ${numArray[i]} is no Prime!`);
    }
}


