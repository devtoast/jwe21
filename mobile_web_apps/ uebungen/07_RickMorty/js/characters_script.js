const params = new URLSearchParams(window.location.search);
const id = params.get("characters_id");

fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else if (response.status === 404) {
            throw new Error("Film nicht gefunden");
        } else {
            throw new Error(`API Fehler bei id=${id}`);
        }
    })
    .then(function (characters) {
        document.querySelector("#char_name").textContent = `${characters.name}`;
        document.querySelector('#char_img').src = `${characters.image}`;
        document.querySelector('#species').textContent = `Spezies: ${characters.species}`;
        document.querySelector('#gender').textContent = `Geschlecht: ${characters.gender}`;
    })