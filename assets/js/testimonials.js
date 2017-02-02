$(document).ready(function() {
  $('.button').click(function(e) {
    e.preventDefault;
    $(this).closest('.client_container').find('.img_lg').fadeToggle('slow');
    $(this).closest('.client_container').find('.footer').fadeToggle('slow');
    $(this).closest('.client_container').find('.img_sm').fadeToggle('slow');
    $(this).children('.fa-bars, .fa-arrow-down').toggleClass("fa-bars fa-arrow-down");
    
    
      
    if ($(this).hasClass('button_animate')) {
      $(this).removeClass('button_animate');
    } else {
      $(this).removeClass('button_animate');
      $(this).addClass('button_animate');
    }
  });
    
        
});