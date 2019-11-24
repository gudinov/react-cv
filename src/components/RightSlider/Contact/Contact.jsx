import React from 'react';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Social from 'UI/Social/Social';

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
          <a href="tel:+375336450380" className="contact__mobile">+375(33)-645-03-80</a>
        </li>
        <li className="contact__list-item">
          <span className="contact__icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <a href="mailto:gudinov.vladislav@gmail.com" className="contact__email">gudinov.vladislav@gmail.com</a>
        </li>
        <li className="contact__list-item">
          <span className="contact__icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          <span className="contact__location">{t('contact-location')}</span>
        </li>
      </ul>
      <div className="contact__text">
        {t('contact-text')}
        <a href="https://github.com/gudinov" target="_blank" rel="noopener noreferrer">https://github.com/gudinov</a>
      </div>
    </div>
  );
}

export default withTranslation('contact')(Contact);
