/**
 * File navbar.js
 *
 * Handles auto-hide navbar when scroll down and up pages
 * Handles auto-display hamburger menu
 */

( function() {

    var lastScrollTop = 0;
    var navbar        = $('.navbar-fixed-top');
    var navigation    = $('.navigation.overlay');
    var body          = $('body');

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

    // auto display hamburger menu

    $(".hamburger-btn").click(function(){

        // change hamburger menu to close button
        $(this).toggleClass("is-active");
        
        // check body has class modal open\
        body.toggleClass('modal-open-clear');

        // toggle overlay navigation
        navigation.fadeToggle(200);

    });

} )();