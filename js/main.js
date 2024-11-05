
(function ($) {
  $('button').on('click', function (evt) {
    if (!$(evt.target).is('a')) {
      handlerBtnClickWithLink($(this));
    }
  });
})(jQuery);

(function ($) {
  $('.contacts-row__link').on('click', function (evt) {
    if (!$(evt.target).is('a')) {
      handlerBtnClickWithLink($(this));
    }
  });
})(jQuery);

function handlerBtnClickWithLink(obj, newTab) {
  const link = obj.find('a:first');
  const href = link.attr('href');
  const id = link.attr('id');
  const target = link.attr('target');

  if (href == undefined) {
    return;
  }
  if (target == '_blank' || newTab || id === 'certificate_link') {
    window.open(href);
  } else {
    window.location.href = href;
  }
}

document.querySelectorAll('.portfolio-project').forEach(elem => {
  elem.addEventListener('touchstart', () => {
    document.querySelector(`#${elem.id} .portfolio-project__img`)
      .classList.toggle('touch-img');
    document.querySelector(`#${elem.id} .portfolio-project__overlay`)
      .classList.toggle('touch-overlay');
    document.querySelector(`#${elem.id} h2`)
      .classList.toggle('touch-h2-button');

    document.querySelectorAll(`#${elem.id} .portfolio-project_btn`).forEach(btn => {
        btn.classList.toggle('touch-h2-button');
      });

  });
});

document.querySelector('.fa-bars').addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('on');

  document.querySelectorAll('.header-main-menu__elem').forEach(elem => {
    elem.addEventListener('click', () => {
      console.log(document.querySelector('.header'));
      document.querySelector('.header').classList.remove('on')});
  });

});

window.addEventListener('load', () => document.querySelector('.page-loading').remove() );
