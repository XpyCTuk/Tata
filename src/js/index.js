import jquery from 'jquery'
window.$ = window.jQuery = jquery;
import module from './module'
import 'slick-carousel';



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
  $('.single-item').slick();
  $('.modal-button').on('click', () => {
    $('.modal-wrapper').removeClass('modal-open');
  })

  $('.modale-button').on('click', () => {
    $('.modal-form').addClass('modal-form-open');
  })

  $('#form').on('submit', function (event) {
    event.preventDefault()
    let name = $('#name').val().trim();
    let phone = $('#phone').val().trim();
    let email = $('#email').val().trim();
    console.log(name);
    const createHtmlForEmail = () => {
      return `<div>
        <div>
          name: <b>${name}</b>
        </div>
        <div>
          phone: <b>${phone}</b>
        </div>
        <div>
          email: <b>${email}</b>
        </div>
        </div>`
    }

    // if (name == '') {
    //   $('#errorMassage').text("Введите имя")
    //   return false;
    // } else if (contact == '') {
    //   $('#errorMassage').text("Введите номер телефона")
    //   return false;
    // }
    // $('#errorMassage').text('')

    const letterData = {
      to: 'goncharovfigma@gmail.com',
      // to: 'justicejesus1237@gmail.com',
      subject: 'Форма "Заказать проект"',
      text: 'yo',
      html: createHtmlForEmail()
    }
    $.ajax({
      url: 'https://api.42.works/mailer',
      type: 'POST',
      //cache: false,
      data: JSON.stringify(letterData),
      beforeSend: function () {
        $('#sendForm').prop("disabled", true)
      },
      success: function (data) {
        if (!data) {
          alert('Произошла ошибка')
        } else {
          $('#form').trigger("reset")
        }
        $('#sendForm').prop("disabled", false)
      },
      contentType: "application/json; charset=utf-8",
    });
  })

  //вторая форма 

  $('#form2').on('submit', function (event) {
    event.preventDefault()
    let name2 = $('#name2').val().trim();
    let contact2 = $('#phone2').val().trim();
    let email2 = $('#email2').val().trim();
    const createHtmlForEmail2 = () => {
      return `<div>
      <div>
        name: <b>${name2}</b>
      </div>
      <div>
        phone: <b>${contact2}</b>
      </div>
      <div>
        email: <b>${email2}</b>
      </div>
      </div>`
    }

    // if (name2 == '') {
    //   $('#errorMassage').text("Введите имя")
    //   return false;
    // } else if (contact2 == '') {
    //   $('#errorMassage').text("Введите контактные данные")
    //   return false;
    // }
    // $('#errorMassage').text('')

    const letterData = {
      to: 'goncharovfigma@gmail.com',
      // to: 'justicejesus1237@gmail.com',
      subject: 'Форма "Заказать проект2"',
      text: 'yo',
      html: createHtmlForEmail2()
    }


    $.ajax({
      url: 'https://api.42.works/mailer',
      type: 'POST',
      cache: false,
      data: JSON.stringify(letterData),
      beforeSend: function () {
        $('#sendForm').prop("disabled", true)
      },
      success: function (data) {
        if (!data) {
          alert('Произошла ошибка')
        } else {
          $('#form2').trigger("reset")
        }
        $('#sendForm').prop("disabled", false)
      },
      contentType: "application/json; charset=utf-8",
    });
  });

})