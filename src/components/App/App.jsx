import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import RightSlider from 'components/RightSlider/RightSlider';
import LeftSlider from 'components/LeftSlider/LeftSlider';
import { isMobileOnly } from 'react-device-detect';

import './style.scss';

const App = () => {
  const { i18n } = useTranslation();
  const [initialized, setInitialized] = useState(false);
  const changeLanguage = useCallback(
    (lng) => {
      i18n.changeLanguage(lng).then((f) => f);
    },
    [i18n],
  );

  useEffect(() => {
    if (!isMobileOnly) {
      window.VANTA.WAVES({
        el: '#root',
        color: 0x0,
        shininess: 32.00,
        waveHeight: 31.00,
        waveSpeed: 0.15,
        zoom: 1.02,
      });
    }
  }, []);

  useEffect(() => {
    if (!initialized) {
      changeLanguage(localStorage.getItem('current_lang') || 'ru');
      setInitialized(true);
    }
  }, [changeLanguage, initialized]);

  return (
    <div className="page-root">
      <div className="page-root__content">
        <LeftSlider />
        <RightSlider />
      </div>
    </div>
  );
};

export default App;
