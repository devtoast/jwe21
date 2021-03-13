// GET auf unseren Server – GET ist Standarteinstellung muss nicht angegeben werden!
fetch('http://localhost:3000?search=hans&user=soundso')
    .then(function (response) {
        if (response.ok) {
            return response.text();
        }
    })
    .then(function (data) {
        console.log(data);
    });


// POST auf unseren Server
const data = {
    message: "hello Server!" // Property (message) : Daten (hello Server!)
};

fetch('http://localhost:3000', {

    method: 'POST',
    // Damit der Server weiss, dass der Body dieser Nachricht im Format JSON ist, 
    // muessen wir Content-Type auf 'application/json' setzen.
    // Ein PNG 
    headers: {
        'Content-Type': 'application/json' // headers = Datendefinition (1. was Server liest)
    },
    body: JSON.stringify(data), // body = Property für Daten an den Server
    // –> '{ "message": "hello server!"}'

})
    .then(function (response) {
        console.log(response);
    })