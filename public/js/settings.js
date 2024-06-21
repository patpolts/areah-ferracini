"use strict"
/***********************************************
 * settings.js
 * company: areaH.com.br
 * developer: Poltts <patriciapoltts@gmail.com>
************************************************/

var headerH     = $("header").css("height");
var pageH       = $(".content-page").css("height");
var totalPage   = (headerH.replace('px', '') ) + (pageH.replace('px', '') );
var newPageH    = parseInt(totalPage) + parseInt(1200) + 'px';


var loading = setInterval(function(){

    // Loaded content check
    if(document.readyState === 'complete') {
        clearInterval(loading);
        
        $(window).scrollTop(0);
        $(".content").show();
        $(".loading").hide();

        //init sliders
        slider("#slider-sapatos");
        slider("#bizarrices-nos-pes-slide");
        
        $(".navbar-toggle").click(function(event) {
            $(".navbar-collapse").collapse('show'); 
            $(".navbar-collapse").addClass('normalize'); 
        });

        $('.nav a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });

        if(window.innerWidth > 320){
            $(".unsupported").show();
        }

    }else{
        $(".loading").show();
    }

},100);


$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".collapse").removeClass("normalize");
        $(".icon-top").show();
        $("#brand").show();
         $(".navbar-collapse").collapse('hide'); 

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".collapse").addClass("normalize");
        $(".icon-top").hide();
        $("#brand").hide();
    }
});


$(function() {
    $('a.page-scroll').bind('click', function(event) {

        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
