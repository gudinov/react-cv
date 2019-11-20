import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import TimelineItem from 'UI/Timeline/TimelineItem/TimelineItem';

import './style.scss';

function Timeline({ segments, t }) {
  return (
    <ul className="timeline">
      {
         map(segments, (segment) => (
           <TimelineItem
             key={segment.titleKey}
             title={t(segment.titleKey)}
             text={t(segment.textKey)}
             date={t(segment.dateKey)}
           />
         ))
      }
    </ul>
  );
}

Timeline.propTypes = {
  segments: PropTypes.array.isRequired,
};

export default Timeline;
