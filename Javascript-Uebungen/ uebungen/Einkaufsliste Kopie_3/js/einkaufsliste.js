let orderItems = $('#order_items');
let orderSet = $('#order_set');

//let listItem = $('.list_total');
let outputItems = $('.output');

let deleteItems = $('.order_delete');

let listItemOutput = $(`<div id="list_total" class="list_total"><button id="order_done "class="order_done">&#10004</button><div class="listcontent" id"=listcontent"></div><button id="order_delete" class="order_delete">&#10008</button></div> <br>`);

//let deleteBtn = $('.order_delete')
//let list = $('#list'); //ul



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




orderSet.click(function () {

    let orderItemsVal = orderItems.val();

    //let listItem = `<li id="list"><button id="order_done">&#10004</button>${orderItemsVal}<button id="order_delete">&#10008</button></li>`;

    //let listItem = `<div id="list_total" class="list_total"><button id="order_done "class="order_done">&#10004</button><li id="list" class="list">${orderItemsVal}</li><button id="order_delete" class="order_delete">&#10008</button></div> <br> `;

    listItemOutput.find('.listcontent').html(`<li id="list" class="list">${orderItemsVal}</li>`);

    outputItems.append(listItemOutput); //list
    //console.log(listItem);
});



/*$('#order_delete').click(function () {
    $('#list').destroy();
});*/


/*$('#order_delete').click(function(){
    $('#list').remove();
  });*/

/* deleteBtn.click(function () {

    list.remove(listItem);

});*/

/* $(document).ready(function(){
$('.output button.').click(function () {
    $('.order_delete').remove();
});
//});*/

/*deleteItems.click(function() {
    output.remove(listItem);
});*/



/*$(".order_delete").click(function(){
    $(".output").remove(".list_total");
  });*/




/*$(".test").click(function(){
    $(".list_total").remove();
  });*/

  /*$(".order_delete").click(function(){
    $(".list_total").remove();
  });*/


 deleteItems.click(function () {
    outputItems.remove(listItemOutput);
});