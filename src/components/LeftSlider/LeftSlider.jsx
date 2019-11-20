import React from 'react';

import Navigation from 'components/LeftSlider/Navigation/Navigation';
import Profile from 'components/LeftSlider/Profile/Profile';


import './style.scss';

const LeftSlider = () => (
  <header className="left-slider">
    <Navigation />
    <Profile />
  </header>
);


export default LeftSlider;
