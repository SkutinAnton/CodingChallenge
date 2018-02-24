/*
https://www.codewars.com

In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.


Examples:
highAndLow("1 2 3 4 5")              return "5 1"

highAndLow("1 2 -3 4 5")             return "5 -3"

highAndLow("4 5 -214 542 -64 -6")    return "542 -214"
*/


function highAndLow(numbers){
    let arr = numbers.split(" ");
    let low = Math.min.apply(null, arr);
    let high = Math.max.apply(null, arr);

    return `${high} ${low}`;
}