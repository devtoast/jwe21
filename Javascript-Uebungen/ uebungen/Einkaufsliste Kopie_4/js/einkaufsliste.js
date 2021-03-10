let orderItems = $('#order_items');
let orderSet = $('#order_set');

let orderItems_isValid;


orderItems.keyup(function () {

    orderItems_isValid = 0;

    let wert = $(this).val();
    console.log('Eingabe = ' + wert);

    if (wert.match(/[a-zA-Z]+/g) != null && wert.length > 1) {
        console.log('Eingabe hat mehr als einen Buchstaben und enthält nur Buchstaben');
        orderItems_isValid++;
    } else {
        console.warn('Bitte ordentlich Ausfüllen!');
        orderItems_isValid = 0;
    }
});





let output = $('.output');
let list = $('ul');

orderSet.click(function () {

    let listElement = $('<li class="list-item"></li>');  // 1) Variablen vorab - generieren dann den dynamischen Code
    let checkBtn = $('<button class="check" id="check">&#10004;</button>');
    let listContent = $('<span class="item-titel"></span>');
    let removeBtn = $('<button class="remove" id="remove">&#10008;</button>');

    let orderItemsVal = orderItems.val(); //Ausfüllfeld + das was drinsteht (.val)

    checkBtn.click(function () {
        $(this).parent().toggle(); // oder css  (.parent????) hin und herschalten
    });

    removeBtn.click(function () {  // zweite Funktion kann ruhig in der Ersten drinstehen - damit der Inhalt überhaupt mal erzeugt wurde
        $(this).parent().remove();
    });

    listContent.html(orderItemsVal); // Fügt den Inhalt ein - Wurst Käse usw.

    let listItem = listElement.append(checkBtn); // 2) Reihenfolge wie oben
    listItem.append(listContent);
    listItem.append(removeBtn);

    list.append(listItem); // Fügt den dynamisch erzeugten Code in die Liste ein (let list = $('ul');) – siehe oben

    console.log(listItem); // Nur zum Anschauen

    orderItems.val(''); // Leert das Eingabefeld wieder

});




/*  // Ist auch Möglich aber nicht so toll

orderSet.click(function () {

    let orderItemsVal = orderItems.val();

    let listItem = `<li class="list-item"><button class="check" id="check">&#10004;</button><span class="item-titel">${orderItemsVal}</span><button class="remove" id="remove">&#10008;</button></li>`;

    list.append(listItem);
    console.log(listItem);



    let removeBtn = $('.remove');
    let checkBtn = $('.check');

    removeBtn.click(function () {
        $(this).parent().remove();
    });
});
*/









/*
 $(".test").click(function(){  // funktioniert weil der Button NICHT im Javascript erstellt wird sondern schon im HTML erzeugt wird!!
    $(".list-item").remove();
  });
*/
