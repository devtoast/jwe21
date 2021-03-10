// Zugriff auf ein HTML Element
document.getElementById('number');
document.querySelector('#number');

$('#number'); // jQuery

// Zugriff auf mehrere Elemente
document.querySelectorAll('.important');

// Click Event
// in HTML

let button = document.querySelector('button');
button.addEventListener('click', doSomething); // wird Funktion hinzugefügt (add)
button.onclick = doSomething; // alles vorhandene wir gelöscht (überschreibt bestehende EventListener)

// Achtung, keine Klammern nach dem Funktionsnamen!
// Sonst würde die Funktion gleich beim Angeben des EventListeners ausgeführt (ohne zu Klicken)
// FALSCH: button.onclick = doSomething();

// Funktion 'greet' mit zwei Übergabevariablen (oder Parameter, oder Argumente) 'name' und 'age'
function greet(name, age) {
    // Wenn die Funktion mit greet ('Alex', 77) aufgerufen wird,
    // werden die Übergabevariablen gesetzt:
    // name = 'Alex'
    // age = 77
}


// Scopes (oder Geltungsberich) von Variablen
function myFunction(name, age) {
    const height = 1.8;
    let weight;

    if (age > 80) {
        weight = 70;
    }

    else {
        weight = 100;
        var shoesize = 36;
    }
}

// height: Zeile 51 – 61 (Ende der Funktion)
// weight: Zeile 52 – 61 (Ende der Funktion)
// name, age: Zeilen 50 (Beginn der Funktion) – 61 (Ende der Funktion)
// shoeSize: Zeile 51 – 61 (51 weil 'var' bedeutet, dass die Variable quasi 
// in der 1. Zeile der Funktion definiert wird)

let global1, global2;

function A() {
    let A1, A2;
    console.log(global1);

    function B() {
        let B1, B2;
        console.log(A1);
        console.log(global1);
    }

    // FEHLER: console.log(B1) –> undefined
}

// A1, A2: Zeilen 70 bis 81

// true, false
// 123, 42 -> parseInt('123')
// 123.45 <– parseFloat('123.45')

// [] Listen (oder Arrays)
// {} Objects

// Klassen in Javscript (Wiederverwendbarer Code)

// Queue, basierend auf Liste, mit den Methoden push und unshift
// FIFO-Prinzip: First In FIrst Out

// Stack, ebenfalls basierend auf einer Liste, mit Methoden push und pop
// LIFO-Prinzip, Last In First Out

// Sortieren von Werten in einer Liste mit der sort Methode und einer compare-Funktion

// Set, Map

