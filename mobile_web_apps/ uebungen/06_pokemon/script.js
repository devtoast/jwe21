// fetch('https://pokeapi.co/api/v2/type/3')
//     .then(function (response) {
//         if (response.ok) {
//             console.log(response);
//             return response;
//         }
//     })
//     .then(function (pokes) {

//         const output = document.querySelector('#pokemon-output');
//     })




function onBtnClick(event) {
    fetch('https://pokeapi.co/api/v2/pokemon/12/')
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                return response;
            }
        })

        .then(function (output) {
            //output.textContent = ;
        })


}

const btn = document.querySelector('#get-pokemon');
btn.addEventListener('click', onBtnClick);

const output = document.querySelector('#pokemon-output');