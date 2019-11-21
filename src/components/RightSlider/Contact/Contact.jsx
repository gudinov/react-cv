import React from 'react';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

function Contact({ t }) {
  return (
    <div className="contact right-slider__content-wrapper">
      <h1>{t('contact-title')}</h1>
      <ul className="contact__list">
        <li className="contact__list-item">
          <span className="contact__icon">
            <FontAwesomeIcon icon={faMobile} />
          </span>
          <span className="contact__mobile">+375 33 645 03 80</span>
        </li>
        <li className="contact__list-item">
          <span className="contact__icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="contact__email">gudinov.vladislav@gmail.com</span>
        </li>
      </ul>
      <div className="contact__text">{t('contact-text')}</div>
    </div>
  );
}

export default withTranslation('contact')(Contact);
