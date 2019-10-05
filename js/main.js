function showPage() {
  setTimeout(function(){
      document.body.classList.remove('js-loading');
      setTimeout(function(){
      $(".loader").fadeOut();
      },500);
  });

}
document.body.classList.add('js-loading');


$(document).ready(function(){
  // "use strict";

    // Ruffles
    var ww = $(window).width(),
        wh = $(window).height();
    //only desktop
    if ( ww > 1023) { 
      $('.s-project .col-sm-6,.s-advantage .col-xs-6,.gallery__box div').addClass("trnsl").viewportChecker({
        classToAdd: 'anim-play',
        offset: 50
      });
      $('.half-container > div').addClass("trnslx").viewportChecker({
        classToAdd: 'anim-play',
        offset: 100
      });
      $('.s-partnership .container').addClass("cliptrapez").viewportChecker({
        classToAdd: 'anim-play',
        offset: 320
      });
    };

  
    // Nav    
    $('a.top__link').on('click', function(event) {
      $('.navbar-toggle:visible').trigger('click');
    });

    //scroll to place
    $(".js-scroll-down").click(function() {
      $("html, body").animate({scrollTop: $($(this).closest('section').next('section')).offset().top + "px"}, {duration: 800});
      return false;
    });
    $(".js-scroll-up").click(function() {
      $("html, body").animate({scrollTop: 0}, {duration: 800});
      return false;
    });


    //slider
    $('.slick-slider').slick({
      responsive:true,
      infinite: true,
      dots: false,
      speed:500,
      arrows: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 800,
        settings: {
          draggable:false,
          slidesToShow: 2
        }        
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode:true,
          arrows: false,
          draggable:true,
          centerPadding:'80px'}
        },{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode:true,
          arrows: false,
          draggable:true,
          centerPadding:'50px'
        }
      }]
    });

    // Попап
    if ($('.js-popup').length){
      $('.js-popup').magnificPopup({
         type: 'inline',
         removalDelay: 300,
         fixedContentPos: true,
         fixedBgPos: true,
         mainClass: 'mfp-fade',
         closeOnBgClick: true,
         enableEscapeKey:true,
         callbacks: {
           beforeOpen: function() { $('.wrapper').addClass('is-popup-open'); },
           close:function() { $('.wrapper').removeClass('is-popup-open'); }
         }
      });
    };

     
});
$(window).on('load', showPage);