/*
https://coderbyte.com

Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
For example: if the input string is "Hello World and Coders" then your program should return the string "sredoC dna dlroW olleH".


Input:"coderbyte"
Output:"etybredoc"

Input:"I Love Code"
Output:"edoC evoL I"
*/


function FirstReverse(str) {
    let newStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}