"use strict";

(function ($) {
  $(document).ready(function () {
    svg4everybody({}); // Tilt JS

    $('.btn_global, .btn_add, .btn_pdf').tilt({
      scale: 1.05
    }); // Modal

    if ($('body').hasClass('index-product-page')) {
      $(".index-product-page #product_modal").iziModal({
        bodyOverflow: true,
        onOpened: function onOpened() {
          sliderStart();
        }
      });
    } // Search init


    jsonInit();
  });
  $(document).on('click', '.video .banners_lg, .video .banners_sm__item', function () {
    var way = $(this).attr('data-video');
    var title = $(this).children().find('.banners__place').text();
    $("#modal-iframe").iziModal({
      headerColor: '#fec10e',
      title: title,
      iframe: true,
      iframeURL: way,
      fullscreen: true,
      closeOnEscape: true,
      closeButton: true,
      overlayColor: 'rgba(0, 0, 0, 0.9)',
      onClosed: function onClosed() {
        $('#modal-iframe').iziModal('destroy');
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
    longSwipes: false,
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
  }); // Swiper maps

  var controlActiveMap = $('.distributors_control');
  var swiperMap = new Swiper('.distributors .swiper-container', {
    speed: 1000,
    spaceBetween: 0,
    loop: false,
    effect: 'fade',
    simulateTouch: false
  });
  swiperMap.on('slideChange', function () {
    var index = swiperMap.activeIndex;
    controlActiveMap.find('.active_map').removeClass('active_map');
    controlActiveMap.children().eq(index).addClass('active_map');
  });
  controlActiveMap.on('click', '.distributors_control__btn', function (e) {
    e.preventDefault();
    swiperMap.slideTo($(this).index(), 1000);
  }); // Swiper box

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
    }); // Sprite Spinner

    var spin = $('#spin-sprite');
    var source = spin.attr('data-source');
    var names = spin.attr('data-pic_name');
    names += '{frame}.jpg';
    var count = spin.attr('data-end');
    spin.spritespin({
      source: SpriteSpin.sourceArray(source + '/' + names, {
        frame: [1, count],
        digits: 1
      })
    });
  } // Menu fixed


  function menuFixed() {
    if ($(window).scrollTop() > 110) {
      $('header').addClass('header_fixed');
    } else {
      $('header').removeClass('header_fixed');
    }
  }

  $(window).bind('scroll', menuFixed); // Search

  function jsonInit() {
    var searchField = $('#search').val();
    var expression = new RegExp(searchField, 'i');
    $.getJSON('static/json/stores.json', function (data) {
      $.each(data, function (key, value) {
        if (value.attributes == $('input[name="store"]:checked').val() || !$('input[name="store"]:checked').val()) {
          if (value.title.search(expression) !== -1 || value.location.search(expression) !== -1) {
            $('#result').append("\n\t\t\t\t\t\t\t\t<li class=\"distributors_list__item\">\n\t\t\t\t\t\t\t\t\t<div class=\"distributors_list_img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"static/img/content/".concat(value.img, "\" alt=\"img\" class=\"distributors_list_img--this\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"distributors_list_content\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"distributors_list__title\">").concat(value.title, "</h6>\n\t\t\t\t\t\t\t\t\t\t<p class=\"distributors_list__address\">").concat(value.location, "</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"distributors_list_btn\">\n\t\t\t\t\t\t\t\t\t\t<button name=\"see\" class=\"btn_see\">\n\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.999 511.999\" xml:space=\"preserve\">\n\t\t\t\t\t\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tc-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tC513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tc26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tC447.361,287.923,358.746,385.406,255.997,385.406z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ts101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ts30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t"));
          }
        }
      });
    });
  }

  $('input[name="store"]').change(function () {
    $('#result').html('');
    jsonInit();
  });
  $('#search').keyup(function () {
    $('#result').html('');
    jsonInit();
  });
})(jQuery);