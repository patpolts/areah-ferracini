"use strict"
/***********************************************
 * settings.js
 * company: areaH.com.br
 * developer: Pati Poltts <me@poltts.com.br>
************************************************/
let brand = $("#brand");
let headerH = $("header").css("height");
let pageH = $(".content-page").css("height");
let totalPage = (headerH.replace('px', '')) + (pageH.replace('px', ''));
let newPageH = parseInt(totalPage) + parseInt(1200) + 'px';

let loadingElement = document.querySelector('.loading');
let unsupportedElement = document.querySelector('.unsupported');
let contentElement = document.querySelector('.content');
let isPlayingHeaderVideo = true;


let loading = setInterval(async () => {
    if (document.readyState === 'complete') {
        clearInterval(loading);

        await init();

    } else {
        $(".loading").show();
    }

}, 100);


$(window).scroll(function () {
    scrollSettings();
});

async function init() {
    const activeElement = document.activeElement || null;
    $(window).scrollTop(0);

    loadingElement.setAttribute('aria-hidden', 'true');
    loadingElement.classList.add("hidden");
    contentElement.setAttribute('aria-hidden', 'false');
    contentElement.classList.remove("hidden");
    contentElement.classList.add("show");

    slider("#slider-sapatos");
    slider("#bizarrices-nos-pes-slide");

    $(".navbar-toggle").click(function (event) {
        $(".navbar-collapse").collapse('show');
        $(".navbar-collapse").addClass('normalize');
    });

    $('.nav a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    if (window.innerWidth > 320) {
        $(".unsupported").show();
    }

    initEvents();
    handleInfoGraphicDrag();

    return;
}

function scrollSettings() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".collapse").removeClass("normalize");
        $(".icon-top").show();
        $(".icon-top").attr('aria-hidden', 'true');
        brand.show();
        brand.attr('aria-hidden', 'false');
        $(".navbar-collapse").collapse('hide');

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".collapse").addClass("normalize");
        $(".icon-top").hide();
        $(".icon-top").attr('aria-hidden', 'false');
        brand.hide();
        brand.attr('aria-hidden', 'true');
    }
}

function keydownEventHandler(event) {
    stopBackgroundVideo();
    handleKeyPress(event);
}

function clickEventHandler(event) {
    if (event.target.closest("header")) {
        stopBackgroundVideo();

    }
}

function pageScrollLinkHandler(event) {
    let $anchor = $(this);
    let top = $($anchor.attr('href')).offset().top;

    $('html, body').stop().animate({
        scrollTop: top
    }, 1500, 'easeInOutExpo');

    // $anchor.forEach(link => {
    //     link.addEventListener('keydown', function (event) {
    //         if (event.key === " " || event.key === "Enter") {
    //             let $anchor = $(this);
    //             $('html, body').stop().animate({
    //                 scrollTop: $($anchor.attr('href')).offset().top
    //             }, 1500, 'easeInOutExpo');
    //             event.preventDefault();

    //         }
    //     });
    // });

    stopBackgroundVideo();
    event.preventDefault();

}

async function initEvents() {
    document.addEventListener("keydown", keydownEventHandler);
    document.addEventListener("click", clickEventHandler);

    $('a.page-scroll').bind('click', pageScrollLinkHandler);
    $('a.page-scroll').bind('focus', pageScrollLinkHandler);

    document.querySelector("#sapatos-estilosos").addEventListener("keydown", (e) => {
        const prev = document.querySelector("#sapatos-estilosos .prev");
        const next = document.querySelector("#sapatos-estilosos .next");

        if (e.key === "ArrowLeft") {
            prev.click();
        }

        if (e.key === "ArrowRight") {
            next.click();
        }

    });

}

function handleKeyPress(e) {
    if (e?.key === "Enter") {
        if (document.activeElement.closest("header")) {
            stopBackgroundVideo();
        }
    }

}

function handleInfoGraphicDrag() {
    document.querySelectorAll(".infografico").forEach((infografico) => {
        let isDragging = false;
        let startX, startScrollLeft, maxScrollLeft = 0;
        let targetImage = null;

        function getMaxScrollLeft(image, container) {
            return image ? (image.offsetWidth - container.clientWidth) - 300 : 0;
        }

        infografico.addEventListener("mousedown", (e) => {
            targetImage = infografico.querySelector("img.prancheta, img.linha-tempo");
            if (!targetImage) return;

            isDragging = true;
            infografico.classList.add("dragging");

            startX = e.clientX;
            startScrollLeft = infografico.scrollLeft;
            maxScrollLeft = getMaxScrollLeft(targetImage, infografico);
        });

        infografico.addEventListener("mousemove", (e) => {
            if (!isDragging || !targetImage) return;

            const deltaX = e.clientX - startX;
            let newScrollLeft = startScrollLeft - deltaX;

            infografico.scrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
        });

        infografico.addEventListener("mouseup", () => {
            isDragging = false;
            infografico.classList.remove("dragging");
        });

        infografico.addEventListener("mouseleave", () => {
            isDragging = false;
            infografico.classList.remove("dragging");
        });

        infografico.addEventListener("wheel", (e) => {
            targetImage = infografico.querySelector("img.prancheta, img.linha-tempo");
            if (!targetImage) return;

            e.preventDefault();
            maxScrollLeft = getMaxScrollLeft(targetImage, infografico);
            infografico.scrollLeft = Math.max(0, Math.min(infografico.scrollLeft + e.deltaY * 1.5, maxScrollLeft));
        });
    });
}

function stopBackgroundVideo() {
    let iframe = document.querySelector(".video-container iframe");
    let iframeSrc = iframe?.src;

    iframe.src = isPlayingHeaderVideo ? iframeSrc.replace('autoplay=1', 'autoplay=0') : iframeSrc.replace('autoplay=0', 'autoplay=1');

    isPlayingHeaderVideo = !isPlayingHeaderVideo;

}