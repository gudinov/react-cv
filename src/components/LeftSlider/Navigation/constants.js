import {
  faBriefcase, faFile, faPhoneAlt, faUser, faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';

const WORKS = {
  link: 'works',
  description: 'works',
  icon: faBriefcase,
  newTab: false,
};

const EDUCATION = {
  link: 'education',
  description: 'education',
  icon: faUserGraduate,
  newTab: false,
};

const CONTACT = {
  link: 'contact',
  description: 'contact',
  icon: faPhoneAlt,
  newTab: false,
};

const CV = {
  link: 'https://gudinov.github.io/pdf-cv',
  description: 'cv',
  icon: faFile,
  newTab: true,
};

export const ABOUT = {
  link: 'about',
  description: 'about',
  icon: faUser,
  newTab: false,
};

export const NAVIGATIONS = [
  ABOUT,
  EDUCATION,
  WORKS,
  CONTACT,
  CV,
];

export const RU = 'ru';
export const EN = 'en';
export const CODE_LANG = {
  ru: 'rus',
  en: 'us',
};
