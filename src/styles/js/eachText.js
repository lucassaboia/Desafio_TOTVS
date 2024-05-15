$(document).ready(function(){
    $(".row p").each(function(index){
        var texto = $(this).text();
        $(this).empty();
        var i = 0;
        var interval = setInterval(function(){
            if (i <= texto.length) {
                $(this).text(texto.substring(0, i));
                i++;
            } else {
                clearInterval(interval);
            }
        }.bind(this), 20);
    });
});