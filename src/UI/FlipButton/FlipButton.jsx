import React from 'react';
import PropTypes from 'prop-types';
import { EMPTY_CLASS } from 'constants/common';
import { SELECTED_CLASS } from './constants';

import './style.scss';

const FlipButton = ({ onClick, selected }) => (
  <div className={`flip-button ${selected ? SELECTED_CLASS : EMPTY_CLASS}`} onClick={onClick}>
    <button type="button" className="flip-button__front">РУС</button>
    <button type="button" className="flip-button__back">EN</button>
  </div>
);

FlipButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default FlipButton;
