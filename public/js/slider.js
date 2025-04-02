/*********************************************** 
 * slider.js
 * company: areaH.com.br
 * developer: Pati Poltts <me@poltts.com.br> 
************************************************/

function slider(theSlider) {
    var images = $(theSlider + " figure").children();
    var imgsTotal = images.length;
    var texto = null;
    
    document.querySelectorAll(`${theSlider} figure > img`).forEach((el) => {
        el.setAttribute('aria-hidden', 'false');

        if(el.className == "on"){
            el.setAttribute('aria-hidden', 'false');
        }
    });

    $(images).each(function () {
        $(images).attr('aria-hidden','true');

        if (images != "figcaption") {
            $(images).hide();
            $(images[0]).addClass("on").show();
            $(images[0]).attr('aria-hidden','false');
            $(images[0]).attr('alt','Slideshow: imagem ativa.');
        }

        texto = $(images).attr("title");
        $(theSlider + " figure > figcaption").html("<p>" + texto + "</p>");

    });

    $(theSlider + " figure > figcaption").show();
    $(".prev").hide();
    $(".next").show();

    $(".next").on("click", function () {
        if ($(theSlider + " figure > img.on").next().attr("src")) {
            $(".next").show();
            $(".prev").show();
            // $(theSlider + " figure > img.on").attr('aria-hidden','false');
            $(theSlider + " figure > img.on").fadeOut().removeClass("on").next().fadeIn().addClass("on");
            texto = $(theSlider + " img.on").attr("title");
            $(theSlider + " figure > figcaption").html("<p>" + texto + "</p>");

        }

    });

    $(".prev").on("click", function () {
        if ($(theSlider + " figure > img.on").prev().attr("src")) {
            $(".next").show();
            $(".prev").show();
            // $(theSlider + " figure > img.on").attr('aria-hidden','false');
            $(theSlider + " img.on").fadeOut().removeClass("on").prev().fadeIn().addClass("on");
            texto = $(theSlider + " img.on").attr("title");
            $(theSlider + " figure > figcaption").html("<p>" + texto + "</p>");

        }

    });

    


}