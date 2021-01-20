let star = '*';
let starPlus = '**';
let space = '';
let spacePlus = ' ';
let count = 10;

for (let i = 1; i < count; i++) {

    if (i >= count) {
        star = star;
    }
    console.log(space, star);


    if (i < count) {
        star = star + starPlus;
    }


};

console.log(space, star);



