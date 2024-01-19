/*
Author: Elaine Candido da Silva
Date: 1/19/2024
Description: Calculate how many weeks, days, hour, minutes, and seconds for the next birthday:
*/

// function to calculate the interval btween today and my aniversary
function calcTimeToAniver(aniverDate) {

// Variables declaration
    let currentDate = new Date();     			 // Current date
    let targetDate = new Date(aniverDate);   // Target date
  
    // Calculate the time difference in milliseconds
    let timeDiff = targetDate - currentDate;
  
    // Convert milliseconds to weeks, days, hours, minutes, and seconds
    let weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    return {weeks, days, hours, minutes, seconds };
  }

// Processing and Calculation
// Set date to July 5, 2024
let aniverDate = '2024-07-05T12:59:59';
let timeToAniver = calcTimeToAniver(aniverDate);

// Output
/*
console.log(`Weeks: ${timeToAniver.weeks}`);
console.log(`Days: ${timeToAniver.days}`);
console.log(`Hours: ${timeToAniver.hours}`);
console.log(`Minutes: ${timeToAniver.minutes}`);
console.log(`Seconds: ${timeToAniver.seconds}`);
*/
console.log(' ');
console.log(`There are ${timeToAniver.weeks} weeks, ${timeToAniver.days} days, ${timeToAniver.hours} hours, ${timeToAniver.minutes} minutes, and ${timeToAniver.seconds} seconds until my next birthday!`);
console.log(' ');
