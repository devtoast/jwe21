/*
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter +1;
}
*/


/*
console.log(result);

for (let number = 0; number <= 12; number = number +2) {
  console.log(number);
}
*/


/*
let result = '#';
while (result.length < 8) {
    console.log(result);
    result = result + '#';
}
*/


/*
for (let number = 1; number <= 100; number = number +1) {
    let output = '';
    if (number % 3 == 0) output = output + 'Fizz';
    if (number % 5 == 0) output = output + 'Buzz';
    console.log(output || number);
}
*/


/*
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
*/



/*
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/


/*
let passwort = prompt ('Bitte Passwort eingeben:');

if ( passwort == '987x#' ) {
  console.log("Zugriff erteilt")
}

else {
  console.log("Zugriff verweigert");
}
*/


/*
let val = prompt ('Einen Wert eingeben: ');

if (val >= 1 && val <= 100) {
  console.log ("OK: ")
}

else {
  console.log ("Nicht OK: " + val);
}
*/

/*
switch (new Date().getDay()) {
  case 0:
    console.log("Heute ist Sonntag");
    break;
  case 6:
    console.log("Heute ist Samstag");
    break;
  default:
    console.log("Heute ist ein Wochentag");
}
*/


//SCHLEIFEN

/*
for (let i=0; i < 10; i++) {
  console.log(i+1 + "-ter Schleifendurchlauf");
}
*/

/*
let i=0;
while(i < 15) {
  console.log(i+1 + "-ter Schleifendurchlauf");
i++;
}
*/

/*
var i=0;
do {
  console.log (i+1 + "-ter Schleifendurchlauf");
  i++;
} while (i < 5);
*/

//Schleife mit Break beenden


/*
let i = 0;
while (i < 10) {
  console.log(i + 1 + "-ter Schleifendurchlauf");
  i++;
  if (i == 5) {
    console.log("Schleife mit Break beenden");
    break;
  }
}
*/


/*
let i = 0;
while (i < 10) {
  i++;
  if (i % 2) {
    continue;
  }
  console.log("Durch 2 teilbarer Wert: " + i);
}
*/


/*
let datum = new Date();
let tag = datum.getDay();

let woTa = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag",];

console.log("Heute ist " + woTa[tag]);
*/


//FUNKTIONEN


/*
function summe(parameter1, parameter2) {
  let sum = parameter1 + parameter2;
  return sum;
}

let gesamt = summe(200, 300);
console.log("Gesamtergebnis: " + gesamt);
*/







