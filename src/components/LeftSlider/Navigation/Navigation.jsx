import React from 'react';
import map from 'lodash/map';
import { withRouter } from 'react-router-dom';

import checkPath from 'utils/checkPath';
import NavButton from 'UI/NavButton/NavButton';
import { ABOUT, NAVIGATIONS } from './constants';

import './style.scss';

const Navigation = ({ location: { pathname } }) => (
  <nav className="nav">
    <ul>
      {
        map(NAVIGATIONS, (item) => (
          <li key={item.link} className="nav__wrapper-button">
            <NavButton link={item.link} icon={item.icon} isActive={checkPath(item.link, ABOUT.link, pathname)} newTab={item.newTab} />
          </li>
        ))
      }
    </ul>
    {/* <div className="nav__wrapper-button nav__wrapper-button_bottom">
        </div> */}
  </nav>
);


export default withRouter(Navigation);
