import React from 'react';
import { withTranslation } from 'react-i18next';

import Tech from 'UI/Tech/Tech';
import { SKILL_ITEMS } from './constants';

import './style.scss';

function About({ t }) {
  return (
    <div className="about right-slider__content-wrapper">
      <section className="about__me about_underline">
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
