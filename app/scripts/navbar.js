/**
 * File navbar.js
 *
 * Handles auto-hide navbar when scroll down and up pages
 */

( function() {

    var lastScrollTop = 0;
    var navbar        = $('.navbar-fixed-top');

    $(window).scroll(function(event){

        // get last position of navbar
        var st = $(this).scrollTop();

        if (st > lastScrollTop){
            navbar.addClass('navbar-scroll');
        } else {
            navbar.removeClass('navbar-scroll');
        }

        lastScrollTop = st;
    });
} )();