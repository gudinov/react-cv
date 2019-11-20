import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { EMPTY_CLASS } from 'constants/common';

import './style.scss';

const NavButton = ({
  link = '/about', icon = faSkull, newTab = false, isActive = false,
}) => (
  <div className={`nav__button ${isActive ? 'nav__button_active' : EMPTY_CLASS}`}>
    {
      newTab
        ? (
          <a href={`${link}`} target="_blank" rel="noopener noreferrer">
            <span className="nav__icon">
              <FontAwesomeIcon icon={icon} />
            </span>
          </a>
        )
        : (
          <Link to={`/${link}`}>
            <span className="nav__icon">
              <FontAwesomeIcon icon={icon} />
            </span>
          </Link>
        )
}
  </div>
);

NavButton.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.object,
  newTab: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default NavButton;
