import jquery from 'jquery'
window.$ = window.jQuery = jquery;
import module from './module'




$(() => {
  $('.menu_icon_close').on('click', () => {
    $('.menu').removeClass('active');
  })

  $('.menu_icon_open').on('click', () => {
    $('.menu').addClass('active');

    $(() => {
      console.log("ready!");
    });

  })
})

$(() => {
  $('.popup-button').on('click', () => {
    $('.popup-container').addClass('active-popup');
  })

  $('.close-popup').on('click', () => {
    $('.popup-container').removeClass('active-popup');


    $(() => {
      console.log("ready!");
    });

  })
})



