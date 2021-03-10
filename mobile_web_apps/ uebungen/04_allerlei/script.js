/*
function max(...numbers) {
    let result = 0; // -Infinity = 0
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

console.log(max(4, 1, 9, -2));
*/
let step = 1;

function range(start, end) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;

}

console.log(range(1, 10));