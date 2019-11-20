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
  link: 'file:///home/gudinov/CV/for-print/index.html',
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
