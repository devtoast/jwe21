fetch('user.json')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(`Fehler in Antwort vom Server (Statuscode: ${response.status} ${response.statusText})`);
        }
    })
    .then(function (users) {

        if (users.length == 0) {
            throw new Error('Es sind keine User vorhanden');
        }
        const ul = document.querySelector('#people-list');

        for (let user of users) {
            const id = user.id;
            const name = user.name;

            const li = document.createElement('li');
            li.textContent = name;
            li.dataset.userId = id;

            ul.appendChild(li);
        }
    })
    // Fehler, die in einer Funktion mit .then passieren (throw new Error...)
    // landen in der .cath Funktion
    .catch(function (error) {
        document.querySelector('#info').textContent = error.message;
    });

// Bei enem Klick auf eines der User li soll mit einem
// neuen Fetch die Detailinfo zu dem User geholt werden.
// 1 -> 'user/1.json'
// Detailinfo im div#user-detail


function onInfoClick(event) {

    const element = event.target;

    if (element !== event.currenttarget && element.dataset.userId == 1) {
        fetch('1.json')
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                    console.log(response);
                }
            })

            .then(function (users) {
                const userDetail = document.querySelector('#user-detail');

                for (let user of users) {
                    const age = user.age;
                    const color = user.hairColor;

                    const userLi = document.createElement('li');

                    userLi.textContent = user.age;
                    userLi.textConten = user.hairColor;

                    userDetail.appendChild(userLi);

                }

            })

    }
}

const info = document.querySelector('#people-list');
info.addEventListener('click', onInfoClick);