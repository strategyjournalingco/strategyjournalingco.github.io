// ------------------------------------------------
// Project Name: Peachy - Bright Coming Soon & Landing Page Template
// Project Description: Peachy - bright and stylish coming soon & landing page template to kick-start your project. Feel summer vibes with Peachy!
// Tags: mix_design, peachy, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
// Version: 2.0.1
// Build Date: June 2019
// Last Update: November 2022
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader Animation
//  2. Swiper Slider
//  3. YTPlayer Settings
//  4. Vegas Settings
//  5. KBW-Countdown Settings
//  6. Mailchimp Notify Form
//  7. Let's Talk Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    //$("#main").addClass('active');
    $(".loader__content .logo").removeClass('slideInDown').addClass('fadeOutUp');
    $(".loader__content .caption").removeClass('slideInUp').addClass('fadeOutDown');
  }, 500);

  var mainSlider  = $('.swiper');

  setTimeout(function(){

    var animateLeft = anime({
      targets: '.loader__slideleft',
      width: '0%',
      easing: 'easeOutElastic(1, 1.2)',
      duration: 800
    });

    var animateRight = anime({
      targets: '.loader__slideright',
      width: '0%',
      easing: 'easeOutElastic(1, 1.2)',
      duration: 800
    });

    // --------------------------------------------- //
    // Swiper Slider Start
    // --------------------------------------------- //
    if (mainSlider.length) {
      var swiper = new Swiper('.swiper', {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        parallax: true,
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    };
    // --------------------------------------------- //
    // Swiper Slider End
    // --------------------------------------------- //

  },1000);

  setTimeout(function(){
    $(".loader").addClass('fade loaded');
  }, 1500);
  // --------------------------------------------- //
  // Loader Animation End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // YTPlayer Settings Start
  // --------------------------------------------- //
  var bgndVideo = $("#bgndVideo");

  if(bgndVideo.length){
    bgndVideo.mb_YTPlayer({
      mute: true,
      containment: '#video-wrapper',
      showControls:false,
      autoPlay:true,
      loop:true,
      startAt:0,
      quality:'default'
    });
  };
  // --------------------------------------------- //
  // YTPlayer Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1000x1400/636363/8e8e8e" },
        { src: "https://dummyimage.com/1000x1400/636363/8e8e8e" },
        { src: "https://dummyimage.com/1000x1400/636363/8e8e8e" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };

  var bgndKenburnsFull = $('#bgndKenburnsFull');
  if(bgndKenburnsFull.length){
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1920x1080/636363/8e8e8e" },
        { src: "https://dummyimage.com/1920x1080/636363/8e8e8e" },
        { src: "https://dummyimage.com/1920x1080/636363/8e8e8e" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2023, 3, 23), format: 'D'});
  $('#countdown-large').countdown({until: $.countdown.UTCDate(+10, 2023, 3, 23), format: 'DHMS'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Let's Talk Form Start
  // --------------------------------------------- //
  $("#letstalk-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.letstalk').find('.form').addClass('is-hidden');
      $('.letstalk').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.letstalk').find('.reply-group').removeClass('is-visible');
        $('.letstalk').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Let's Talk Form End
  // --------------------------------------------- //

});
