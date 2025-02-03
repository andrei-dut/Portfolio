
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
      document.querySelector('.header').classList.remove('on')});
  });

});

window.addEventListener('load', () => document.querySelector('.page-loading').remove() );

const translations = {
  ru: {
      ageSuffix: (age) => {
          if (age % 10 === 1 && age % 100 !== 11) return " год";
          if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) return " года";
          return " лет";
      }
  },
  en: {
      ageSuffix: (age) => age === 1 ? " year old" : " years old"
  },
  ja: {
      ageSuffix: () => "歳"
  }
};

function calculateAge(birthYear, birthMonth, birthDay) {
  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
  }
  return age;
}

window.updateAgeText = function updateAgeText(lang = window.localStorage.getItem('lang') || "en") {
  const age = calculateAge(1997, 4, 24);
  const translation = translations[lang];
  document.getElementById("age").textContent = age + translation.ageSuffix(age);
}


