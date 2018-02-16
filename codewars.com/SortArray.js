/*
https://www.codewars.com

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
ordered from shortest to longest.


Examples:
Input: ["Beg", "Life", "I", "To"]
Output: ["I", "To", "Beg", "Life"]

Input: ["", "Moderately", "Brains", "Pizza"]
Output: ["", "Pizza", "Brains", "Moderately"]
*/


function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length);
}