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
            map(items, (block, blockIndex) => (
              <div className="tech__block" key={blockIndex}>
                {
                      map(block, (item, itemIndex) => (
                        <TechItem name={item.name} icon={item.icon} key={`${blockIndex}-${itemIndex}`} />
                      ))
                  }
              </div>
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
