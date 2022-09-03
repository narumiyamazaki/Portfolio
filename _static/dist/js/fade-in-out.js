jQuery(function($){
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 100) {
      $('.p-header__title__wrapper').css('visibility','hidden');
    } else {
      $('.p-header__title__wrapper').css('visibility','');
    }
  });
});