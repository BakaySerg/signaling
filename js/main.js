$(document).ready(function(){
  "use strict";

  //mask
  $("[type=tel]").mask("+7 (999) 999-99-99");

  //form
  $(".form").submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $(this).serialize(),
      success: function(){
        $.magnificPopup.open({items: {src: '#popup-success'},type: 'inline',mainClass: 'mfp-fade',removalDelay: 355},0);
        setTimeout(function(){$.magnificPopup.close()},4000);
      },
      error: function() {
        $.magnificPopup.open({items: {src: '#popup-error'},type: 'inline',mainClass: 'mfp-fade',removalDelay: 355},0);
        setTimeout(function(){$.magnificPopup.close()},4000);
      }
    }).done(function() {$(".form").trigger("reset");});
    return false;
  });

});