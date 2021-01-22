let box = $('.animatedBox');

box.animate({ 

    top : '+=100px', // += von der aktuellen Position 100px versetzt
    opacity : '.3',
    left : '50px',

}, 

3000, // 3000 = 3sec.
'linear', 


function() 
{
   // console.log('Animation abgeschlossen')


    box.animate({
        width : '+=300px',
        height : '+=300px',
        opacity : '1',
    }, 2000)
}
);

// box.animate({}).animate({}).css = Verkürzung