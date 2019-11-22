import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import aboutEn from 'components/RightSlider/About/en/translation.json';
import aboutRu from 'components/RightSlider/About/ru/translation.json';

import profileEn from 'components/LeftSlider/Profile/en/translation.json';
import profileRu from 'components/LeftSlider/Profile/ru/translation.json';

import educationEn from 'components/RightSlider/Education/en/translation.json';
import educationRu from 'components/RightSlider/Education/ru/translation.json';

import contactEn from 'components/RightSlider/Contact/en/translation.json';
import contactRu from 'components/RightSlider/Contact/ru/translation.json';

import worksEn from 'components/RightSlider/Works/en/translation.json';
import worksRu from 'components/RightSlider/Works/ru/translation.json';

const resources = {
  en: {
    about: aboutEn,
    profile: profileEn,
    education: educationEn,
    contact: contactEn,
    works: worksEn,
  },
  ru: {
    about: aboutRu,
    profile: profileRu,
    education: educationRu,
    contact: contactRu,
    works: worksRu,
  },
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });
