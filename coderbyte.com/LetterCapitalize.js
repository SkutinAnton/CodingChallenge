/*
https://coderbyte.com

Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
Words will be separated by only one space.


Input: "hello world"
Output: "Hello World"

Input: "i ran there"
Output: "I Ran There"
*/


function LetterCapitalize(str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (i === 0 && str[i] !== ' ') {
            newStr += str[i].toUpperCase();
        } else if (str[i] !== ' ' && str[i - 1] === ' ') {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }

    return newStr;
}