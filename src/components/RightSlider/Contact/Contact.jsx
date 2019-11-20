import React from 'react';
import { withTranslation } from 'react-i18next';

function Contact({ t }) {
  return (
    <div className="right-slider__content-wrapper">
      <h1>{t('contact-title')}</h1>
    </div>
  );
}

export default withTranslation('contact')(Contact);
