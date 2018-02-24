/*
https://www.codewars.com

Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.


Examples:
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])     return  "5"

findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])                    return  "-1"

findOdd([1,1,1,1,1,1,10,1,1,1,1])                      return  "10"
*/


function findOdd(A) {

    let count = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return A[i];
        }
    }
}