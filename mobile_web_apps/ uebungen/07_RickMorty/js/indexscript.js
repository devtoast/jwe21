function getInfosCar(event) {

    fetch("https://rickandmortyapi.com/api/character")
        .then(function (response) {
            if (response.ok) {
                //console.log(response);
                return response.json();
            } else {
                throw new Error("API error");
            }
        })

        .then(function (character) {
            //console.log(character.results);
            const ulCha = document.querySelector("#characters");

            for (let characters of character.results) {

                const li = document.createElement("li");
                const name = characters.name;
                const id = characters.id;

                const a = document.createElement("a");

                a.textContent = name;
                a.href = `characters.html?characters_id=${id}`;

                ulCha.appendChild(li);
                li.appendChild(a);

            }

        });
}

function getInfosLoc(event) {

    fetch("https://rickandmortyapi.com/api/location")
        .then(function (response) {
            if (response.ok) {
                //console.log(response);
                return response.json();
            } else {
                throw new Error("API error");
            }
        })

        .then(function (location) {
            //console.log(location.results);
            const ulLoc = document.querySelector("#locations");

            for (let locations of location.results) {

                const li = document.createElement("li");
                const name = locations.name;
                const type = locations.type;
                const id = locations.id;

                const a = document.createElement("a");

                a.textContent = name + ' | ' + 'TYPE: ' + type;
                a.href = `locations.html?locations_id=${id}`;

                ulLoc.appendChild(li);
                li.appendChild(a);

            }

        });
}

document.querySelector("#carBtn").addEventListener("click", getInfosCar);
document.querySelector("#locBtn").addEventListener("click", getInfosLoc);
