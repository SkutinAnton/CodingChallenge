/*
https://www.codewars.com

Given two numbers and an arithmetic operator (the name of it, as a string), return the result 
of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, 
and b always the second.
The four operators are "add", "subtract", "divide", "multiply".


Examples:
arithmetic(5, 2, "add")       returns 7

arithmetic(5, 2, "subtract")  returns 3

arithmetic(5, 2, "multiply")  returns 10

arithmetic(5, 2, "divide")    returns 2.5
*/


function arithmetic(a, b, operator){
  let math = {
    add() {
      return a + b;
    },
    subtract() {
      return a - b;
    },
    multiply() {
      return a * b;
    },
    divide() {
      return a / b;
    }
  };
   return math[operator]();
  }