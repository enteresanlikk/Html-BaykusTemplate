// Select all links with hashes
$('.nav-link[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {

      MobileMenu();
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-$("header").outerHeight()*2.5
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            
            MenuActive();
            

            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  MenuActive=function(){
    
    var link_piece=$('.nav-link').length;
    var body_height=$("body").height();
    var body_scrollTop=$("body,html").scrollTop();

    for(var i=0;i<link_piece;i++){
        var item=$(".section:eq("+i+")");
        var item_scrollTop=item.offset().top-$("header").outerHeight()*3;
        
        if(body_scrollTop>item_scrollTop){
          $(".nav-link:eq("+i+")").addClass("active");
        }else if(body_scrollTop<item_scrollTop){
          $(".nav-link:eq("+i+")").removeClass("active");
        }
    }

  }

  $(function(){

    $(window).on("scroll resize",function(){
      
      MenuActive();

    });

  });