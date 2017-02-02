$(document).ready(function () {
            
    $('.menubar').click(function () {
      if ($('.slide_panel').css("right") == "-300px") {
          $('.slide_panel').animate({right: '0px'}, 350);
          $('.menu-text').empty().text("Close");
      } 
      else  {
          $('.slide_panel').animate({right: '-300px'}, 350); 
          $('.menu-text').empty().text("Menu");
      } 
    });

    $(document).click(function(){
    if($('.slide_panel').css('right') == '0px' && $('.menubar').hasClass('on') ) {
      $('.slide_panel').animate({right: '-300px'}, 350);
      $('.menu-text').empty().text("Menu");
      $('.menubar').toggleClass("on");
    }
    })
    $('.menubar').click(function () {
    $(this).toggleClass("on"); 
    });
    
});