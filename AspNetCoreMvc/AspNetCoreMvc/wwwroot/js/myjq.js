// JavaScript source code
$(document).ready(function () { 

    var headers = $('header');
    for (var i = 0; i < $(headers).length; i++) {
        if (i % 2 == 0) {
            $(headers[i]).css('color', 'navy');
        } else {
            $(headers[i]).css('color', 'green');
        }
    }


    $("section").mouseover(function () {
        var bgColour = $(this).css('background-color');
        var rgbaValues = bgColour.match(/\d+/g);
        var red = parseInt(rgbaValues[0]);
        var green = parseInt(rgbaValues[1]);
        var blue = parseInt(rgbaValues[2]);
        var alpha = parseFloat(rgbaValues[3]);
        alpha = 1;
        var newBgColour = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
        $(this).css('background-color', newBgColour);
    }).mouseout(function () {
        var bgColour = $(this).css('background-color');
        var rgbaValues = bgColour.match(/\d+/g);
        var red = parseInt(rgbaValues[0]);
        var green = parseInt(rgbaValues[1]);
        var blue = parseInt(rgbaValues[2]);
        var alpha = parseFloat(rgbaValues[3]);
        alpha = 0.5;
        var newBgColour = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
        $(this).css('background-color', newBgColour);
    });

});