"use strict";

let numbers = [100, 20, 55, 67, 11, 2, 88];

function compare(a, b) {
    return a-b;
}

// numbers.sort(compare);


// numbers.sort(function (a, b) {
//     return a-b;
// });


numbers.sort((a, b) => a-b);



console.log(numbers);