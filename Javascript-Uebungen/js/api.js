/* 

let endpoint = 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1';
let params = {}; // Füllung optional

let response;

$('#update_btn').click(function () {

    $.ajax({
        url: endpoint,
        data: params,
        dataType: 'json',
        type: 'GET',

        success: function(response) { // bei Erfolg kann ich die Daten weiterverarbeiten (data = response)
            
            window.response = response;

            console.log(response);

            //Datentyp: JSON !!!!!!!

            let Eintrag1 = response.data[0];

            //in eine Zeichenkette umwandeln
            JSON.stringify( Eintrag1 );

            // Zeichenkette des ersten Eintrages in HTML ausgeben
            $('#response').html( Eintrag1 );



            //$('#response').html(JSON.stringify (response.data[0]));
            

        }

    });


});

*/

/*

let endpoint = 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1'
//es lassen sich abfrage parameter abschicken
let params ={};

let response;

$('#update_btn').click(function(){
    $.ajax({
        type: "GET",
        url: endpoint,
        data: params,
        dataType: "json",

        //wenn ich daten erhalten dann kan ich sie weiter verarbeiten
        success: function (response) {

            //wird auf die globale response übernommen
            window.response = response;
            console.log(response);

            /*
            Siehe Doku

            response = {}

            ['data']: {

            }
*/

/*
//Daten: JSON/ der datentyp muss umgewandelt werden
$('#response').html(JSON.stringify(window.response.data[1]));


}
});
});
*/

let endpoint = 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1';
let params = {};

let response;

$('#update_btn').click(function () {

    $.ajax({
        url: endpoint,
        data: params,
        dataType: 'json',
        type: 'GET',

        success: function (response) {

            console.log(response);
            window.response = response;

            let html;
            $(response.data).each(function (index, eintrag) {
                html += `<strong class="price">${eintrag.priceUsd}</strong>`;
                html += `<span class="time">${eintrag.time}</span>`;
                html += '<br>';
            });

            $('#response').html(html);

        }

    });

});



