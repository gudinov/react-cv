import React from 'react';
import { withTranslation } from 'react-i18next';

import './style.scss';
import PSU from 'UI/PSU/PSU';

function Education({ t }) {
  return (
    <div className="education right-slider__content-wrapper">
      <h1>{t('education-title')}</h1>
      <div className="education__time-interval text_size-L">
        <time dateTime="2014">2014</time>
         -
        <time dateTime="2018">2018</time>
      </div>
      <section className="education__content">
        <h3>{t('university')}</h3>
        <div className="education__psu-wrapper">
          <PSU />
          <span className="education__psu-text">
            {t('education-text')}
          </span>
        </div>
      </section>
    </div>
  );
}

export default withTranslation('education')(Education);
