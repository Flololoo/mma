'use strict'

console.log('hi')

$('.js-contact-button').on('click', function scrollToContactForm () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $($(".js-form")[0]).offset().top
    }, 2000);
})


$('.js-fading').on('click', function showElement() {
    console.log($(e.target));
})





let $blocks = $('.js-fading');
scrollContent($blocks);
document.addEventListener('scroll', function (event) {
    zoomImage();
    scrollContent($blocks);
}, true /*Capture event*/);

function scrollContent($blocks) {
    let screenBottom = $(window).scrollTop() + $(window).height();

    $blocks.each((index) => {
        if (screenBottom < $($blocks[index]).offset().top) {
            $($blocks[index]).css('transform', 'translateX(-300%)');
            $($blocks[index]).css('opacity', '0');
        }else {
            $($blocks[index]).css('opacity', '1');
            $($blocks[index]).css('transform', 'translateX(0)');

        }
    });
}

let $zoomImages = $('.js-scaling-image');
function zoomImage() {

    let screenBottom = $(window).scrollTop() + $(window).height(),
        screenTop    = $(window).scrollTop();
    $zoomImages.each((index) => {
        if (screenBottom >= $($zoomImages[index]).offset().top && screenTop < $($zoomImages[index]).offset().top + $($zoomImages[index]).height()) {
            console.log('Nau!')
            $($zoomImages[index]).addClass('active');
        }
        else {
            console.log('Nau not!')
            $($zoomImages[index]).removeClass('active');
        }
    });
}

document.addEventListener("scroll", function toggleNavBG (e) {
    let nav = document.querySelector('.js-nav');
    if(window.scrollY > 600){
        nav.classList.add('navbar--colored')
    }else{
        nav.classList.remove('navbar--colored')
    }
})



document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);

                    console.log('remove lazy loading')
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});