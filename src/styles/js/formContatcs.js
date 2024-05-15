$(document).ready(function(){
    
    $(".row").hide();
    $(".section").hide();

    $(".section").fadeIn(300, function() {
        $(".row").fadeIn(700, function() {
        });
    });
});

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