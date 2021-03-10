class Dog {

    /**
     * Creates a dog with name `name`
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;

    }

    /**
     * Returns the sound of a dog
     * 
     * @returns {string} Sound
     */
    talk() {
        return "Wuff";

    }
}

class Cow {
    constructor(name) {

    }

    talk() {
        return "Muh";
    }
}