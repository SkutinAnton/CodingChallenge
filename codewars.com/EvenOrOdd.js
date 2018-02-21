/*
https://www.codewars.com

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


Examples:
evenOrOdd(2)  return "Even"

evenOrOdd(7)  return "Odd"

evenOrOdd(0)  return "Even"

evenOrOdd(1)  return "Odd"
*/


function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}