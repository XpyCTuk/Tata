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
  $('.modal-button-header').on('click', () => {
    $('.modal').addClass('modal-open');
  })

  $('.close-modal').on('click', () => {
    $('.modal').removeClass('modal-open');


    $(() => {
      console.log("ready!");
    });

  })
})


