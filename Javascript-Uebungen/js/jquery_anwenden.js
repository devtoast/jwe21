//$('body').html('<div id="js-element"></div>');

// ANDERE SCHREIBWEISE – document.getElementsByTagName('body').innerHTML = '<div id="neues-js-element"></div>';

console.log('die Seite ist geladen');



$('#calc').click(
    function () {
        console.log('button clicked');

        //console.log($('#input').val());

        //console.log(
        // eval
        //  ($('#input').val()
        //  )
        // );

        let eingabe = $('#input').val();
        let result = eval(eingabe);

        console.log(result);

        $('#result').val(result);

    }
);
