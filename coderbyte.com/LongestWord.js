/*
https://coderbyte.com

Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.


Input: "fun&!! time"
Output: "time"

Input: "I love dogs"
Output: "love"
*/


function LongestWord(sen) {
    let str = '';
    let newStr = '';
    const regexp = /[a-zA-Z0-9]/;

    for (let i = 0; i < sen.length; i++) {
        if (regexp.test(sen[i])) {
            newStr += sen[i];
        }

        if (!regexp.test(sen[i]) || i === sen.length - 1) {
            if (newStr.length > str.length) {
                str = newStr;
                newStr = '';
            } else if (newStr.length < str.length || newStr.length === str.length) {
                newStr = '';
            }
        }
    }
    return str;
}