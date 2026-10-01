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
    aboutMeText: `Front-end developer with commercial experience building web and mobile applications. I work with React, Vue, Angular, and React Native, focusing on clean architecture, responsive UI, and reliable API integration. I value clear communication, ownership of tasks, and continuous learning.`,
    personalInfo: "Personal Information",
    _name: "Name",
    age: "Age",
    residence: "Residence",
    minsk: "Minsk, Belarus",
    phone: "Phone",
    downloadRes: "DOWNLOAD RESUME",
    myRes: "My Resume",
    experience: "Experience",
    PLM: "PLM Technologies",
    CNIITU: "CNIITU",
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
    aboutMeText: `Front-end разработчик с коммерческим опытом создания веб- и мобильных приложений. Работаю с React, Vue, Angular и React Native: проектирую архитектуру, делаю адаптивный UI и интегрирую REST/WebSocket API. Ценю ответственность за результат, прозрачную коммуникацию в команде и постоянное развитие.`,
    personalInfo: "Личная информация",
    _name: "Имя",
    age: "Возраст",
    residence: "Местожительство",
    minsk: "Минск, Беларусь",
    phone: "Телефон",
    downloadRes: "СКАЧАТЬ РЕЗЮМЕ",
    myRes: "Мое резюме",
    experience: "Опыт",
    PLM: "Технологии ПЛМ",
    CNIITU: "ЦНИИТУ",
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
    aboutMeText: `Webおよびモバイルアプリケーションの開発経験を持つフロントエンドエンジニアです。React、Vue、Angular、React Nativeを使い、クリーンな設計、レスポンシブUI、安定したAPI連携を重視しています。責任感のあるタスク遂行、チームでの明確なコミュニケーション、継続的な学習を大切にしています。`,
    personalInfo: "個人情報",
    _name: "名前",
    age: "年齢",
    residence: "居住地",
    minsk: "ミンスク、ベラルーシ",
    phone: "電話",
    downloadRes: "履歴書をダウンロード",
    myRes: "私の履歴書",
    experience: "経験",
    PLM: "PLM Technologies",
    CNIITU: "CNIITU",
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

const BIRTH_DATE = { year: 1997, month: 4, day: 24 };

const ageSuffix = {
  en: (age) => (age === 1 ? " year old" : " years old"),
  ru: (age) => {
    if (age % 10 === 1 && age % 100 !== 11) return " год";
    if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) return " года";
    return " лет";
  },
  ja: () => "歳",
};

function calculateAge({ year, month, day }) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
}

function updateAgeText(lang) {
  const age = calculateAge(BIRTH_DATE);
  document.getElementById("age").textContent = age + ageSuffix[lang](age);
}

function updateText(lang) {
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[lang][key];
  });

  const download_link = document.getElementById("download_link");
  download_link.setAttribute("href", `resume/CV_Andrei_Dutkovsky_${lang.startsWith("ja") ? "en" : lang}.docx`);
  updateAgeText(lang);
}
