const main = document.querySelector("main");

let nextId = 0;
let counters = [];

function onCreateButtonClick(event) {

    counters.push(0);

    // Ein neues HTML Element ausserhalb des DOM Tree erzeugen:

    const myDiv = document.createElement('div');

    myDiv.id = `mydiv-${nextId}`;
    // myDiv.textContent = `div Nr. ${nextId}`;
    myDiv.textContent = nextId;

    // Mit dataset kann man den HTML Elementen beliebige
    // Daten mitgeben
    // In HTML Attributen: data-div-id="..." data-name="..."
    // myDiv.dataset.divId = nextId;
    myDiv.dataset.counterId = nextId;
    //myDiv.dataset.name = 'tom';
    nextId++;

    // Ausgehend vom Parent (main) ein HTML Element (myDiv) 
    // als Kind einfügen:
    main.appendChild(myDiv);

    // Geht auch anders rum:
    // myDiv.parentElement = main;

}

function onMainClick(event) {
    const element = event.target;
    //console.log(`Es wurde ${element.dataset.divId} angeklickt`);
    //console.log(`Es wurde ${element.dataset.divId} angeklickt`);
    console.log(`Es wurde ${element.dataset.counterId} angeklickt`);


    let counterId = parseInt(event.target.dataset.counterId);
    if (!isNaN(counterId) && counterId > 0 && counterId < counters.length) {
        counters[counterId] += 1;
        event.target.textContent = counters[counterId];
    }
}

const createButton = document.querySelector('#create-button');
createButton.addEventListener('click', onCreateButtonClick);

main.addEventListener('click', onMainClick);