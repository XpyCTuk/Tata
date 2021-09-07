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

//начало модал

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

//конец модал

//начало модал форм 

$(() => {
  $('.modal-form-button').on('click', () => {
    $('.modal-form').addClass('modal-form-open');
  })

  $('.close-modal-form').on('click', () => {
    $('.modal-form').removeClass('modal-form-open');


    $(() => {
      console.log("ready!");
    });

  })
})

//конец модал форм

//переход начало 

$(() => {
  $('.modal-button').on('click', () => {
    $('.modal-wrapper').removeClass('modal-open');
  })

  $('.modale-button').on('click', () => {
    $('.modal-form').addClass('modal-form-open');


    $(() => {
      console.log("ready!");
    });

  })
})

//переход конец 
