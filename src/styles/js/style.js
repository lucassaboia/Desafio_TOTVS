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

$(document).ready(function(){
    $("#ver-planos-btn").click(function(){
        var palavras = ["grandes", "inovadores", "exclusivos", "altruístas", "personalizados", "poderosos"];
        var stack = ["Programação", "Front-End", "Data Science", "Inteligência Artificial", "DevOPS", "UX & Design", "Mobile", "Engenharia de Software", "Inovação & Gestão"]

        var mensagem = "Você vai adorar os nossos planos " + palavras[Math.floor(Math.random() * palavras.length)] + " sobre " + stack[Math.floor(Math.random() * stack.length)] + "!";
        
        alert(mensagem);
    });
});

