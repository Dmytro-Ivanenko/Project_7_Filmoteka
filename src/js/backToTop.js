export const backToTop = $('#back-to-top');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    backToTop.addClass('show');
  } else {
    backToTop.removeClass('show');
  }
});

backToTop.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
