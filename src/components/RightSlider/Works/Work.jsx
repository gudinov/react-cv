import React from 'react';
import { withTranslation } from 'react-i18next';

import Timeline from 'UI/Timeline/Timeline';

import { WORKS } from './constants';

function Work({ t }) {
  return (
    <div className="right-slider__content-wrapper">
      <h1>{t('works-title')}</h1>
      <Timeline segments={WORKS} t={t} />
    </div>
  );
}

export default withTranslation('works')(Work);
