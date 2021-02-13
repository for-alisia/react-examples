/** Libraries */
import React from 'react';

/** Utils */
import { getSeason } from '../../utils/season.util';

/** Styles */
import './season-display.styles.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake',
  },
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());

  const { iconName, text } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
