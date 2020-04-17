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
});

new WOW().init();
