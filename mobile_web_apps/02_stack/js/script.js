const stack = [];


function push(element) {
    stack.push(element);
}


function pop() {
    return stack.pop();
}


function showDataStructure(id, data_structure) {
    const div = document.querySelector('#' + id);
    div.querySelector('.output').textContent = id + ": " + data_structure.join(', ');
}


function showStack() {
    showDataStructure('stack', stack);
}


function onPushButtonClick() {
    // Eingabe holen aus dem Element #enqueu-value
    const element = document.querySelector('#push-value').value;
    push(element);

    console.log(stack);

    showStack();

    // Aufruf der push-Funktion mit der Eingabe
}


function onPopButtonClick() {
    // Aufruf der pop-funktion und speichern in eine
    const elem = pop();

    const output = document.querySelector('#pop-value');
    if (elem !== undefined) {
        output.classList.remove('warn');
        output.innerText = 'Wert: ' + elem;
    }
    else {
        output.classList.add('warn');
        output.innerText = 'Ein leerer Stack kann kein Pop!';
    }

    // Ausgabe der Variable

    showStack();
}


document.querySelector('#push-button').addEventListener('click', onPushButtonClick);
document.querySelector('#pop-button').addEventListener('click', onPopButtonClick);