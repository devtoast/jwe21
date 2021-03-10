let randomList;

function onGenerateClick() {

    let min = parseInt(document.querySelector('#min-value').value);
    let max = parseInt(document.querySelector('#max-value').value);
    let length = parseInt(document.querySelector('#length').value);

    //randomList = generatedRandomList(min, max, length);
    randomList = new RandomList(min, max, length);

    console.log(randomList);

    document.querySelector('#generate-output').textContent = 'Liste erzeugt';
}


// ist jetzt in random-list.js

/*
function generatedRandomList(min, max, length) {

    let l = [];
    for (let i = 0; i < length; i++) {
        l.push(randomInt(min, max));
    }

    return l;

    //let number = Math.floor(Math.random() * 1000);
}
*/


// ist jetzt in random-List

/*
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
*/

function onSearchClick() {
    const value = parseInt(document.querySelector('#search-value').value);

    let start = performance.now();
    const isInList = randomList.isInList(value);
    const isInListTime = performance.now() - start;

    let output = document.querySelector('#search-output');

    if (isInList) {
        start = performance.now();
        const n = randomList.count(value);
        const countTime = performance.now() - start;

        output.textContent = value + " wurde " + n + "-mal gefunden in " + countTime + "ms";
    }
    else {
        output.textContent = value + " wurde nicht gefunden.";
    }
}



document.querySelector('#generate').addEventListener('click', onGenerateClick);
document.querySelector('#search').addEventListener('click', onSearchClick);
