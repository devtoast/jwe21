const main = document.querySelector("main");
const output = document.querySelector('#output');


let nextId = 0;
let animals = [];

function getRandomDogName() {
    const dogNames = ["Bello", "Rex", "Wadlbeisser", "Rintintin"];
    return dogNames[Math.floor(Math.random() * dogNames.length)];
}

function onCreateButtonClick(event) {
    // HÜ: Ein zufälliges Tier soll erzeugt werden, Hund od. Kuh
    // if (Math.random() > 0.5) ... else ...
    // Neues Objekt der Klasse Dog erzeugen, mit beliebigen Namen

    const dog = new Dog(getRandomDogName() + nextId);

    // Objekt in Animals einfügen

    // neues HTML Element mit der Id des Objektes
    // und als Inhalt DOG: <name> erzeugen und in den DOM
    // Tree einfügen.

    //HÜ Je nach Tierart unterschiedliche CSS Klassen setzen
    //HÜ element.classList.add('dog')



}

function onMainClick(event) {

    // HÜ:
    // Mittels data attribute das geklickte tier Objekt finden
    // Ausgabe von Tiername (name) und Tierlaut (talk())

}

const createButton = document.querySelector('#create-button');
createButton.addEventListener('click', onCreateButtonClick);

main.addEventListener('click', onMainClick);