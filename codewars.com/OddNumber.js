/*
https://www.codewarrrs.com

Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.


Examples:
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])     return  "5"

findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])                    return  "-1"

findOdd([1,1,1,1,1,1,10,1,1,1,1])                      return  "10"
*/


function findOdd(arr) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return arr[i];
        }
    }
}