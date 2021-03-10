function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Klasse (Class) vereint Daten und Funktion (wie Stapelverarbeitung od. Stilvorlage)
 * in einem Paket
 */

// Eine Klasse (Class) für eine Liste von Zufallszahlen (random) – RandomList

class RandomList {

    /**
     * Erstelle eine neue Liste von Zufallszahlen (integer)?
     * 
     * @param {Number} min Minimum integer
     * @param {Number} max Maximum integer
     * @param {Number} length Anzahl der Elemente in der Liste
     */

    /**
     * constructor( die ARGUMENTE in die Klammer (min, max, length))
     * 
     * in den "constructor" kommen die Teile aus denen die Klasse besteht 
     * z.B."this._list = [];" (leeres Array) + for-Schleife, könne auch mehr sein
     * 
     * Innerhalb einer Klasse Variablen mit Unterstrich! (ist so üblich)
     */

    constructor(min, max, length) {
        this._list = [];

        for (let i = 0; i < length; i++) {
            this._list.push(randomInt(min, max));
        }
    }

    isInList(value) {
        for (let i = 0; i < this._list.length; i++) {
            if (this._list[i] === value) {
                return true;
            }
        }

        return false;
    }





    /**
     * Finde das Vorkommen einer bestimmten Nummer
     * @param {Number} valuel
     * @returns {Number} Die Zahl der Vorkommen
     */

    count(value) {
        let cnt = 0;
        for (let i = 0; i < this._list.length; i++) {
            if (this._list[i] === value) {
                cnt++;
            }
        }

        return cnt;
    }

}