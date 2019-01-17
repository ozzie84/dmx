"use strict";

(function ($) {
  $(document).ready(function () {
    svg4everybody({}); // Tilt JS

    $('.btn_global, .btn_add, .btn_pdf').tilt({
      scale: 1.05
    });
    $(".index-product-page #product_modal").iziModal({
      bodyOverflow: true,
      onOpened: function onOpened() {
        sliderStart();
      }
    });
  }); // Nav pages global

  $('.menu_click').on('click', function () {
    $('.menu_wrap').toggleClass('menu_wrap_active');
  }); // Blur options

  var vague = $('.content').Vague({
    intensity: 5,
    forceSVGUrl: false,
    animationOptions: {
      duration: 1000,
      easing: 'linear'
    }
  });
  var vagueFoo = $('footer').Vague({
    intensity: 5,
    forceSVGUrl: false,
    animationOptions: {
      duration: 1000,
      easing: 'linear'
    }
  });
  var vagueLogo = $('.header_logo').Vague({
    intensity: 5,
    forceSVGUrl: false,
    animationOptions: {
      duration: 1000,
      easing: 'linear'
    }
  });
  var vagueHeader = $('.header').Vague({
    intensity: 5,
    forceSVGUrl: false,
    animationOptions: {
      duration: 1000,
      easing: 'linear'
    }
  }); // Header language click

  $(document).on('click', '.btn_language, .compare_select__btn', function () {
    $(this).next().slideToggle(100);
  }); // Tag click

  $(document).on('click', '.tag_box .btn_tag', function () {
    $(this).parent('.tag_box').find('.btn_tag__active').removeClass('btn_tag__active');
    $(this).addClass('btn_tag__active');
  }); // Btn like

  $(document).on('click', '.content .btn_wishList', function () {
    $(this).toggleClass('btn_like__active');
  }); // Header search click

  $(document).on('click', '.btn_search', function () {
    $('body, html').css('overflow', 'hidden');
    anime({
      targets: '.header_search',
      translateY: 150,
      delay: 200,
      duration: 800,
      easing: 'spring(1, 80, 10, 0)'
    });
    anime({
      targets: '.header_search__overlay',
      height: '100vh',
      delay: 200,
      duration: 300,
      easing: 'easeInBack',
      complete: function complete() {
        vague.blur();
        vagueFoo.blur();
      }
    });
  }).on('click', '.btn_cancel, .header_search__overlay', function () {
    $('body, html').css('overflow', 'initial');
    $('.header_search__list').slideUp(30);
    vague.unblur();
    vagueFoo.unblur();
    anime({
      targets: '.header_search',
      translateY: -150,
      endDelay: 200,
      duration: 800,
      easing: 'spring(1, 80, 10, 0)'
    });
    anime({
      targets: '.header_search__overlay',
      height: 0,
      endDelay: 200,
      duration: 200,
      easing: 'easeOutBack'
    });
  }); // Burger click

  $(document).on('click', '.btn_burger', function () {
    $('body, html').css('overflow', 'hidden');
    anime({
      targets: '.header_menu',
      translateX: -290,
      delay: 200,
      duration: 400,
      easing: 'easeInSine'
    });
    anime({
      targets: '.header_menu__overlay',
      width: '100vw',
      delay: 350,
      duration: 300,
      easing: 'easeInBack',
      complete: function complete() {
        vague.blur();
        vagueFoo.blur();
        vagueLogo.blur();
      }
    });
  }).on('click', '.header_menu__overlay', function () {
    $('body, html').css('overflow', 'initial');
    vague.unblur();
    vagueFoo.unblur();
    vagueLogo.unblur();
    anime({
      targets: '.header_menu',
      translateX: 290,
      duration: 200,
      delay: 200,
      easing: 'easeOutSine'
    });
    anime({
      targets: '.header_menu__overlay',
      width: 0,
      duration: 200,
      easing: 'easeOutSine'
    });
  }); // Wishlist click

  $(document).on('click', 'header .link_wishList', function () {
    $('body, html').css('overflow', 'hidden');
    anime({
      targets: '.global_wishlist_wrap',
      translateX: -420,
      delay: 200,
      duration: 400,
      easing: 'easeInSine'
    });
    anime({
      targets: '.global_wishlist__overlay',
      width: '100vw',
      delay: 350,
      duration: 300,
      easing: 'easeInBack',
      complete: function complete() {
        vague.blur();
        vagueFoo.blur();
        vagueHeader.blur();
      }
    });
  }).on('click', '.global_wishlist_wrap .btn_cancel, .global_wishlist__overlay', function () {
    $('body, html').css('overflow', 'initial');
    vague.unblur();
    vagueFoo.unblur();
    vagueHeader.unblur();
    anime({
      targets: '.global_wishlist_wrap',
      translateX: 420,
      duration: 200,
      delay: 200,
      easing: 'easeOutSine'
    });
    anime({
      targets: '.global_wishlist__overlay',
      width: 0,
      duration: 200,
      easing: 'easeOutSine'
    });
  }); // Search keyup

  $(document).on('change paste keyup', 'header .header_search__this', function () {
    if ($(this).val() !== '') {
      $('.header_search__list').slideDown(300);
    } else {
      $('.header_search__list').slideUp(300);
    }
  });
  $(document).on('click', '.help_options__btn', function () {
    console.log($(this).next());
    $(this).toggleClass('help_options--active');
    $(this).next().slideToggle(200);
  }); // Index swiper

  var indexSwiper = new Swiper('.slider_info .swiper-container', {
    speed: 1000,
    parallax: true,
    loop: true,
    loopedSlides: 3,
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 80,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      1200: {
        spaceBetween: 50,
        slidesPerView: 1.2
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 1.15
      },
      576: {
        spaceBetween: 15,
        slidesPerView: 1.2
      }
    }
  }); // Swiper sponsors

  var swiperSponsors = new Swiper('.sponsors_wrap .swiper-container', {
    speed: 1000,
    slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 30,
    loop: false,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    breakpoints: {
      992: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      }
    }
  }); // Swiper about history with AnimeJS

  var controlActive = $('.history_control');
  var swiperHistory = new Swiper('.about_history__slider .swiper-container', {
    speed: 1200,
    spaceBetween: 30,
    loop: false,
    parallax: true,
    breakpoints: {
      576: {
        parallax: false
      }
    }
  });
  swiperHistory.on('transitionEnd', function () {
    var index = swiperHistory.activeIndex;
    controlActive.find('.active_point').removeClass('active_point').css('background', '#fec10e');
    controlActive.children().eq(index).addClass('active_point');
  });
  swiperHistory.on('slidePrevTransitionEnd', function () {
    controlActive.find('.active_point').css('background', '#b4b4b4');
  });
  swiperHistory.on('slidePrevTransitionStart', function () {
    var index = swiperHistory.activeIndex;
    controlActive.find('.active_point').removeClass('active_point');
    setTimeout(function () {
      controlActive.children().eq(index).addClass('active_point');
    }, 800);
  });
  swiperHistory.on('slideChange', function () {
    var index = swiperHistory.activeIndex + 1;

    if (index === index) {
      anime({
        targets: '.history_control__way',
        width: function width() {
          return $('.point' + index).attr('data-way');
        },
        easing: 'easeInOutQuad',
        duration: 800
      });
    }
  });
  var boxSwiper = new Swiper('.box_main_wrap .swiper-container', {
    speed: 1000,
    spaceBetween: 30,
    loop: false,
    slidesPerColumn: 4,
    breakpoints: {
      576: {
        loop: true,
        slidesPerColumn: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      }
    }
  }); // Popup sliders & modals

  function sliderStart() {
    var controlActive2 = $('.popup_thumbs');
    var swiperHistory2 = new Swiper('.product_popup_wrap .swiper-container', {
      speed: 1000,
      spaceBetween: 30,
      loop: false,
      loopedSlides: 4,
      navigation: {
        nextEl: '.swiper-button-next-slide',
        prevEl: '.swiper-button-prev-slide'
      }
    });
    swiperHistory2.on('slideChange', function () {
      var index = swiperHistory2.realIndex;
      controlActive2.find('.active_thumbs').removeClass('active_thumbs');
      controlActive2.children().eq(index).addClass('active_thumbs');
    });
    controlActive2.on('click', '.history_control__point', function () {
      swiperHistory2.slideTo($(this).index() + 1, 500);
    });
  } // Menu fixed


  function menuFixed() {
    if ($(window).scrollTop() > 110) {
      $('header').addClass('header_fixed');
    } else {
      $('header').removeClass('header_fixed');
    }
  }

  $(window).bind('scroll', menuFixed);
})(jQuery);