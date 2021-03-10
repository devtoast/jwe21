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
        this._list = []; // = this list
        //this._set = new Set();

        // Option 4
        this._map = new Map();

        for (let i = 0; i < length; i++) {

            const randomNumber = randomInt(min, max);
            this._list.push(randomNumber);
            //Option 3
            //this._set.add(randomNumber);

            //Option 4: Map updaten
            if (this._map.has(randomNumber)) {
                const cnt = this._map.get(randomNumber);
                this._map.set(randomNumber, cnt + 1); // map = wie Stricherlliste (zählt schon bei Listenerstellung mit)
            }
            else {
                this._map.set(randomNumber, 1);
            }

        }

        // Beispiel 
        // Zufallszahlen 5, 70, 5
        // list: 5, 70, 5
        // map:
        // 5 -> 2
        // 70 -> 1

        // Option 2: Sortieren einer Liste
        this._list.sort(function compare(a, b) { // sort sortiert Liste (compare vergleicht)
            return a - b;
        });

    }

    isInList(value) { // ist der Wert in der Liste?


        // // Option1 
        // for (let i = 0; i < this._list.length; i++) {
        //     if (this._list[i] === value) {
        //         return true;
        //     }
        //     else if (this._list[i] > value) { // Sortierung
        //         return false;
        //     }
        // }

        // return false; // wird aufgerufen wenn oben nix ausgelöst wird (gibt nicht undifiend zurück)




        // return bricht Schleife immer ab

        // Wir suchen 3
        // [ 1, 2, 3, 4, 5]
        //         ^ an dieser Stelle return true - Schleife wird abgebrochen

        // Wir suchen 3
        // [ 1, 4, 5]
        //      ^ an dieser Stelle return false - Schleife wird abgebrochen



        //Option 2 (set) sucht Vorkommen der Zahl in paralell zur Liste erzeugten Set (im Set kommt Zahl nur 1x vor und ist deshalb schneller)
        //return this._set.has(value);

        // Option 4: Nutzen von Map. Wenn value kein Schlüssel in der Map ist, kommt value nicht vor.
        return this._map.has(value);



    }







    /**
     * Finde das Vorkommen einer bestimmten Nummer
     * @param {Number} valuel
     * @returns {Number} Die Zahl der Vorkommen
     */

    count(value) { // wie oft ist der Wert in der Liste?
        // Option 1: Dursuchen der Liste
        // let cnt = 0;
        // for (let i = 0; i < this._list.length; i++) {
        //     if (this._list[i] === value) {
        //         cnt++;
        //     } else if (this._list[i] > value) {
        //         return cnt; //  wg. Sortierung
        //     }

        // }

        // return cnt;

        //Option 4 – gibt den bereits mitgezälten Wert aus
        return this._map.get(value)
    }

}