
const queue = [];

function enqueue(element) {
    queue.push(element);
}

function dequeue() {
    return queue.shift();
}


let q = new Queue();



class Queue {
    constructor() {
        this._queue = [];
    }

    enqueue(element) {
        this._queue.push(element);
    }

    dequeue() {
        return this._queue.shift();
    }

    toString() {
        return this._queue.join(', ');
    }

}


let q = new Queue();




const stack = [];

function push(element) {
    stack.push(element);
}

function pop() {
    return stack.pop();
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



function showQueue() {
    showDataStructure('queue', queue);
}



document.querySelector('#enqueue-button').addEventListener('click', onEnqueueButtonClick);
document.querySelector('#dequeue-button').addEventListener('click', onDequeueButtonClick);




let s = new Stack();


function showStack() {
    showDataStructure('stack', s);
}

function showDataStructure(id, data_structure) {
    const div = document.querySelector('#' + id);
    div.querySelector('.output').textContent = id + ": " + data_structure.toString(', ');
}


function onPushButtonClick() {
    const elem = document.querySelector('#push-value').value;

    s.push(elem);

    showStack();
}


function onPopButtonClick() {
    const elem = s.pop();

    const output = document.querySelector('#pop-value');
    if (elem !== undefined) {
        output.classList.remove('warn');
        // entspricht $("#dequeue-value").html("..."):
        output.innerText = 'Wert: ' + elem;
    }
    else {
        output.classList.add('warn');
        output.innerText = 'Eine leere Stack kann kein pop!';
    }
    showStack();
}


document.querySelector('#push-button').addEventListener('click', onPushButtonClick);
document.querySelector('#pop-button').addEventListener('click', onPopButtonClick);