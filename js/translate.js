const translations = {
  en: {
    name: "Andrei Dutkovsky",
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
    certificate: "certificate",
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
  ja: {
    name: "アンドレイ・ドゥトコフスキー",
    home: "ホーム",
    aboutMe: "私について",
    resume: "履歴書",
    portfolio: "ポートフォリオ",
    contacts: "連絡先",
    imFront: "私はフロントエンド開発者です",
    frontEnd: "フロントエンド開発者",
    aboutMeText: `私は責任感があり、規律を守り、与えられたタスクに真剣に取り組み、
      すべてを期限内に完了させます。新しい分野を素早く習得し、新しいスキルを身につけます。
      チームでの作業が得意で、対立を解決し、妥協点を見つけることができます。
      同僚と円滑にコミュニケーションを取ることができます。
      常にさまざまな情報源から知識を増やしています。`,
    personalInfo: "個人情報",
    _name: "名前",
    age: "年齢",
    years: "27歳",
    residence: "居住地",
    minsk: "ミンスク、ベラルーシ",
    phone: "電話",
    downloadRes: "履歴書をダウンロード",
    phrase: "人生には動きが必要です。",
    myRes: "私の履歴書",
    experience: "経験",
    CNIITU: "CNIITU-IT",
    KB: "KB 無人ヘリコプター",
    present: "現在",
    commander: "小隊長",
    armedForces: "ベラルーシ共和国軍",
    education: "学歴",
    react: "React",
    courseITAcademy: "コース: React を使用した Web アプリ開発 (IT-Academy)",
    courseEPAM: "コース: UpSkill Lab (EPAM Systems)",
    engineerInfo: "通信システム管理の専門家 (エンジニア)",
    militaryAcademy: "ベラルーシ共和国軍事アカデミー",
    skills: "スキル",
    certificate: "証明書",
  },
};

let _lang = navigator.language.startsWith("ja")
  ? navigator.language
  : window.localStorage.getItem("lang") || "en";

_lang = ["en", "ru", "ja"].includes(_lang) ? _lang : "en";

export function setLanguage(lang = _lang, e) {
  window.localStorage.setItem("lang", lang);
  (function ($) {
    $(".lang__btn.active").removeClass("active");
    if (e) {
      $(e.target).addClass("active");
    } else {
      $(`#lang_${lang}`).addClass("active");
    }
  })(jQuery);
  updateText(lang);
}

function updateText(lang) {
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[lang][key];
  });

  const download_link = document.getElementById("download_link");
  download_link.setAttribute("href", `resume/CV_Andrei_Dutkovsky_${lang.startsWith("ja") ? 'en' : lang}.docx`);
  window.updateAgeText();
}
