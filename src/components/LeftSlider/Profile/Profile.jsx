import React from 'react';
import startCase from 'lodash/startCase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';

import { withTranslation } from 'react-i18next';

import { EN, RU } from './constants';


import './style.scss';

const Profile = ({ i18n, t }) => {
  const isRu = i18n.language === RU;

  const onChangeLanguage = () => {
    i18n.changeLanguage(isRu ? EN : RU);
  };
  return (
    <div className="profile">
      <div className="profile__board">
        <div className="profile__deco-img-wrapper">
          <div className="profile__deco-img">
            <div className="profile__deco-shadow" />
          </div>
        </div>
      </div>
      <div className="profile__info">
        <h2 className="profile__name title_size-L">{startCase(t('name'))}</h2>
        <div className="profile__position">
          <h3 className="title title_size-XS">{t('position')}</h3>
        </div>
        <ul className="profile__social">
          <li>
            <a href="/" className="skype">
              <FontAwesomeIcon icon={faSkype} />
            </a>
          </li>
          <li>
            <a href="/" className="vk">
              <FontAwesomeIcon icon={faVk} />
            </a>
          </li>
          <li>
            <a href="/" className="telegram">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
        </ul>
      </div>
      {/* <FlipButton onClick={onChangeLanguage} selected={isRu} /> */}
    </div>
  );
};

export default withTranslation('profile')(Profile);
