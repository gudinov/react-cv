import React, { useState } from 'react';
import Flag from 'react-world-flags';
import map from 'lodash/map';
import i18n from 'i18next';
import { withRouter } from 'react-router-dom';
import checkPath from 'utils/checkPath';
import NavButton from 'UI/NavButton/NavButton';

import {
  ABOUT, NAVIGATIONS, RU, EN, CODE_LANG,
} from './constants';

import './style.scss';

const Navigation = ({ location: { pathname } }) => {
  const [lang, setLang] = useState(localStorage.getItem('current_lang') || i18n.language);

  const onChangeLangClick = () => {
    const newLang = lang === RU ? EN : RU;
    setLang(newLang);
    localStorage.setItem('current_lang', newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="nav">
      <ul>
        {
            map(NAVIGATIONS, (item) => {
              const link = item.newTab ? `${item.link}-${lang}/` : item.link;
              return (
                <li key={link} className="nav__wrapper-button">
                  <NavButton link={link} icon={item.icon} isActive={checkPath(link, ABOUT.link, pathname)} newTab={item.newTab} />
                </li>
              );
            })
        }
      </ul>
      <div className="nav__wrapper-button nav__wrapper-button_empty nav__wrapper-button_bottom" onClick={onChangeLangClick}>
        <Flag code={CODE_LANG[lang]} height="15" />
      </div>
    </nav>
  );
};


export default withRouter(Navigation);
