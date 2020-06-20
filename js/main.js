/* Gloabal $,alert,console */

$(function () {

  'use strict';

  //Trigger Nice Scroll

   $("body").niceScroll({

     cursorcolor: "#f7600e",

     cursorwidth: "10px",

     cursorborder: "1px solid #f7600e",

     cursorborderradius: "0px"

   });

   //Change Header Height

   $('.header').height($(window).height());

   //Scroll To Features

   $('.header .arrow i').click(function () {

     $('html,body').animate({

       scrollTop: $('.features').offset().top

     }, 1000);

   });

   $('.hire').click(function () {

     $('html,body').animate({

       scrollTop: $('.our-team').offset().top

     }, 1000);

   });

   $('.work').click(function () {

     $('html,body').animate({

       scrollTop: $('.our-work').offset().top

     }, 1000);

   });

   //Show Hidden Items For Works

   $('.show-more').click(function () {

     $('.our-work .hidden').fadeIn(1000);

   });

   //Check Testiemonials

   var leftArrow = $('.testim .fa-chevron-left'),
       rightArrow = $('.testim .fa-chevron-right');

  function checkClients() {

    $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

    $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

  }

  checkClients();

  $('.testim i').click( function () {

    if ($(this).hasClass("fa-chevron-right")) {

      $('.testim .active').fadeOut(100, function () {

        $(this).removeClass('active').next('.client').addClass('active').fadeIn();

        checkClients();

      });

    } else {

      $('.testim .active').fadeOut(100, function () {

        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

        checkClients();

    });

  }

  });

});
