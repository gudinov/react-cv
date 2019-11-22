import React from 'react';
import PersonalInfo from 'components/PersonalInfo/PersonalInfo';

import { EN, RU } from './constants';
// const isRu = i18n.language === RU;
//
// const onChangeLanguage = () => {
//   i18n.changeLanguage(isRu ? EN : RU);
// };

import './style.scss';

const Profile = () => (
  <div className="profile">
    <div className="profile__board">
      <div className="profile__deco-img-wrapper">
        <div className="profile__deco-img">
          <div className="profile__deco-shadow" />
        </div>
      </div>
    </div>
    <PersonalInfo />
    {/* <FlipButton onClick={onChangeLanguage} selected={isRu} /> */}
  </div>
);
export default Profile;
