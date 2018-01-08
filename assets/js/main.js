var ERROR="Something went wrong!";
//returns screen size as 10=xs, 20=sm, 30=md, 40=lg 
var resState;
res_state = function () {
    "use strict";
    resState = parseInt($('.res-state').css('width'));
}


Navigation = function () {
    headerHeight = $('.banner').outerHeight()+$('header').outerHeight();
    scrollPosition = $(window).scrollTop();
    if (scrollPosition > headerHeight) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

}

MobileMenu=function(){
    res_state();
    if(resState<=10 && resState<=20){
        var menu=$("nav");
        var menuDisplay=menu.css("display");
        if(menuDisplay=="none"){
            $("body").addClass("open-menu");
            menu.css("display","flex");

        }else if(menuDisplay=="flex"){
            $("body").removeClass("open-menu");
            menu.hide();

        }else{

            alert(ERROR);
        }
    }
}

ScrollTop=function(){
    $('body,html').finish().animate({scrollTop:$('.banner').outerHeight()},1000);
}

Tabs=function(){
    $(".tab-item").click(function(){
        $(".tab-item").removeClass("active");
        $(this).addClass("active");
        var href=$(this).attr("href");
        href=href.replace("#","");
        
        if(href=="all"){
            $(".item-out").animate({"opacity":0},300).hide();
            $(".item-out").animate({"opacity":1},300).show();
        }else{
            $(".item-out").animate({"opacity":0},300).hide();
            var i=0;
            $(".item-out").each(function(){
                var item=$(this).attr("data-id");
                if(item==href){
                    
                    var index=$(".item-out").index(this);
                    $(".item-out:eq("+index+")").animate({"opacity":1},300).show();

                }
            });
        }
        return false;
    });
}

ToTheTop=function(){
    var height = $(".banner").outerHeight()+$("header").outerHeight()*2;
    var scrollTop=$("html,body").scrollTop();
    if(scrollTop>height){
        $(".scroll-top").fadeIn();
    }else{
        $(".scroll-top").fadeOut();
    }
}

$(function(){
    res_state();
    Navigation();
    Tabs();

    $('body').click(function(e) {
        var target = $(e.target);
        if(target.is('nav')) {
            MobileMenu();
        }

    });

    $(window).scroll(function () {
        Navigation();
        ToTheTop();
    });

    $(window).resize(function () {
        res_state();
        $("body").removeClass("open-menu");
        if(resState>10  && resState>20){
            var menu=$("nav");
            var menuDisplay=menu.css("display");
            if(menuDisplay=="none"){
                menu.css("display","flex");
            }
        }

        if(resState<=10 && resState<=20){
            var menu=$("nav");
            var menuDisplay=menu.css("display");
            if(menuDisplay!="none"){
                menu.hide();
            }
        }
        
    });

    //section animation
    var $animation_elements = $('.loadEffect');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top + 100;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.css('opacity','1');
            } else {
                //$element.removeClass('in-view');
            }
        });
    }
	
    $window.on('scroll resize', check_if_in_view);
	$('body').on('scroll resize', check_if_in_view);
	setTimeout(function(){$window.trigger('scroll');},900);
	//section animation

});