import React from 'react';
import PropTypes from 'prop-types';

function TimelineItem({ title, text, date }) {
  return (
    <li className="timeline__event" data-date={date}>
      <h3>{title}</h3>
      <div className="timeline__mobile-date">{date}</div>
      <p>{text}</p>
    </li>
  );
}

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default TimelineItem;
