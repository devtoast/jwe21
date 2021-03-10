const queue = [];

function enqueue(element) {
    queue.push(element);
}

function dequeue() {
    return queue.shift();
}

function onEnqueueButtonClick() {
    const elem = document.querySelector('#enqueue-value').value;

    enqueue(elem);

    showQueue();
}

function onDequeueButtonClick() {
    const elem = dequeue();

    const output = document.querySelector('#dequeue-value');
    if (elem !== undefined) {
        output.classList.remove('warn');
        // entspricht $("#dequeue-value").html("..."):
        output.innerText = 'Wert: ' + elem;
    }
    else {
        output.classList.add('warn');
        output.innerText = 'Eine leere Queue kann kein dequeue!';
    }
    showQueue();
}



const stack = [];

function push(element) {
    stack.push(element);
}

function pop() {
    return stack.pop();
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

function showQueue() {
    showDataStructure('queue', queue);
}

function showStack() {
    showDataStructure('stack', stack);
}

function showDataStructure(id, data_structure) {
    const div = document.querySelector('#' + id);
    div.querySelector('.output').textContent = id + ": " + data_structure.join(', ');
}

document.querySelector('#enqueue-button').addEventListener('click', onEnqueueButtonClick);
document.querySelector('#dequeue-button').addEventListener('click', onDequeueButtonClick);

document.querySelector('#push-button').addEventListener('click', onPushButtonClick);
document.querySelector('#pop-button').addEventListener('click', onPopButtonClick);