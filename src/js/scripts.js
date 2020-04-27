$(document).ready(function () {
  /* menu */

  $('.navbar-toggler').click(function () {
    $(this).toggleClass('open');
  });

  $(function () {
    $(window).scroll(function () {
      var winTop = $(window).scrollTop();
      if (winTop >= 250) {
        $('body').addClass('sticky-header');
      } else {
        $('body').removeClass('sticky-header');
      }
    });
  });

  /* carousel */

  $('.home-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    loop: false,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('.new-carousel').owlCarousel({
    loop: true,
    margin: 29,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $('.customers-carousel').owlCarousel({
    loop: true,
    margin: 13,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $('.btn-toggle-mobile').click(function () {
    $('.portfolio-inside-list').toggleClass('show-list-text');
  });

  /* mega-menu */

  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  $('.menu > ul').before(
    '<a href="#" class="menu-mobile open">&nbsp;</a><a href="#" class="menu-mobile close">&nbsp;</a>',
  );
  $('.menu > ul > li').hover(function (e) {
    if ($(window).width() > 943) {
      $(this).children('ul').stop(true, false).fadeToggle(150);
      e.preventDefault();
    }
  });
  $('.menu > ul > li').click(function () {
    if ($(window).width() <= 943) {
      $(this).children('ul').fadeToggle(150);
    }
  });
  $('.menu-mobile').click(function (e) {
    $('.menu > ul').toggleClass('show-on-mobile');
    $('.close').toggleClass('showBtn');
    e.preventDefault();
  });
  $(window).resize(function () {
    $('.menu > ul > li').children('ul').hide();
    $('.menu > ul').removeClass('show-on-mobile');
  });
});

new WOW().init();
