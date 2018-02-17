/*
https://www.codewars.com

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd,
return the middle character. If the word's length is even, return the middle 2 characters.


Examples:
getMiddle("test")     return "es"

getMiddle("testing")  return "t"

getMiddle("middle")   return "dd"

getMiddle("A")        return "A"
*/


function getMiddle(s) {
    return s.length % 2 === 0 ? s.substr((s.length - 1) / 2, 2) : s.substr((s.length - 1) / 2, 1);
}