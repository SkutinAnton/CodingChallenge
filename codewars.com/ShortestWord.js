/*
https://www.codewars.com

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.


Examples:
findShort("bitcoin take over the world maybe who knows perhaps")                     returns 3

findShort("turns out random test cases are easier than writing out basic ones"       returns 3
*/


function findShort(s) {
  return s.split(' ').map(str => str.length).sort((a, b) => a - b)[0];
}