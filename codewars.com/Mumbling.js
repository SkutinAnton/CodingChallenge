/*
https://www.codewars.com

This time no story, no theory. The examples below show you how to write function accum.


Examples:
accum("abcd");     // "A-Bb-Ccc-Dddd"

accum("RqaEzty");  // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

accum("cwAt");     // "C-Ww-Aaa-Tttt"
*/


function accum(s) {
    let newStr = '';
    let counter = 1;

    for (let i = 0; i < s.length; i++, counter++) {
        for (let j = 0; j <= counter; j++) {
            if (j === 0) {
                newStr += s[i].toUpperCase();
            } else if (j === counter && i !== s.length - 1) {
                newStr += "-";
            } else if (j === counter) {
                newStr;
            } else {
                newStr += s[i].toLowerCase();
            }
        }
    }
    return newStr;
}
