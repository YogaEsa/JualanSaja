/* Navbar Scripts */
// jQuery to collapse the navbar on scroll
var desktop = window.matchMedia('(max-width: 992px)');
var tablet = window.matchMedia('(min-width: 993px)');
var phone = window.matchMedia('(max-width: 600px)');

$(window).on('scroll load', function () {
  if ($('.navbar').offset().top > 50) {
    $('.sticky-top').addClass('top-nav-collapse');
  } else {
    $('.sticky-top').removeClass('top-nav-collapse');
  }
});
