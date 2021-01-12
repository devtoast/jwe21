/*
let lauf = 5;
let stern = '*';

for (let i=0; i < lauf; i++) {

}
*/

/*
for (let line = "*"; line.length < 8; line += "**")
  console.log(line);
  */


/*
var output = '*';

for (let i = 1; i <= 6; i++) {

    //console.log(i);

    var spaceFromLeft = ' ';

    switch (i) {

        case 1:
            spaceFromLeft = '    '
            break;

        case 1:
            spaceFromLeft = '   '
            break;

        case 1:
            spaceFromLeft = '  '
            break;

        case 1:
            spaceFromLeft = ' '
            break;

            default:
                break;

    }

    if(i <= 5) {
        console.log(spaceFromLeft + output);
        output += '**';

        else {
            console.log '  **';
        }

    }
}
*/

let output = '*';
let spaceFromLeft = '';

for (let i = 1; i <= 6; i++) {

    if(i == 1) {
        spaceFromLeft = '    ';
        else if(i == 2) {
            spaceFromLeft = '   '

        }
    }
}





