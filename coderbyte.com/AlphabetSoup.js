/*
https://coderbyte.com

Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters
in alphabetical order (ie. hello becomes ehllo).
Assume numbers and punctuation symbols will not be included in the string.


Input: "coderbyte"
Output: "bcdeeorty"

Input: "hooplah"
Output: "ahhloop"
*/


function AlphabetSoup(str) {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }

    return arr.sort().join("");
}