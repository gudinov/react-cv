import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';

import './style.scss';

function Social() {
  return (
    <ul className="social">
      <li className="social__skype">
        <a href="/" className="skype">
          <FontAwesomeIcon icon={faSkype} />
        </a>
      </li>
      <li className="social__vk">
        <a href="/" className="vk">
          <FontAwesomeIcon icon={faVk} />
        </a>
      </li>
      <li className="social__telegram">
        <a href="/" className="telegram">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </li>
    </ul>
  );
}

export default Social;
