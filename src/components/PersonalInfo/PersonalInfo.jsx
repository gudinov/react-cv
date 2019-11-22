import React from 'react';
import startCase from 'lodash/startCase';
import Social from 'UI/Social/Social';
import { withTranslation } from 'react-i18next';

import './style.scss';

const PersonalInfo = ({ t }) => (
  <div className="personal-info">
    <h2 className="personal-info__name title_size-M">{startCase(t('name'))}</h2>
    <div className="personal-info__position">
      <h3 className="title title_size-XS">{t('position')}</h3>
    </div>
    <Social />
  </div>
);

export default withTranslation('personalInfo')(PersonalInfo);
