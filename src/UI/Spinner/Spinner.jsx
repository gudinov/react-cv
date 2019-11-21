import React from 'react';

import './style.scss';

function Spinner() {
  return (
    <div className="spinner">
      <div className="spinner__loader">
        <span>{ '{' }</span>
        {' '}
        <span>{ '}' }</span>
      </div>
    </div>
  );
}

export default Spinner;
