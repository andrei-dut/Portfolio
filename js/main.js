(function ($) {
  $('.portfolio-project_btn').on('click', function (evt) {
    if (!$(evt.target).is('a')) {
      isClickable($(this));
    }
  });
})(jQuery);

(function ($) {
  $('.contacts-row__link').on('click', function (evt) {
    if (!$(evt.target).is('a')) {
      isClickable($(this));
    }
  });
})(jQuery);

(function ($) {
  $('.about-me-info__btn-download').on('click', function (evt) {
    if (!$(evt.target).is('a')) {
      isClickable($(this));
    }
  });
})(jQuery);

function isClickable(obj, newTab) {
  let $this = obj,
      link = $this.find('a:first'),
      href = link.attr('href'),
      target = link.attr('target');

  if (href == undefined) {
    return;
  }
  if (target == '_blank' || newTab) {
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
    elem.addEventListener('click', () => document.querySelector('.header').classList.remove('on'));
  });

});

window.addEventListener('load', () => document.querySelector('.page-loading').remove() );
