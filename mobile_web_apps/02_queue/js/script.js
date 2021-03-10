const queue = [];


function enqueue(element) {
    queue.push(element);
}


function dequeue() {
    return queue.shift();
}


function showDataStructure(id, data_structure) {
    const div = document.querySelector('#' + id);
    div.querySelector('.output').textContent = id + ": " + data_structure.join(', ');
}


function showQueue() {
    showDataStructure('queue', queue);
}


function onEnqueueButtonClick() {
    // Eingabe holen aus dem Element #enqueu-value
    const element = document.querySelector('#enqueu-value').value;
    enqueue(element);

    console.log(queue);

    showQueue();

    // Aufruf der enqueue-Funktion mit der Eingabe
}


function onDequeueButtonClick() {
    // Aufruf der dequeue-funktion und speichern in eine
    const elem = dequeue();

    const output = document.querySelector('#dequeue-value');
    if (elem !== undefined) {
        output.classList.remove('warn'); // html class .output
        // entspricht $("#dequeue-value").html("..."):
        output.innerText = 'Wert: ' + elem;
    }
    else {
        output.classList.add('warn');
        output.innerText = 'Eine leere Queue kann kein dequeue!';
    }

    // Ausgabe der Variable
    showQueue();
}


document.querySelector('#enqueu-button').addEventListener('click', onEnqueueButtonClick);
document.querySelector('#dequeue-button').addEventListener('click', onDequeueButtonClick)


