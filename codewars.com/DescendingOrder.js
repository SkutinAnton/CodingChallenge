/*
https://coderbyte.com

Your task is to make a function that can take any non-negative integer as a argument and return it with 
its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


Examples:
descendingOrder(21445)         returns 54421

descendingOrder(145263)        returns 654321

descendingOrder(1254859723)    returns 9875543221
*/


function descendingOrder(n){
  return +n.toString().split('').sort((a, b) => b - a).join('');
}
