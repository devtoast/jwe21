class List {
    constructor(name, seperator) {
        this._name = name;

        if (seperator === undefined) {
            this._seperator = ', ';
        }
        else {
            this._seperator = seperator;
        }

        this._list = [];

    }

    toString() {
        return this._name + ': ' + this._list.join(this._seperator);
    }
}


class Queue extends List {
    constructor(name, seperator) {
        super(name + '-Queue', seperator);
    }

    enqueue(element) {
        this._queue.push(element);
    }

    dequeue() {
        return this._queue.shift();
    }

    toString() {
        return super.toString();
    }

}


class Stack extends List {
    constructor(name, seperator) {
        super(name, seperator);
    }

    push(element) {
        this._stack.push(element);
    }

    pop() {
        return this._stack.pop();
    }

    toString() {
        return super.toString();
    }

}