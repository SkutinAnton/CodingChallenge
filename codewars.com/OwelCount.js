/*
https://www.codewars.com

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.


Examples:
getCount("abracadabra") return 5
*/


function getCount(str) {
    const regexp = /[aeiou]/;

    return str.split("").reduce((sum, current) => {
        return regexp.test(current) ? sum + 1 : sum;
    }, 0);
}