function getfilms(event) {
    // fetch:

    fetch('https://ghibliapi.herokuapp.com/films')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('API error');
            }
        })
        .then(function (films) { // films = argument


            // Fuege li an unsere ul hinzu

            const ul = document.querySelector('#film-list');

            // Für jeden Film
            for (let film of films) { // For-Schleife gneriert ein li für jeden Film aus den api-Daten (die List weiss wie lange sie ist)
                // Die for-Schleife entspricht
                // for (let i = 0; i < films.length; i++) {
                //const film = films[i];


                // erzeugen wir ein li
                const li = document.createElement('li');
                const title = film.title;
                const id = film.id;

                const a = document.createElement('a');
                // Befuellen das li mit Informationen zum Film
                a.textContent = title;
                a.href = `film.html?film_id=${id}`;

                // Fuege li an unsere ul hinzu
                li.appendChild(a);
                ul.appendChild(li);


            }
        });
}

document.querySelector('#get-film-btn').addEventListener('click', getfilms);