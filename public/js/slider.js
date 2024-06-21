/*********************************************** 
 * slider.js
 * company: areaH.com.br
 * developer: Poltts <patriciapoltts@gmail.com> 
************************************************/

 function slider(theSlider){

        var images = $(theSlider+" figure").children();
        var imgsTotal = images.length;
        var texto = null;

            $(images).each(function(){
                if(images != "figcaption"){
                    $(images).hide();
                    $(images[0]).addClass("on").show();
                }
                texto = $(images).attr("title");
                $(theSlider+" figure > figcaption").html("<p>"+texto+"</p>");
               
            });
            
            $(theSlider+" figure > figcaption").show();
            $(".prev").hide();
            $(".next").show();

            $(".next").on("click", function(){
                if($(theSlider+" figure > img.on").next().attr("src")){
                    console.log(1);
                    $(".next").show();
                    $(".prev").show();
                    $(theSlider+" figure > img.on").fadeOut().removeClass("on").next().fadeIn().addClass("on");
                    texto = $(theSlider+" img.on").attr("title");
                    $(theSlider+" figure > figcaption").html("<p>"+texto+"</p>");
                }
               
            });
           
            $(".prev").on("click", function(){
                // if($(images[0]).attr("class") === "on"){
                //      $(".prev").hide();
                //      $(".next").show();
                // }
                if($(theSlider+" figure > img.on").prev().attr("src")){
                    $(".next").show();
                    $(".prev").show();
                        $(theSlider+" img.on").fadeOut().removeClass("on").prev().fadeIn().addClass("on");
                        texto = $(theSlider+" img.on").attr("title");
                        $(theSlider+" figure > figcaption").html("<p>"+texto+"</p>");
                }

            });

        
    }