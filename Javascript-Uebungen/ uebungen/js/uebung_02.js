//var zahlALsText = "3e";
//console.log(zahlALsText);
//console.log(typeof zahlALsText);

//zahlALsText = parseInt(zahlALsText);
//console.log(zahlALsText);
//console.log(typeof zahlALsText);

//console.log(zahlALsText * 3);


/*
var spruch = "hallo,";
//console.log(spruch);

spruch = spruch + "welt!";
//console.log(spruch);

spruch = "<={" + spruch + "}=>";
console.log(spruch);
*/

const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(3, 4))