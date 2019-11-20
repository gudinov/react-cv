import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import upperFirst from 'lodash/upperFirst';
import PropTypes from 'prop-types';

function TechItem({ name, icon }) {
  return (
    <section className={`tech__item ${name}`} key={name}>
      <span className="tech__icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className="tech__name">{upperFirst(name)}</div>
    </section>
  );
}

TechItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};


export default TechItem;
