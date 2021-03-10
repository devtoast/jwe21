fetch('test.txt')
    .then(function (response) { //Reaktion
        console.log(response);

        console.log();

        //console.log(response.headers.get('Content-Type'));

        // Um Anhand des Content-Type zu entscheiden, in welchem Format der
        // Inhalt weiterverarbeitet wird:
        // 
        // const contentType = response.headers.get('Content-Type');

        // if(contentType.indexOf('text/plain') !== -1) {
        // return response.text(); 
        // return response.blob();
        // }

        return response.text(); // wir erwarten Text

        // Falsch: Der Inhalt dieses Response ist vielleicht noch gar nicht vollständig
        // heruntergeladen worden:
        // const body = response.text();
    })
    .then(function (body) {
        console.log(body);

        document.querySelector('main').textContent = body;

    });


// Schreibweise mit .then() sind JavaScript Promises – Daten die erst in der Zukunft vorhanden sind


fetch('test.json')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function (body) {
        console.log(body);

        document.querySelector('main').textContent = body.message;
    });

    // Keine Garantie über die Reihenfolge der Antwort von .json oder txt