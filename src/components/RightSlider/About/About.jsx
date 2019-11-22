import React from 'react';
import { withTranslation } from 'react-i18next';
import PersonalInfo from 'components/PersonalInfo/PersonalInfo';
import Tech from 'UI/Tech/Tech';

import './style.scss';

import { SKILL_ITEMS } from './constants';

function About({ t }) {
  return (
    <div className="about right-slider__content-wrapper">
      <section className="about__me about_underline">
        <div className="about__profile mobile-content">
          <div className="about__avatar-wrapper">
            <span className="about__avatar about__avatar_circle" />
          </div>
          <PersonalInfo />
        </div>
        <h1>{t('about-title')}</h1>
        <div className="about__info-list text_size-L">
          <div className="about__info-item about__info-item_deco-line">
            {`22 ${t('year')}`}
          </div>
          <div className="about__info-item about__info-item_deco-line">
            {t('city')}
          </div>
          <div className="about__info-item">
            {t('country')}
          </div>
        </div>
        <p>
          {t('about-text')}
        </p>
      </section>
      <section className="about__skills">
        <h2>{t('skills-title')}</h2>
        <p>
          {t('skills-text')}
        </p>
        <Tech items={SKILL_ITEMS} />
      </section>
    </div>
  );
}

export default withTranslation('about')(About);
