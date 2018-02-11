/*
https://coderbyte.com

Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.


Input:"hello*3"
Output:"Ifmmp*3"


Input:"fun times!"
Output:"gvO Ujnft!"
*/


function LetterChanges(str) {
    let newStr = '';
    const reg = /[a-z]/;
    const regVowel = /[aeiou]/;

    for (let i = 0; i < str.length; i++) {
        if (reg.test(str[i]) && regVowel.test(String.fromCharCode(str[i].charCodeAt() + 1))) {
            newStr += (String.fromCharCode(str[i].charCodeAt() + 1)).toUpperCase();
        } else if (reg.test(str[i])) {
            newStr += String.fromCharCode(str[i].charCodeAt() + 1)
        } else {
            newStr += str[i];
        }
    }

    return newStr;
}