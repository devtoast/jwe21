const main = document.querySelector("main");
const output = document.querySelector('#output');


const cow = String.fromCodePoint(0x1F42E);
//console.log(cow);

const pig = String.fromCodePoint(0x1F437);
//console.log(pig);


let nextId = 0;
let animals = [];

let class1 = '1cow';
let class2 = '2pig';


function pop() {
    return animals.pop();
}


function getRandomCowName() {
    const cowNames = ["Gabi", "Susi", "Rosi", "Resi"];
    return cowNames[Math.floor(Math.random() * cowNames.length)];
}


function getRandomPigName() {
    const pigNames = ["Schinki", "Stelzi", "Specki", "Schnitzi"];
    return pigNames[Math.floor(Math.random() * pigNames.length)];
}

//const cowName = (getRandomCowName() + nextId);
//const pigName = (getRandomPigName() + nextId);

function onCreateButtonClick(event) {

    // HÜ: Ein zufälliges Tier soll erzeugt werden, Hund od. Kuh
    // if (Math.random() > 0.5) ... else ...


    if (Math.random() > 0.5) {
        animals.push(cow);
    }
    else {
        animals.push(pig);
    }
    console.log(animals);


    const myDiv = document.createElement('div');
    const difAnimalPop = pop();

    myDiv.id = `mydiv-${nextId + difAnimalPop}`;
    // myDiv.textContent = `div Nr. ${nextId}`;
    myDiv.textContent = difAnimalPop;

    // Mit dataset kann man den HTML Elementen beliebige
    // Daten mitgeben
    // In HTML Attributen: data-div-id="..." data-name="..."
    // myDiv.dataset.divId = nextId;
    myDiv.dataset.animalId = nextId + difAnimalPop;
    //myDiv.dataset.name = 'tom';
    nextId++;

    // Ausgehend vom Parent (main) ein HTML Element (myDiv) 
    // als Kind einfügen:
    main.appendChild(myDiv);





    // Neues Objekt der Klasse Pig erzeugen, mit beliebigen Namen
    //const pigName = new PigName(getRandomPigName() + nextId);

    // const elem = document.querySelector('div').value;
    // pigName.push(elem);

    //const cowName = new CowName(getRandomCowName() + nextId);





    // Objekt in Animals einfügen

    // neues HTML Element mit der Id des Objektes
    // und als Inhalt PIG: <name> erzeugen und in den DOM
    // Tree einfügen.

    //HÜ Je nach Tierart unterschiedliche CSS Klassen setzen
    //HÜ element.classList.add('pig')



}

function onMainClick(event) {

    // HÜ:
    // Mittels data attribute das geklickte Tier-Objekt finden
    // Ausgabe von Tiername (name) und Tierlaut (talk())

    const element = event.target; // HTML Element wo Click passiert ist

    // event.currentTarget: Das HTML Element, wo der eventlistener hinzugefügt worden ist.
    if (element !== event.currentTarget) {
        console.log(`Es wurde ${element.id} angeklickt ` + getRandomCowName());

    }
    else {
        console.log('Main wurde angeklickt');
    }

}

const createButton = document.querySelector('#create-button');
createButton.addEventListener('click', onCreateButtonClick);

main.addEventListener('click', onMainClick);