import React, { useEffect } from 'react';

import RightSlider from 'components/RightSlider/RightSlider';
import LeftSlider from 'components/LeftSlider/LeftSlider';
import { isMobileOnly } from 'react-device-detect';

import './style.scss';

const App = () => {
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
