const params = new URLSearchParams(window.location.search);
const id = params.get('film_id');

if (id) { // !== undefined
    //fetch auf die API: https://ghibliapi.herokuapp.com/films/{id}

    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                return response.json();
            }

            else if (response.status === 404) {
                throw new Error("Film nicht gefunden");
            } else {
                throw new Error(`API Fehler bie id=${id}`);
            }
        })
        .then(function (filmInfos) {

            const title = document.querySelector('#film-title');
            title.textContent = `Titel: ${filmInfos.title} | Originaltitel: ${filmInfos.original_title}`;

            const description = document.querySelector('#film-description');
            description.textContent = filmInfos.description;



            const infoPoints = document.querySelector('#info-points');

            const li1 = document.createElement('li');
            li1.textContent = `Director: ${filmInfos.director}`;

            const li2 = document.createElement('li');
            li2.textContent = `Producer: ${filmInfos.producer}`;

            const li3 = document.createElement('li');
            li3.textContent = `Erscheinungsdatum: ${filmInfos.release_date}`;

            infoPoints.appendChild(li1);
            infoPoints.appendChild(li2);
            infoPoints.appendChild(li3);

            console.log(li1, li2, li3);


        })
}