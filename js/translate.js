const translations = {
  en: {
    name: "Andrey Dutkovsky",
    home: "Home",
    aboutMe: "About Me",
    resume: "Resume",
    portfolio: "Portfolio",
    contacts: "Contacts",
    imFront: "I'm Front-end developer",
    frontEnd: "Front-end developer",
    aboutMeText: `I am responsible, disciplined, I treat my tasks responsibly
      and bring everything to the
      end and on time.I quickly master new areas of activity, master new skills.I work well in
      a team, I know how to resolve conflicts and compromise, I do not experience difficulties
      when establishing contact with colleagues.I constantly add to my knowledge base from
      various sources.`,
    personalInfo: "Personal Information",
    _name: "Name",
    age: "Age",
    years: "27 years old",
    residence: "Residence",
    minsk: "Minsk, Belarus",
    phone: "Phone",
    downloadRes: "DOWNLOAD RESUME",
    phrase: "Life requires movement.",
    myRes: "My Resume",
    experience: "Experience",
    CNIITU: "CNIITU-IT",
    KB: "KB Unmanned Helicopters",
    present: "Present time",
    commander: "Platoon Commander",
    armedForces: "Armed Forces of the Republic of Belarus",
    education: "Education",
    react: "React",
    courseITAcademy: "Сourse: Web application development using react (IT-Academy)",
    courseEPAM: "Сourse: UpSkill Lab (EPAM Systems)",
    engineerInfo: "Specialist in telecommunications systems management (engineer)",
    militaryAcademy: "Military Academy of the Republic of Belarus",
    skills: "Skills",
    certificate: "certificate"
  },
  ru: {
    name: "Андрей Дутковский",
    home: "Главная",
    aboutMe: "Обо мне",
    resume: "Резюме",
    portfolio: "Портфолио",
    contacts: "Контакты",
    imFront: "Я Front-end разработчик",
    frontEnd: "Front-end разработчик",
    aboutMeText: `Я ответственный, дисциплинированный, ответственно отношусь к своим задачам
      и доводить все до
      конца и в срок.Я быстро осваиваю новые сферы деятельности, овладеваю новыми навыками.Я хорошо работаю в
      в команде я умею разрешать конфликты и идти на компромисс, я не испытываю трудностей
      при установлении контакта с коллегами.Я постоянно пополняю свою базу знаний из
      различных источников.`,
    personalInfo: "Личная информация",
    _name: "Имя",
    age: "Возраст",
    years: "27 лет",
    residence: "Местожительство",
    minsk: "Минск, Беларусь",
    phone: "Телефон",
    downloadRes: "СКАЧАТЬ РЕЗЮМЕ",
    phrase: "Жизнь требует движения.",
    myRes: "Мое резюме",
    experience: "Опыт",
    CNIITU: "ЦНИИТУ-ИТ",
    KB: "КБ Беспилотные Вертолеты",
    present: "Настоящее время",
    commander: "Командир взвода",
    armedForces: "Вооруженные силы Республики Беларусь",
    education: "Образование",
    react: "Реакт",
    courseITAcademy: "Курс: Разработка веб-приложений с использованием Реакт (IT-Academy)",
    courseEPAM: "Курс: UpSkill Lab (EPAM Systems)",
    engineerInfo: "Специалист по управлению телекоммуникационными системами (инженер)",
    militaryAcademy: "Военная академия Республики Беларусь",
    skills: "Навыки",
    certificate: "Сертификат",
  },
};

let currentLanguage = "en";

export function setLanguage(language, e) {
  currentLanguage = language;
  (function ($) {
    $('.lang__btn.active').removeClass('active');
    $(e.target).addClass('active');
  })(jQuery);
  updateText();
}

export function updateText() {
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[currentLanguage][key];
  });

  const download_link = document.getElementById("download_link");
  download_link.setAttribute("href", `resume/CV_Andrey_Dutkovsky_${currentLanguage}.docx`);
}
