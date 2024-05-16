
// ClickPhrase - Seletor de palavras pré-definidas que encaixam no contexto das frases
$(document).ready(function(){
    $("#ver-planos-btn").click(function(){
        var palavras = ["grandes", "inovadores", "exclusivos", "altruístas", "personalizados", "poderosos"];
        var stack = ["Programação", "Front-End", "Data Science", "Inteligência Artificial", "DevOPS", "UX & Design", "Mobile", "Engenharia de Software", "Inovação & Gestão"]

        var mensagem = "Você vai adorar os nossos planos " + palavras[Math.floor(Math.random() * palavras.length)] + " sobre " + stack[Math.floor(Math.random() * stack.length)] + "!";
        
        alert(mensagem);
    });
});

// FadeInCard - Animação para o card da página principal que cada grupo de cards aparece respectivamente
// TODO: Melhorar esse código
$(document).ready(function(){
    
    $("#group-1, #group-2, #group-3").hide();

    $("#group-1").fadeIn(1000, function() {
        $("#group-2").fadeIn(1000, function() {
            $("#group-3").fadeIn(1000);
        });
    });
});