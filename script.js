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
    scrollContent($blocks);
}, true /*Ca    pture event*/);

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