import jquery from 'jquery'
window.$ = window.jQuery = jquery;


$(() => {
  $('.menu_icon_close').on('click', () => {
    $('.menu').removeClass('active');
  })

  $('.menu_icon_open').on('click', () => {
    $('.menu').addClass('active');

  })
})

