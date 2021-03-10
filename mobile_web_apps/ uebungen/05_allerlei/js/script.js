
// const power = function (base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };

// console.log(power(2, 10));



//const button1click = document.querySelector('#click_1');


// function text() {
//     document.querySelector('#output').textContent = 'Hurra der Text ist da!';
//     console.log('Ja, er ist wirklich da - Hurra!');
// }

// document.querySelector('#click-1').addEventListener('click', text);



// if (clicks = 1) {
//     output.textContent = 'Hurra der Text is da!';
// }

// else {
//     output.textContent = 'Und jetzt ein andara!';
// }

// let output = document.querySelector('#output');


let clicks = 0;

function clickCount() {

    clicks += 1;
    console.log(clicks);
};

document.querySelector('#click-1').addEventListener('click', clickCount);



