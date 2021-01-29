// Box 
// Button

/*
    TODOs:

        1. Beim Klick auf den Button, wird die Box eingeblendet (mit einer eleganten Animation)
        2. Beim Scrollen nach unten wird ab einer Scroll-Position von 300px (von oben) die Box zu einem Kreis
        3. Bei jedem Klick auf den Button erhöht sich die Zahl in der Box

*/

let box = $('.box');
let btn = $('.btn');

btn.click(function () {

    box.animate({

        width: '300px',
        height: '300px',

    }, 2000)

}
);



$(window).scroll(function () {

    let scrollPos = Math.floor($(document).scrollTop());
    console.log(scrollPos);

    if (scrollPos >= 100) {
        box.animate({

            borderRadius: '50%', //SCHREIBWEISE!!!!!!!!!!!!!!!!!

        }, 1000)
    };


    
});

// box.finsh();

// box.stop();



let clk = 0;

btn.click(function () {

    clk += 1;
    $('.clk-num').html(clk);  // STRICHPUNKT!!!!!!!
    console.log(clk);

    if (clk >= 2) {
        $('#num-hide').removeClass('hide')
    };

}
);






