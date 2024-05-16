
// FadeInForm - Efeito de "aparecer" para a section form
$(document).ready(function(){
    $(".row").hide();
    $(".section").hide();

    $(".section").fadeIn(300, function() {
        $(".row").fadeIn(700, function() {
        });
    });
});

// TextAreaAutoResize - Redimensiona a caixa do campo "Observações" de acordo com a sua extensão
// TextAreaValidator - Muda a cor de acordo com a validação (Verde ✔️ - Vermelho ❌) e informa os caracteres digitados e o limite
$(document).ready(function(){
    M.textareaAutoResize($('#textarea1'));

    $('#textarea1').on('input', function() {
      var caracteres = $(this).val().length;
      $('#count').text(caracteres + '/300');

      if (caracteres == 300) {
        $(this).addClass('invalid');
        $('#count').addClass('text-invalid');
      } else {
        $(this).removeClass('invalid');
        $('#count').removeClass('text-invalid');
      }
    });
  });
  
// TelephoneMask - Define uma máscara para o campo "Telefone"
  $(document).ready(function(){
    $('#telephone').mask('(00) 00000-0000');
});

// ModalCreator - Captura os valores postos nos campos de formulário e imprime na modal
// TODO: Melhorar esse código
$(document).ready(function () {
  $('.modal').modal();

  $('#submitBtn').on('click', function () {
      var firstName = $('#first_name').val();
      var lastName = $('#second_name').val();
      var telephone = $('#telephone').val();
      var email = $('#email').val();
      var observations = $('#textarea1').val();

      var modalContent = "Nome: " + firstName + "<p>";
      var modalContent2 = "Sobrenome: " + lastName + "<br>";
      var modalContent3 = "Telefone: " + telephone + "<br>";
      var modalContent4 = "E-mail: " + email + "<br>";
      var modalContent5 = "Observações: " + observations;

      $('#modalContent').html(modalContent);
      $('#modalContent2').html(modalContent2);
      $('#modalContent3').html(modalContent3);
      $('#modalContent4').html(modalContent4);
      $('#modalContent5').html(modalContent5);

      $('#modal1').modal('open');
  });
});
