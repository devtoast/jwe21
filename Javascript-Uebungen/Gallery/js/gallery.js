// Liste der Bildnamen
let images = [
    'pexels-adnan-4713440',
    'pexels-allan-franca-carmo-2820573',
    'pexels-anna-tarazevich-5896071',
    'pexels-claudia-schmalz-6138756',
    'pexels-isaac-taylor-2305076',
    'pexels-kalz-2970225',
    'pexels-mohamed-abdelsadig-3565086',
    'pexels-nika-akin-3315116',
    'pexels-vladislav-murashko-5990678',
    'pexels-waldir-evora-5944321',
];

let gallery = $('#gallery');

let lightboxContainer = $('<div id="lightbox" class="hide">   <span class="close">X</span>   <div class="lightbox-inner"></div></div>'); // class-hide wurde später zugefügt


$('body > .wrapper').append(lightboxContainer);



// Ausgabe der Thumbs

// https://api.jquery.com/each/

$(images).each(
    function (index, element) { // element ist Standardfunktion! = Elemente aus Array

        // image tag
        let htmlImageTag = `<img src="img/thumbs/${element}.jpg" alt="" class="thumb">`;


        // image-Link zum Original-Bild
        htmlImageTag = `<a href="img/original/${element}.jpg"> ${htmlImageTag} <a/>`; // ${} verlinkt auf eine Zeile drüber(ursprüngliches htmlImageTag)!

        // gallery.html(htmlImageTag); (aber nur letztes Bild!)

        gallery.append(htmlImageTag); 

        // console.log(htmlImageTag);




        // html-Code für das vergrößerte Bild

        // eventhandler für den Klick auf das Thumb



    });

    $('#gallery a').click(
        function(e){
            e.preventDefault(); // Browserverhalten unterbinden - (e od. event e=Abkürzung!!) der function mitgeben!!!

            let urlToMyOriginalImage = $(this).attr('href');
            console.log(urlToMyOriginalImage);

            // TODO: Image-Tag dynamisch erzeugen (zusammenbauen)
            lightboxContainer.find('.lightbox-inner').html('<!-- hier kommt das Image-Tag rein -->')

            lightboxContainer.removeClass('hide');
    }
    );


            /* TODO: <span class="close"></span> mit Click-Event versehen 
            um die Klasse "hide" wieder hinzuzufügen und somit den Lightbox-Container wieder auszublenden
            */

// verleihen eines Klick Events für jedes Thumb um das vergrößerte Bild anzuzeigen


