import React, { PureComponent } from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import TechItem from './TechItem/TechItem';

import './style.scss';

class Tech extends PureComponent {
  render() {
    const { items } = this.props;
    return (
      <div className="tech">
        {
            map(items, (item, i) => (
              <TechItem name={item.name} icon={item.icon} key={`${i}`} />
            ))
        }
      </div>
    );
  }
}


Tech.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Tech;
