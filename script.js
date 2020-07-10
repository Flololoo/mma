'use strict'

console.log('hi')

$('.js-contact-button').on('click', function scrollToContactForm () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $($(".js-form")[0]).offset().top
    }, 2000);
})